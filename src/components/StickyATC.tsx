import { useEffect, useState } from "react";

const StickyATC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(!entry.isIntersecting),
      { threshold: 0 }
    );
    const hero = document.querySelector("#heroSection");
    if (hero) observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-[100] bg-card border-t border-primary/[0.08] py-3 px-5 flex items-center justify-center gap-4 shadow-[0_-4px_24px_rgba(0,0,0,0.08)] transition-transform duration-400 ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <span className="text-lg font-extrabold text-primary whitespace-nowrap">₺1.400</span>
      <button
        onClick={() => alert("Sepete eklendi!")}
        className="flex-1 max-w-[320px] flex items-center justify-center gap-2 bg-primary text-primary-foreground text-sm font-bold py-3.5 px-6 rounded-full min-h-[48px] transition-all hover:bg-primary-medium relative overflow-hidden"
      >
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="9" cy="21" r="1" /><circle cx="20" cy="21" r="1" /><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
        </svg>
        Sepete ekle
      </button>
    </div>
  );
};

export default StickyATC;
