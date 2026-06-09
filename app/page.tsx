import { TrustRibbon } from "@/components/TrustRibbon";
import HeroSection from "./Components/Home/HeroSection";
import IntroSection from "./Components/Home/IntroSection";
import CausesSection from "./Components/Home/CausesSection";
import StoriesSection from "./Components/Home/StoriesSection";
import ImpactSection from "./Components/Home/ImpactSection";
import CtaSection from "./Components/Home/CtaSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <TrustRibbon />
      <IntroSection />
      <CausesSection />
      <StoriesSection />
      <ImpactSection />
      <CtaSection />
    </>
  );
}
