import { Metadata } from "next";
import AboutQuoteSection from "@/app/Components/About/AboutQuote";
import CtaSection from "@/app/Components/Home/CTA";
import IntroSection from '@/app/Components/Home/Intro';

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about Uplift Relief Foundation — a grassroots NGO in Nagpur rescuing street dogs and providing free education for underprivileged children since 2026.",
};

export default function About() {
  return (
    <>
      <IntroSection />
      <AboutQuoteSection />
      <CtaSection />
    </>
  );
}
