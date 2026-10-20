import Image from "next/image";

import { Users } from "lucide-react";
export default function IntroSection() {
  return (
    <section
      className="bg-white max-lg:px-5 max-lg:py-10 lg:px-10 lg:py-20"
      id="about"
    >
      <div className="md:mx-20 lg:mx-20">
        <div className="grid items-center gap-10 max-lg:grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] lg:gap-[clamp(3rem,6vw,5rem)]">
          <div className="relative reveal">
            <div className="overflow-hidden rounded-2xl">
              <Image
                src="/images/Monochrome Boys and Colorful Puppies (1).png"
                alt="Children with rescued puppies"
                width={800}
                height={600}
                loading="lazy"
                sizes="(max-width: 768px) 100vw, 50vw"
                className="w-full object-cover h-[clamp(400px,50vw,580px)]"
              />
            </div>
            <div className="absolute max-md:-bottom-4 max-md:right-0 md:-bottom-6 md:-right-4 bg-navy p-5 flex items-center gap-3.5 z-2 rounded-2xl shadow-[0_12px_40px_rgba(11,20,37,0.15)]">
              <div className="w-10 h-10 bg-gold flex items-center justify-center rounded-xl shrink-0">
                <Users className="w-5 h-5 text-bg" />
              </div>
              <div>
                <strong className="text-[1.375rem] text-white block leading-none font-heading">
                  215+
                </strong>
                <span className="text-[0.75rem] text-white/70">
                  Active Volunteers
                </span>
              </div>
            </div>
          </div>
          <div className="max-lg:pb-0 reveal reveal-d1">
            <span className="eyebrow">Who We Are</span>
            <h2 className="text-navy">
              A Foundation Built on <em>Compassion</em>
            </h2>
            <p className=" text-[rgba(11,20,37,0.7)]!">
              Uplift Relief Foundation is a grassroots NGO dedicated to two
              urgent causes: rescuing and rehabilitating injured street animals,
              and providing free, quality education to underprivileged children
              who would otherwise be denied the chance to learn.
            </p>
            <br />
            <p className="body-lg text-[rgba(11,20,37,0.7)]!">
              Our street animal rescue team operates 24/7 — responding to
              accidents, abuse cases, and disease outbreaks across India. Every
              animal receives veterinary care, shelter, and rehabilitation. In
              parallel, our free education centres give children from slums and
              low-income families access to tuition, school supplies,
              mentorship, and life-skills training.
            </p>
            <br />
            <p className="body-lg text-[rgba(11,20,37,0.7)]!">
              Founded by young changemakers in 2026, we believe compassion —
              when backed by relentless action — transforms entire communities.
              100% of public donations go directly to our programs, with full
              transparency on every rupee spent.
            </p>


          </div>
        </div>
      </div>
    </section>
  );
}
