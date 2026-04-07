const reviews = [
  { initials: "SE", name: "Selin", info: "28 yaş, İstanbul", text: "Her adet öncesi iş toplantıları iptal ediyordum. Şimdi planlarım devam ediyor. Hayatımı geri aldım.", month: "2. ayında", delay: "" },
  { initials: "ZE", name: "Zeynep", info: "30 yaş, Ankara", text: "Ruh halim o kadar dengelendi ki partnerim bile fark etti. İlişkimiz bile daha iyi.", month: "3. ayında", delay: "k5-reveal-d1" },
  { initials: "EL", name: "Elif", info: "27 yaş, İzmir", text: "Kramp ağrılarım %80 azaldı diyebilirim. İnanılmaz bir fark. Ağrı kesiciye ihtiyacım kalmadı.", month: "1. ayında", delay: "k5-reveal-d2" },
  { initials: "ME", name: "Merve", info: "32 yaş, Bursa", text: "Uyku düzenim yerine geldi. Sabah dinlenmiş uyanıyorum. Gündüz enerjim çok arttı.", month: "2. ayında", delay: "k5-reveal-d3" },
  { initials: "CE", name: "Ceren", info: "29 yaş, Antalya", text: "Şişkinlik artık hayatımı etkilemiyor. Kıyafetlerimi rahat giyiyorum. Kendimi hafif hissediyorum.", month: "3. ayında", delay: "k5-reveal-d4" },
  { initials: "NA", name: "Naz", info: "25 yaş, İstanbul", text: "Konsantrasyonum geri geldi. İş performansım çok arttı. Toplantılarda daha net düşünüyorum.", month: "1. ayında", delay: "k5-reveal-d5" },
];

const ReviewsSection = () => (
  <section className="py-14" id="k5Reviews">
    <div className="container">
      <h2 className="k5-reveal text-center text-[28px] font-bold text-foreground mb-2">
        Kullanıcılarımız Ne Diyor?
      </h2>
      <p className="k5-reveal k5-reveal-d1 text-center text-[15px] text-muted-foreground mb-10 max-w-[520px] mx-auto">
        Doğrulanmış kullanıcılarımızdan gerçek deneyimler
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
        {reviews.map((r) => (
          <div
            key={r.initials}
            className={`k5-reveal ${r.delay} bg-card rounded-[20px] p-7 shadow-sm border border-primary/[0.06] transition-all hover:-translate-y-0.5 hover:shadow-md`}
          >
            <div className="flex items-center gap-3.5 mb-4">
              <div className="w-12 h-12 rounded-full bg-secondary border-2 border-primary flex items-center justify-center text-base font-bold text-primary flex-shrink-0">
                {r.initials}
              </div>
              <div>
                <div className="text-sm font-bold text-foreground">{r.name}</div>
                <div className="text-xs text-muted-foreground">{r.info}</div>
              </div>
            </div>
            <div className="text-sm text-star tracking-wide mb-3">★★★★★</div>
            <p className="text-[14.5px] leading-relaxed text-foreground italic mb-4">
              &ldquo;{r.text}&rdquo;
            </p>
            <div className="flex gap-2 flex-wrap">
              <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-sage bg-sage-light py-1.5 px-3 rounded-full">
                <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
                Doğrulanmış kullanıcı
              </span>
              <span className="inline-flex items-center text-[11px] font-semibold text-primary bg-secondary py-1.5 px-3 rounded-full">
                {r.month}
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="k5-reveal text-center pt-10">
        <a
          href="#k5Product"
          className="inline-flex items-center gap-2 bg-primary text-primary-foreground text-[15px] font-bold py-4 px-10 rounded-full transition-all hover:bg-primary-medium hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(45,27,105,0.3)] relative overflow-hidden"
        >
          Sende dene
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
        </a>
      </div>
    </div>
  </section>
);

export default ReviewsSection;
