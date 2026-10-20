import Image from "next/image";
import Link from "next/link";

import { ArrowRight, Shield } from "lucide-react";
import AnimatedCounter from "@/components/AnimatedCounter";
export default function ImpactSection() {
  return (
    <section
      className="bg-white max-lg:px-5 max-lg:py-10 lg:px-10 lg:py-20"
      id="impact"
    >
      <div className="md:mx-20 lg:mx-20">
        <div className="grid items-center gap-10 max-lg:grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] lg:gap-[clamp(3rem,6vw,5rem)]">
          <div className="reveal">
            <div className="flex flex-wrap items-center gap-2.5 mb-3">
              <span className="eyebrow !text-gold-deep !mb-0">
                100% Financial Transparency
              </span>
              <span className="text-gold-deep/40 text-xs">•</span>
              <span className="eyebrow !text-gold-deep !mb-0">
                12A &amp; 80G Certified
              </span>
            </div>
            <h2 className="!text-navy">
              You Deserve to Know <em>Everything</em>
            </h2>
            <p className="body-lg text-[rgba(11,20,37,0.7)]!">
              Every rupee you donate is tracked, audited, and directed to the
              field. We publish annual reports and monthly breakdowns so you
              always know where your money goes.
            </p>
            <div className="grid grid-cols-2 gap-4 mt-10">
              <div className="pl-4 border-l-2 border-gold bg-ivory rounded-xl p-6 transition-all duration-[0.3s] ease-[cubic-bezier(0.16,1,0.3,1)] hover:border-gold-deep hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(11,20,37,0.06)]">
                <strong className="block text-navy leading-none tracking-[-0.02em] font-extrabold text-[clamp(1.75rem,3vw,2.5rem)] font-sans">
                  <AnimatedCounter target={1600} suffix="+" />
                </strong>
                <span className="block text-[0.75rem] font-semibold text-[rgba(11,20,37,0.5)] uppercase tracking-[0.06em] mt-1">
                  Animals Rescued
                </span>
              </div>
              <div className="pl-4 border-l-2 border-gold bg-ivory rounded-xl p-6 transition-all duration-[0.3s] ease-[cubic-bezier(0.16,1,0.3,1)] hover:border-gold-deep hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(11,20,37,0.06)]">
                <strong className="block text-navy leading-none tracking-[-0.02em] font-extrabold text-[clamp(1.75rem,3vw,2.5rem)] font-sans">
                  <AnimatedCounter target={50} suffix="+" />
                </strong>
                <span className="block text-[0.75rem] font-semibold text-[rgba(11,20,37,0.5)] uppercase tracking-[0.06em] mt-1">
                  Children Educated
                </span>
              </div>
              <div className="pl-4 border-l-2 border-gold bg-ivory rounded-xl p-6 transition-all duration-[0.3s] ease-[cubic-bezier(0.16,1,0.3,1)] hover:border-gold-deep hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(11,20,37,0.06)]">
                <strong className="block text-navy leading-none tracking-[-0.02em] font-extrabold text-[clamp(1.75rem,3vw,2.5rem)] font-sans">
                  <AnimatedCounter target={100} suffix="+" />
                </strong>
                <span className="block text-[0.75rem] font-semibold text-[rgba(11,20,37,0.5)] uppercase tracking-[0.06em] mt-1">
                  Daily Dog Feed
                </span>
              </div>
              <div className="pl-4 border-l-2 border-gold bg-ivory rounded-xl p-6 transition-all duration-[0.3s] ease-[cubic-bezier(0.16,1,0.3,1)] hover:border-gold-deep hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(11,20,37,0.06)]">
                <strong className="block text-navy leading-none tracking-[-0.02em] font-extrabold text-[clamp(1.75rem,3vw,2.5rem)] font-sans">
                  <AnimatedCounter target={1000} suffix="+" />
                </strong>
                <span className="block text-[0.75rem] font-semibold text-[rgba(11,20,37,0.5)] uppercase tracking-[0.06em] mt-1">
                  Radium Belts for Dogs
                </span>
              </div>
            </div>
            <Link
              href="/impact"
              className="btn btn-outline border-2 border-[rgba(11,20,37,0.15)] text-navy mt-10 self-start hover:border-navy hover:bg-[rgba(11,20,37,0.04)]"
            >
              View Full Impact Report <ArrowRight />
            </Link>
          </div>
          <div className="relative reveal reveal-d1">
            <div className="overflow-hidden rounded-2xl bg-white">
              <Image
                src="/images/80G.jpeg"
                alt="Children with rescued animals - Uplift Relief Foundation"
                width={800}
                height={800}
                loading="lazy"
                sizes="(max-width: 768px) 100vw, 50vw"
                className="w-full object-cover h-[clamp(380px,40vw,540px)]"
              />
            </div>
            <div className="absolute -bottom-4 left-6 bg-navy p-4 flex items-center gap-3 z-[2] rounded-2xl shadow-[0_8px_32px_rgba(11,20,37,0.2)]">
              <Shield className="w-[22px] h-[22px] text-gold shrink-0" />
              <div>
                <strong className="text-[0.8125rem] text-white block">
                  Govt. Registered NGO
                </strong>
                <small className="text-[0.6875rem] text-white/60">
                  Reg No: MH/2026/1069331
                </small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
