import Image from "next/image";
import Link from "next/link";
import { CheckCheck, ArrowRight } from "lucide-react";

export default function WorkCausesSection() {
  return (
    <section className="bg-ivory max-lg:px-5 max-lg:py-10 lg:px-10 lg:py-20" id="causes">
      <div className="wrap">
        <div className="mb-[clamp(3rem,5vw,4rem)] reveal">
          <span className="eyebrow text-gold-deep">Where Your Support Goes</span>
          <h2 className="text-navy mb-6">
            Two Urgent Causes.<br />
            <em>One Heart.</em>
          </h2>
          <p className="text-[rgba(11,20,37,0.7)] text-[0.9375rem] leading-[1.75] max-w-180">
            Uplift Relief Foundation runs two core programs in Nagpur, India: a 24/7 
            street animal rescue and rehabilitation operation, and free education centres 
            for children from slums and low-income families. Every donation — monthly or 
            one-time — funds life-saving medical treatment, school supplies, nutritious 
            meals, and skilled mentorship.
          </p>
        </div>
        <div className="grid max-lg:grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="flex flex-col relative bg-white overflow-hidden border border-[rgba(11,20,37,0.06)] rounded-3xl transition-all duration-[0.6s] ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-2 hover:shadow-[0_24px_64px_rgba(11,20,37,0.08)] group reveal">
            <div className="relative overflow-hidden">
              <Image
                src="/images/dog_rescue.png"
                alt="Street dog rescue"
                width={600}
                height={400}
                className="w-full object-cover h-[clamp(220px,22vw,320px)] transition-transform duration-[0.7s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03]"
              />
              <div className="absolute top-4 left-4 bg-navy text-white rounded-full text-[0.625rem] font-bold uppercase tracking-[0.1em] px-3 py-[0.3rem]">Animal Welfare</div>
            </div>
            <div className="flex flex-col flex-grow p-[clamp(1.5rem,3vw,2.5rem)]">
              <h3 className="mb-3 text-navy">Save an Injured Animal</h3>
              <p className="text-[rgba(11,20,37,0.7)] text-[0.9375rem] leading-[1.75] mb-5">
                Every day, dozens of street dogs across Nagpur suffer from road accidents, 
                abuse, and preventable disease. Our 24/7 rescue team responds to emergency 
                calls, providing on-site first aid, transport to veterinary partners, 
                life-saving surgeries, and long-term rehabilitation. We also run regular 
                anti-rabies vaccination camps and promote adoption over purchase.
              </p>
              <ul className="list-none mb-7 flex flex-col gap-2">
                <li className="flex items-center gap-2.5 text-[0.875rem] font-medium text-navy">
                  <CheckCheck className="w-4 h-4 text-gold-deep shrink-0" />
                  Emergency medical response
                </li>
                <li className="flex items-center gap-2.5 text-[0.875rem] font-medium text-navy">
                  <CheckCheck className="w-4 h-4 text-gold-deep shrink-0" />
                  Anti-rabies vaccination drives
                </li>
                <li className="flex items-center gap-2.5 text-[0.875rem] font-medium text-navy">
                  <CheckCheck className="w-4 h-4 text-gold-deep shrink-0" />
                  Adoption &amp; foster care
                </li>
              </ul>
              <Link href="/donate" className="btn btn-outline border-[rgba(11,20,37,0.15)] text-navy mt-auto self-start hover:border-navy hover:bg-[rgba(11,20,37,0.04)]">
                Feed a Street Animal{" "}
                <ArrowRight />
              </Link>
            </div>
          </div>
          <div className="flex flex-col relative bg-white overflow-hidden border border-[rgba(11,20,37,0.06)] rounded-3xl transition-all duration-[0.6s] ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-2 hover:shadow-[0_24px_64px_rgba(11,20,37,0.08)] group reveal reveal-d1">
            <div className="relative overflow-hidden">
              <Image
                src="/images/children_class.png"
                alt="Free education centre"
                width={600}
                height={400}
                className="w-full object-cover h-[clamp(220px,22vw,320px)] transition-transform duration-[0.7s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03]"
              />
              <div className="absolute top-4 left-4 bg-navy text-white rounded-full text-[0.625rem] font-bold uppercase tracking-[0.1em] px-3 py-[0.3rem]">Child Education</div>
            </div>
            <div className="flex flex-col flex-grow p-[clamp(1.5rem,3vw,2.5rem)]">
              <h3 className="mb-3 text-navy">Sponsor a Child&apos;s Education</h3>
              <p className="text-[rgba(11,20,37,0.7)] text-[0.9375rem] leading-[1.75] mb-5">
                Poverty forces brilliant young minds out of school across Nagpur&apos;s 
                underserved communities. Our free education centres provide daily tuition, 
                school supplies, uniforms, nutritious meals, and digital literacy classes. 
                We also offer one-on-one mentorship and career guidance to help each child 
                build a path out of poverty.
              </p>
              <ul className="list-none mb-7 flex flex-col gap-2">
                <li className="flex items-center gap-2.5 text-[0.875rem] font-medium text-navy">
                  <CheckCheck className="w-4 h-4 text-gold-deep shrink-0" />
                  Free learning centres
                </li>
                <li className="flex items-center gap-2.5 text-[0.875rem] font-medium text-navy">
                  <CheckCheck className="w-4 h-4 text-gold-deep shrink-0" />
                  Books, uniforms &amp; digital literacy
                </li>
                <li className="flex items-center gap-2.5 text-[0.875rem] font-medium text-navy">
                  <CheckCheck className="w-4 h-4 text-gold-deep shrink-0" />
                  Career mentorship
                </li>
              </ul>
              <Link href="/donate" className="btn btn-outline border-[rgba(11,20,37,0.15)] text-navy mt-auto self-start hover:border-navy hover:bg-[rgba(11,20,37,0.04)]">
                Sponsor a Student{" "}
                <ArrowRight />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
