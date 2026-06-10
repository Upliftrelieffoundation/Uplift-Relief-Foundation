import { Metadata } from "next";
import StoriesSection from "@/app/Components/Home/Stories";
import StoriesHeroSection from "@/app/Components/Stories/StoriesHero";

export const metadata: Metadata = {
  title: "Field Stories",
  description: "Real stories from the ground: street dog rescues, education breakthroughs, and community transformation by Uplift Relief Foundation in Nagpur.",
};

export default function Stories() {
  return (
    <div className="mt-13">
      <StoriesHeroSection />
      <StoriesSection />
    </div>
  );
}
