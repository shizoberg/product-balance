const ingredients = [
  { icon: "🌿", name: "Vitex (Hayıt)", desc: "Hormonal dengeyi destekler, PMS belirtilerini hafifletir", delay: "" },
  { icon: "🌱", name: "Magnezyum Bisglisinat", desc: "Kas gevşetici, kramp azaltıcı, uyku desteği", delay: "k5-reveal-d1" },
  { icon: "☀️", name: "B6 Vitamini", desc: "Serotonin üretimini destekler, ruh halini dengeler", delay: "k5-reveal-d2" },
  { icon: "🍋", name: "Çinko", desc: "Cilt sağlığı, bağışıklık ve hormonal denge desteği", delay: "k5-reveal-d3" },
];

const badges = ["GMP sertifikalı", "Vegan formül", "Klinik dozaj", "30 günlük kullanım"];

const IngredientsSection = () => (
  <section className="py-12">
    <div className="container">
      <h2 className="k5-reveal text-[22px] font-bold text-center mb-8 text-foreground">İçindekiler</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
        {ingredients.map((ing) => (
          <div key={ing.name} className={`k5-reveal ${ing.delay} bg-card rounded-2xl p-6 flex gap-4 items-start shadow-sm border border-primary/[0.04]`}>
            <div className="w-11 h-11 rounded-xl bg-secondary flex items-center justify-center flex-shrink-0 text-xl">
              {ing.icon}
            </div>
            <div>
              <div className="text-sm font-bold text-foreground mb-0.5">{ing.name}</div>
              <div className="text-[12.5px] text-muted-foreground leading-relaxed">{ing.desc}</div>
            </div>
          </div>
        ))}
      </div>
      <div className="k5-reveal flex gap-3 flex-wrap justify-center mt-6">
        {badges.map((b) => (
          <span key={b} className="bg-plum-pale rounded-full py-2 px-[18px] text-xs font-semibold text-primary">
            ✓ {b}
          </span>
        ))}
      </div>
    </div>
  </section>
);

export default IngredientsSection;
