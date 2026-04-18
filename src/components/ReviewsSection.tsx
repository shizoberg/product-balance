import { useState, useRef } from "react";

const reviews = [
  {
    initials: "SE",
    name: "Selin",
    info: "28 yaş, İstanbul",
    question: "Adet döneminde yaşadığım şiddetli kramplar için doğal bir çözüm var mı?",
    audioSrc: "/audio/eczaci-selin.mp3",
  },
  {
    initials: "ZE",
    name: "Zeynep",
    info: "30 yaş, Ankara",
    question: "PMS döneminde ruh halim çok değişiyor, bu normal mi ve ne yapabilirim?",
    audioSrc: "/audio/eczaci-zeynep.mp3",
  },
  {
    initials: "EL",
    name: "Elif",
    info: "27 yaş, İzmir",
    question: "Adet öncesi şişkinlik ve ödem sorunum var, bunu nasıl azaltabilirim?",
    audioSrc: "/audio/eczaci-elif.mp3",
  },
  {
    initials: "ME",
    name: "Merve",
    info: "32 yaş, Bursa",
    question: "Hormonal dengesizlik uyku düzenimi bozuyor, takviye işe yarar mı?",
    audioSrc: "/audio/eczaci-merve.mp3",
  },
  {
    initials: "CE",
    name: "Ceren",
    info: "29 yaş, Antalya",
    question: "Adet döneminde konsantrasyon kaybı yaşıyorum, bunun için ne önerirsiniz?",
    audioSrc: "/audio/eczaci-ceren.mp3",
  },
  {
    initials: "NA",
    name: "Naz",
    info: "25 yaş, İstanbul",
    question: "Doğal içerikli bir ürün gerçekten ağrı kesici kadar etkili olabilir mi?",
    audioSrc: "/audio/eczaci-naz.mp3",
  },
];

const AudioPlayer = ({ src }: { src: string }) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  const toggle = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (playing) {
      audio.pause();
    } else {
      audio.play().catch(() => {});
    }
    setPlaying(!playing);
  };

  const onTimeUpdate = () => {
    const audio = audioRef.current;
    if (!audio || !audio.duration) return;
    setProgress((audio.currentTime / audio.duration) * 100);
  };

  const onEnded = () => {
    setPlaying(false);
    setProgress(0);
  };

  return (
    <div className="flex items-center gap-3 bg-secondary/60 rounded-xl px-4 py-3 mt-4">
      <audio ref={audioRef} src={src} onTimeUpdate={onTimeUpdate} onEnded={onEnded} preload="none" />
      <button
        onClick={toggle}
        className="w-10 h-10 rounded-full bg-primary flex items-center justify-center flex-shrink-0 transition-transform hover:scale-105 active:scale-95"
        aria-label={playing ? "Duraklat" : "Oynat"}
      >
        {playing ? (
          <svg className="w-4 h-4 text-primary-foreground" viewBox="0 0 24 24" fill="currentColor">
            <rect x="6" y="4" width="4" height="16" rx="1" />
            <rect x="14" y="4" width="4" height="16" rx="1" />
          </svg>
        ) : (
          <svg className="w-4 h-4 text-primary-foreground ml-0.5" viewBox="0 0 24 24" fill="currentColor">
            <polygon points="8,5 20,12 8,19" />
          </svg>
        )}
      </button>
      <div className="flex-1">
        <div className="flex items-center gap-2 mb-1">
          <div className="flex items-center gap-1">
            <svg className="w-3.5 h-3.5 text-sage" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 6 9 17l-5-5" />
            </svg>
            <span className="text-[11px] font-semibold text-sage">Doğrulanmış Eczacı Yanıtı</span>
          </div>
        </div>
        <div className="w-full bg-border rounded-full h-1.5 overflow-hidden">
          <div
            className="h-full bg-primary rounded-full transition-all duration-200"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );
};

const ReviewCard = ({ review, delay }: { review: typeof reviews[0]; delay: string }) => (
  <div className={`k5-reveal ${delay} bg-card rounded-[20px] p-7 shadow-sm border border-primary/[0.06] transition-all hover:-translate-y-0.5 hover:shadow-md`}>
    <div className="flex items-center gap-3.5 mb-4">
      <div className="w-12 h-12 rounded-full bg-secondary border-2 border-primary flex items-center justify-center text-base font-bold text-primary flex-shrink-0">
        {review.initials}
      </div>
      <div>
        <div className="text-sm font-bold text-foreground">{review.name}</div>
        <div className="text-xs text-muted-foreground">{review.info}</div>
      </div>
    </div>
    <p className="text-[14.5px] leading-relaxed text-foreground font-medium mb-1">
      &ldquo;{review.question}&rdquo;
    </p>
    <AudioPlayer src={review.audioSrc} />
  </div>
);

const ReviewsSection = () => {
  const [expanded, setExpanded] = useState(false);
  const visible = expanded ? reviews : reviews.slice(0, 1);

  return (
    <section className="py-14" id="k5Reviews">
      <div className="container">
        <h2 className="k5-reveal text-center text-[28px] font-bold text-foreground mb-2">
          Kullanıcılarımız Ne Soruyor?
        </h2>
        <p className="k5-reveal k5-reveal-d1 text-center text-[15px] text-muted-foreground mb-10 max-w-[520px] mx-auto">
          Sıkça sorulan sorular ve uzman eczacımızın sesli yanıtları
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
          {visible.map((r, i) => (
            <ReviewCard key={r.initials} review={r} delay={i > 0 ? `k5-reveal-d${i}` : ""} />
          ))}
        </div>

        {!expanded && (
          <div className="k5-reveal text-center pt-8">
            <button
              onClick={() => setExpanded(true)}
              className="inline-flex items-center gap-2 text-[14px] font-semibold text-primary border-2 border-primary/20 py-3 px-8 rounded-full transition-all hover:bg-primary/5 hover:border-primary/40"
            >
              Daha fazlasını gör
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="m6 9 6 6 6-6" />
              </svg>
            </button>
          </div>
        )}

      </div>
    </section>
  );
};

export default ReviewsSection;
