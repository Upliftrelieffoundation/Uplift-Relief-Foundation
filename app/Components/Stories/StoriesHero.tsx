import Image from "next/image";

export default function StoriesHeroSection() {
  return (
    <header className="page-hero">
      <Image
        src="/images/hero_children.png"
        alt="Stories"
        className="page-hero-bg"
        width={1920}
        height={1080}
        priority
      />
      <div className="wrap">
        <h1>
          Field <em>Stories</em>
        </h1>
        <p>Real Stories of Rescue, Education &amp; Transformation</p>
      </div>
    </header>
  );
}
