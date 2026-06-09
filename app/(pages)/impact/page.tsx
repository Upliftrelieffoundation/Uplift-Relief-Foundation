import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impact & Transparency | Uplift Relief Foundation",
  description: "We rescue injured street dogs and provide free education for underprivileged children across Nagpur. 100% transparent, grassroots NGO.",
};

export default function Impact() {
  return (
    <>
      {/* PAGE HERO */}
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

      {/* IMPACT — editorial offset */}
      <section className="impact" id="impact">
        <div className="wrap">
          <div className="impact-grid">
            <div className="impact-content reveal">
              <span className="eyebrow">100% Financial Transparency</span>
              <h2>
                You Deserve to Know <em>Everything</em>
              </h2>
              <p className="body-lg">
                Every rupee you donate is tracked, audited, and directed to the
                field. We publish annual reports and monthly breakdowns so you
                always know where your money goes.
              </p>
              <div className="impact-numbers">
                <div className="impact-num">
                  <strong data-target="2400">0+</strong>
                  <span>Animals Rescued</span>
                </div>
                <div className="impact-num">
                  <strong data-target="1850">0+</strong>
                  <span>Children Enrolled</span>
                </div>
                <div className="impact-num">
                  <strong>₹38L+</strong>
                  <span>Aid Delivered</span>
                </div>
                <div className="impact-num">
                  <strong>48+</strong>
                  <span>Cities Reached</span>
                </div>
              </div>
            </div>
            <div className="impact-visual reveal reveal-d1">
              <div className="impact-visual-img">
                <Image
                  src="/images/hero_dog.png"
                  alt="Rescued dog at shelter"
                  width={800}
                  height={800}
                />
              </div>
              <div className="trust-badge-float">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
                <div>
                  <strong>Govt. Registered NGO</strong>
                  <small>Reg No: MAH/564/2026/NAGPUR</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BREAKDOWN */}
      <section className="breakdown">
        <div className="wrap">
          <div className="breakdown-inner">
            <div className="breakdown-head reveal">
              <span className="eyebrow">Where Your Money Goes</span>
              <h2>
                Every Rupee, <em>Accounted For</em>
              </h2>
              <p className="body-lg">
                Radical transparency. Here&apos;s exactly how your donation is allocated.
              </p>
            </div>
            <div className="breakdown-cards">
              <div className="bd-card reveal">
                <div className="bd-pct">72%</div>
                <h4>Direct Field Work</h4>
                <p>
                  Rescue operations, veterinary care, educational supplies, scholarships.
                </p>
              </div>
              <div className="bd-card reveal reveal-d1">
                <div className="bd-pct">18%</div>
                <h4>Programs &amp; Growth</h4>
                <p>
                  New centres, volunteer training, outreach, awareness campaigns.
                </p>
              </div>
              <div className="bd-card reveal reveal-d2">
                <div className="bd-pct">10%</div>
                <h4>Operations</h4>
                <p>Admin, legal compliance, auditing, technology.</p>
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
