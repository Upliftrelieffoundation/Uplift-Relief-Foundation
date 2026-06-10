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
              src="/images/story_feeding.png"
              alt="Evening feeding drive"
              width={800}
              height={800}
              loading="lazy"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="s-body">
              <span className="s-tag">Animal Rescue · Apr 2026</span>
              <h3>A Second Chance for Bella</h3>
              <p>
                Found with severe malnutrition and a fractured leg, Bella was
                nursed back to health over 3 months. Today she lives in a
                loving home — healthy, happy, and safe.
              </p>
              <Link href="#" className="s-link">
                Read Full Story{" "}
                <ArrowRight />
              </Link>
            </div>
          </div>
          <div className="s-card reveal reveal-d1">
            <Image
              src="/images/hero_children.png"
              alt="Children at learning centre"
              width={600}
              height={400}
              loading="lazy"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="s-body">
              <span className="s-tag">Education · Mar 2026</span>
              <h3>Rohan&apos;s Journey to Engineering</h3>
              <p>
                After joining our free tuition centre in 2026, Rohan secured a
                scholarship for engineering. A cycle of poverty — broken forever.
              </p>
              <Link href="#" className="s-link">
                Read Full Story{" "}
                <ArrowRight />
              </Link>
            </div>
          </div>
          <div className="s-card reveal reveal-d2">
            <Image
              src="/images/hero_dog.png"
              alt="Rescued puppy"
              width={600}
              height={400}
              loading="lazy"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="s-body">
              <span className="s-tag">Rescue · Feb 2026</span>
              <h3>Midnight Rescue: 5 Puppies Saved</h3>
              <p>
                Our team rushed out at 2 AM in monsoon rains. All 5 puppies — safe,
                vaccinated, and thriving.
              </p>
              <Link href="#" className="s-link">
                Read Full Story{" "}
                <ArrowRight />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
