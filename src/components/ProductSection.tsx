import { useRef, useState, useCallback } from "react";

const ProductSection = () => {
  const galleryRef = useRef<HTMLDivElement>(null);
  const [activeSlide, setActiveSlide] = useState(0);

  const handleScroll = useCallback(() => {
    if (!galleryRef.current) return;
    const idx = Math.round(galleryRef.current.scrollLeft / galleryRef.current.offsetWidth);
    setActiveSlide(idx);
  }, []);

  return (
    <section className="py-14" id="k5Product">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-10 items-start">
          {/* Gallery */}
          <div className="k5-reveal relative rounded-[20px] overflow-hidden bg-card shadow-md">
            <div
              ref={galleryRef}
              className="flex overflow-x-auto scroll-snap-x mandatory hide-scrollbar"
              onScroll={handleScroll}
            >
              {["📖", "🌱", "✅"].map((emoji, i) => (
                <div
                  key={i}
                  className={`flex-none w-full snap-start aspect-square flex items-center justify-center ${
                    i === 1 ? "bg-secondary" : i === 2 ? "bg-cream-2" : "bg-plum-pale"
                  }`}
                >
                  <span className="text-[64px] opacity-30">{emoji}</span>
                </div>
              ))}
            </div>
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
              {[0, 1, 2].map((i) => (
                <div
                  key={i}
                  className={`w-2 h-2 rounded-full bg-primary transition-opacity ${activeSlide === i ? "opacity-100" : "opacity-25"}`}
                />
              ))}
            </div>
          </div>

          {/* Info */}
          <div className="k5-reveal k5-reveal-d2">
            <div className="inline-flex items-center gap-1.5 bg-secondary text-primary text-xs font-bold py-1.5 px-3.5 rounded-full mb-4">
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
              90+ kişi bu ürünü satın aldı
            </div>
            <h2 className="text-2xl font-extrabold text-foreground mb-2 leading-tight">
              .ki Balance — PMS Destek
            </h2>
            <p className="text-sm text-muted-foreground mb-5 leading-relaxed">
              Döngüsel dengeniz için bilimsel formülasyon. Vitex, Magnezyum, B6 ve Çinko ile her ayı rahat geçirin.
            </p>
            <div className="flex items-center gap-2 mb-5">
              <span className="text-base text-star tracking-wide">★★★★★</span>
              <span className="text-[13px] text-muted-foreground font-medium">5.0 (90+ yorum)</span>
            </div>
            <div className="flex items-baseline gap-2.5 mb-2">
              <span className="text-[32px] font-extrabold text-primary">₺1.400</span>
              <span className="text-[13px] text-muted-foreground">/ 30 günlük kullanım</span>
            </div>
            <div className="text-[13px] text-amber font-semibold mb-5 flex items-center gap-1.5">
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
              </svg>
              Stokta sadece 12 adet kaldı
            </div>
            <button
              onClick={() => alert("Sepete eklendi!")}
              className="flex items-center justify-center gap-2.5 w-full bg-primary text-primary-foreground text-base font-bold py-4 px-8 rounded-full min-h-[52px] transition-all hover:bg-primary-medium hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(45,27,105,0.3)] relative overflow-hidden mb-5"
            >
              <svg className="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="9" cy="21" r="1" /><circle cx="20" cy="21" r="1" /><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
              </svg>
              Sepete ekle — ₺1.400
            </button>
            <div className="flex gap-4 flex-wrap">
              {[
                { icon: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z", label: "Güvenli ödeme" },
                { icon: "M1 3h15v13H1zM16 8h4l3 3v5h-7V8zM5.5 18.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5zM18.5 18.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z", label: "Ücretsiz kargo" },
                { icon: "M23 4v6h-6M20.49 15a9 9 0 1 1-2.12-9.36L23 10", label: "30 gün iade" },
              ].map((t) => (
                <div key={t.label} className="flex items-center gap-1.5 text-xs text-muted-foreground font-medium">
                  <svg className="w-4 h-4 text-sage" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d={t.icon} />
                  </svg>
                  {t.label}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
