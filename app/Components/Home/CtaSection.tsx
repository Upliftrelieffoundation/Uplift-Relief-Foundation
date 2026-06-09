import Image from "next/image";
import Link from "next/link";

export default function CtaSection() {
  return (
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
            Don&apos;t Just Watch.
            <br />
            <em>Act Now.</em>
          </h2>
          <p>
            Your monthly contribution ensures we never say &quot;no&quot; to
            an emergency rescue call or a child wanting to learn.
          </p>
          <div className="cta-actions">
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
            <Link href="/donate" className="btn btn-ghost">
              Save an Injured Animal Today
            </Link>
            <div className="cta-secure">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <rect x="3" y="11" width="18" height="11" rx="2" />
                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
              </svg>
              100% Secure · 80G Tax Exempt · Cancel Anytime
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
