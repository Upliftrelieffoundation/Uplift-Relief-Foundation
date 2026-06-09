import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Field Stories | Uplift Relief Foundation",
  description: "We rescue injured street dogs and provide free education for underprivileged children across Nagpur. 100% transparent, grassroots NGO.",
};

export default function Stories() {
  return (
    <>
      {/* PAGE HERO */}
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
          <p>From Suffering to Second Chances</p>
        </div>
      </header>

      {/* STORIES — editorial mosaic layout */}
      <section className="stories" id="stories">
        <div className="wrap">
          <div className="stories-header reveal">
            <span className="eyebrow">Stories from the Field</span>
            <h2>
              From Suffering to <em>Second Chances</em>
            </h2>
            <p className="body-lg">
              Every image is a life that found hope because someone chose to act.
            </p>
          </div>
          <div className="stories-mosaic">
            <div className="s-card s-card--featured reveal">
              <Image
                src="/images/story_feeding.png"
                alt="Evening feeding drive"
                width={800}
                height={800}
              />
              <div className="s-body">
                <span className="s-tag">Animal Rescue · Apr 2026</span>
                <h3>A Second Chance for Bella</h3>
                <p>
                  Found with severe malnutrition and a fractured leg, Bella was
                  nursed back to health over 3 months. Today she lives in a
                  loving home — healthy, happy, and safe.
                </p>
                <Link href="#" className="s-link">
                  Read Full Story{" "}
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
            <div className="s-card reveal reveal-d1">
              <Image
                src="/images/hero_children.png"
                alt="Children at learning centre"
                width={600}
                height={400}
              />
              <div className="s-body">
                <span className="s-tag">Education · Mar 2026</span>
                <h3>Rohan&apos;s Journey to Engineering</h3>
                <p>
                  After joining our free tuition centre in 2026, Rohan secured a
                  scholarship for engineering. A cycle of poverty — broken forever.
                </p>
                <Link href="#" className="s-link">
                  Read Full Story{" "}
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
            <div className="s-card reveal reveal-d2">
              <Image
                src="/images/hero_dog.png"
                alt="Rescued puppy"
                width={600}
                height={400}
              />
              <div className="s-body">
                <span className="s-tag">Rescue · Feb 2026</span>
                <h3>Midnight Rescue: 5 Puppies Saved</h3>
                <p>
                  Our team rushed out at 2 AM in monsoon rains. All 5 puppies — safe,
                  vaccinated, and thriving.
                </p>
                <Link href="#" className="s-link">
                  Read Full Story{" "}
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
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
