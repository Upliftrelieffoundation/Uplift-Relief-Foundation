import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function StoriesList() {
  return (
    <section className="stories" id="stories">
      <div className="md:mx-20 lg:mx-20">
        <div className="stories-header reveal">
          <span className="eyebrow">Stories from the Field</span>
          <h2>
            From Suffering to <em>Second Chances</em>
          </h2>
          <p className="body-lg">
            Every image is a life that found hope because someone chose to act.
          </p>
        </div>
        <div className="stories-mosaic">
          <div className="s-card s-card--featured reveal">
            <Image
              src="/images/bella.jpeg"
              alt="Bella the rescued dog"
              width={800}
              height={800}
              loading="lazy"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="s-body">
              <span className="s-tag">Daily feeding · 100+ dogs</span>
              <h3>Every Day, A Meal. Every Day, A Little Hope.</h3>
              <p>
                It takes ₹4,500 every day to feed 100+ street dogs. Your
                contribution can help ensure that no hungry paw is left behind.
                Sponsor a meal for a day or become a regular feeding sponsor and
                help us keep their bowls full, every single day.
              </p>
              <Link href="/donate" className="s-link">
                Become a Feeding Sponsor{" "}
                <ArrowRight />
              </Link>
            </div>
          </div>
          <div className="s-card reveal reveal-d1">
            <Image
              src="/images/student.jpeg"
              alt="Student learning at centre"
              width={600}
              height={400}
              loading="lazy"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="s-body">
              <span className="s-tag">Child Nutrition · Education</span>
              <h3>Sponsor a Meal. Nourish a Young Mind.</h3>
              <p>
                Every child deserves access to nutritious meals and the
                opportunity to learn, grow, and dream. With just ₹2,500 per
                student per week, you can help provide essential meal support
                and make a meaningful difference in a child&apos;s life.
              </p>
              <Link href="/donate" className="s-link">
                Become a Meal Sponsor{" "}
                <ArrowRight />
              </Link>
            </div>
          </div>
          <div className="s-card reveal reveal-d2">
            <Image
              src="/images/radium belt.jpeg"
              alt="Street dog wearing reflective radium belt"
              width={600}
              height={400}
              loading="lazy"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="s-body">
              <span className="s-tag">Accident Prevention · Night Safety</span>
              <h3>Make Them Shine. Help Them Stay Safe.</h3>
              <p>
                Every week, we aim to distribute 1,000+ reflective radium belts to
                street animals, helping them stay visible to drivers after dark
                and reducing the risk of road accidents. With a weekly budget of
                ₹75,000, your support can help protect vulnerable animals and make
                our streets safer for every paw.
              </p>
              <Link href="/donate" className="s-link">
                Sponsor Radium Belts{" "}
                <ArrowRight />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
