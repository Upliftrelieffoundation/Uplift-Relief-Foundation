import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Lock } from "lucide-react";

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
        <div className="relative z-2 max-w-145 reveal">
          <span className="text-gold-bright">Make a Real Difference</span>
          <h2 className=" text-white mb-5">
            Don&apos;t Just Watch.
            <br />
            <em>Act Now.</em>
          </h2>
          <p className="text-type-2 text-[1.0625rem] leading-[1.8] mb-10">
            Your monthly contribution ensures we never say &quot;no&quot; to an
            emergency rescue call or a child wanting to learn.
          </p>

          <div className="flex flex-col items-start gap-4">
            <Link href="/donate" className="btn btn-gold btn-lg">
              Become a Monthly Donor <ArrowRight />
            </Link>
            <Link href="/donate" className="btn btn-ghost">
              Save an Injured Animal Today <ArrowRight />
            </Link>
            <div className="flex items-center justify-between gap-1.5 text-gray-500 text-[0.75rem] font-medium mt-1">
              <Lock />
              100% Secure · 80G Tax Exempt · Cancel Anytime
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
