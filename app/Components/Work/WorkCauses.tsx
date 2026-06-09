import Image from "next/image";
import Link from "next/link";
import { CheckCheck, ArrowRight } from "lucide-react";

export default function WorkCausesSection() {
  return (
    <section className="causes" id="causes">
      <div className="wrap">
        <div className="causes-header reveal">
          <span className="eyebrow">Where Your Support Goes</span>
          <h2>
            Two Urgent Causes.<br />
            <em>One Heart.</em>
          </h2>
        </div>
        <div className="causes-row">
          <div className="cause reveal">
            <div className="cause-img">
              <Image
                src="/images/dog_rescue.png"
                alt="Street dog rescue"
                width={600}
                height={400}
              />
              <div className="cause-tag">Animal Welfare</div>
            </div>
            <div className="cause-body">
              <h3>Save an Injured Animal</h3>
              <p>
                Every day, dozens of street dogs suffer from accidents, abuse,
                and disease. We provide 24/7 emergency rescue, life-saving
                surgeries, and safe rehabilitation.
              </p>
              <ul className="cause-checks">
                <li>
                  <CheckCheck />
                  Emergency medical response
                </li>
                <li>
                  <CheckCheck />
                  Anti-rabies vaccination drives
                </li>
                <li>
                  <CheckCheck />
                  Adoption &amp; foster care
                </li>
              </ul>
              <Link href="/donate" className="btn btn-outline">
                Feed a Street Animal{" "}
                <ArrowRight />
              </Link>
            </div>
          </div>
          <div className="cause reveal reveal-d1">
            <div className="cause-img">
              <Image
                src="/images/children_class.png"
                alt="Free education centre"
                width={600}
                height={400}
              />
              <div className="cause-tag">Child Education</div>
            </div>
            <div className="cause-body">
              <h3>Sponsor a Child&apos;s Education</h3>
              <p>
                Poverty forces brilliant minds out of school. We provide free
                tuition, supplies, and mentorship so every child gets a fair start.
              </p>
              <ul className="cause-checks">
                <li>
                  <CheckCheck />
                  Free learning centres
                </li>
                <li>
                  <CheckCheck />
                  Books, uniforms &amp; digital literacy
                </li>
                <li>
                  <CheckCheck />
                  Career mentorship
                </li>
              </ul>
              <Link href="/donate" className="btn btn-outline">
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
