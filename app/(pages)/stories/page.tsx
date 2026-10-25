import { Metadata } from "next";
import { SITE_URL } from "@/lib/site-config";
import StoriesSection from "@/app/Components/Home/Stories";
import StoriesHeroSection from "@/app/Components/Stories/StoriesHero";

export const metadata: Metadata = {
  title: "Field Stories",
  description: "Real stories from the ground: street animal rescues, education breakthroughs, and community transformation by Uplift Relief Foundation across India.",
  alternates: {
    canonical: `${SITE_URL}/stories`,
  },
  openGraph: {
    url: `${SITE_URL}/stories`,
  },
};

export default function Stories() {
  return (
    <div className="mt-13">
      <StoriesHeroSection />
      <StoriesSection />
    </div>
  );
}
