import { Metadata } from "next";
import AboutQuoteSection from "@/app/Components/About/AboutQuote";
import CtaSection from "@/app/Components/Home/CTA";
import IntroSection from '@/app/Components/Home/Intro';

export const metadata: Metadata = {
  title: "About Us | Uplift Relief Foundation",
  description:
    "We rescue injured street dogs and provide free education for underprivileged children across Nagpur. 100% transparent, grassroots NGO.",
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
