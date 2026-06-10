import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function StoriesSection() {
  return (
    <section className="bg-white relative overflow-hidden max-lg:px-5 max-lg:py-10 lg:px-10 lg:py-20" id="stories">
      <div className="wrap">
        <div className="mb-[clamp(3rem,5vw,4rem)] reveal">
          <span className="eyebrow !text-gold-bright">Stories from the Field</span>
          <h2 className="text-navy ">
            From Suffering to <em>Second Chances</em>
          </h2>
          <p className="body-lg text-[rgba(11,20,37,0.7)]!">
            Every image is a life that found hope because someone chose to
            act.
          </p>
        </div>
        <div className="grid gap-4 min-h-[580px] max-lg:grid-cols-1 max-lg:grid-rows-auto lg:grid-cols-[1.4fr_1fr] lg:grid-rows-[1fr_1fr]">
          <div className="relative overflow-hidden rounded-2xl group lg:row-span-2 max-lg:min-h-[400px] reveal">
            <Image
              src="/images/story_feeding.png"
              alt="Evening feeding drive"
              width={800}
              height={800}
              loading="lazy"
              sizes="(max-width: 768px) 100vw, 50vw"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-[0.7s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04] saturate-[0.9] brightness-[0.75] group-hover:saturate-[0.95] group-hover:brightness-[0.8]"
            />
            <div className="after:content-[''] after:absolute after:inset-0 after:bg-[linear-gradient(to_top,rgba(11,20,37,0.92)_0%,rgba(11,20,37,0.2)_55%,transparent_100%)] pointer-events-none" />
            <div className="absolute bottom-0 left-0 right-0 z-[2] p-[clamp(1.5rem,3vw,2.5rem)]">
              <span className="block text-[0.625rem] font-bold uppercase tracking-[0.12em] text-gold-bright mb-2">Animal Rescue · Apr 2026</span>
              <h3 className="!text-white mb-2 text-[clamp(1.125rem,1.8vw,1.5rem)]">A Second Chance for Bella</h3>
              <p className="text-[rgba(255,255,255,0.45)] text-[0.875rem] leading-[1.65] overflow-hidden line-clamp-3">
                Found with severe malnutrition and a fractured leg, Bella was
                nursed back to health over 3 months. Today she lives in a
                loving home — healthy, happy, and safe.
              </p>
              <Link href="#" className="inline-flex items-center gap-1.5 text-gold-bright text-[0.75rem] font-semibold mt-3 tracking-[0.03em] no-underline transition-all duration-300 hover:gap-2.5 [&_svg]:w-3 [&_svg]:h-3">
                Read Full Story{" "}
                <ArrowRight />
              </Link>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-2xl group min-h-[300px] max-lg:min-h-[300px] reveal reveal-d1">
            <Image
              src="/images/hero_children.png"
              alt="Children at learning centre"
              width={600}
              height={400}
              loading="lazy"
              sizes="(max-width: 768px) 100vw, 50vw"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-[0.7s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04] saturate-[0.9] brightness-[0.75] group-hover:saturate-[0.95] group-hover:brightness-[0.8]"
            />
            <div className="after:content-[''] after:absolute after:inset-0 after:bg-[linear-gradient(to_top,rgba(11,20,37,0.92)_0%,rgba(11,20,37,0.2)_55%,transparent_100%)] pointer-events-none" />
            <div className="absolute bottom-0 left-0 right-0 z-[2] p-[clamp(1.5rem,3vw,2.5rem)]">
              <span className="block text-[0.625rem] font-bold uppercase tracking-[0.12em] text-gold-bright mb-2">Education · Mar 2026</span>
              <h3 className="!text-white mb-2 text-[clamp(1.125rem,1.8vw,1.5rem)]">Rohan&apos;s Journey to Engineering</h3>
              <p className="text-[rgba(255,255,255,0.45)] text-[0.875rem] leading-[1.65] overflow-hidden line-clamp-3">
                After joining our free tuition centre in 2026, Rohan secured a
                scholarship for engineering. A cycle of poverty — broken
                forever.
              </p>
              <Link href="#" className="inline-flex items-center gap-1.5 text-gold-bright text-[0.75rem] font-semibold mt-3 tracking-[0.03em] no-underline transition-all duration-300 hover:gap-2.5 [&_svg]:w-3 [&_svg]:h-3">
                Read Full Story{" "}
                <ArrowRight />
              </Link>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-2xl group min-h-[300px] max-lg:min-h-[300px] reveal reveal-d2">
            <Image
              src="/images/hero_dog.png"
              alt="Rescued puppy"
              width={600}
              height={400}
              loading="lazy"
              sizes="(max-width: 768px) 100vw, 50vw"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-[0.7s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04] saturate-[0.9] brightness-[0.75] group-hover:saturate-[0.95] group-hover:brightness-[0.8]"
            />
            <div className="after:content-[''] after:absolute after:inset-0 after:bg-[linear-gradient(to_top,rgba(11,20,37,0.92)_0%,rgba(11,20,37,0.2)_55%,transparent_100%)] pointer-events-none" />
            <div className="absolute bottom-0 left-0 right-0 z-[2] p-[clamp(1.5rem,3vw,2.5rem)]">
              <span className="block text-[0.625rem] font-bold uppercase tracking-[0.12em] text-gold-bright mb-2">Rescue · Feb 2026</span>
              <h3 className="!text-white mb-2 text-[clamp(1.125rem,1.8vw,1.5rem)]">Midnight Rescue: 5 Puppies Saved</h3>
              <p className="text-[rgba(255,255,255,0.45)] text-[0.875rem] leading-[1.65] overflow-hidden line-clamp-3">
                Our team rushed out at 2 AM in monsoon rains. All 5 puppies —
                safe, vaccinated, and thriving.
              </p>
              <Link href="#" className="inline-flex items-center gap-1.5 text-gold-bright text-[0.75rem] font-semibold mt-3 tracking-[0.03em] no-underline transition-all duration-300 hover:gap-2.5 [&_svg]:w-3 [&_svg]:h-3">
                Read Full Story{" "}
                <ArrowRight />
              </Link>
            </div>
          </div>
        </div>
        <div className="text-center mt-16">
          <Link
            href="/stories"
            className="btn btn-outline border-2 border-[rgba(11,20,37,0.15)] text-navy mt-auto self-start hover:border-navy hover:bg-[rgba(11,20,37,0.04)]"
          >
            Read All Stories{" "}
            <ArrowRight />
          </Link>
        </div>
      </div>
    </section>
  );
}
