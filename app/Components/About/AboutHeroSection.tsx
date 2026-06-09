import Image from "next/image";

export default function AboutHeroSection() {
  return (
    <header className="page-hero">
      <Image
        src="/images/volunteer_team.png"
        alt="Our team"
        className="page-hero-bg"
        width={1920}
        height={1080}
        priority
      />
      <div className="wrap">
        <h1>
          About <em>Us</em>
        </h1>
        <p>A Foundation Built on Compassion</p>
      </div>
    </header>
  );
}
