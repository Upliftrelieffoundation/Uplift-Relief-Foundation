import React from "react";

interface DonationTiersProps {
  donationMode: "monthly" | "onetime";
  activeTierId: string;
  onSelectTier: (amount: number, tierId: string) => void;
}

export function DonationTiers({
  donationMode,
  activeTierId,
  onSelectTier,
}: DonationTiersProps) {
  if (donationMode === "monthly") {
    return (
      <div id="content-monthly">
        <div className="tier-grid">
          <div
            className={`tier-card ${activeTierId === "tier-500" ? "active" : ""}`}
            onClick={() => onSelectTier(500, "tier-500")}
          >
            <span className="tier-title">Animal Friend</span>
            <span className="tier-price">
              ₹500
              <span className="text-sm font-normal text-[var(--type-3)]">
                /mo
              </span>
            </span>
            <p className="tier-desc">
              Feeds a street dog with healthy meals and clean water for an entire month.
            </p>
          </div>

          <div
            className={`tier-card popular ${activeTierId === "tier-1200" ? "active" : ""}`}
            onClick={() => onSelectTier(1200, "tier-1200")}
          >
            <span className="tier-title">Child Sponsor</span>
            <span className="tier-price">
              ₹1,200
              <span className="text-sm font-normal text-[var(--type-3)]">
                /mo
              </span>
            </span>
            <p className="tier-desc">
              Sponsors full school supplies, tuition, and basic nutrition for one child.
            </p>
          </div>

          <div
            className={`tier-card ${activeTierId === "tier-3000" ? "active" : ""}`}
            onClick={() => onSelectTier(3000, "tier-3000")}
          >
            <span className="tier-title">Rescue Hero</span>
            <span className="tier-price">
              ₹3,000
              <span className="text-sm font-normal text-[var(--type-3)]">
                /mo
              </span>
            </span>
            <p className="tier-desc">
              Sponsors life-saving surgeries for injured dogs and digital tutoring for kids.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div id="content-onetime">
      <div className="tier-grid">
        <div
          className={`tier-card ${activeTierId === "one-1000" ? "active" : ""}`}
          onClick={() => onSelectTier(1000, "one-1000")}
        >
          <span className="tier-title">Sponsor Meal</span>
          <span className="tier-price">₹1,000</span>
          <p className="tier-desc">Feeds a street pack during night drives.</p>
        </div>
        <div
          className={`tier-card popular ${activeTierId === "one-2500" ? "active" : ""}`}
          onClick={() => onSelectTier(2500, "one-2500")}
        >
          <span className="tier-title">Rescue Mission</span>
          <span className="tier-price">₹2,500</span>
          <p className="tier-desc">Covers vehicle dispatch &amp; emergency care.</p>
        </div>
        <div
          className={`tier-card ${activeTierId === "one-5000" ? "active" : ""}`}
          onClick={() => onSelectTier(5000, "one-5000")}
        >
          <span className="tier-title">Sponsor Center</span>
          <span className="tier-price">₹5,000</span>
          <p className="tier-desc">Supplies books &amp; study materials for center.</p>
        </div>
      </div>
    </div>
  );
}
