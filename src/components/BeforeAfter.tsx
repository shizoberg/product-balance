const BeforeAfter = () => (
  <section className="py-8">
    <div className="container">
      <div className="k5-reveal flex flex-col sm:flex-row rounded-2xl overflow-hidden shadow-sm border border-primary/[0.06]">
        <div className="flex-1 p-4 sm:p-5 flex flex-col gap-1.5 bg-secondary/50">
          <div className="text-[11px] font-bold uppercase tracking-wider text-primary/70">Öncesi</div>
          <div className="text-[13px] text-foreground/80 leading-snug">
            Kramp, şişkinlik, ruh hali dalgalanması, uyku bozukluğu
          </div>
        </div>
        <div className="flex items-center justify-center bg-card px-3 py-2 sm:py-0">
          <svg className="w-5 h-5 text-primary sm:rotate-0 rotate-90" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
          </svg>
        </div>
        <div className="flex-1 p-4 sm:p-5 flex flex-col gap-1.5 bg-plum-pale">
          <div className="text-[11px] font-bold uppercase tracking-wider text-primary">Sonrası</div>
          <div className="text-[13px] text-foreground leading-snug font-medium">
            Dengeli döngü, enerji, net zihin, rahat uyku
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default BeforeAfter;
