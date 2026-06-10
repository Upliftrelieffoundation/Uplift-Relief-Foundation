import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Badge } from "@/components/ui/badge";

const data = [
  {
    id: 1,
    title: "Animals Rescued",
    value: "2,400+",
  },
  {
    id: 2,
    title: "Children Educated",
    value: "1,850+",
  },
  {
    id: 3,
    title: "Volunteers",
    value: "500+",
  },
];

export default function HeroSection() {
  return (
    <header className="relative flex min-h-screen items-end overflow-hidden bg-bg pt-19 before:absolute before:inset-0 before:z-1 before:content-[''] before:[background:linear-gradient(170deg,rgba(11,20,37,0.7)_0%,rgba(11,20,37,0.3)_40%,rgba(11,20,37,0.8)_100%)]">
      <div className="pointer-events-none absolute top-1/2 left-1/2 z-1 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap font-bold leading-none tracking-tighter text-[25vw] text-white/3">
        UPLIFT
      </div>

      <Image
        src="/images/hero_split.png"
        alt="Volunteer rescuing a street dog in Nagpur"
        width={1920}
        height={1080}
        priority
        className="absolute inset-0 h-full w-full scale-105 object-cover opacity-65 brightness-75 saturate-105"
      />

      <div className="relative z-2 mx-auto max-w-315 px-[clamp(1.5rem,5%,3.5rem)] pt-0 pb-[clamp(4rem,8vh,7rem)]">
        <div className="mb-10">
          <Badge variant="default" className="gap-2 bg-white/5 p-3 text-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-gold-bright shadow-[0_0_8px_rgba(221,185,99,0.5)]" />
            <span className="text-white/90">
              Registered NGO · Nagpur, India
            </span>
          </Badge>
        </div>

        <div className="max-w-167.5">
          <div className="mb-7">
            <h1 className="text-white mb-4">
              जीवनम् उद्धर। <em>भविष्यं पुनर्लिख।</em>
            </h1>
            <p className="text-gold-bright text-lg font-semibold">
              Nagpur's Trusted NGO for Street Dog Rescue & Free Child Education
            </p>
          </div>

          <p className="mb-10 max-w-120 text-[clamp(0.9375rem,1.3vw,1.0625rem)] leading-[1.85] text-white/50">
            We run 24/7 emergency animal rescues and free education centres for
            underprivileged children — because every life deserves a fighting
            chance.
          </p>

          <div className="mb-[clamp(3rem,6vh,5rem)] flex flex-col gap-3 sm:flex-row">
            <Link
              href="/donate"
              className="btn btn-gold btn-lg w-full justify-center cursor-pointer"
            >
              Become a Monthly Donor
              <ArrowRight />
            </Link>

            <Link
              href="/work"
              className="btn btn-ghost btn-lg w-full justify-center cursor-pointer"
            >
              Join Rescue Missions
            </Link>
          </div>

          <div className="flex flex-wrap gap-[clamp(1.5rem,3vw,3rem)]">
            {data.map((item) => (
              <div
                key={item.id}
                className="border-l border-[rgba(200,162,78,0.35)] pl-4"
              >
                <strong className="block text-[clamp(1.5rem,2.5vw,2rem)] leading-none font-bold tracking-[-0.02em] text-white">
                  {item.value}
                </strong>

                <span className="mt-1.5 block text-[0.6875rem] font-medium uppercase tracking-[0.08em] text-white/35">
                  {item.title}
                </span>
              </div>
            ))}
          </div>

        </div>
      </div>
    </header>
  );
}
