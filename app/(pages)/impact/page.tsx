import { Metadata } from "next";
import ImpactHeroSection from "@/app/Components/Impact/ImpactHero";
import ImpactSection from "@/app/Components/Home/Impact";
import ImpactBreakdownSection from "@/app/Components/Impact/ImpactBreakdown";
import CtaSection from "@/app/Components/Home/CTA";

export const metadata: Metadata = {
  title: "Impact & Transparency",
  description: "2,400+ animals rescued, 1,850+ children educated. See the measurable impact of Uplift Relief Foundation's work in Nagpur — complete financial transparency.",
};

export default function Impact() {
  return (
    <>
      <ImpactHeroSection />
      <ImpactSection />
      <ImpactBreakdownSection />
      <CtaSection />
    </>
  );
}
