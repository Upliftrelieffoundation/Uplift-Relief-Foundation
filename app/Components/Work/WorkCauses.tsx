import Image from "next/image";
import Link from "next/link";
import { CheckCheck, ArrowRight, Info } from "lucide-react";

const causes = [
  {
    id: "animal",
    badge: "Animal Welfare",
    image: "/images/dog_rescue.png",
    alt: "Street dog rescue",
    title: "Save an Injured Animal",
    description:
      "Every day, dozens of street animals across India suffer from road accidents, abuse, and preventable disease. Our 24/7 rescue team responds to emergency calls, providing on-site first aid, transport to veterinary partners, life-saving surgeries, and long-term rehabilitation. We also run regular anti-rabies vaccination camps and promote adoption over purchase.",
    points: [
      "Emergency medical response",
      "Anti-rabies vaccination drives",
      "Adoption & foster care",
    ],
    cta: "Support Animal Rescue",
    info: "/work#animal",
  },
  {
    id: "education",
    badge: "Child Education",
    image: "/images/children_class.png",
    alt: "Free education centre",
    title: "Sponsor a Child's Education",
    description:
      "Poverty forces brilliant young minds out of school across India's underserved communities. Our free education centres provide daily tuition, school supplies, uniforms, nutritious meals, and digital literacy classes. We also offer one-on-one mentorship and career guidance to help each child build a path out of poverty.",
    points: [
      "Free learning centres",
      "Books, uniforms & digital literacy",
      "Career mentorship",
    ],
    cta: "Sponsor a Child Today",
    info: "/work#education",
  },
];

export default function WorkCausesSection() {
  return (
    <section
      className="bg-ivory max-lg:px-5 max-lg:py-10 lg:px-10 lg:py-20"
      id="causes"
    >
      <div className="md:mx-20 lg:mx-20">
        <div className="mb-[clamp(3rem,5vw,4rem)] reveal">
          <span className="eyebrow text-gold-deep">
            Where Your Support Goes
          </span>
          <h2 className="text-navy mb-6">
            Two Urgent Causes.
            <br />
            <em>One Heart.</em>
          </h2>
          <p className="text-[rgba(11,20,37,0.7)] text-[0.9375rem] leading-[1.75] max-w-180">
            Uplift Relief Foundation runs two core programs across India: a
            24/7 street animal rescue and rehabilitation operation, and free
            education centres for children from slums and low-income families.
            Every donation — monthly or one-time — funds life-saving medical
            treatment, school supplies, nutritious meals, and skilled
            mentorship.
          </p>
        </div>
        <div className="grid max-lg:grid-cols-1 lg:grid-cols-2 gap-6">
          {causes.map((cause, index) => (
            <div
              key={cause.id}
              className={`flex flex-col relative bg-white overflow-hidden border border-[rgba(11,20,37,0.06)] rounded-3xl transition-all duration-[0.6s] ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-2 hover:shadow-[0_24px_64px_rgba(11,20,37,0.08)] group reveal ${index === 1 ? "reveal-d1" : ""
                }`}
            >
              <div className="relative overflow-hidden">
                <Image
                  src={cause.image}
                  alt={cause.alt}
                  width={600}
                  height={400}
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="w-full object-cover h-[clamp(220px,22vw,320px)] transition-transform duration-[0.7s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03]"
                />

                <div className="absolute top-4 left-4 bg-navy text-white rounded-full text-[0.625rem] font-bold uppercase tracking-[0.1em] px-3 py-[0.3rem]">
                  {cause.badge}
                </div>
              </div>

              <div className="flex flex-col flex-grow p-[clamp(1.5rem,3vw,2.5rem)]">
                <h3 className="mb-3 text-navy">{cause.title}</h3>

                <p className="text-[rgba(11,20,37,0.7)] text-[0.9375rem] leading-[1.75] mb-5">
                  {cause.description}
                </p>

                <ul className="list-none mb-7 flex flex-col gap-2">
                  {cause.points.map((point) => (
                    <li
                      key={point}
                      className="flex items-center gap-2.5 text-[0.875rem] font-medium text-navy"
                    >
                      <CheckCheck className="w-4 h-4 text-gold-deep shrink-0" />
                      {point}
                    </li>
                  ))}
                </ul>

                <div className="mt-auto flex flex-wrap gap-3">
                  <Link
                    href="/donate"
                    className="btn btn-outline border-[rgba(11,20,37,0.15)] text-navy hover:border-navy hover:bg-[rgba(11,20,37,0.04)]"
                  >
                    {cause.cta}
                    <ArrowRight />
                  </Link>
                  <Link
                    href={cause.info}
                    className="btn btn-ghost border border-[rgba(11,20,37,0.10)] text-navy/70 hover:text-navy hover:border-navy hover:bg-[rgba(11,20,37,0.04)] gap-1.5"
                  >
                    <Info className="w-4 h-4" />
                    More Info
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>{" "}
      </div>
    </section>
  );
}
