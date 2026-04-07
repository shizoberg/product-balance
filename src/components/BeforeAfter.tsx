const BeforeAfter = () => (
  <section className="py-12">
    <div className="container">
      <div className="k5-reveal flex flex-col sm:flex-row rounded-2xl overflow-hidden shadow-sm">
        <div className="flex-1 p-7 flex flex-col gap-2 bg-rose-light">
          <div className="text-xs font-bold uppercase tracking-wide text-rose">Öncesi</div>
          <div className="text-sm text-foreground leading-relaxed">
            Kramp, şişkinlik, ruh hali dalgalanması, uyku bozukluğu, konsantrasyon kaybı
          </div>
        </div>
        <div className="flex items-center justify-center bg-background p-3 sm:p-2">
          <svg className="w-6 h-6 text-primary sm:rotate-0 rotate-90" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
          </svg>
        </div>
        <div className="flex-1 p-7 flex flex-col gap-2 bg-sage-light">
          <div className="text-xs font-bold uppercase tracking-wide text-sage">Sonrası</div>
          <div className="text-sm text-foreground leading-relaxed">
            Dengeli döngü, enerji, net zihin, rahat uyku, pozitif ruh hali
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default BeforeAfter;
