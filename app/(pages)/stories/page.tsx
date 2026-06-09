import { Metadata } from "next";
import StoriesHeroSection from "@/app/Components/Stories/StoriesHero";
import StoriesListSection from "@/app/Components/Stories/StoriesList";
import CtaSection from "@/app/Components/Home/CTA";

export const metadata: Metadata = {
  title: "Field Stories | Uplift Relief Foundation",
  description: "We rescue injured street dogs and provide free education for underprivileged children across Nagpur. 100% transparent, grassroots NGO.",
};

export default function Stories() {
  return (
    <>
      <StoriesHeroSection />
      <StoriesListSection />
      <CtaSection />
    </>
  );
}
