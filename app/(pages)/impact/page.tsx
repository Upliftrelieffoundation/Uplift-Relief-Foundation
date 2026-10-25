import { Metadata } from "next";
import { SITE_URL } from "@/lib/site-config";
import ImpactHeroSection from "@/app/Components/Impact/ImpactHero";
import ImpactSection from "@/app/Components/Home/Impact";
import ImpactBreakdownSection from "@/app/Components/Impact/ImpactBreakdown";
import CtaSection from "@/app/Components/Home/CTA";

export const metadata: Metadata = {
  title: "Impact & Transparency",
  description: "1,600+ animals rescued, 50+ children educated. See the measurable impact of Uplift Relief Foundation's work across India — complete financial transparency.",
  alternates: {
    canonical: `${SITE_URL}/impact`,
  },
  openGraph: {
    url: `${SITE_URL}/impact`,
  },
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
