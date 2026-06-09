import { TrustRibbon } from "@/components/TrustRibbon";
import HeroSection from "./Components/Home/Hero";
import IntroSection from "./Components/Home/Intro";
import CausesSection from "./Components/Home/Causes";
import StoriesSection from "./Components/Home/Stories";
import ImpactSection from "./Components/Home/Impact";
import CtaSection from "./Components/Home/CTA";

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
