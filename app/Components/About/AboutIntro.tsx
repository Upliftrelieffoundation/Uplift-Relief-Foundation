import Image from "next/image";
import { Users } from "lucide-react";

export default function AboutIntroSection() {
  return (
    <section className="intro" id="about">
      <div className="wrap">
        <div className="intro-grid">
          <div className="intro-visual reveal">
            <div className="intro-img">
              <Image
                src="/images/volunteer_team.png"
                alt="Our volunteer team"
                width={800}
                height={600}
                loading="lazy"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="intro-float">
              <div className="intro-float-icon">
                <Users />
              </div>
              <div>
                <strong>215+</strong>
                <span>Active Volunteers</span>
              </div>
            </div>
          </div>
          <div className="intro-content reveal reveal-d1">
            <span className="eyebrow">Who We Are</span>
            <h2>
              A Foundation Built on <em>Compassion</em>
            </h2>
            <p className="body-lg">
              Uplift Relief Foundation is a grassroots NGO dedicated to
              rescuing street animals and empowering underprivileged children
              through free education and life skills.
            </p>
            <p className="body-lg">
              Founded by young changemakers in 2026, we believe compassion —
              when backed by relentless action — transforms entire communities.
            </p>
            <div className="intro-stats">
              <div className="intro-stat">
                <strong>2026</strong>
                <span>Year Founded</span>
              </div>
              <div className="intro-stat">
                <strong>48+</strong>
                <span>Cities Reached</span>
              </div>
              <div className="intro-stat">
                <strong>100%</strong>
                <span>Transparent</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
