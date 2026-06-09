import { Metadata } from "next";
import WorkHeroSection from "@/app/Components/Work/WorkHero";
import WorkCausesSection from "@/app/Components/Work/WorkCauses";
import CtaSection from "@/app/Components/Home/CTA";

export const metadata: Metadata = {
  title: "Our Work | Uplift Relief Foundation",
  description: "We rescue injured street dogs and provide free education for underprivileged children across Nagpur. 100% transparent, grassroots NGO.",
};

export default function Work() {
  return (
    <>
      <WorkHeroSection />
      <WorkCausesSection />
      <CtaSection />
    </>
  );
}
