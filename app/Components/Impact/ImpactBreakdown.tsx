export default function ImpactBreakdownSection() {
  return (
    <section className="breakdown">
      <div className="md:mx-20 lg:mx-20">
        <div className="breakdown-inner">
          <div className="breakdown-head reveal">
            <span className="eyebrow">Where Your Money Goes</span>
            <h2>
              Every Rupee, <em>Accounted For</em>
            </h2>
            <p className="body-lg">
              Radical transparency. Here&apos;s exactly how your donation is
              allocated.
            </p>
          </div>
          <div className="breakdown-cards">
            <div className="bd-card reveal">
              <div className="bd-pct">72%</div>
              <h3 className="text-navy">Direct Field Work</h3>
              <p>
                Rescue operations, veterinary care, educational supplies,
                scholarships.
              </p>
            </div>
            <div className="bd-card reveal reveal-d1">
              <div className="bd-pct">18%</div>
              <h3 className="text-navy">Programs &amp; Growth</h3>
              <p>
                New centres, volunteer training, outreach, awareness campaigns.
              </p>
            </div>
            <div className="bd-card reveal reveal-d2">
              <div className="bd-pct">10%</div>
              <h3 className="text-navy">Operations</h3>
              <p>Admin, legal compliance, auditing, technology.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
