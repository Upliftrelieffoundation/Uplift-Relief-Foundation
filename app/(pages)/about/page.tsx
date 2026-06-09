import { Metadata } from "next";
import AboutHeroSection from "@/app/Components/About/AboutHero";
import AboutIntroSection from "@/app/Components/About/AboutIntro";
import AboutQuoteSection from "@/app/Components/About/AboutQuote";
import CtaSection from "@/app/Components/Home/CTA";

export const metadata: Metadata = {
  title: "About Us | Uplift Relief Foundation",
  description: "We rescue injured street dogs and provide free education for underprivileged children across Nagpur. 100% transparent, grassroots NGO.",
};

export default function About() {
  return (
    <>
      <AboutHeroSection />
      <AboutIntroSection />
      <AboutQuoteSection />
      <CtaSection />
    </>
  );
}
