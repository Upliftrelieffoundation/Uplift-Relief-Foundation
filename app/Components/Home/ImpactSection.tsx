import Image from "next/image";
import Link from "next/link";

export default function ImpactSection() {
  return (
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
            <Link
              href="/impact"
              className="btn btn-outline"
              style={{ marginTop: "2.5rem" }}
            >
              View Full Impact Report{" "}
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
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
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
              <div>
                <strong>Govt. Registered NGO</strong>
                <small>Reg No: MAH/199/2026/NAGPUR</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
