import { useReveal } from "@/hooks/useReveal";
import ScrollProgress from "@/components/ScrollProgress";
import UrgencyBar from "@/components/UrgencyBar";
import HeroSection from "@/components/HeroSection";
import ReviewsSection from "@/components/ReviewsSection";
import StatsBar from "@/components/StatsBar";
import VideoTestimonials from "@/components/VideoTestimonials";
import BeforeAfter from "@/components/BeforeAfter";
import IngredientsSection from "@/components/IngredientsSection";
import ProductSection from "@/components/ProductSection";
import StickyATC from "@/components/StickyATC";
import SocialProofToast from "@/components/SocialProofToast";

const Index = () => {
  useReveal();

  return (
    <div className="pb-[72px]">
      <ScrollProgress />
      <UrgencyBar />
      <div id="heroSection">
        <HeroSection />
      </div>
      <ReviewsSection />
      <StatsBar />
      <div className="container">
        <div className="k5-reveal text-center pt-12">
          <a
            href="#k5Product"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground text-[15px] font-bold py-4 px-10 rounded-full transition-all hover:bg-primary-medium hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(45,27,105,0.3)] relative overflow-hidden"
          >
            Şimdi satın al
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
      <VideoTestimonials />
      <BeforeAfter />
      <IngredientsSection />
      <ProductSection />
      <StickyATC />
      <SocialProofToast />
    </div>
  );
};

export default Index;
