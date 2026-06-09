import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <header className="hero">
      <div className="hero-watermark">UPLIFT</div>
      <Image
        src="/images/hero_split.png"
        alt="Volunteer rescuing a street dog in Nagpur"
        className="hero-bg"
        width={1920}
        height={1080}
        priority
      />
      <div className="wrap hero-wrap">
        <div className="hero-badge">
          {/* <span className="dot"></span> 
          <span>Registered NGO · Nagpur, India</span> */}
          <Badge variant={"default"} className="gap-2 p-3! bg-white/5 text-sm">
            <span className="dot" />
            <span className="text-white/90">
              Registered NGO · Nagpur, India
            </span>
          </Badge>
        </div>
        <h1 className="hero-h1">
          जीवनम् उद्धर।
          <br />
          <em>भविष्यं पुनर्लिख।</em>
        </h1>
        <p className="hero-sub">
          We run 24/7 emergency animal rescues and free education centres for
          underprivileged children — because every life deserves a fighting
          chance.
        </p>
        <div className="hero-ctas">
          <Link href="/donate" className="btn btn-gold btn-lg">
            Become a Monthly Donor{" "}
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
          <Link href="/work" className="btn btn-ghost btn-lg">
            Join Rescue Missions
          </Link>
        </div>
        <div className="hero-metrics">
          <div className="hero-metric">
            <strong>2,400+</strong>
            <span>Animals Rescued</span>
          </div>
          <div className="hero-metric">
            <strong>1,850+</strong>
            <span>Children Educated</span>
          </div>
          <div className="hero-metric">
            <strong>500+</strong>
            <span>Volunteers</span>
          </div>
        </div>
      </div>
    </header>
  );
}
