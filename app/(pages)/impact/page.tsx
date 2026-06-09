import { Metadata } from "next";
import ImpactHeroSection from "@/app/Components/Impact/ImpactHero";
import ImpactSection from "@/app/Components/Home/Impact";
import ImpactBreakdownSection from "@/app/Components/Impact/ImpactBreakdown";
import CtaSection from "@/app/Components/Home/CTA";

export const metadata: Metadata = {
  title: "Impact & Transparency | Uplift Relief Foundation",
  description: "We rescue injured street dogs and provide free education for underprivileged children across Nagpur. 100% transparent, grassroots NGO.",
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
