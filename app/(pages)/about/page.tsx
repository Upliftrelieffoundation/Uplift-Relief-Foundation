import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Uplift Relief Foundation",
  description: "We rescue injured street dogs and provide free education for underprivileged children across Nagpur. 100% transparent, grassroots NGO.",
};

export default function About() {
  return (
    <>
      {/* PAGE HERO */}
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

      {/* ABOUT — asymmetric editorial split */}
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
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
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

      {/* IMMERSIVE QUOTE — cinematic breathing moment */}
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

      {/* CTA — full-bleed emotional */}
      <section className="cta" id="donate">
        <Image
          src="/images/hero_children.png"
          alt="Children learning"
          className="cta-bg"
          width={1920}
          height={1080}
        />
        <div className="wrap">
          <div className="cta-inner reveal">
            <span className="eyebrow">Make a Real Difference</span>
            <h2>
              Don&apos;t Just Watch.<br />
              <em>Act Now.</em>
            </h2>
            <p>
              Your monthly contribution ensures we never say &quot;no&quot; to an emergency
              rescue call or a child wanting to learn.
            </p>
            <div className="cta-actions">
              <Link href="/donate" className="btn btn-gold btn-lg">
                Become a Monthly Donor{" "}
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
              <Link href="/donate" className="btn btn-ghost">
                Save an Injured Animal Today
              </Link>
              <div className="cta-secure">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="11" width="18" height="11" rx="2" />
                  <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                </svg>
                100% Secure · 80G Tax Exempt · Cancel Anytime
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
