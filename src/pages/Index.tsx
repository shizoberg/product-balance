import { useReveal } from "@/hooks/useReveal";
import ScrollProgress from "@/components/ScrollProgress";
import UrgencyBar from "@/components/UrgencyBar";
import HeroSection from "@/components/HeroSection";
import ReviewsSection from "@/components/ReviewsSection";

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
