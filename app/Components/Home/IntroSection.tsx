import Image from "next/image";
import Link from "next/link";

export default function IntroSection() {
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
              />
            </div>
            <div className="intro-float">
              <div className="intro-float-icon">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                </svg>
              </div>
              <div>
                <strong>500+</strong>
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
              Uplift Relief Foundation is a grassroots NGO based in Nagpur
              dedicated to rescuing street animals and empowering
              underprivileged children through free education and life skills.
            </p>
            <p className="body-lg">
              Founded by young changemakers in 2026, we believe compassion —
              when backed by relentless action — transforms entire
              communities.
            </p>
            <Link
              href="/about"
              className="btn btn-outline"
              style={{ marginTop: "1.5rem", marginBottom: "2rem" }}
            >
              Meet Our Team{" "}
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
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
