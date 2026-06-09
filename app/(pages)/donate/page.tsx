import { Metadata } from "next";
import DonateHeroSection from "@/app/Components/Donate/DonateHero";
import DonateFormSection from "@/app/Components/Donate/DonateForm";

export const metadata: Metadata = {
  title: "Donate | Uplift Relief Foundation",
  description: "Become a monthly member or make a one-time donation to help Nagpur's street animals and kids.",
};

export default function Donate() {
  return (
    <>
      <DonateHeroSection />
      <DonateFormSection />
    </>
  );
}
