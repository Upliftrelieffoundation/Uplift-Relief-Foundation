import Image from "next/image";

export default function DonateHeroSection() {
  return (
    <header className="page-hero">
      <Image
        src="/images/hero_banner.png"
        alt="Rescue banner"
        className="page-hero-bg"
        width={1920}
        height={1080}
        priority
      />
      <div className="wrap">
        <h1>
          Support <em>Us</em>
        </h1>
        <p>
          Become a monthly member or make a one-time donation to help India&apos;s
          street animals &amp; kids.
        </p>
      </div>
    </header>
  );
}
