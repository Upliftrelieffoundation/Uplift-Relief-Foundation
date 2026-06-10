import { Metadata } from "next";
import StoriesSection from '@/app/Components/Home/Stories';

export const metadata: Metadata = {
  title: "Field Stories | Uplift Relief Foundation",
  description: "We rescue injured street dogs and provide free education for underprivileged children across Nagpur. 100% transparent, grassroots NGO.",
};

export default function Stories() {
  return (
    <div className="mt-13">
      <StoriesSection />
    </div>
  );
}
