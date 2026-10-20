"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ArrowRight, Info, X, Heart, Target, Calendar, MapPin } from "lucide-react";

type CaseDetail = {
  name: string;
  location: string;
  rescueDate: string;
  story: string;
  condition: string;
  fundsRaised: number;
  fundGoal: number;
  status: string;
  img: string;
  imgAlt: string;
};

type Cause = {
  tag: string;
  title: string;
  description: string;
  img: string;
  imgAlt: string;
  btnLabel: string;
  revealDelay: string;
  modal: CaseDetail;
};

const causes: Cause[] = [
  {
    tag: "Animal Welfare",
    title: "Save an Injured Animal",
    description:
      "Every day, dozens of street animals suffer from accidents, abuse, and disease. We provide 24/7 emergency rescue, life-saving surgeries, and safe rehabilitation.",
    img: "/images/a4e7ba39-928a-4f3d-8e86-daaabe1a7ae7.jpg",
    imgAlt: "Dog with fracture being rescued",
    btnLabel: "Feed a Street Animal",
    revealDelay: "",
    modal: {
      name: "Bruno",
      location: "Maharashtra, India",
      rescueDate: "12 October 2026",
      story:
        "Bruno was found on the roadside with a severe leg fracture after being hit by a vehicle. Our rescue team responded within 30 minutes, administered first aid, and transported him to our vet partner. He underwent a successful bone-repair surgery and is now recovering in our shelter, learning to trust humans again.",
      condition: "Fractured hind leg - post-surgery recovery",
      fundsRaised: 8400,
      fundGoal: 12000,
      status: "Recovering",
      img: "/images/a4e7ba39-928a-4f3d-8e86-daaabe1a7ae7.jpg",
      imgAlt: "Bruno the dog recovering",
    },
  },
  {
    tag: "Child Education",
    title: "Sponsor a Child's Education",
    description:
      "Poverty forces brilliant minds out of school. We provide free tuition, supplies, and mentorship so every child gets a fair start.",
    img: "/images/Joyful Schoolgirls Celebrating Together.png",
    imgAlt: "Joyful schoolgirls celebrating",
    btnLabel: "Sponsor a Student",
    revealDelay: " reveal-d1",
    modal: {
      name: "Asha and Friends",
      location: "Maharashtra, India",
      rescueDate: "January 2026",
      story:
        "Asha dropped out of school at age 9 when her family could not afford books or uniforms. Uplift Relief Foundation enrolled her in our free education centre, provided all materials, and paired her with a mentor. Today, Asha leads her class in mathematics and dreams of becoming a doctor. She is one of 50+ children we have brought back to education this year.",
      condition: "Enrolled - Grade 5, Top Performer",
      fundsRaised: 34500,
      fundGoal: 50000,
      status: "Active",
      img: "/images/Joyful Schoolgirls Celebrating Together.png",
      imgAlt: "Asha and friends at education centre",
    },
  },
];

export default function CausesSection() {
  const [activeModal, setActiveModal] = useState<CaseDetail | null>(null);

  const pct = activeModal
    ? Math.min(100, Math.round((activeModal.fundsRaised / activeModal.fundGoal) * 100))
    : 0;

  return (
    <>
      <section className="bg-ivory max-lg:px-5 max-lg:py-10 lg:px-10 lg:py-20" id="causes">
        <div className="md:mx-20 lg:mx-20">
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
              <div
                className={"flex flex-col relative bg-white overflow-hidden border border-[rgba(11,20,37,0.06)] rounded-3xl transition-all duration-[0.6s] ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-2 hover:shadow-[0_24px_64px_rgba(11,20,37,0.08)] group reveal" + cause.revealDelay}
                key={i}
              >
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
                  <div className="absolute top-4 left-4 bg-navy text-white rounded-full text-[0.625rem] font-bold uppercase tracking-[0.1em] px-3 py-[0.3rem]">
                    {cause.tag}
                  </div>
                </div>
                <div className="flex flex-col flex-grow p-[clamp(1.5rem,3vw,2.5rem)]">
                  <h3 className="mb-3 text-navy">{cause.title}</h3>
                  <p className="text-[rgba(11,20,37,0.7)] text-[0.9375rem] leading-[1.75] mb-5">
                    {cause.description}
                  </p>
                  <div className="mt-auto flex flex-wrap gap-3">
                    <Link
                      href="/donate"
                      className="btn btn-outline border-2 border-[rgba(11,20,37,0.15)] text-navy hover:border-navy hover:bg-[rgba(11,20,37,0.04)]"
                    >
                      {cause.btnLabel} <ArrowRight />
                    </Link>
                    <button
                      onClick={() => setActiveModal(cause.modal)}
                      className="btn btn-ghost border border-[rgba(11,20,37,0.12)] text-navy/70 hover:text-navy hover:border-navy hover:bg-[rgba(11,20,37,0.04)] gap-1.5 cursor-pointer"
                    >
                      <Info className="w-4 h-4" />
                      More Info
                    </button>
                  </div>
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

      {activeModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ backgroundColor: "rgba(11,20,37,0.75)", backdropFilter: "blur(6px)" }}
          onClick={() => setActiveModal(null)}
        >
          <div
            className="relative bg-white rounded-3xl overflow-hidden max-w-2xl w-full shadow-[0_32px_80px_rgba(11,20,37,0.25)]"
            style={{ maxHeight: "90vh", overflowY: "auto" }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveModal(null)}
              className="absolute top-4 right-4 z-10 w-9 h-9 flex items-center justify-center rounded-full bg-[rgba(11,20,37,0.08)] hover:bg-[rgba(11,20,37,0.15)] transition-colors cursor-pointer"
            >
              <X className="w-4 h-4 text-navy" />
            </button>

            <div className="relative h-56 overflow-hidden">
              <Image
                src={activeModal.img}
                alt={activeModal.imgAlt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 672px"
              />
              <div
                className="absolute inset-0"
                style={{ background: "linear-gradient(to top, rgba(11,20,37,0.6) 0%, transparent 60%)" }}
              />
              <div className="absolute bottom-4 left-6">
                <span className="inline-block bg-white/90 text-navy text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                  {activeModal.status}
                </span>
              </div>
            </div>

            <div className="p-7">
              <h2 className="text-navy text-2xl font-bold mb-1">{activeModal.name}</h2>
              <div className="flex flex-wrap gap-4 mb-5 text-sm text-[rgba(11,20,37,0.55)]">
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5" /> {activeModal.location}
                </span>
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5" /> {activeModal.rescueDate}
                </span>
              </div>
              <div className="inline-flex items-center gap-2 bg-[rgba(11,20,37,0.05)] rounded-xl px-4 py-2 mb-5 text-sm font-medium text-navy">
                <Heart className="w-4 h-4 text-gold-deep" />
                {activeModal.condition}
              </div>
              <p className="text-[rgba(11,20,37,0.7)] text-[0.9375rem] leading-[1.8] mb-6">
                {activeModal.story}
              </p>
              <div className="bg-[rgba(11,20,37,0.03)] border border-[rgba(11,20,37,0.07)] rounded-2xl p-5 mb-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="flex items-center gap-1.5 text-sm font-semibold text-navy">
                    <Target className="w-4 h-4 text-gold-deep" /> Funds Raised
                  </span>
                  <span className="text-sm font-bold text-gold-deep">{pct}%</span>
                </div>
                <div className="h-2.5 rounded-full bg-[rgba(11,20,37,0.08)] overflow-hidden mb-3">
                  <div
                    className="h-full rounded-full"
                    style={{ width: pct + "%", background: "linear-gradient(90deg, #c8a24e, #ddb963)", transition: "width 0.7s ease" }}
                  />
                </div>
                <div className="flex justify-between text-sm">
                  <span className="font-bold text-navy">
                    Rs.{activeModal.fundsRaised.toLocaleString("en-IN")}
                    <span className="font-normal text-[rgba(11,20,37,0.45)]"> raised</span>
                  </span>
                  <span className="text-[rgba(11,20,37,0.45)]">
                    Goal: Rs.{activeModal.fundGoal.toLocaleString("en-IN")}
                  </span>
                </div>
              </div>
              <Link
                href="/donate"
                className="btn btn-gold w-full justify-center"
                onClick={() => setActiveModal(null)}
              >
                Donate to Help <ArrowRight />
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}