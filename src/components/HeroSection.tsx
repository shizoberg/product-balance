import { useAnimatedCounter } from "@/hooks/useAnimatedCounter";

const HeroSection = () => {
  const counter = useAnimatedCounter(2400, 2000, false, "");

  return (
    <section className="relative min-h-[520px] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#1a0f40] via-primary to-primary-medium">
      <div
        className="absolute inset-0 opacity-[0.12] mix-blend-luminosity bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1200')",
        }}
      />
      <div className="relative z-[2] text-center px-5 py-16 max-w-[680px]">
        <div className="k5-reveal" ref={counter.ref}>
          <span className="text-[72px] font-extrabold leading-none tracking-[-2px] bg-gradient-to-br from-primary-foreground to-primary-foreground/70 bg-clip-text text-transparent">
            {counter.value}
          </span>
          <span className="text-[72px] font-extrabold leading-none text-primary-foreground">+</span>
        </div>
        <div className="k5-reveal k5-reveal-d1 text-base font-medium text-primary-foreground/75 mb-6 tracking-wide">
          kadın tarafından tercih ediliyor
        </div>
        <div className="k5-reveal k5-reveal-d2 text-xl text-star tracking-[3px] mb-1.5">★★★★★</div>
        <div className="k5-reveal k5-reveal-d2 text-sm text-primary-foreground/65 font-medium mb-7">
          5.0 ortalama puan
        </div>
        <p className="k5-reveal k5-reveal-d3 text-lg text-primary-foreground/[0.88] leading-relaxed mb-9">
          Gerçek kadınlar, gerçek sonuçlar.
          <br />
          Döngüsünü dengeleyenlerin hikayeleri.
        </p>
        <a
          href="#k5Reviews"
          className="k5-reveal k5-reveal-d4 inline-flex items-center gap-2 bg-primary-foreground text-primary text-[15px] font-bold py-3.5 px-9 rounded-full transition-all hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(0,0,0,0.25)] relative overflow-hidden"
        >
          Hikayeleri oku
          <svg
            className="w-[18px] h-[18px] transition-transform group-hover:translate-x-0.5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
