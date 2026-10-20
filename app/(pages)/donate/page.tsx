import { Metadata } from "next";
import DonateHeroSection from "@/app/Components/Donate/DonateHero";
import DonateFormSection from "@/app/Components/Donate/DonateForm";

export const metadata: Metadata = {
  title: "Donate",
  description: "Support street animal rescue and free child education across India. Donate to Uplift Relief Foundation — 100% transparent NGO. Monthly or one-time giving.",
};

export default function Donate() {
  return (
    <>
      <DonateHeroSection />
      <DonateFormSection />
    </>
  );
}
