interface DonationTiersProps {
  donationMode: "monthly" | "onetime";
  activeTierId: string;
  onSelectTier: (amount: number, tierId: string) => void;
}
const tierCardBase =
  "bg-[#152640] border-2 border-transparent rounded-[20px] text-center cursor-pointer flex flex-col justify-start relative p-5 lg:min-h-[260px] transition-all duration-[0.35s] ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1 hover:border-gold/60";
const tierCardActive = "border-gold bg-[rgba(200,162,78,0.03)]";
const tierCardPopular =
  "border-gold-deep before:content-['Most_Popular'] before:absolute before:-top-3 before:left-1/2 before:-translate-x-1/2 before:bg-gold-deep before:text-white before:rounded-full before:font-bold before:uppercase before:text-[0.625rem] before:tracking-[0.1em] before:px-4 before:py-1 before:whitespace-nowrap before:shadow-[0_4px_12px_rgba(166,132,46,0.4)] before:z-10";

const tierTitle =
  "text-[0.9375rem] font-bold text-white uppercase tracking-[0.05em]";
const tierPrice =
  "text-gold-bright font-bold leading-none font-heading text-[2.25rem] my-4 flex items-end justify-center gap-1 whitespace-nowrap";
const tierDesc = "text-[0.875rem] text-white/60 leading-relaxed mt-3 flex-grow";

export function DonationTiers({
  donationMode,
  activeTierId,
  onSelectTier,
}: DonationTiersProps) {
  if (donationMode === "monthly") {
    return (
      <div id="content-monthly">
        <div className="grid gap-5 mb-8 grid-cols-1 md:grid-cols-3">
          <div
            className={`${tierCardBase} ${activeTierId === "tier-500" ? tierCardActive : ""}`}
            onClick={() => onSelectTier(500, "tier-500")}
          >
            <span className={tierTitle}>Animal Friend</span>
            <span className={tierPrice}>
              <span>₹500</span>
              <span className="text-sm font-normal text-type-3 mb-1">/mo</span>
            </span>
            <p className={tierDesc}>
              Feeds a street dog with healthy meals and clean water for an
              entire month.
            </p>
          </div>

          <div
            className={`${tierCardBase} ${tierCardPopular} ${activeTierId === "tier-1200" ? tierCardActive : ""}`}
            onClick={() => onSelectTier(1200, "tier-1200")}
          >
            <span className={tierTitle}>Child Sponsor</span>
            <span className={tierPrice}>
              ₹1,200
              <span className="text-sm font-normal text-type-3">/mo</span>
            </span>
            <p className={tierDesc}>
              Sponsors full school supplies, tuition, and basic nutrition for
              one child.
            </p>
          </div>

          <div
            className={`${tierCardBase} ${activeTierId === "tier-3000" ? tierCardActive : ""}`}
            onClick={() => onSelectTier(3000, "tier-3000")}
          >
            <span className={tierTitle}>Rescue Hero</span>
            <span className={tierPrice}>
              ₹3,000
              <span className="text-sm font-normal text-type-3">/mo</span>
            </span>
            <p className={tierDesc}>
              Sponsors life-saving surgeries for injured dogs and digital
              tutoring for kids.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div id="content-onetime">
      <div className="grid gap-5 mb-8 grid-cols-1 md:grid-cols-3">
        <div
          className={`${tierCardBase} ${activeTierId === "one-1000" ? tierCardActive : ""}`}
          onClick={() => onSelectTier(1000, "one-1000")}
        >
          <span className={tierTitle}>Sponsor Meal</span>
          <span className={tierPrice}>₹1,000</span>
          <p className={tierDesc}>Feeds a street pack during night drives.</p>
        </div>
        <div
          className={`${tierCardBase} ${tierCardPopular} ${activeTierId === "one-2500" ? tierCardActive : ""}`}
          onClick={() => onSelectTier(2500, "one-2500")}
        >
          <span className={tierTitle}>Rescue Mission</span>
          <span className={tierPrice}>₹2,500</span>
          <p className={tierDesc}>
            Covers vehicle dispatch &amp; emergency care.
          </p>
        </div>
        <div
          className={`${tierCardBase} ${activeTierId === "one-5000" ? tierCardActive : ""}`}
          onClick={() => onSelectTier(5000, "one-5000")}
        >
          <span className={tierTitle}>Sponsor Center</span>
          <span className={tierPrice}>₹5,000</span>
          <p className={tierDesc}>
            Supplies books &amp; study materials for center.
          </p>
        </div>
      </div>
    </div>
  );
}
