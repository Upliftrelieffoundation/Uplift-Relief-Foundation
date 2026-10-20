import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function StoriesSection() {
  return (
    <section className="bg-white relative overflow-hidden max-lg:px-5 max-lg:py-10 lg:px-10 lg:py-20" id="stories">
      <div className="md:mx-20 lg:mx-20">
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
              src="/images/bella.jpeg"
              alt="Bella the rescued dog"
              width={800}
              height={800}
              loading="lazy"
              sizes="(max-width: 768px) 100vw, 50vw"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-[0.7s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04] saturate-[0.9] brightness-[0.75] group-hover:saturate-[0.95] group-hover:brightness-[0.8]"
            />
            <div className="after:content-[''] after:absolute after:inset-0 after:bg-[linear-gradient(to_top,rgba(11,20,37,0.92)_0%,rgba(11,20,37,0.2)_55%,transparent_100%)] pointer-events-none" />
            <div className="absolute bottom-0 left-0 right-0 z-[2] p-[clamp(1.5rem,3vw,2.5rem)]">
              <span className="block text-[0.625rem] font-bold uppercase tracking-[0.12em] text-gold-bright mb-2">Daily feeding · 100+ dogs</span>
              <h3 className="!text-white mb-2 text-[clamp(1.125rem,1.8vw,1.5rem)]">Every Day, A Meal. Every Day, A Little Hope.</h3>
              <p className="text-[rgba(255,255,255,0.7)] text-[0.875rem] leading-[1.65] overflow-hidden line-clamp-4">
                It takes ₹4,500 every day to feed 100+ street dogs. Your contribution can help ensure that no hungry paw is left behind. Sponsor a meal for a day or become a regular feeding sponsor and help us keep their bowls full, every single day.
              </p>
              <Link href="/donate" className="inline-flex items-center gap-1.5 text-gold-bright text-[0.75rem] font-semibold mt-3 tracking-[0.03em] no-underline transition-all duration-300 hover:gap-2.5 [&_svg]:w-3 [&_svg]:h-3">
                Become a Feeding Sponsor{" "}
                <ArrowRight />
              </Link>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-2xl group min-h-[300px] max-lg:min-h-[300px] reveal reveal-d1">
            <Image
              src="/images/student.jpeg"
              alt="Student learning at centre"
              width={600}
              height={400}
              loading="lazy"
              sizes="(max-width: 768px) 100vw, 50vw"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-[0.7s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04] saturate-[0.9] brightness-[0.75] group-hover:saturate-[0.95] group-hover:brightness-[0.8]"
            />
            <div className="after:content-[''] after:absolute after:inset-0 after:bg-[linear-gradient(to_top,rgba(11,20,37,0.92)_0%,rgba(11,20,37,0.2)_55%,transparent_100%)] pointer-events-none" />
            <div className="absolute bottom-0 left-0 right-0 z-[2] p-[clamp(1.5rem,3vw,2.5rem)]">
              <span className="block text-[0.625rem] font-bold uppercase tracking-[0.12em] text-gold-bright mb-2">Child Nutrition · Education</span>
              <h3 className="!text-white mb-2 text-[clamp(1.125rem,1.8vw,1.5rem)]">Sponsor a Meal. Nourish a Young Mind.</h3>
              <p className="text-[rgba(255,255,255,0.7)] text-[0.875rem] leading-[1.65] overflow-hidden line-clamp-3">
                Every child deserves access to nutritious meals and the opportunity to learn, grow, and dream. With just ₹2,500 per student per week, you can help provide essential meal support and make a meaningful difference in a child&apos;s life.
              </p>
              <Link href="/donate" className="inline-flex items-center gap-1.5 text-gold-bright text-[0.75rem] font-semibold mt-3 tracking-[0.03em] no-underline transition-all duration-300 hover:gap-2.5 [&_svg]:w-3 [&_svg]:h-3">
                Become a Meal Sponsor{" "}
                <ArrowRight />
              </Link>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-2xl group min-h-[300px] max-lg:min-h-[300px] reveal reveal-d2">
            <Image
              src="/images/radium belt.jpeg"
              alt="Street dog wearing reflective radium belt"
              width={600}
              height={400}
              loading="lazy"
              sizes="(max-width: 768px) 100vw, 50vw"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-[0.7s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04] saturate-[0.9] brightness-[0.75] group-hover:saturate-[0.95] group-hover:brightness-[0.8]"
            />
            <div className="after:content-[''] after:absolute after:inset-0 after:bg-[linear-gradient(to_top,rgba(11,20,37,0.92)_0%,rgba(11,20,37,0.2)_55%,transparent_100%)] pointer-events-none" />
            <div className="absolute bottom-0 left-0 right-0 z-[2] p-[clamp(1.5rem,3vw,2.5rem)]">
              <span className="block text-[0.625rem] font-bold uppercase tracking-[0.12em] text-gold-bright mb-2">Accident Prevention · Night Safety</span>
              <h3 className="!text-white mb-2 text-[clamp(1.125rem,1.8vw,1.5rem)]">Make Them Shine. Help Them Stay Safe.</h3>
              <p className="text-[rgba(255,255,255,0.7)] text-[0.875rem] leading-[1.65] overflow-hidden line-clamp-3">
                Every week, we aim to distribute 1,000+ reflective radium belts to street animals, helping them stay visible to drivers after dark and reducing the risk of road accidents. With a weekly budget of ₹75,000, your support can help protect vulnerable animals and make our streets safer for every paw.
              </p>
              <Link href="/donate" className="inline-flex items-center gap-1.5 text-gold-bright text-[0.75rem] font-semibold mt-3 tracking-[0.03em] no-underline transition-all duration-300 hover:gap-2.5 [&_svg]:w-3 [&_svg]:h-3">
                Sponsor Radium Belts{" "}
                <ArrowRight />
              </Link>
            </div>
          </div>
        </div>
        <div className="text-center mt-16">
          <Link
            href="/stories"
            className="btn btn-outline border-2 border-[rgba(11,20,37,0.15)] text-navy md:mt-1 sm:mt-5 self-start hover:border-navy hover:bg-[rgba(11,20,37,0.04)]"
          >
            Read All Stories{" "}
            <ArrowRight />
          </Link>
        </div>
      </div>
    </section>
  );
}
