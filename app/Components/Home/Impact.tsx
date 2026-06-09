import Image from "next/image";
import Link from "next/link";

import { ArrowRight, Shield } from "lucide-react";
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
              className="flex items-center gap-2 border rounded-full w-max py-4 px-5 text-primary hover:border-gold hover:text-gold transition mt-4"
            >
              View Full Impact Report <ArrowRight />
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
              <Shield />
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
