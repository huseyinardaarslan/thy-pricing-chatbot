// ================= i18n =================
const I18N = {
  tr: {
    topStrip:'Türkiye · Türkçe · TRY', help:'Yardım', deals:'Kampanyalar',
    navPlan:'Uçuş Planlama', navManage:'Check-in ve Yönet', navChat:'Wingo',
    heroSubThy:"300'den fazla noktaya uçuş · net fiyatlar · kolay rezervasyon",
    thyLogoSub:'WIDEN YOUR WORLD',
    caseSub:'PRICING SYSTEMS · AI AGENT MVP · GRUP 4', badgeOurs:'Bizim sistem', badgeThy:'THY Canlı MCP', badgeAgent:'Asistan',
    navJoin:'Üye Ol', navLogin:'Giriş Yap',
    joinTitle:'Üye Ol', joinName:'AD SOYAD', joinEmail:'E-POSTA', joinPass:'ŞFRE', joinBtn:'Üye Ol', joinHave:'Zaten üye misiniz?', joinGoLogin:'Giriş yapın',
    loginTitle:'Giriş Yap', loginEmail:'E-POSTA VEYA MILES&SMILES NO', loginPass:'ŞFRE', loginBtn:'Giriş Yap', loginRemember:'Beni hatırla', loginForgot:'Şifremi unuttum', loginNoAccount:'Üye değil misiniz?', loginGoJoin:'Üye olun',
    heroTitleCase:'Nereye uçuyoruz?', heroSubCase:'Havacılık Gelir Yönetimi Vaka Çalışması · Yılmaz Ailesi senaryosu · 2 MCP kaynağı',
    tabSearch:'Uçuş ara', tabCheckin:'Check-in', tabManage:'Rezervasyonunu yönet', tabStatus:'Uçuş durumu',
    lblFrom:'NEREDEN', lblTo:'NEREYE', lblDate:'GİDİŞ', lblReturnDate:'DÖNÜŞ', lblTrip:'SEYAHAT TİPİ', lblAdult:'YETİŞKİN', lblChild:'ÇOCUK', lblInfant:'BEBEK', lblPassengers:'YOLCULAR',
    optOW:'Tek yön', optRT:'Gidiş-dönüş', changeableOnly:'Sadece değiştirilebilir', searchBtn:'Uçuş ara',
    paxSingular:'Yolcu', paxPlural:'Yolcu',
    feat1t:'Dinamik fiyatlandırma', feat1d:'Kalkışa 2 gün kala ×1.45, 7 gün kala ×1.25 çarpan. Erken alan kazanır.',
    feat2t:'Gidiş-dönüş avantajı', feat2d:"Round-trip bilet, tek yönün %88'i. İki ayrı bilet neredeyse hiç mantıklı değil.",
    feat3t:'AI Seyahat Danışmanı', feat3d:'Seyahat ihtiyacınızı anlatın, size en uygun seçenekleri sunalım.',
    flightsFound:'uçuş bulundu', adult:'yetişkin', child:'çocuk', infant:'bebek', seatsNeeded:'koltuk gerekli',
    tripRT:'gidiş-dönüş', tripOW:'tek yön', badgeRT:'GİDİŞ-DÖNÜŞ', badgeOW:'TEK YÖN', cheapest:'EN UYGUN',
    changeable:'değiştirilebilir', notChangeable:'değişiklik yok', familyTax:'aile · vergi dahil',
    baseFare:'Temel ücret (kişi)', baggage:'Bagaj', changeFee:'Değişiklik ücreti', free:'Ücretsiz',
    lastSeatsPre:'Son', lastSeatsPost:'koltuk', seatsAvail:'koltuk müsait', buyBtn:'Seç ve satın al',
    noFlights1:'Bu tarih/rota için satılabilir uçuş bulunamadı.', noFlights2:'Filtreleri gevşetmeyi veya başka tarih denemeyi düşünün.',
    chatTitle:'Wingo', chatSub:'THY yapay zekâ seyahat asistanı', dataSource:'VERİ KAYNAĞI', srcOurs:'Bizim', srcThy:'THY Canlı', srcBoth:'İkisi',
    greetTitle:'Merhaba, ben Wingo', greetBody:'Doğal dilde uçuş arayabilir, gerçek THY fiyatlarıyla karşılaştırabilir, onayınla bilet alabilirim. Yukarıdan veri kaynağını seçebilirsin.',
    sug1:'Yarın IST-LHR en ucuz bilet', sug2:'Bizim fiyatla THY canlıyı karşılaştır', sug3:'Hangi havalimanları var?', sugRag:'Uçuşum iptal edilirse haklarım neler?',
    chatPh:'Mesaj yazın…', chatNote:'Satın alma yalnızca senin açık onayınla · fiyatlar sistemden gelir · THY canlı read-only',
    mThyNote:"Gerçek THY Canlı MCP'den sorgulanır", mStatus:'Uçuş durumu', mManage:'Rezervasyonunu yönet', mCheckin:'Online Check-in',
    mFrom:'NEREDEN', mTo:'NEREYE', mDate:'TARİH', mQuery:'Sorgula', mPnr:'PNR / REZERVASYON KODU', mPnrPh:'6 haneli kod',
    mSurname:'SOYAD', mSurnamePh:'Yolcu soyadı', mGetBooking:'Rezervasyon ve bagaj bilgilerini getir', mGetCheckin:'Check-in için rezervasyonu getir',
    mQuerying:'THY sorgulanıyor…', mNoBooking:'Bu PNR/soyad ile rezervasyon bulunamadı. Gerçek bir Miles&Smiles rezervasyon kodu ile deneyin.',
    mNoFlights:'Bu tarih/rota için uçuş bulunamadı.', mParseErr:'Yanıt çözümlenemedi.', mFound:'Rezervasyon bulundu', mFoundCheckin:'Check-in için rezervasyon bulundu',
    tcAirports:'Havalimanları listelendi', tcSearch:'Bizim sistemde arandı', tcQuote:'Satın alma özeti hazırlandı', tcCommit:'Satın alma gerçekleşti', tcThy:'THY canlı MCP sorgulandı',
    tcRag:'Resmi dokümanda arandı',
    tcBundle:'AI Paketleri (Dynamic Bundling) oluşturuldu',
    featBundleT:'AI Destekli Paketleme', featBundleD:'Seyahat ihtiyacınızı doğal dilde anlatın, AI size en uygun kişiselleştirilmiş paketleri oluştursun.',
    sugBundle1:"Hafta sonu eşimle Londra'ya gitmek istiyorum. Lüks ve rahat bir yolculuk arıyorum.",
    sugBundle2:"İş toplantısı için Amsterdam'a uçacağım. Bagajım yok, sadece ucuz olsun.",
    cpTitle:'VAKA ÇALIŞMASI ANALİZ PANELİ', cpScenario:'Yılmaz Ailesi Senaryosu',
    cpRoute:'Rota', cpPax:'Yolcular', cpPaxVal:'2 Yetişkin + 1 Çocuk + 1 Bebek',
    cpSeats:'Koltuk ihtiyacı', cpConstraint:'Kısıt', cpChangeable:'Değiştirilebilir bilet',
    cpRisk:'Kritik risk', cpRiskVal:'Dönüşte Q sınıfı = 3 koltuk',
    cpRunBtn:'Senaryoyu Wingo ile çalıştır',
    cpRunNote:'Agent aramayı yapar, değiştirilebilir fareleri filtreler, aile toplamını vergilerle hesaplar.',
    cpArch:'AI Agent Orkestrasyon Mimarisi', cpSysStatus:'Canlı Sistem Durumu',
    cpRules:'Fiyatlandırma Kuralları', cpDecisions:'Karar Noktaları',
    cpSolution:'Takım 4 · Vaka Çözümü', cpSolutionSub:'8 sorunun cevabı — kilit hesaplar canlı fiyat motoruyla doğrulanır',
    cpPdf:"Çözüm PDF'i", cpLog:'Tool Çağrı Logu', cpNoLog:"Henüz tool çağrısı yok. Wingo'ya bir soru sorun.",
    cpD1:'Niyet analizi, tool seçimi, sıralama', cpD2:'Arama, fiyat kırılımı, teklif hazırlama',
    cpD3:'Fiyat/müsaitlik', cpD3n:'— LLM asla üretmez', cpD4:'Satın alma onayı', cpD4n:'— zorunlu',
    cpL1:'Web sitesi · Wingo yan paneli', cpL1n:'(doğal dil)',
    cpL3:'Grounding · quote→onay→commit · read/write ayrımı',
    cpOurPricer:'Bizim Pricer', cpOurPricerSub:'arama · fiyat · SATIN ALMA',
    cpThyLive:'THY Canlı MCP',
    cpLayerSys:'SİSTEMLER', cpLayerCh:'KANAL', cpLayerAg:'AGENT', cpLayerGr:'GUARDRAIL',
    cpRefresh:'↻ yenile',
    searching:'Aranıyor…',
    direct:'Direkt', aircraft:'Uçak tipi', fromPricePP:'Kişi başı başlangıç', totalDuration:'Toplam seyahat süresi',
    pkgDetails:'Paket detayları', recommended:'Önerilen', classLbl:'sınıfı',
    cabinBag:'Kabin bagajı', baggageRight:'Bagaj hakkı', seatSelect:'Koltuk seçimi',
    seatStandard:'Standart koltuk', seatPreferred:'Ön sıra ve standart',
    freeChange:'Ücretsiz değişiklik', sameDayChange:'Aynı gün önceki uçuşa değişiklik',
    refundRight:'Kesintisiz iade', deduction:'kesinti', milesRow:'Mil', milesUnit:'Mil',
    fastTrack:'Fast track', seatsLeftRow:'Kalan koltuk', economyCabin:'Ekonomi', businessCabin:'Business',
    flightDetails:'Uçuş detayları', included:'Var', unavailable:'Yok', selectFare:'Seç', balancedPick:'Dengeli seçim',
    showPackages:'Paketleri ve Fiyatları İncele', hidePackages:'Paketleri Gizle',
    kpiFlightsL:'UÇUŞ', kpiFaresL:'FARE SATIRI', kpiToolsL:'AGENT TOOL', kpiPnrsL:'REZERVASYON',
    prFeatured:'ÖNE ÇIKAN ÜCRETLER', prTitle:'Bu haftanın popüler rotaları',
    prSub:'Canlı envanterden en uygun başlangıç fiyatları.', prFrom:'başlangıç',
    cpDocs:'belge', cpSourceDocs:'kaynak doküman',
    cpNights:'7 gece', cpNoSeat:'(bebek koltuksuz)',
    cpLoading:'yükleniyor…', cpVerified:'MOTOR DOĞRULADI', cpMismatch:'UYUŞMUYOR',
    cpOptA:'SEÇENEK A (5–12 Eyl)', cpOptB:'SEÇENEK B (15–22 Eyl)', cpSaving:'TASARRUF (B < A)',
    cpSavingSub:'B tercih edilirse aile başına', cpClass:'sınıfı · taban',
    cpProvider:'LLM sağlayıcı', cpModel:'Model', cpToolCount:'Agent tool sayısı',
    cpConnected:'bağlı (OAuth)', cpNoAuth:'giriş yok', cpAirportFlight:'Havalimanı / uçuş',
    cpSeatsAvail:'Müsait koltuk', cpTicketsSold:'Satılan bilet', cpPriceRange:'Fiyat aralığı',
    cpAdult:'Yetişkin', cpChild:'Çocuk (2–11)', cpInfant:'Bebek (<2, koltuksuz)',
    cpTax:'Vergi (kişi başı)', cpTaxNote:'bebek muaf', cpRtFactor:'Gidiş-dönüş katsayısı',
    cpDemand:'Talep ×', cpCalls:'çağrı', cpSuccess:'başarılı', cpAvg:'ort.',
    cpTime:'SAAT', cpTool:'TOOL', cpStatus:'DURUM', cpDur:'SÜRE', cpInput:'GİRDİ',
    cpOk:'başarılı', cpFail:'hata',
    footL:'© Dynamic Pricer — Yaz Staj Programı vaka çalışması demosu. Resmî Turkish Airlines ürünü değildir.', footR:'Pricing Systems · Grup 4 · AI Agent Architecture',
    footLThy:'© 2024 Turkish Airlines. Tüm hakları saklıdır.', footRThy:'Gizlilik Politikası · Kullanım Koşulları · İletişim',
  },
  en: {
    topStrip:'Türkiye · English · TRY', help:'Help', deals:'Deals',
    navPlan:'Plan a Trip', navManage:'Check-in & Manage', navChat:'Wingo',
    heroSubThy:'Flights to 300+ destinations · clear pricing · easy booking',
    thyLogoSub:'WIDEN YOUR WORLD',
    caseSub:'PRICING SYSTEMS · AI AGENT MVP · GROUP 4', badgeOurs:'Our system', badgeThy:'THY Live MCP', badgeAgent:'Assistant',
    navJoin:'Join', navLogin:'Log in',
    joinTitle:'Join', joinName:'FULL NAME', joinEmail:'EMAIL', joinPass:'PASSWORD', joinBtn:'Join', joinHave:'Already a member?', joinGoLogin:'Log in',
    loginTitle:'Log in', loginEmail:'EMAIL OR MILES&SMILES NO', loginPass:'PASSWORD', loginBtn:'Log in', loginRemember:'Remember me', loginForgot:'Forgot password', loginNoAccount:'Not a member?', loginGoJoin:'Join now',
    heroTitleCase:'Where are we flying?', heroSubCase:'Airline Revenue Management Case Study · Yılmaz Family scenario · 2 MCP sources',
    tabSearch:'Search flights', tabCheckin:'Check-in', tabManage:'Manage booking', tabStatus:'Flight status',
    lblFrom:'FROM', lblTo:'TO', lblDate:'DEPARTURE', lblReturnDate:'RETURN', lblTrip:'TRIP TYPE', lblAdult:'ADULT', lblChild:'CHILD', lblInfant:'INFANT', lblPassengers:'PASSENGERS',
    optOW:'One way', optRT:'Round trip', changeableOnly:'Changeable only', searchBtn:'Search',
    paxSingular:'Passenger', paxPlural:'Passengers',
    feat1t:'Dynamic pricing', feat1d:'×1.45 within 2 days of departure, ×1.25 within 7. Book early, pay less.',
    feat2t:'Round-trip advantage', feat2d:'A round-trip fare is 88% of one-way. Two separate one-ways rarely make sense.',
    featBundleT:'AI-Powered Bundling', featBundleD:'Describe your travel needs in plain English, and AI will build personalized bundles (Economy, Recommended, Comfort).',
    feat3t:'AI Travel Advisor', feat3d:'Tell us your travel needs and we\'ll find the best options for you.',
    flightsFound:'flights found', adult:'adult', child:'child', infant:'infant', seatsNeeded:'seats needed',
    tripRT:'round trip', tripOW:'one way', badgeRT:'ROUND TRIP', badgeOW:'ONE WAY', cheapest:'BEST VALUE',
    changeable:'changeable', notChangeable:'no changes', familyTax:'family · incl. tax',
    baseFare:'Base fare (per person)', baggage:'Baggage', changeFee:'Change fee', free:'Free',
    lastSeatsPre:'Only', lastSeatsPost:'seats left', seatsAvail:'seats available', buyBtn:'Select & book',
    noFlights1:'No bookable flights for this date/route.', noFlights2:'Try relaxing the filters or a different date.',
    chatTitle:'Wingo', chatSub:'THY AI travel assistant', dataSource:'DATA SOURCE', srcOurs:'Ours', srcThy:'THY Live', srcBoth:'Both',
    greetTitle:"Hi, I'm Wingo", greetBody:'Ask in plain language: I can search flights, compare with real THY prices, and book with your approval. Pick a data source above.',
    sugBundle1:"I want to fly to London with my wife this weekend. I'm looking for a luxurious trip.",
    sugBundle2:"Flying to Amsterdam for business. No luggage, just keep it cheap.",
    sug2:'Compare our price with THY live', sug3:'Which airports are available?', sugRag:'What are my rights if my flight is cancelled?',
    chatPh:'Type a message…', chatNote:'Purchases only with your explicit approval · prices come from the system · THY live is read-only',
    mThyNote:'Queried from the real THY Live MCP', mStatus:'Flight status', mManage:'Manage booking', mCheckin:'Online check-in',
    mFrom:'FROM', mTo:'TO', mDate:'DATE', mQuery:'Search', mPnr:'PNR / BOOKING CODE', mPnrPh:'6-char code',
    mSurname:'SURNAME', mSurnamePh:'Passenger surname', mGetBooking:'Retrieve booking & baggage', mGetCheckin:'Retrieve booking for check-in',
    mQuerying:'Querying THY…', mNoBooking:'No booking found for this PNR/surname. Try a real Miles&Smiles booking code.',
    mNoFlights:'No flights for this date/route.', mParseErr:'Could not parse response.', mFound:'Booking found', mFoundCheckin:'Booking found for check-in',
    tcAirports:'Airports listed', tcSearch:'Searched our system', tcQuote:'Purchase summary prepared', tcCommit:'Purchase completed', tcThy:'THY live MCP queried',
    tcRag:'Official documents searched',
    tcBundle:'AI Bundles (Dynamic Bundling) generated',
    cpTitle:'CASE STUDY ANALYSIS PANEL', cpScenario:'Yılmaz Family Scenario',
    cpRoute:'Route', cpPax:'Passengers', cpPaxVal:'2 Adults + 1 Child + 1 Infant',
    cpSeats:'Seats needed', cpConstraint:'Constraint', cpChangeable:'Changeable ticket',
    cpRisk:'Critical risk', cpRiskVal:'Return leg Q class = 3 seats',
    cpRunBtn:'Run scenario with Wingo',
    cpRunNote:'The agent searches, filters changeable fares and computes the family total with taxes.',
    cpArch:'AI Agent Orchestration Architecture', cpSysStatus:'Live System Status',
    cpRules:'Pricing Rules', cpDecisions:'Decision Points',
    cpSolution:'Team 4 · Case Solution', cpSolutionSub:'Answers to 8 questions — key figures verified by the live pricing engine',
    cpPdf:'Solution PDF', cpLog:'Tool Call Log', cpNoLog:'No tool calls yet. Ask Wingo a question.',
    cpD1:'Intent analysis, tool selection, ordering', cpD2:'Search, price breakdown, quote preparation',
    cpD3:'Price/availability', cpD3n:'— never generated by the LLM', cpD4:'Purchase approval', cpD4n:'— mandatory',
    cpL1:'Website · Wingo side panel', cpL1n:'(natural language)',
    cpL3:'Grounding · quote→approval→commit · read/write separation',
    cpOurPricer:'Our Pricer', cpOurPricerSub:'search · pricing · PURCHASE',
    cpThyLive:'THY Live MCP',
    cpLayerSys:'SYSTEMS', cpLayerCh:'CHANNEL', cpLayerAg:'AGENT', cpLayerGr:'GUARDRAIL',
    cpRefresh:'↻ refresh',
    searching:'Searching…',
    direct:'Direct', aircraft:'Aircraft', fromPricePP:'From, per person', totalDuration:'Total travel duration',
    pkgDetails:'Package details', recommended:'Recommended', classLbl:'class',
    cabinBag:'Cabin baggage', baggageRight:'Checked baggage', seatSelect:'Seat selection',
    seatStandard:'Standard seat', seatPreferred:'Front row & standard',
    freeChange:'Free change', sameDayChange:'Same-day change to earlier flight',
    refundRight:'Refund without penalty', deduction:'deduction', milesRow:'Miles', milesUnit:'Miles',
    fastTrack:'Fast track', seatsLeftRow:'Seats left', economyCabin:'Economy', businessCabin:'Business',
    flightDetails:'Flight details', included:'Included', unavailable:'Not available', selectFare:'Select', balancedPick:'Balanced pick',
    showPackages:'View Packages & Prices', hidePackages:'Hide Packages',
    kpiFlightsL:'FLIGHTS', kpiFaresL:'FARE ROWS', kpiToolsL:'AGENT TOOLS', kpiPnrsL:'BOOKINGS',
    prFeatured:'FEATURED FARES', prTitle:'Popular routes this week',
    prSub:'Lowest starting prices from our live inventory.', prFrom:'from',
    cpDocs:'docs', cpSourceDocs:'source documents',
    cpNights:'7 nights', cpNoSeat:'(infant, no seat)',
    cpLoading:'loading…', cpVerified:'ENGINE VERIFIED', cpMismatch:'MISMATCH',
    cpOptA:'OPTION A (Sep 5–12)', cpOptB:'OPTION B (Sep 15–22)', cpSaving:'SAVING (B < A)',
    cpSavingSub:'per family if B is chosen', cpClass:'class · base',
    cpProvider:'LLM provider', cpModel:'Model', cpToolCount:'Agent tools',
    cpConnected:'connected (OAuth)', cpNoAuth:'not signed in', cpAirportFlight:'Airports / flights',
    cpSeatsAvail:'Available seats', cpTicketsSold:'Tickets sold', cpPriceRange:'Price range',
    cpAdult:'Adult', cpChild:'Child (2–11)', cpInfant:'Infant (<2, no seat)',
    cpTax:'Tax (per person)', cpTaxNote:'infant exempt', cpRtFactor:'Round-trip factor',
    cpDemand:'Demand ×', cpCalls:'calls', cpSuccess:'successful', cpAvg:'avg',
    cpTime:'TIME', cpTool:'TOOL', cpStatus:'STATUS', cpDur:'DURATION', cpInput:'INPUT',
    cpOk:'success', cpFail:'error',
    footL:'© Dynamic Pricer — Summer Internship case-study demo. Not an official Turkish Airlines product.', footR:'Pricing Systems · Group 4 · AI Agent Architecture',
    footLThy:'© 2024 Turkish Airlines. All rights reserved.', footRThy:'Privacy Policy · Terms of Use · Contact',
  }
};
let lang = localStorage.getItem('ui-lang') || 'tr';
function t(key){ return (I18N[lang] && I18N[lang][key]) || (I18N.tr[key]) || key; }
function applyLang(){
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-i18n]').forEach(el => { const k = el.getAttribute('data-i18n'); if (I18N[lang][k] !== undefined) el.textContent = I18N[lang][k]; });
  document.querySelectorAll('[data-i18n-ph]').forEach(el => { const k = el.getAttribute('data-i18n-ph'); if (I18N[lang][k] !== undefined) el.placeholder = I18N[lang][k]; });
  const set = (id, on) => { const b = document.getElementById(id); b.className = 'lang-btn px-2.5 py-1.5 rounded-full transition ' + (on ? 'text-white' : 'text-slate-500 hover:text-slate-800'); b.style.backgroundColor = on ? 'var(--accent-dark)' : ''; };
  set('langTr', lang==='tr'); set('langEn', lang==='en');
  // Re-render JS-generated panel content in the newly selected language
  if (typeof loadStats === 'function') loadStats();
  if (typeof loadCaseSolution === 'function') loadCaseSolution();
  if (typeof paintStt === 'function') paintStt();
  if (window.formPickersReady && typeof updateDatePreview === 'function') updateDatePreview();
  if (window.formPickersReady && typeof renderCalendar === 'function') renderCalendar();
  if (window.formPickersReady && typeof updatePax === 'function') updatePax();
}
document.getElementById('langTr').onclick = () => { lang='tr'; localStorage.setItem('ui-lang','tr'); applyLang(); };
document.getElementById('langEn').onclick = () => { lang='en'; localStorage.setItem('ui-lang','en'); applyLang(); };

// Flight result panels
window.toggleFlightPanel = function(cardId, panel, event) {
  if (event && event.target && event.target.closest('.buy-btn')) return;
  const names = ['flight', 'eco', 'biz'];
  const target = document.getElementById(panel + '-details-' + cardId);
  if (!target) return;
  const shouldOpen = target.classList.contains('hidden');

  names.forEach((name) => {
    const detail = document.getElementById(name + '-details-' + cardId);
    if (detail) detail.classList.add('hidden');
    document.querySelectorAll(`[data-panel-btn="${name}-${cardId}"]`).forEach((btn) => {
      btn.classList.remove('is-active');
      btn.setAttribute('aria-expanded', 'false');
    });
  });

  if (shouldOpen) {
    target.classList.remove('hidden');
    document.querySelectorAll(`[data-panel-btn="${panel}-${cardId}"]`).forEach((btn) => {
      btn.classList.add('is-active');
      btn.setAttribute('aria-expanded', 'true');
    });
  }
};

// ================= THY SERVIS MODAL =================
const thyModal = document.getElementById('thyModal');
const thyTitle = document.getElementById('thyModalTitle');
const thyForm = document.getElementById('thyModalForm');
const thyResult = document.getElementById('thyModalResult');
const inputCls = 'w-full rounded-xl premium-input px-3 py-2.5 text-sm font-semibold outline-none';
const btnCls = 'w-full btn-primary text-white font-bold py-2.5 rounded-xl mt-1';

function bookingForm(btnText){
  return `<div><label class="block text-[11px] font-bold text-slate-400 mb-1">${t('mPnr')}</label><input id="bk_pnr" placeholder="${t('mPnrPh')}" class="${inputCls}"></div>
    <div class="mt-3"><label class="block text-[11px] font-bold text-slate-400 mb-1">${t('mSurname')}</label><input id="bk_sn" placeholder="${t('mSurnamePh')}" class="${inputCls}"></div>
    <button id="bk_go" class="${btnCls}">${btnText}</button>`;
}
const THY_VIEWS = {
  status: { titleKey:'mStatus', icon:'i-clock',
    form: () => `<div class="grid grid-cols-2 gap-3">
        <div><label class="block text-[11px] font-bold text-slate-400 mb-1">${t('mFrom')}</label><input id="ts_o" value="IST" class="${inputCls}"></div>
        <div><label class="block text-[11px] font-bold text-slate-400 mb-1">${t('mTo')}</label><input id="ts_d" value="LHR" class="${inputCls}"></div>
      </div>
      <div class="mt-3"><label class="block text-[11px] font-bold text-slate-400 mb-1">${t('mDate')}</label><input id="ts_date" type="date" class="${inputCls}"></div>
      <button id="ts_go" class="${btnCls}">${t('mQuery')}</button>`,
    run: async () => renderStatus(await post('/thy/flight-status', { origin:v('ts_o'), destination:v('ts_d'), date:v('ts_date') }))
  },
  manage: { titleKey:'mManage', icon:'i-clipboard', form: () => bookingForm(t('mGetBooking')),
    run: async () => renderBooking(await post('/thy/booking', { pnr:v('bk_pnr'), surname:v('bk_sn') }), false) },
  checkin: { titleKey:'mCheckin', icon:'i-bag', form: () => bookingForm(t('mGetCheckin')),
    run: async () => renderBooking(await post('/thy/booking', { pnr:v('bk_pnr'), surname:v('bk_sn') }), true) },
};
function v(id){ return (document.getElementById(id)?.value || '').trim(); }
function loading(){ thyResult.innerHTML = `<div class="text-center text-slate-400 text-sm py-3"><span class="typing"><span>●</span> <span>●</span> <span>●</span></span> ${t('mQuerying')}</div>`; }
async function post(url, body){ loading(); try { const r = await fetch(url,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(body)}); return await r.json(); } catch(e){ return {status:'error', message:String(e)}; } }
function errBox(msg){ return `<div class="bg-amber-50 text-amber-800 ring-1 ring-amber-200 rounded-xl p-3 text-sm font-medium">${msg}</div>`; }
function renderStatus(d){
  if (d.status !== 'ok'){ thyResult.innerHTML = errBox(d.message || t('mNoFlights')); return; }
  let data; try { data = JSON.parse(d.text); } catch(_) { thyResult.innerHTML = errBox(t('mParseErr')); return; }
  const flights = data.flights || [];
  if (!flights.length){ thyResult.innerHTML = errBox((data.statusDesc||'').replace(/[{}]/g,'') || t('mNoFlights')); return; }
  let html = '';
  if (data.statusDesc) html += `<div class="text-[11px] text-slate-400 mb-2 font-medium">${data.statusDesc.replace(/[{}]/g,'')}</div>`;
  html += flights.slice(0,6).map(f => {
    const num = 'TK'+(f.flightCode?.flightNumber||''); const dep=f.scheduledDepartureAirport?.code||''; const arr=f.scheduledArrivalAirport?.code||'';
    const st = f.statusText || f.status?.description || f.departureStatusText || '';
    return `<div class="rounded-xl ring-1 ring-slate-200 p-3 mb-2 flex items-center justify-between">
      <div><div class="font-bold text-sm">${num}</div><div class="text-[11px] text-slate-400 font-medium">${dep} → ${arr} · ${f.flightDate||''}</div></div>
      ${st ? `<span class="text-[10px] font-bold acc-50 acc-text px-2 py-1 rounded-full">${st}</span>` : ''}</div>`;
  }).join('');
  thyResult.innerHTML = html;
}
function renderBooking(d, checkin){
  const det = d.details || {};
  if (det.status !== 'ok'){ thyResult.innerHTML = errBox(det.message || t('mNoBooking')); return; }
  let data; try { data = JSON.parse(det.text); } catch(_) { data = null; }
  if (!data || data.error || (det.text||'').toLowerCase().includes('error')){ thyResult.innerHTML = errBox(t('mNoBooking')); return; }
  thyResult.innerHTML = `<div class="rounded-xl ring-1 ring-slate-200 p-3 text-sm">
    <div class="font-bold acc-text mb-1">${checkin ? t('mFoundCheckin') : t('mFound')}</div>
    <pre class="text-[11px] text-slate-600 whitespace-pre-wrap max-h-52 overflow-y-auto">${(det.text||'').slice(0,1200)}</pre></div>`;
}
function openThy(key){
  const view = THY_VIEWS[key]; if (!view) return;
  thyTitle.innerHTML = `<svg class="ic"><use href="#${view.icon}"/></svg> ${t(view.titleKey)}`;
  thyForm.innerHTML = view.form(); thyResult.innerHTML = '';
  thyModal.classList.remove('hidden'); thyModal.classList.add('flex');
  const go = thyForm.querySelector('button'); if (go) go.onclick = view.run;
  const dateEl = document.getElementById('ts_date'); if (dateEl){ const dt=new Date(); dt.setDate(dt.getDate()+2); dateEl.value = dt.toISOString().slice(0,10); }
}
document.querySelectorAll('.thy-tab').forEach(b => b.onclick = () => openThy(b.dataset.thy));
document.getElementById('thyModalClose').onclick = () => { thyModal.classList.add('hidden'); thyModal.classList.remove('flex'); };
thyModal.onclick = (e) => { if (e.target === thyModal){ thyModal.classList.add('hidden'); thyModal.classList.remove('flex'); } };

// ================= THEME ==================
const root = document.documentElement;
const btnThy = document.getElementById('themeThy');
const btnCase = document.getElementById('themeCase');
function applyTheme(th) {
  root.dataset.theme = th; localStorage.setItem('ui-theme', th);
  [btnThy, btnCase].forEach(b => { b.className='theme-btn px-3 py-1.5 rounded-full transition text-slate-500 hover:text-slate-800'; b.style.backgroundColor=''; });
  const active = th==='thy' ? btnThy : btnCase;
  active.className='theme-btn px-3 py-1.5 rounded-full transition text-white'; active.style.backgroundColor='var(--accent-dark)';
}
btnThy.onclick = () => applyTheme('thy');
btnCase.onclick = () => applyTheme('case');
applyTheme(localStorage.getItem('ui-theme') || 'thy');
applyLang();

// ================= CHAT =================
const SVG = {
  db:'<path d="M12 2c5 0 9 1.3 9 3s-4 3-9 3-9-1.3-9-3 4-3 9-3z"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>',
  globe:'<circle cx="12" cy="12" r="9"/><line x1="3" y1="12" x2="21" y2="12"/><path d="M12 3a14 14 0 0 1 4 9 14 14 0 0 1-4 9 14 14 0 0 1-4-9 14 14 0 0 1 4-9z"/>',
  receipt:'<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/>',
  check:'<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>',
  search:'<circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>',
};
function ico(name){ return '<svg class="ic" style="width:.95em;height:.95em" viewBox="0 0 24 24">'+(SVG[name]||'')+'</svg>'; }
const TOOL_META = {
  list_airports:{i:'search',k:'tcAirports'}, search_flights:{i:'db',k:'tcSearch'},
  quote_purchase:{i:'receipt',k:'tcQuote'}, commit_purchase:{i:'check',k:'tcCommit'}, search_knowledge_base:{i:'receipt',k:'tcRag'},
  search_thy_live:{i:'globe',k:'tcThy'},
  build_dynamic_bundles:{i:'layers',k:'tcBundle'},
};

const panel = document.getElementById('chatPanel');
const messages = document.getElementById('messages');
const input = document.getElementById('chatInput');

function openChat(fullscreen) {
  if (fullscreen) {
    panel.classList.add('chat-fullscreen');
  } else {
    panel.classList.remove('chat-fullscreen');
  }
  panel.classList.remove('translate-x-full');
  input.focus();
}
function closeChat() {
  panel.classList.add('translate-x-full');
  // keep fullscreen class so transition looks smooth; remove after transition
  panel.addEventListener('transitionend', () => { panel.classList.remove('chat-fullscreen'); }, { once: true });
}

document.getElementById('chatBtn').onclick = () => openChat(false);
document.querySelectorAll('.chatOpenBtn').forEach(btn => btn.onclick = () => openChat(true));
document.getElementById('chatClose').onclick = closeChat;

let source = 'both';
document.querySelectorAll('.src-btn').forEach(btn => {
  btn.onclick = () => {
    source = btn.dataset.source;
    document.querySelectorAll('.src-btn').forEach(b => {
      const base = 'src-btn text-[11px] font-bold py-1.5 rounded-lg transition inline-flex items-center justify-center gap-1.5';
      if (b === btn) { b.className = base + ' bg-white shadow-sm'; b.style.color='var(--accent-dark)'; }
      else { b.className = base + ' text-white/70 hover:text-white'; b.style.color=''; }
    });
  };
});

// Minimal, dependency-free Markdown -> HTML for chat replies.
// Escapes HTML first (XSS-safe), then converts the small subset of Markdown
// the model actually produces: **bold**, bullet/numbered lists, line breaks.
function escapeHtml(s){
  return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
}
function renderMarkdown(raw){
  const lines = escapeHtml(raw).split('\n');
  let html = '', inList = false;
  const inline = (t) => t
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/(?<!\*)\*([^*]+)\*(?!\*)/g, '<em>$1</em>');
  for (const line of lines) {
    const heading = line.match(/^\s*(#{2,4})\s+(.*)/);
    if (heading) {
      if (inList) { html += '</ul>'; inList = false; }
      html += `<div class="font-bold text-[13px] mt-2 mb-0.5 acc-text">${inline(heading[2])}</div>`;
      continue;
    }
    const bullet = line.match(/^\s*[-*]\s+(.*)/);
    const numbered = line.match(/^\s*\d+\.\s+(.*)/);
    if (bullet || numbered) {
      if (!inList) { html += '<ul class="list-disc pl-5 space-y-0.5">'; inList = true; }
      html += `<li>${inline(bullet ? bullet[1] : numbered[1])}</li>`;
    } else {
      if (inList) { html += '</ul>'; inList = false; }
      html += line.trim() ? `<p>${inline(line)}</p>` : '<div class="h-2"></div>';
    }
  }
  if (inList) html += '</ul>';
  return html;
}

function userBubble(text){ const el=document.createElement('div'); el.className='chat-bubble-user text-white rounded-2xl rounded-tr-md p-4 ml-10 shadow-sm fade-in'; el.textContent=text; messages.appendChild(el); scroll(); }
function botBubble(){ const el=document.createElement('div'); el.className='chat-bubble-bot rounded-2xl rounded-tl-md p-4 mr-6 shadow-sm fade-in space-y-1.5'; el.innerHTML='<span class="typing text-slate-400"><span>●</span> <span>●</span> <span>●</span></span>'; messages.appendChild(el); scroll(); return el; }
function toolChips(trace){
  if (!trace || !trace.length) return null;
  const wrap=document.createElement('div'); wrap.className='flex flex-wrap gap-1.5 mr-6 fade-in';
  trace.forEach(tr => { const m=TOOL_META[tr.tool]||{i:'search',k:tr.tool}; const chip=document.createElement('span'); chip.className='inline-flex items-center gap-1.5 text-[10px] font-bold bg-white text-slate-600 ring-1 ring-slate-200 px-2 py-1 rounded-full'; chip.innerHTML=ico(m.i)+'<span>'+t(m.k)+'</span>'; chip.title=JSON.stringify(tr.input); wrap.appendChild(chip); });
  return wrap;
}
function scroll(){ messages.scrollTop = messages.scrollHeight; }

function renderBundleCards(trace) {
  if (!trace || !trace.length) return null;
  const bundleTrace = trace.find(t => t.tool === 'build_dynamic_bundles');
  if (!bundleTrace || !bundleTrace.result || !bundleTrace.result.bundles) return null;
  
  const res = bundleTrace.result;
  const wrap = document.createElement('div');
  wrap.className = 'flex flex-col gap-3 mt-4 fade-in';
  
  const fl = res.flight;
  const pax = res.passengers;
  wrap.innerHTML = `<div class="text-[12px] font-bold text-slate-500 text-center mb-1">${fl.origin} → ${fl.destination} · ${fl.date} · ${fl.hour}</div>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-3">
    ${res.bundles.map((b, idx) => `
      <div class="bg-white rounded-xl ring-1 ${idx === 1 ? 'ring-[var(--accent-dark)] shadow-md' : 'ring-slate-200'} p-4 flex flex-col relative overflow-hidden">
        ${idx === 1 ? `<div class="absolute top-0 right-0 left-0 bg-[var(--accent-dark)] text-white text-[10px] font-black text-center py-1 uppercase tracking-widest">${lang==='en'?'Recommended':'Önerilen'}</div><div class="mt-4"></div>` : ''}
        <div class="font-bold text-[15px] mb-2">${lang === 'en' ? b.label_en : b.label_tr}</div>
        
        ${b.discount_amount_usd > 0 ? `
          <div class="flex items-end gap-2 mb-1">
            <div class="text-[24px] font-black tracking-tight ${idx === 1 ? 'acc-text' : 'text-slate-800'}">$${b.bundle_total_usd}</div>
            <div class="text-sm text-slate-400 font-bold line-through mb-1.5">$${b.original_total_usd}</div>
          </div>
          <div class="text-[10px] font-bold text-emerald-600 mb-2">${lang==='en'?`You save $${b.discount_amount_usd}`:`$${b.discount_amount_usd} indirim kazandınız`}</div>
        ` : `
          <div class="text-[24px] font-black tracking-tight ${idx === 1 ? 'acc-text' : 'text-slate-800'} mb-1">$${b.bundle_total_usd}</div>
        `}
        
        <div class="text-[10px] text-slate-400 font-medium mb-3 border-b border-slate-100 pb-3">
          <div class="flex justify-between mb-1"><span>${lang==='en'?'Base fare':'Baz uçuş (Tüm yolcular)'}:</span> <span class="font-bold">$${b.fare_family_total_usd}</span></div>
          <div class="flex justify-between"><span>${lang==='en'?'Extras total':'Ekstra hizmetler'}:</span> <span class="font-bold">$${b.extras_total_usd}</span></div>
        </div>
        
        <div class="flex-1 space-y-2.5 mb-5 text-[11px]">
          ${b.included.map(inc => `<div class="flex items-start gap-2"><span class="text-emerald-500 mt-0.5">✓</span><span class="text-slate-600 font-medium">${lang==='en'?inc.name_en:inc.name_tr}</span></div>`).join('')}
          ${b.extras.map(ext => `<div class="flex items-start gap-2"><span class="text-[var(--accent-dark)] mt-0.5 font-black">+</span><span class="text-slate-700 font-bold">${lang==='en'?ext.name_en:ext.name_tr}</span></div>`).join('')}
        </div>
        
        <button class="w-full mt-auto ${idx === 1 ? 'btn-primary text-white' : 'bg-slate-100 hover:bg-slate-200 text-slate-700'} font-bold py-2.5 rounded-lg text-xs transition"
          onclick="buyBundle(${b.availability_id}, '${fl.flight_number}', '${b.fare_class}', '${fl.date}', '${fl.origin}-${fl.destination}', ${pax.adults}, ${pax.children}, ${pax.babies})">
          ${lang==='en'?'Select & Book':'Seç ve Satın Al'}
        </button>
      </div>
    `).join('')}
    </div>`;
  return wrap;
}

window.buyBundle = (fid, flight, cls, date, route, a, c, b) => {
  let msg;
  if (lang === 'en') {
    const paxStr = `${a} adult` + (c>0?`, ${c} child`:'') + (b>0?`, ${b} infant`:'');
    msg = `I want to book the "${cls}" fare (fare #${fid}) on flight ${flight} which is part of the bundle I selected. Date ${date}, ${route}, ${paxStr}. Please prepare the purchase summary.`;
  } else {
    const paxStr = `${a} yetişkin` + (c>0?`, ${c} çocuk`:'') + (b>0?`, ${b} bebek`:'');
    msg = `Seçtiğim paketteki ${flight} uçuşu, "${cls}" tarifesini (fare #${fid}) satın almak istiyorum. Tarih ${date}, ${route}, ${paxStr}. Lütfen satın alma özeti hazırla.`;
  }
  send(msg);
};

async function send(text){
  userBubble(text); const bubble=botBubble();
  try { 
    const r=await fetch('/chat',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({message:text, source, lang})}); 
    const data=await r.json(); 
    const chips=toolChips(data.tool_trace); 
    if (chips) messages.insertBefore(chips,bubble); 
    bubble.innerHTML=renderMarkdown(data.reply||'(—)');

    // Render bundle cards if build_dynamic_bundles was called
    const bundleCards = renderBundleCards(data.tool_trace);
    if (bundleCards) {
      // Insert after the bubble
      bubble.parentNode.insertBefore(bundleCards, bubble.nextSibling);
    }
  }
  catch(err){ bubble.textContent=(lang==='en'?'Connection error: ':'Bağlantı hatası: ')+err; }
  scroll();
  if (typeof loadStats === 'function') loadStats();  // Case paneli logunu tazele
}
document.getElementById('chatForm').addEventListener('submit', (e)=>{ e.preventDefault(); const text=input.value.trim(); if(!text) return; input.value=''; send(text); });
document.querySelectorAll('.sug').forEach(b => b.onclick = () => { panel.classList.remove('translate-x-full'); send(b.textContent.trim()); });

document.querySelectorAll('.buy-btn').forEach(b => b.onclick = () => {
  const d = b.dataset;
  panel.classList.remove('translate-x-full');
  let msg;
  if (lang === 'en') {
    const pax = `${d.a} adult` + (d.c>0?`, ${d.c} child`:'') + (d.b>0?`, ${d.b} infant`:'');
    msg = `I want to book the "${d.cls}" fare (fare #${d.fid}) on flight ${d.flight}. Date ${d.date}, ${d.route}, ${pax}. Please prepare the purchase summary.`;
  } else {
    const pax = `${d.a} yetişkin` + (d.c>0?`, ${d.c} çocuk`:'') + (d.b>0?`, ${d.b} bebek`:'');
    msg = `${d.flight} uçuşunda "${d.cls}" tarifesini (fare #${d.fid}) satın almak istiyorum. Tarih ${d.date}, ${d.route}, ${pax}. Lütfen satın alma özeti hazırla.`;
  }
  send(msg);
});

// ===== CASE PANEL: live statistics + tool call log =====
const TOOL_TR = {
  list_airports:'Havalimanları', search_flights:'Uçuş arama', quote_purchase:'Satın alma özeti',
  commit_purchase:'Satın alma', search_thy_live:'THY canlı MCP', build_dynamic_bundles:'AI paketleme'
};
function row(label, value, extra){
  return `<div class="flex justify-between items-center py-1.5 border-b border-slate-100 last:border-0">
    <span class="text-slate-400 font-medium">${label}</span>
    <span class="font-bold ${extra||''}">${value}</span></div>`;
}
async function loadStats(){
  let d; try { d = await (await fetch('/stats')).json(); } catch(e){ return; }
  const inv = d.inventory, ag = d.agent, mcp = d.thy_mcp, pr = d.pricing_rules, ob = d.observability;
  const fmt = n => (n||0).toLocaleString('tr-TR');

  const setTxt = (id,v) => { const el=document.getElementById(id); if(el) el.textContent=v; };
  setTxt('kpiFlights', fmt(inv.flights));
  setTxt('kpiFares', fmt(inv.fares));
  setTxt('kpiTools', ag.tools.length);
  setTxt('kpiPnrs', fmt(inv.pnrs));
  setTxt('kpiProvider', `${ag.provider} · ${ag.model}`);

  const sys = document.getElementById('sysStatus');
  if (sys) sys.innerHTML =
    row(t('cpProvider'), ag.provider) +
    row(t('cpModel'), `<code class="text-[11px]">${ag.model}</code>`) +
    row(t('cpToolCount'), ag.tools.length) +
    row('THY MCP', mcp.authenticated ? `<span class="text-emerald-600">● ${t('cpConnected')}</span>` : `<span class="text-amber-600">○ ${t('cpNoAuth')}</span>`) +
    row(t('cpAirportFlight'), `${inv.airports} / ${fmt(inv.flights)}`) +
    row(t('cpSeatsAvail'), fmt(inv.seats)) +
    row(t('cpTicketsSold'), `${fmt(inv.tickets)} <span class="text-slate-400 font-medium">(${inv.pnrs} PNR)</span>`) +
    row(t('cpPriceRange'), `$${inv.min_fare} – $${inv.max_fare}`);

  const rules = document.getElementById('priceRules');
  if (rules) rules.innerHTML =
    row(t('cpAdult'), '%100') +
    row(t('cpChild'), `%${pr.child_ratio*100}`) +
    row(t('cpInfant'), `%${pr.infant_ratio*100}`) +
    row(t('cpTax'), `$${pr.tax_per_pax} <span class="text-slate-400 font-medium">· ${t('cpTaxNote')}</span>`) +
    row(t('cpRtFactor'), `×${pr.round_trip_factor}`) +
    row(t('cpDemand')+' (≤2)', `×${pr.demand_multipliers['<=2g']}`, 'text-amber-600') +
    row(t('cpDemand')+' (≤7)', `×${pr.demand_multipliers['<=7g']}`) +
    row(t('cpDemand')+' (>14)', `×${pr.demand_multipliers['>14g']}`);

  const ragBadge = document.getElementById('ragBadge');
  if (ragBadge && d.rag) {
    const ok = (d.rag.indexed || 0) > 0;
    ragBadge.textContent = ok ? `RAG · ${d.rag.indexed} ${t('cpDocs')}` : 'RAG · —';
    ragBadge.className = 'text-[10px] font-black px-2 py-0.5 rounded-full ' +
      (ok ? 'bg-emerald-50 text-emerald-700 ring-1 ring-emerald-200' : 'bg-slate-100 text-slate-500');
    ragBadge.title = ok ? `${d.rag.store} · ${d.rag.sources} ${t('cpSourceDocs')}` : '';
  }

  const sum = document.getElementById('logSummary');
  if (sum) sum.textContent = ob.total_calls
    ? `${ob.total_calls} ${t('cpCalls')} · ${ob.success} ${t('cpSuccess')} · ${t('cpAvg')} ${ob.avg_ms} ms` : '—';

  const log = document.getElementById('toolLog');
  if (log){
    if (!ob.recent.length){
      log.innerHTML = '<div class="text-slate-400 py-3 text-center">Henüz tool çağrısı yok. Wingo\'ya bir soru sorun.</div>';
    } else {
      log.innerHTML = `<div class="overflow-x-auto"><table class="w-full text-left">
        <thead><tr class="text-[10px] font-black text-slate-400 tracking-wider">
          <th class="pb-2">${t('cpTime')}</th><th class="pb-2">${t('cpTool')}</th><th class="pb-2">${t('cpStatus')}</th><th class="pb-2">${t('cpDur')}</th><th class="pb-2">${t('cpInput')}</th>
        </tr></thead><tbody>` +
        ob.recent.map(c => `<tr class="border-t border-slate-100">
          <td class="py-2 text-slate-400 font-mono text-[11px]">${c.ts}</td>
          <td class="py-2 font-bold">${TOOL_TR[c.tool]||c.tool}</td>
          <td class="py-2">${c.ok
            ? '<span class="text-[10px] font-bold bg-emerald-50 text-emerald-700 px-2 py-0.5 rounded-full">'+t('cpOk')+'</span>'
            : '<span class="text-[10px] font-bold bg-rose-50 text-rose-600 px-2 py-0.5 rounded-full">'+t('cpFail')+'</span>'}</td>
          <td class="py-2 font-mono text-[11px] ${c.ms>2000?'text-amber-600 font-bold':'text-slate-500'}">${c.ms} ms</td>
          <td class="py-2 text-slate-400 font-mono text-[10px] truncate max-w-[220px]">${JSON.stringify(c.input)}</td>
        </tr>`).join('') + '</tbody></table></div>';
    }
  }
}
// ===== VOICE INPUT (Speech-to-Text) =====
(function initSpeech(){
  const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
  const micBtn = document.getElementById('micBtn');
  const status = document.getElementById('micStatus');
  const statusText = document.getElementById('micStatusText');
  const preview = document.getElementById('micPreview');
  if (!micBtn) return;
  const canRecord = !!(navigator.mediaDevices && window.MediaRecorder);
  if (!SR && !canRecord) { micBtn.remove(); return; }   // hicbir yol yoksa butonu gosterme

  micBtn.classList.remove('hidden');
  micBtn.classList.add('inline-flex');

  const T = {
    tr: { listening:'Dinliyorum…',
          denied:'Mikrofon izni yok → adres çubuğundaki 🔒 ikonu · Mikrofon: İzin ver. Sonra: Sistem Ayarları › Gizlilik › Mikrofon › tarayıcı açık olmalı.',
          nospeech:'Ses algılanmadı, tekrar deneyin', error:'Ses tanıma hatası',
          insecure:'Sesli giriş yalnızca localhost veya https üzerinde çalışır',
          title:'Sesli mesaj (konuşarak yaz)' },
    en: { listening:'Listening…',
          denied:'No mic permission → click 🔒 in the address bar · Microphone: Allow. Then: System Settings › Privacy › Microphone › enable your browser.',
          nospeech:'No speech detected, try again', error:'Speech recognition error',
          insecure:'Voice input requires localhost or https',
          title:'Voice message (speak to type)' }
  };
  const tt = () => T[lang] || T.tr;

  let rec = null, listening = false, finalText = '';

  function setListening(on){
    listening = on;
    micBtn.classList.toggle('listening', on);
    status.classList.toggle('on', on);
    // Set colours inline with !important to override Tailwind CDN utilities
    if (on) {
      const accent = getComputedStyle(document.documentElement)
        .getPropertyValue('--accent-dark').trim() || '#C90019';
      micBtn.style.setProperty('background-color', accent, 'important');
      micBtn.style.setProperty('color', '#ffffff', 'important');
    } else {
      micBtn.style.removeProperty('background-color');
      micBtn.style.removeProperty('color');
    }
    micBtn.querySelector('use').setAttribute('href', on ? '#i-mic-off' : '#i-mic');
    micBtn.title = on ? tt().listening : tt().title;
    if (!on) preview.textContent = '';
  }

  function flash(msg, ms){
    statusText.textContent = msg;
    statusText.style.whiteSpace = 'normal';
    preview.textContent = '';
    status.classList.add('on');
    clearTimeout(flash._t);
    flash._t = setTimeout(() => {
      if (!listening) status.classList.remove('on');
      statusText.textContent = tt().listening;
    }, ms || 2600);
  }

  // Fix brand/code names. The Turkish speech model often mangles English brand
  // sik yanlis yaziyor ("ExtraFly" -> "Ekstra play"). Olculen gercek varyantlar:
  //   ExtraFly  -> ekstra play / extra flight / exterfly / ekstra fly / ekstra sıla
  //   PrimeFly  -> sılai / prime flight / prayim flay
  //   EcoFly    -> john flai / eko fly / ego fly
  const FLY = '(?:fl(?:y|i|ay|ai|ight|üy)|play|pilav|sıla|sila)';
  function fixTerms(s){
    if (!s) return s;
    return s
      // ExtraFly ve yakin varyantlari
      .replace(new RegExp('\\\\b(?:e|i)?[kx]s?tra?[\\\\s-]*' + FLY + '\\\\b', 'gi'), 'ExtraFly')
      .replace(/\bex(?:ter|tir|tra)[\s-]*fl(?:y|i|ay|ai)\b/gi, 'ExtraFly')
      .replace(/\bekstra[\s-]*(?:play|sıla|sila|pilav)\b/gi, 'ExtraFly')
      // PrimeFly
      .replace(new RegExp('\\\\bpr?a?[iy]?m[ei]?[\\\\s-]*' + FLY + '\\\\b', 'gi'), 'PrimeFly')
      .replace(/\bsılai\b|\bsilai\b/gi, 'PrimeFly')
      // EcoFly
      .replace(new RegExp('\\\\b(?:e[kcgğ]o|eko|ego|john)[\\\\s-]*' + FLY + '\\\\b', 'gi'), 'EcoFly')
      // FlexFly
      .replace(new RegExp('\\\\bfle[kx]s?[\\\\s-]*' + FLY + '\\\\b', 'gi'), 'FlexFly')
      // Business paketleri
      .replace(new RegExp('\\\\bbusiness[\\\\s-]*' + FLY + '\\\\b', 'gi'), 'BusinessFly')
      .replace(/\bbusiness[\s-]*pra?[iy]?me?\b/gi, 'BusinessPrime')
      // Kodlar
      .replace(/\bp\.?\s?n\.?\s?r\.?\b/gi, 'PNR')
      .replace(/\bmayls?[\s&]*(?:and|end)?[\s&]*smayls?\b/gi, 'Miles&Smiles');
  }

  async function start(){
    // Outside a secure context (http + IP) the browser always denies the microphone
    if (!window.isSecureContext) { flash(tt().insecure, 6000); return; }
    // Request permission explicitly so the browser prompt appears and errors are diagnosable
    if (navigator.mediaDevices?.getUserMedia) {
      try {
        const s = await navigator.mediaDevices.getUserMedia({ audio: true });
        s.getTracks().forEach(t => t.stop());   // izni aldik, akisi hemen kapat
      } catch (err) {
        flash(tt().denied, 9000);
        return;
      }
    }
    rec = new SR();
    rec.lang = (lang === 'en') ? 'en-US' : 'tr-TR';
    rec.interimResults = true;      // konusurken canli onizleme
    rec.continuous = true;          // Susunca hizli kesilmesin diye surekli dinleme
    rec.maxAlternatives = 1;
    finalText = '';
    statusText.textContent = tt().listening;

    rec.onstart = () => setListening(true);
    rec.onresult = (e) => {
      let interim = '';
      for (let i = e.resultIndex; i < e.results.length; i++) {
        const txt = e.results[i][0].transcript;
        if (e.results[i].isFinal) finalText += txt; else interim += txt;
      }
      preview.textContent = fixTerms(interim);
      if (finalText) {
        // Append to any existing text instead of overwriting
        const base = input.value.trim();
        input.value = (base ? base + ' ' : '') + fixTerms(finalText).trim();
        finalText = '';
        input.focus();
      }
    };
    rec.onerror = (e) => {
      if (e.error === 'not-allowed' || e.error === 'service-not-allowed') flash(tt().denied, 9000);
      else if (e.error === 'no-speech') flash(tt().nospeech);
      else if (e.error !== 'aborted') flash(tt().error + ': ' + e.error, 4000);
    };
    rec.onend = () => { setListening(false); rec = null; };

    try { rec.start(); } catch(_) { setListening(false); }
  }

  function stop(){ if (rec) { try { rec.stop(); } catch(_){} } setListening(false); }

  micBtn.addEventListener('click', () => {
    listening ? stop() : start();
  });
  // Stop listening when the panel is closed
  document.getElementById('chatClose')?.addEventListener('click', stop);
  micBtn.title = tt().title;
})();


// ===== Popular routes (priced from the live inventory) =====
async function loadPopularRoutes(){
  const box = document.getElementById('popularRoutes');
  if (!box) return;
  let data;
  try { data = await (await fetch('/routes/popular')).json(); } catch(e){ return; }
  const routes = data.routes || [];
  if (!routes.length) { box.innerHTML = ''; return; }
  box.innerHTML = routes.map(r => `
    <button type="button" class="route-card group text-left rounded-2xl overflow-hidden ring-1 ring-slate-200/80 bg-white hover:ring-[var(--accent)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg"
            data-o="${r.origin}" data-d="${r.destination}" data-date="${r.first_date}">
      <div class="px-4 pt-4 pb-3 flex items-start justify-between gap-2">
        <div class="text-[11px] font-black tracking-wide bg-slate-100 text-slate-600 px-2 py-1 rounded-md">${r.origin} → ${r.destination}</div>
        <div class="text-right leading-none">
          <div class="text-[10px] text-slate-400 font-bold">${t('prFrom')}</div>
          <div class="text-[19px] font-black acc-text">$${r.from_price}</div>
        </div>
      </div>
      <div class="px-4 pb-4">
        <div class="text-[13px] font-bold truncate">${r.origin_name.replace(' Airport','')} — ${r.dest_name.replace(' Airport','')}</div>
        <div class="text-[11px] text-slate-400 font-medium mt-1 inline-flex items-center gap-1.5">
          <svg class="ic" style="width:.85em;height:.85em"><use href="#i-clock"/></svg> ${r.first_date}
        </div>
      </div>
      <div class="h-1 w-0 group-hover:w-full transition-all duration-300" style="background:var(--accent)"></div>
    </button>`).join('');

  // Clicking a card fills the search form and submits it
  box.querySelectorAll('.route-card').forEach(c => c.onclick = () => {
    const f = document.querySelector('form[action="/search"]');
    if (!f) return;
    f.querySelector('[name=origin]').value = c.dataset.o;
    f.querySelector('[name=destination]').value = c.dataset.d;
    f.querySelector('[name=date]').value = c.dataset.date;
    f.submit();
  });
}
loadPopularRoutes();

// ===== Case solution: live verification + question cards =====
async function loadCaseSolution(){
  let d; try { d = await (await fetch('/case/solution')).json(); } catch(e){ return; }
  const v = d.verified;

  const card = (label, cls, base, claimed, engine, match) => `
    <div class="rounded-xl ring-1 ${match?'ring-emerald-200 bg-emerald-50/40':'ring-rose-200 bg-rose-50/40'} p-3.5">
      <div class="flex items-center justify-between mb-1.5">
        <span class="text-[11px] font-black text-slate-500 tracking-wide">${label}</span>
        <span class="text-[9px] font-black px-2 py-0.5 rounded-full ${match?'bg-emerald-100 text-emerald-700':'bg-rose-100 text-rose-700'}">
          ${match?t('cpVerified'):t('cpMismatch')}
        </span>
      </div>
      <div class="text-[22px] font-black leading-none">$${engine.toLocaleString('tr-TR')}</div>
      <div class="text-[11px] text-slate-400 font-medium mt-1">${cls} ${t('cpClass')} $${base} · PDF: $${claimed.toLocaleString('tr-TR')}</div>
    </div>`;

  document.getElementById('caseVerify').innerHTML =
    card(t('cpOptA'), v.option_a.class, v.option_a.base, v.option_a.claimed, v.option_a.engine, v.option_a.match) +
    card(t('cpOptB'), v.option_b.class, v.option_b.base, v.option_b.claimed, v.option_b.engine, v.option_b.match) +
    `<div class="rounded-xl ring-1 ring-slate-200 p-3.5 flex flex-col justify-center">
       <div class="text-[11px] font-black text-slate-500 tracking-wide mb-1.5">${t('cpSaving')}</div>
       <div class="text-[22px] font-black leading-none acc-text">$${v.saving.toLocaleString('tr-TR')}</div>
       <div class="text-[11px] text-slate-400 font-medium mt-1">${t('cpSavingSub')}</div>
     </div>`;

  document.getElementById('caseAnswers').innerHTML = d.answers.map((a,i) => `
    <details class="group rounded-xl ring-1 ring-slate-200 overflow-hidden" ${i===0?'open':''}>
      <summary class="flex items-center gap-3 px-4 py-3 cursor-pointer hover:bg-slate-50 transition list-none">
        <span class="w-7 h-7 rounded-lg acc-50 acc-text text-[11px] font-black flex items-center justify-center shrink-0">${a.q}</span>
        <span class="font-bold text-[13px] shrink-0">${a.title}</span>
        <span class="text-[12px] text-slate-400 font-medium truncate flex-1">${a.verdict}</span>
        <span class="text-slate-300 text-[11px] group-open:rotate-180 transition-transform">▼</span>
      </summary>
      <div class="px-4 pb-4 pt-1 border-t border-slate-100">
        <p class="text-[12px] text-slate-500 leading-relaxed font-medium mb-3">${a.detail}</p>
        <div class="grid sm:grid-cols-2 gap-x-6 gap-y-1">
          ${a.metrics.map(m => `<div class="flex justify-between text-[12px] py-1 border-b border-slate-50">
            <span class="text-slate-400 font-medium">${m[0]}</span><span class="font-bold">${m[1]}</span></div>`).join('')}
        </div>
      </div>
    </details>`).join('');
}
loadCaseSolution();

// ===== Airport Autocomplete Dropdown & Quick Search Handler =====
const ALL_AIRPORTS = JSON.parse(document.getElementById("airports-data")?.textContent || "[]");

function openPopup(panel, trigger) {
  if (!panel) return;
  panel.classList.add('is-open');
  if (trigger) trigger.setAttribute('aria-expanded', 'true');
}

function closePopup(panel, trigger) {
  if (!panel) return;
  panel.classList.remove('is-open');
  if (trigger) trigger.setAttribute('aria-expanded', 'false');
}

function setupAutocomplete(inputId, hiddenId, dropdownId) {
  const input = document.getElementById(inputId);
  const hidden = document.getElementById(hiddenId);
  const dropdown = document.getElementById(dropdownId);
  if (!input || !hidden || !dropdown) return;

  const currentCode = hidden.value;
  const found = ALL_AIRPORTS.find(a => a.code === currentCode);
  if (found) input.value = `${found.code} — ${found.name}`;

  input.addEventListener('focus', () => { input.select(); renderDropdown('', dropdown, input, hidden); });
  input.addEventListener('input', (e) => renderDropdown(e.target.value, dropdown, input, hidden));

  // Keyboard navigation: Up/Down to move, Enter to pick, Escape to close
  input.addEventListener('keydown', (e) => {
    const items = [...dropdown.querySelectorAll('[data-ac-item]')];
    if (!items.length || !dropdown.classList.contains('is-open')) {
      if (e.key === 'ArrowDown') renderDropdown(input.value, dropdown, input, hidden);
      return;
    }
    let idx = items.findIndex(el => el.dataset.active === '1');

    if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
      e.preventDefault();
      idx = e.key === 'ArrowDown'
        ? (idx + 1) % items.length
        : (idx <= 0 ? items.length - 1 : idx - 1);
      items.forEach(el => { el.dataset.active = '0'; el.classList.remove('ac-active'); });
      items[idx].dataset.active = '1';
      items[idx].classList.add('ac-active');
      items[idx].scrollIntoView({ block: 'nearest' });
    } else if (e.key === 'Enter') {
      if (idx >= 0) { e.preventDefault(); items[idx].click(); }
    } else if (e.key === 'Escape') {
      closePopup(dropdown);
      input.blur();
    }
  });

  document.addEventListener('click', (e) => {
    if (!input.contains(e.target) && !dropdown.contains(e.target)) {
      closePopup(dropdown);
    }
  });
}

function renderDropdown(query, dropdown, input, hidden) {
  const q = (query || '').toLowerCase().trim();
  const filtered = ALL_AIRPORTS.filter(a =>
    a.code.toLowerCase().includes(q) || a.name.toLowerCase().includes(q)
  );

  if (filtered.length === 0) {
    dropdown.innerHTML = `<div class="p-3 text-xs text-slate-400 text-center font-medium">Havalimanı bulunamadı</div>`;
    openPopup(dropdown);
    return;
  }

  dropdown.innerHTML = `<div class="airport-list">${filtered.map(a => `
    <div data-ac-item data-active="0" onclick="selectAirport('${a.code}', '${a.name.replace(/'/g, "\\'")}', '${input.id}', '${hidden.id}', '${dropdown.id}')" class="airport-row px-3.5 py-2.5 cursor-pointer flex items-center justify-between transition group">
      <div class="flex items-center gap-2.5 min-w-0">
        <span class="px-2 py-0.5 bg-slate-100 rounded text-xs font-bold text-slate-700 transition-colors">${a.code}</span>
        <span class="text-xs font-semibold text-slate-800 truncate">${a.name}</span>
      </div>
      <span class="text-[10px] font-bold text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity shrink-0 ml-4">Seç ➔</span>
    </div>
  `).join('')}</div>`;
  openPopup(dropdown);
}

function selectAirport(code, name, inputId, hiddenId, dropdownId) {
  document.getElementById(inputId).value = `${code} — ${name}`;
  document.getElementById(hiddenId).value = code;
  closePopup(document.getElementById(dropdownId));
}

function swapAirports() {
  const oInput = document.getElementById('originInput');
  const oHidden = document.getElementById('originValue');
  const dInput = document.getElementById('destInput');
  const dHidden = document.getElementById('destValue');
  if (!oInput || !dInput) return;

  const tempV = oInput.value;
  const tempH = oHidden.value;

  oInput.value = dInput.value;
  oHidden.value = dHidden.value;

  dInput.value = tempV;
  dHidden.value = tempH;
}

function quickSearch(origin, dest, dateStr) {
  const foundO = ALL_AIRPORTS.find(a => a.code === origin);
  const foundD = ALL_AIRPORTS.find(a => a.code === dest);
  if (foundO) {
    document.getElementById('originInput').value = `${foundO.code} — ${foundO.name}`;
    document.getElementById('originValue').value = origin;
  }
  if (foundD) {
    document.getElementById('destInput').value = `${foundD.code} — ${foundD.name}`;
    document.getElementById('destValue').value = dest;
  }
  if (dateStr) setSelectedDate('depart', parseIsoDate(dateStr));
  const form = document.querySelector('form[action="/search"]');
  if (form) form.submit();
}

const MONTHS = {
  tr: ['Oca','Şub','Mar','Nis','May','Haz','Tem','Ağu','Eyl','Eki','Kas','Ara'],
  en: ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
};
const WEEKDAYS = {
  tr: ['Pzt','Sal','Çar','Per','Cum','Cmt','Paz'],
  en: ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'],
};
let calendarCursor = new Date();
let pickingReturn = false;
let calendarHoverDate = null;

function parseIsoDate(value) {
  if (!value) return null;
  const [y, m, d] = value.split('-').map(Number);
  if (!y || !m || !d) return null;
  return new Date(y, m - 1, d);
}
function isoDate(date) {
  if (!date) return '';
  return `${date.getFullYear()}-${String(date.getMonth()+1).padStart(2,'0')}-${String(date.getDate()).padStart(2,'0')}`;
}
function sameDay(a, b) {
  return !!a && !!b && a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate();
}
function compareDay(a, b) {
  return new Date(a.getFullYear(), a.getMonth(), a.getDate()) - new Date(b.getFullYear(), b.getMonth(), b.getDate());
}
function betweenDays(date, a, b) {
  if (!date || !a || !b) return false;
  const start = compareDay(a, b) <= 0 ? a : b;
  const end = start === a ? b : a;
  return compareDay(date, start) >= 0 && compareDay(date, end) <= 0;
}
function addDays(date, days) {
  const d = new Date(date);
  d.setDate(d.getDate() + days);
  return d;
}
function setSelectedDate(kind, date) {
  const target = document.getElementById(kind === 'return' ? 'returnDate' : 'departDate');
  if (target) target.value = isoDate(date);
  updateDatePreview();
  renderCalendar();
}
function updateDatePreview() {
  const depart = parseIsoDate(document.getElementById('departDate')?.value);
  const ret = parseIsoDate(document.getElementById('returnDate')?.value);
  const setPreview = (prefix, date) => {
    document.getElementById(`${prefix}DayPreview`).textContent = date ? String(date.getDate()).padStart(2, '0') : '';
    document.getElementById(`${prefix}MonthPreview`).textContent = date ? MONTHS[lang][date.getMonth()] : '';
  };
  setPreview('depart', depart);
  setPreview('return', ret);
  const isRoundTrip = document.getElementById('tripTypeInput')?.value === 'round_trip';
  document.getElementById('datePickerButton')?.classList.toggle('is-one-way', !isRoundTrip);
  document.getElementById('returnPreviewSegment')?.classList.toggle('opacity-40', !isRoundTrip);
  document.getElementById('datePickerHint').textContent = isRoundTrip
    ? (pickingReturn ? (lang === 'en' ? 'Choose return date' : 'Dönüş tarihini seçin') : (lang === 'en' ? 'Choose departure date' : 'Gidiş tarihini seçin'))
    : (lang === 'en' ? 'Choose departure date' : 'Gidiş tarihini seçin');
}
function renderCalendar() {
  const grid = document.getElementById('calendarGrid');
  const title = document.getElementById('calendarTitle');
  if (!grid || !title) return;
  const year = calendarCursor.getFullYear();
  const month = calendarCursor.getMonth();
  title.textContent = `${MONTHS[lang][month]} ${year}`;
  const first = new Date(year, month, 1);
  const startOffset = (first.getDay() + 6) % 7;
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const depart = parseIsoDate(document.getElementById('departDate')?.value);
  const ret = parseIsoDate(document.getElementById('returnDate')?.value);
  const isRoundTrip = document.getElementById('tripTypeInput')?.value === 'round_trip';
  const previewEnd = isRoundTrip && pickingReturn && calendarHoverDate ? calendarHoverDate : ret;
  let html = WEEKDAYS[lang].map(d => `<div class="text-[11px] text-slate-400 font-bold py-1">${d}</div>`).join('');
  for (let i = 0; i < startOffset; i++) html += '<div></div>';
  for (let day = 1; day <= daysInMonth; day++) {
    const date = new Date(year, month, day);
    const selected = sameDay(date, depart) || sameDay(date, ret);
    const inRange = isRoundTrip && depart && previewEnd && betweenDays(date, depart, previewEnd);
    const preview = isRoundTrip && pickingReturn && calendarHoverDate && sameDay(date, calendarHoverDate);
    const classes = [
      'calendar-day rounded-lg text-sm font-bold',
      selected ? 'is-selected' : 'text-slate-700',
      inRange && !selected ? 'is-in-range' : '',
      preview && !selected ? 'is-preview' : '',
    ].join(' ');
    html += `<button type="button" class="${classes}" data-cal-day="${isoDate(date)}">${day}</button>`;
  }
  grid.innerHTML = html;
  grid.onmouseover = (e) => {
    const btn = e.target.closest?.('[data-cal-day]');
    if (!btn) return;
    if (document.getElementById('tripTypeInput')?.value === 'round_trip' && parseIsoDate(document.getElementById('departDate')?.value)) {
      const nextHover = parseIsoDate(btn.dataset.calDay);
      if (!sameDay(calendarHoverDate, nextHover)) {
        calendarHoverDate = nextHover;
        renderCalendar();
      }
    }
  };
  grid.onmouseleave = () => {
    if (calendarHoverDate) {
      calendarHoverDate = null;
      renderCalendar();
    }
  };
  grid.querySelectorAll('[data-cal-day]').forEach(btn => {
    btn.addEventListener('click', () => {
      const picked = parseIsoDate(btn.dataset.calDay);
      const tripType = document.getElementById('tripTypeInput')?.value || 'one_way';
      if (tripType === 'round_trip' && pickingReturn) {
        setSelectedDate('return', picked);
        pickingReturn = false;
        calendarHoverDate = null;
        closePopup(document.getElementById('datePickerPopup'), document.getElementById('datePickerButton'));
      } else {
        setSelectedDate('depart', picked);
        if (tripType === 'round_trip') {
          pickingReturn = true;
          document.getElementById('returnDate').value = '';
          calendarHoverDate = null;
          updateDatePreview();
          renderCalendar();
        } else {
          closePopup(document.getElementById('datePickerPopup'), document.getElementById('datePickerButton'));
        }
      }
      updateDatePreview();
    });
  });
  updateDatePreview();
}
function setTripType(value) {
  const input = document.getElementById('tripTypeInput');
  if (input) input.value = value;
  document.querySelectorAll('[data-trip-option]').forEach(btn => {
    btn.setAttribute('aria-checked', btn.dataset.tripOption === value ? 'true' : 'false');
  });
  if (value === 'round_trip') {
    pickingReturn = !!parseIsoDate(document.getElementById('departDate')?.value) && !parseIsoDate(document.getElementById('returnDate')?.value);
  } else {
    document.getElementById('returnDate').value = '';
    pickingReturn = false;
    calendarHoverDate = null;
  }
  updateDatePreview();
  renderCalendar();
}
document.querySelectorAll('[data-trip-option]').forEach(btn => {
  btn.addEventListener('click', () => setTripType(btn.dataset.tripOption));
});
document.getElementById('datePickerButton')?.addEventListener('click', () => {
  const popup = document.getElementById('datePickerPopup');
  const trigger = document.getElementById('datePickerButton');
  popup.classList.contains('is-open') ? closePopup(popup, trigger) : openPopup(popup, trigger);
  renderCalendar();
});
document.getElementById('calPrev')?.addEventListener('click', () => {
  calendarCursor = new Date(calendarCursor.getFullYear(), calendarCursor.getMonth() - 1, 1);
  renderCalendar();
});
document.getElementById('calNext')?.addEventListener('click', () => {
  calendarCursor = new Date(calendarCursor.getFullYear(), calendarCursor.getMonth() + 1, 1);
  renderCalendar();
});
document.addEventListener('click', (e) => {
  const popup = document.getElementById('datePickerPopup');
  const trigger = document.getElementById('datePickerButton');
  const path = e.composedPath ? e.composedPath() : [];
  if (popup && trigger && !path.includes(popup) && !path.includes(trigger)) closePopup(popup, trigger);
});

function updatePax() {
  const vals = {
    adults: Math.max(1, Number(document.getElementById('adultsInput')?.value || 1)),
    children: Math.max(0, Number(document.getElementById('childrenInput')?.value || 0)),
    babies: Math.max(0, Number(document.getElementById('babiesInput')?.value || 0)),
  };
  Object.entries(vals).forEach(([key, value]) => {
    document.getElementById(`${key}Input`).value = value;
    document.getElementById(`${key}Count`).textContent = value;
  });
  const total = vals.adults + vals.children + vals.babies;
  document.getElementById('paxButtonText').textContent = `${total} ${total === 1 ? t('paxSingular') : t('paxPlural')}`;
}
document.getElementById('paxButton')?.addEventListener('click', () => {
  const popup = document.getElementById('paxPopup');
  const trigger = document.getElementById('paxButton');
  popup.classList.contains('is-open') ? closePopup(popup, trigger) : openPopup(popup, trigger);
});
document.querySelectorAll('[data-pax-row]').forEach(row => {
  row.querySelector('.pax-minus')?.addEventListener('click', () => {
    const key = row.dataset.paxRow;
    const input = document.getElementById(`${key}Input`);
    const min = key === 'adults' ? 1 : 0;
    input.value = Math.max(min, Number(input.value || min) - 1);
    updatePax();
  });
  row.querySelector('.pax-plus')?.addEventListener('click', () => {
    const key = row.dataset.paxRow;
    const input = document.getElementById(`${key}Input`);
    input.value = Number(input.value || 0) + 1;
    updatePax();
  });
});
document.addEventListener('click', (e) => {
  const popup = document.getElementById('paxPopup');
  const trigger = document.getElementById('paxButton');
  if (popup && trigger && !popup.contains(e.target) && !trigger.contains(e.target)) closePopup(popup, trigger);
});
setTripType(document.getElementById('tripTypeInput')?.value || 'one_way');
updatePax();
window.formPickersReady = true;

// Search form: show a loading state so the click clearly registers
(function initSearchLoading(){
  const form = document.querySelector('form[action="/search"]');
  if (!form) return;
  form.addEventListener('submit', () => {
    const btn = form.querySelector('button[type=submit], button:not([type])');
    if (!btn || btn.dataset.loading === '1') return;
    btn.dataset.loading = '1';
    btn.disabled = true;
    btn.style.opacity = '0.75';
    btn.style.cursor = 'wait';
    btn.innerHTML = `<span class="inline-flex items-center gap-2">
        <span class="inline-block w-3.5 h-3.5 border-2 border-white/40 border-t-white rounded-full animate-spin"></span>
        ${t('searching')}
      </span>`;
  });
})();

setupAutocomplete('originInput', 'originValue', 'originDropdown');
setupAutocomplete('destInput', 'destValue', 'destDropdown');

document.getElementById('refreshStats')?.addEventListener('click', loadStats);
document.getElementById('runScenario')?.addEventListener('click', () => {
  const d = new Date(); d.setDate(d.getDate()+14);
  const iso = d.toISOString().slice(0,10);
  openChat(false);
  send(`${iso} tarihinde IST'ten Londra'ya (LHR) 2 yetişkin, 1 çocuk ve 1 bebek için gidiş-dönüş, sadece değiştirilebilir bilet arayıp aile toplam maliyetini vergilerle birlikte hesapla. Riskli (az koltuklu) fareleri de belirt.`);
});
loadStats();
