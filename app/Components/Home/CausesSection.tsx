import Image from "next/image";
import Link from "next/link";

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

              <Link href="/donate" className="btn btn-outline">
                Feed a Street Animal{" "}
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
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
                tuition, supplies, and mentorship so every child gets a fair
                start.
              </p>

              <Link href="/donate" className="btn btn-outline">
                Sponsor a Student{" "}
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
        <div style={{ textAlign: "center", marginTop: "4rem" }}>
          <Link href="/work" className="btn btn-gold btn-lg">
            Explore All Our Work{" "}
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
