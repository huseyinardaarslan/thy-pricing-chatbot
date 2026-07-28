"""FastAPI server: flight-search site plus the Wingo AI agent side panel.

- GET  /            search page
- POST /search      form-based flight search (server-rendered results)
- POST /chat        AI agent endpoint used by the side panel
"""

from __future__ import annotations

import uuid
from pathlib import Path

from dotenv import load_dotenv
from fastapi import Cookie, FastAPI, Form, Request
from fastapi.responses import HTMLResponse, JSONResponse
from fastapi.staticfiles import StaticFiles
from fastapi.templating import Jinja2Templates
from pydantic import BaseModel

load_dotenv()

from app.pricer import domain, service  # noqa: E402

BASE = Path(__file__).resolve().parent
app = FastAPI(title="Dynamic Pricer + AI Agent")
templates = Jinja2Templates(directory=str(BASE / "templates"))
app.mount("/static", StaticFiles(directory=str(BASE / "static")), name="static")

# In-memory agent sessions. A production deployment would use an external store.
_SESSIONS: dict[str, "object"] = {}


@app.on_event("startup")
def _startup() -> None:
    domain.seed(force=False)
    # Build the RAG index up front so the first request is not slowed down
    try:
        from app.agent import rag

        rag.build_index()
    except Exception:  # noqa: BLE001 - the site must still run without RAG
        pass


def _get_session(sid: str | None) -> tuple[str, "object"]:
    from app.agent.core import Session

    if not sid or sid not in _SESSIONS:
        sid = uuid.uuid4().hex
        _SESSIONS[sid] = Session()
    return sid, _SESSIONS[sid]


@app.get("/", response_class=HTMLResponse)
def index(request: Request):
    return templates.TemplateResponse(
        request,
        "index.html",
        {
            "airports": service.list_airports(),
            "results": None,
            "form": {"trip_type": "one_way", "adults": 1, "children": 0, "babies": 0},
        },
    )


import datetime
from typing import Optional
from fastapi.exceptions import RequestValidationError
from fastapi.responses import HTMLResponse, JSONResponse


def _safe_int(val: Optional[object], default: int) -> int:
    if val is None or str(val).strip() == "":
        return default
    try:
        return max(0, int(val))
    except (ValueError, TypeError):
        return default


@app.exception_handler(RequestValidationError)
async def validation_exception_handler(request: Request, exc: RequestValidationError):
    """Gracefully render index.html instead of returning raw JSON or blank redirect screen."""
    return templates.TemplateResponse(
        request,
        "index.html",
        {
            "airports": service.list_airports(),
            "results": {
                "error": True,
                "message": "Lütfen arama formundaki bilgileri kontrol ederek tekrar deneyiniz.",
                "flight_count": 0,
                "flights": [],
                "origin": "IST",
                "destination": "LHR",
                "date": "",
                "passengers": {"adults": 1, "children": 0, "babies": 0},
                "seat_passengers": 1,
                "trip_type": "one_way",
            },
            "form": {"origin": "IST", "destination": "LHR", "date": "", "trip_type": "one_way", "adults": 1, "children": 0, "babies": 0},
        },
        status_code=200,
    )


@app.post("/search", response_class=HTMLResponse)
def search(
    request: Request,
    origin: Optional[str] = Form(None),
    destination: Optional[str] = Form(None),
    date: Optional[str] = Form(None),
    return_date: Optional[str] = Form(None),
    trip_type: Optional[str] = Form(None),
    adults: Optional[str] = Form(None),
    children: Optional[str] = Form(None),
    babies: Optional[str] = Form(None),
    changeable_only: Optional[str] = Form(None),
):
    origin_str = (origin or "IST").strip()
    dest_str = (destination or "LHR").strip()
    date_str = (date or "").strip()
    trip_str = (trip_type or "one_way").strip()

    adults_cnt = max(1, _safe_int(adults, 1))
    children_cnt = _safe_int(children, 0)
    babies_cnt = _safe_int(babies, 0)
    is_changeable = str(changeable_only).lower() in ("true", "1", "on", "yes")

    if not date_str:
        results = {
            "error": True,
            "message": "Lütfen uçuş aramak için geçerli bir gidiş tarihi giriniz.",
            "flight_count": 0,
            "flights": [],
            "origin": origin_str,
            "destination": dest_str,
            "date": "Tarih Belirtilmedi",
            "passengers": {"adults": adults_cnt, "children": children_cnt, "babies": babies_cnt},
            "seat_passengers": adults_cnt + children_cnt,
            "trip_type": trip_str,
        }
    else:
        results = service.search_flights(
            origin_str, dest_str, date_str, adults_cnt, children_cnt, babies_cnt, trip_str, is_changeable
        )

    return templates.TemplateResponse(
        request,
        "index.html",
        {
            "airports": service.list_airports(),
            "results": results,
            "form": {
                "origin": origin_str, "destination": dest_str, "date": date_str,
                "return_date": return_date, "trip_type": trip_str,
                "adults": adults_cnt, "children": children_cnt,
                "babies": babies_cnt, "changeable_only": is_changeable,
            },
        },
    )


@app.get("/stats")
def stats():
    """Live system status for the case dashboard: inventory, model, MCP and tool metrics."""
    import os
    import sqlite3

    from app.agent import thy_auth, tools as agent_tools
    from app.pricer import domain

    conn = domain.connect()
    conn.row_factory = sqlite3.Row
    q = lambda sql: conn.execute(sql).fetchone()[0]  # noqa: E731
    data = {
        "inventory": {
            "airports": q("SELECT COUNT(*) FROM airports"),
            "flights": q("SELECT COUNT(*) FROM flights"),
            "fares": q("SELECT COUNT(*) FROM availabilities"),
            "seats": q("SELECT COALESCE(SUM(count_available),0) FROM availabilities"),
            "pnrs": q("SELECT COUNT(*) FROM pnrs"),
            "tickets": q("SELECT COUNT(*) FROM tickets"),
            "min_fare": q("SELECT COALESCE(MIN(base_price_usd),0) FROM availabilities"),
            "max_fare": q("SELECT COALESCE(MAX(base_price_usd),0) FROM availabilities"),
        },
        "agent": {
            "model": os.getenv("AGENT_MODEL", "-"),
            "provider": "Azure OpenAI" if os.getenv("AZURE_OPENAI_API_KEY") else "not configured",
            "configured": bool(os.getenv("AZURE_OPENAI_API_KEY") or os.getenv("OPENAI_API_KEY")),
            "tools": [t["name"] for t in agent_tools.TOOLS],
        },
        "thy_mcp": {
            "url": os.getenv("THY_MCP_URL", "-"),
            "authenticated": thy_auth.has_stored_tokens(),
        },
        "pricing_rules": {
            "child_ratio": domain.CHILD_FARE_RATIO,
            "infant_ratio": domain.INFANT_FARE_RATIO,
            "tax_per_pax": domain.TAX_PER_PAX_USD,
            "round_trip_factor": 0.88,
            "demand_multipliers": {"<=2g": 1.45, "<=7g": 1.25, "<=14g": 1.10, ">14g": 1.00},
        },
        "rag": _rag_stats(),
        "observability": agent_tools.log_stats(),
    }
    conn.close()
    return JSONResponse(data)



def _rag_stats() -> dict:
    """RAG index status; degrades gracefully if the vector store is unavailable."""
    try:
        from app.agent import rag

        return rag.stats()
    except Exception as exc:  # noqa: BLE001
        return {"indexed": 0, "error": str(exc)[:120], "store": "ChromaDB"}


@app.get("/routes/popular")
def popular_routes(limit: int = 4):
    """Popular routes: cheapest upcoming flights taken from the real inventory."""
    import sqlite3

    from app.pricer import domain

    conn = domain.connect()
    conn.row_factory = sqlite3.Row
    rows = conn.execute(
        """
        SELECT o.code AS origin, o.name AS origin_name,
               d.code AS destination, d.name AS dest_name,
               MIN(a.base_price_usd) AS from_price,
               MIN(f.date) AS first_date
        FROM availabilities a
        JOIN flights f  ON f.id = a.flight_id
        JOIN airports o ON o.id = f.origin_id
        JOIN airports d ON d.id = f.dest_id
        WHERE a.count_available > 0 AND a.fare_type = 'one_way'
        GROUP BY o.code, d.code
        ORDER BY from_price ASC
        LIMIT ?
        """,
        (limit,),
    ).fetchall()
    conn.close()
    return JSONResponse({"routes": [dict(r) for r in rows]})





@app.get("/case/solution")
def case_solution():
    """Team 4 case solution, with key figures verified against the live pricing engine."""
    from app.pricer.domain import price_breakdown

    a = price_breakdown(1000, 2, 1, 1)  # Option A - S class
    b = price_breakdown(700, 2, 1, 1)  # Option B - Q class

    return JSONResponse(
        {
            "verified": {
                "option_a": {
                    "class": "S", "base": 1000, "claimed": 3570,
                    "engine": a["grand_total_usd"], "match": a["grand_total_usd"] == 3570,
                    "breakdown": a,
                },
                "option_b": {
                    "class": "Q", "base": 700, "claimed": 2715,
                    "engine": b["grand_total_usd"], "match": b["grand_total_usd"] == 2715,
                    "breakdown": b,
                },
                "saving": a["grand_total_usd"] - b["grand_total_usd"],
            },
            "answers": [
                {"q": "1", "title": "Paket Seçimi", "verdict": "ExtraFly en rasyonel",
                 "detail": "FlexFly elenir (ExtraFly ile aynı değişiklik kuralı, +6.351₺ fazla). "
                           "PrimeFly'ın 50.817₺ peşin primi, ExtraFly'ın en yüksek tekil cezasından "
                           "(36.702₺ iptal) bile büyük.",
                 "metrics": [["ExtraFly (aile)", "2.118 ₺"], ["FlexFly (aile)", "8.469 ₺"],
                             ["PrimeFly (aile)", "50.817 ₺"], ["Değişim farkı", "30.168 ₺ ExtraFly lehine"],
                             ["İptal farkı", "11.997 ₺ ExtraFly lehine"]]},
                {"q": "1B", "title": "Başabaş Olasılığı", "verdict": "P > 2118 / (E − 18.531)",
                 "detail": "EcoFly vs ExtraFly beklenen maliyet eşitliğinden türetilen değişiklik "
                           "olasılığı eşiği. Ailenin belirsizliği bu eşiğin üzerinde.",
                 "metrics": [["E[EcoFly]", "E(1+P)"], ["E[ExtraFly]", "E + 2.118 + 18.531·P"]]},
                {"q": "2", "title": "Geçerli Ücretler", "verdict": "6 ücret geçerli: 3, 6, 8, 9, 10, 12",
                 "detail": "Elenenler — 1, 2, 7: sezon kapsam dışı · 4, 11: tek yön · 5: minimum 9 gün konaklama.",
                 "metrics": [["Geçerli", "3 (V), 6 (Q), 8/9/10/12 (S)"], ["Elenen", "1, 2, 7, 4, 11, 5"]]},
                {"q": "3", "title": "Müsaitlik Çapraz Kontrolü", "verdict": "A → sadece S · B → Q ve S",
                 "detail": "A'da V tek yönde, Q kapalı; maksimum 6 koltuk. B'de S:9, Q: bir yönde 3, "
                           "diğerinde 4 → 3 kişilik bilet kesilebilir.",
                 "metrics": [["Seçenek A", "S · $1000"], ["Seçenek B", "Q · $700"], ["B'de Q koltuk", "3 (tam sınırda)"]]},
                {"q": "4", "title": "Toplam Ücret", "verdict": "A: $3.570 · B: $2.715",
                 "detail": "2 yetişkin (%100) + çocuk (%75) + bebek (%10) + 3×$240 vergi. Bebek koltuk tüketmez, vergiden muaf.",
                 "metrics": [["Seçenek A", "$2.850 + $720 = $3.570"], ["Seçenek B", "$1.995 + $720 = $2.715"],
                             ["Tasarruf", "$855"]]},
                {"q": "5", "title": "Tek Yön mü, Gidiş-Dönüş mü?", "verdict": "Gidiş-dönüş net kazanan",
                 "detail": "Hipotez yanlış. Legacy carrier'lar hub-and-spoke ağı yönettiği için tek yön ve "
                           "gidiş-dönüşü iki ayrı ürün olarak fiyatlar; konaklama kuralı açığını kapatmak için "
                           "tek yön tabanını bilinçli yüksek tutar.",
                 "metrics": [["2 × tek yön (yetişkin)", "$1.600"], ["Gidiş-dönüş (yetişkin)", "$940"],
                             ["Fark", "$660 kişi başı"]]},
                {"q": "6", "title": "Risk ve Müsaitlik", "verdict": "B, risk gerçekleşse bile daha ucuz",
                 "detail": "22 Eylül'de Q'da 3 koltuk (tam ailenin ihtiyacı). Başka yolcu alırsa S'e düşülür: "
                           "$3.142,5 — yine de Seçenek A'dan $427,5 ucuz.",
                 "metrics": [["Q ile", "$2.715"], ["Q dolarsa (gidiş Q/dönüş S)", "$3.142,5"],
                             ["A'ya göre yine", "$427,5 avantaj"]]},
                {"q": "7", "title": "Ücretsiz Rezervasyon Penceresi", "verdict": "8 Eyl 2026 → 10-17 Eyl 2027",
                 "detail": "15-22 Eylül planına göre −7 gün / +360 gün. Kaan'ın okul takvimine yalnızca "
                           "3, 4 ve 5. tarih önerileri uygun; sakura (Mart-Nisan) turistik olarak en cazip.",
                 "metrics": [["En erken", "8-15 Eylül 2026"], ["En geç", "10-17 Eylül 2027"],
                             ["Okula uygun", "Kasım / Ocak / Mart"]]},
                {"q": "8", "title": "Babanın İş Durumu", "verdict": "7 Eylül — pencerenin 1 gün DIŞINDA",
                 "detail": "8 gün erken hareket isteniyor ama ücretsiz pencere −7 gün. Bu yüzden ücretsiz "
                           "yeniden rezervasyon hakkı kullanılamaz; ExtraFly değişiklik ücreti devreye girer.",
                 "metrics": [["Yeni tarih", "7 Eylül 2026"], ["Pencere", "8 Eyl 2026'dan itibaren"],
                             ["ExtraFly cezası (aile)", "17.604,45 ₺"]]},
            ],
        }
    )


class FlightStatusIn(BaseModel):
    origin: str
    destination: str
    date: str


class BookingIn(BaseModel):
    pnr: str
    surname: str


@app.post("/thy/flight-status")
def thy_flight_status(body: FlightStatusIn):
    from app.agent import thy_mcp

    return JSONResponse(thy_mcp.flight_status_by_route(body.origin, body.destination, body.date))


@app.post("/thy/booking")
def thy_booking(body: BookingIn):
    from app.agent import thy_mcp

    details = thy_mcp.booking_details(body.pnr, body.surname)
    baggage = thy_mcp.booking_baggage(body.pnr, body.surname)
    return JSONResponse({"details": details, "baggage": baggage})


class ChatIn(BaseModel):
    message: str
    source: str = "both"  # 'ours' | 'thy' | 'both' — UI'daki MCP kaynak secimi
    lang: str = "tr"      # UI dili ipucu (tr|en)


@app.post("/chat")
def chat(body: ChatIn, sid: str | None = Cookie(default=None)):
    import os

    if not (os.getenv("AZURE_OPENAI_API_KEY") or os.getenv("OPENAI_API_KEY")):
        return JSONResponse(
            {"reply": "Agent yapilandirilmadi: .env dosyasina AZURE_OPENAI_API_KEY ekleyin.",
             "tool_trace": []},
            status_code=200,
        )
    sid, session = _get_session(sid)
    try:
        out = session.send(body.message, source=body.source, lang=body.lang)
    except Exception as exc:  # noqa: BLE001
        out = {"reply": f"Hata: {exc}", "tool_trace": []}
    resp = JSONResponse(out)
    # The cookie must be set on the returned Response (headers set on an injected
    # parametresine set edilen basliklar JSONResponse donuldugunde uygulanmaz).
    resp.set_cookie("sid", sid, httponly=True, samesite="lax")
    return resp
