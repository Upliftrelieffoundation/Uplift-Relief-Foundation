import Image from "next/image";
import Link from "next/link";

import { ArrowRight } from "lucide-react";
const causes = [
  {
    tag: "Animal Welfare",
    title: "Save an Injured Animal",
    description:
      "Every day, dozens of street dogs suffer from accidents, abuse, and disease. We provide 24/7 emergency rescue, life-saving surgeries, and safe rehabilitation.",
    img: "/images/dog_rescue.png",
    imgAlt: "Street dog rescue",
    btnLabel: "Feed a Street Animal",
    revealDelay: "",
  },
  {
    tag: "Child Education",
    title: "Sponsor a Child\u2019s Education",
    description:
      "Poverty forces brilliant minds out of school. We provide free tuition, supplies, and mentorship so every child gets a fair start.",
    img: "/images/children_class.png",
    imgAlt: "Free education centre",
    btnLabel: "Sponsor a Student",
    revealDelay: " reveal-d1",
  },
];

export default function CausesSection() {
  return (
    <section className="bg-ivory max-lg:px-5 max-lg:py-10 lg:px-10 lg:py-20" id="causes">
      <div className="wrap">
        <div className="max-w-140 mb-[clamp(3rem,5vw,4rem)] reveal">
          <span className="eyebrow text-gold-deep">Where Your Support Goes</span>
          <h2 className="text-navy">
            Two Urgent Causes.
            <br />
            <em>One Heart.</em>
          </h2>
        </div>
        <div className="grid max-lg:grid-cols-1 lg:grid-cols-2 gap-6">
          {causes.map((cause, i) => (
            <div className={`flex flex-col relative bg-white overflow-hidden border border-[rgba(11,20,37,0.06)] rounded-3xl transition-all duration-[0.6s] ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-2 hover:shadow-[0_24px_64px_rgba(11,20,37,0.08)] group reveal${cause.revealDelay}`} key={i}>
              <div className="relative overflow-hidden">
                <Image
                  src={cause.img}
                  alt={cause.imgAlt}
                  width={600}
                  height={400}
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="w-full object-cover h-[clamp(220px,22vw,320px)] transition-transform duration-[0.7s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03]"
                />
                <div className="absolute top-4 left-4 bg-navy text-white rounded-full text-[0.625rem] font-bold uppercase tracking-[0.1em] px-3 py-[0.3rem]">{cause.tag}</div>
              </div>
              <div className="flex flex-col flex-grow p-[clamp(1.5rem,3vw,2.5rem)]">
                <h3 className="mb-3 text-navy">{cause.title}</h3>
                <p className="text-[rgba(11,20,37,0.7)] text-[0.9375rem] leading-[1.75] mb-5">{cause.description}</p>

                <Link href="/donate" className="btn btn-outline border-2 border-[rgba(11,20,37,0.15)] text-navy mt-auto w-full md:w-auto md:self-start hover:border-navy hover:bg-[rgba(11,20,37,0.04)]">
                  {cause.btnLabel} <ArrowRight />
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-16">
          <Link href="/work" className="btn btn-gold btn-lg">
            Explore All Our Work <ArrowRight />
          </Link>
        </div>
      </div>
    </section>
  );
}
