import { Metadata } from "next";
import WorkHeroSection from "@/app/Components/Work/WorkHero";
import WorkCausesSection from "@/app/Components/Work/WorkCauses";
import CtaSection from "@/app/Components/Home/CTA";

export const metadata: Metadata = {
  title: "Our Work",
  description: "Uplift Relief Foundation runs 24/7 street dog rescue operations and free education centres for underprivileged children across Nagpur, India. See our programs.",
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
