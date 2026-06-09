import Image from "next/image";

export default function WorkHeroSection() {
  return (
    <header className="page-hero">
      <Image
        src="/images/hero_banner.png"
        alt="Our Work"
        className="page-hero-bg"
        width={1920}
        height={1080}
        priority
      />
      <div className="wrap">
        <h1>
          Our <em>Work</em>
        </h1>
        <p>Two Urgent Causes. One Heart.</p>
      </div>
    </header>
  );
}
