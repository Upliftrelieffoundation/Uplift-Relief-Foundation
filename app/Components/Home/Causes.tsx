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
    <section className="causes" id="causes">
      <div className="wrap">
        <div className="causes-header reveal">
          <span className="eyebrow">Where Your Support Goes</span>
          <h2>
            Two Urgent Causes.
            <br />
            <em>One Heart.</em>
          </h2>
        </div>
        <div className="causes-row">
          {causes.map((cause, i) => (
            <div className={`cause reveal${cause.revealDelay}`} key={i}>
              <div className="cause-img">
                <Image
                  src={cause.img}
                  alt={cause.imgAlt}
                  width={600}
                  height={400}
                />
                <div className="cause-tag">{cause.tag}</div>
              </div>
              <div className="cause-body">
                <h3>{cause.title}</h3>
                <p>{cause.description}</p>

                <Link href="/donate" className="btn btn-outline">
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
