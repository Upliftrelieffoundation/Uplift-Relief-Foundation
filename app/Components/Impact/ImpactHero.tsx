import Image from "next/image";

export default function ImpactHeroSection() {
  return (
    <header className="page-hero">
      <Image
        src="/images/hero_dog.png"
        alt="Impact"
        className="page-hero-bg"
        width={1920}
        height={1080}
        priority
      />
      <div className="wrap">
        <h1>
          Our <em>Impact</em>
        </h1>
        <p>100% Financial Transparency</p>
      </div>
    </header>
  );
}
