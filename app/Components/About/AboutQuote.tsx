import Image from "next/image";

export default function AboutQuoteSection() {
  return (
    <section className="immersive">
      <Image
        src="/images/hero_banner.png"
        alt="Rescue team at work"
        className="immersive-bg"
        width={1920}
        height={1080}
      />
      <div className="immersive-inner reveal">
        <blockquote>
          &quot;I never thought a small donation could change so many lives. Uplift
          Relief showed me it can.&quot;
        </blockquote>
        <cite>— Priya M., Donor &amp; Volunteer, Nagpur</cite>
      </div>
    </section>
  );
}
