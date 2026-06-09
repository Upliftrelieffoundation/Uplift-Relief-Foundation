import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Work | Uplift Relief Foundation",
  description: "We rescue injured street dogs and provide free education for underprivileged children across Nagpur. 100% transparent, grassroots NGO.",
};

export default function Work() {
  return (
    <>
      {/* PAGE HERO */}
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

      {/* CAUSES — deliberately unequal cards */}
      <section className="causes" id="causes">
        <div className="wrap">
          <div className="causes-header reveal">
            <span className="eyebrow">Where Your Support Goes</span>
            <h2>
              Two Urgent Causes.<br />
              <em>One Heart.</em>
            </h2>
          </div>
          <div className="causes-row">
            <div className="cause reveal">
              <div className="cause-img">
                <Image
                  src="/images/dog_rescue.png"
                  alt="Street dog rescue"
                  width={600}
                  height={400}
                />
                <div className="cause-tag">Animal Welfare</div>
              </div>
              <div className="cause-body">
                <h3>Save an Injured Animal</h3>
                <p>
                  Every day, dozens of street dogs suffer from accidents, abuse,
                  and disease. We provide 24/7 emergency rescue, life-saving
                  surgeries, and safe rehabilitation.
                </p>
                <ul className="cause-checks">
                  <li>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                      <polyline points="22 4 12 14.01 9 11.01" />
                    </svg>
                    Emergency medical response
                  </li>
                  <li>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                      <polyline points="22 4 12 14.01 9 11.01" />
                    </svg>
                    Anti-rabies vaccination drives
                  </li>
                  <li>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                      <polyline points="22 4 12 14.01 9 11.01" />
                    </svg>
                    Adoption &amp; foster care
                  </li>
                </ul>
                <Link href="/donate" className="btn btn-outline">
                  Feed a Street Animal{" "}
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
            <div className="cause reveal reveal-d1">
              <div className="cause-img">
                <Image
                  src="/images/children_class.png"
                  alt="Free education centre"
                  width={600}
                  height={400}
                />
                <div className="cause-tag">Child Education</div>
              </div>
              <div className="cause-body">
                <h3>Sponsor a Child&apos;s Education</h3>
                <p>
                  Poverty forces brilliant minds out of school. We provide free
                  tuition, supplies, and mentorship so every child gets a fair start.
                </p>
                <ul className="cause-checks">
                  <li>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                      <polyline points="22 4 12 14.01 9 11.01" />
                    </svg>
                    Free learning centres
                  </li>
                  <li>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                      <polyline points="22 4 12 14.01 9 11.01" />
                    </svg>
                    Books, uniforms &amp; digital literacy
                  </li>
                  <li>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                      <polyline points="22 4 12 14.01 9 11.01" />
                    </svg>
                    Career mentorship
                  </li>
                </ul>
                <Link href="/donate" className="btn btn-outline">
                  Sponsor a Student{" "}
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
