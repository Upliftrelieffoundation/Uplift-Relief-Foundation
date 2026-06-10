"use client";

import React, { useState } from "react";
import { DonateSidebar } from "./DonateSidebar";
import { SuccessScreen } from "./SuccessScreen";
import { DonationTiers } from "./DonationTiers";
import { PaymentSection } from "./PaymentSection";
import { Input } from "@/components/ui/input";

const Styles = {
  formGroup: "mb-5 flex flex-col gap-2",

  label:
    "text-[0.75rem] font-semibold uppercase tracking-[0.08em] text-white/60",

  input:
    "h-auto w-full rounded-xl border border-white/10 bg-[#152640] px-5 py-3.5 text-[0.9375rem] text-white shadow-none transition-colors placeholder:text-white/40 focus-visible:border-[#c8a24e] focus-visible:ring-0 focus-visible:ring-offset-0",

  amountInput:
    "h-auto w-full rounded-xl border border-white/10 bg-[#152640] pl-10 pr-4 py-4 text-2xl font-bold text-white shadow-none transition-colors focus-visible:border-[#c8a24e] focus-visible:ring-0 focus-visible:ring-offset-0 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none",

  sectionDivider: "my-8 border-0 border-t border-white/10",

  formGrid: "grid grid-cols-1 gap-4 md:grid-cols-2",
};

export default function DonateFormSection() {
  const [donationMode, setDonationMode] = useState<"monthly" | "onetime">(
    "monthly",
  );
  const [paymentMethod, setPaymentMethod] = useState<"upi" | "card" | "bank">(
    "upi",
  );
  const [amount, setAmount] = useState<number | "">(1200);
  const [activeTierId, setActiveTierId] = useState<string>("tier-1200");

  const [donorName, setDonorName] = useState("");
  const [donorEmail, setDonorEmail] = useState("");

  const [showSuccess, setShowSuccess] = useState(false);
  const [successMessage, setSuccessMessage] = useState({
    title: "",
    message: "",
  });

  const handleTabSwitch = (mode: "monthly" | "onetime") => {
    setDonationMode(mode);
    if (mode === "monthly") {
      setAmount(1200);
      setActiveTierId("tier-1200");
    } else {
      setAmount(2500);
      setActiveTierId("one-2500");
    }
  };

  const handleTierSelect = (amt: number, tierId: string) => {
    setAmount(amt);
    setActiveTierId(tierId);
  };

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(e.target.value ? Number(e.target.value) : "");
    setActiveTierId("");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formattedAmt = Number(amount).toLocaleString("en-IN");
    const typeText = donationMode === "monthly" ? "/month" : " (one-time)";

    setSuccessMessage({
      title: `Thank You, ${donorName.split(" ")[0]}!`,
      message: `Your contribution of ₹${formattedAmt}${typeText} was processed successfully. A 100% transparent audit receipt and tax exemption certificate will be sent to ${donorEmail} shortly.`,
    });

    setShowSuccess(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleReset = () => {
    setShowSuccess(false);
    setDonorName("");
    setDonorEmail("");
  };

  return (
    <section className="intro pt-16 bg-(--ivory)">
      <div className="wrap">
        <div className="donate-grid">
          {/* Left Column: Interactive Form Panel */}
          <div className="donate-panel reveal">
            {!showSuccess ? (
              <>
                {/* Tab Switchers */}
                <div className="donate-header-tabs">
                  <button
                    className={`donate-tab-btn ${donationMode === "monthly" ? "active" : ""}`}
                    onClick={() => handleTabSwitch("monthly")}
                  >
                    Monthly Member
                  </button>
                  <button
                    className={`donate-tab-btn ${donationMode === "onetime" ? "active" : ""}`}
                    onClick={() => handleTabSwitch("onetime")}
                  >
                    One-Time Donation
                  </button>
                </div>

                {/* Donation Form Container */}
                <div id="donation-form-section">
                  <form id="donate-form" onSubmit={handleSubmit}>
                    <DonationTiers
                      donationMode={donationMode}
                      activeTierId={activeTierId}
                      onSelectTier={handleTierSelect}
                    />

                    {/* Custom Amount Input */}
                    <div className={Styles.formGroup}>
                      <label htmlFor="donation-amount" className={Styles.label}>
                        Donation Amount (INR)
                      </label>

                      <div className="relative mt-6">
                        <span className="absolute left-5 top-1/2 -translate-y-1/2 font-['Play'] text-2xl font-bold text-gold">
                          ₹
                        </span>

                        <Input
                          type="number"
                          id="donation-amount"
                          className={Styles.amountInput}
                          value={amount}
                          min="100"
                          required
                          onChange={handleAmountChange}
                        />
                      </div>
                    </div>
                    <hr className="border-0 border-t border-(--line) my-8" />

                    {/* Contact Info */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className={Styles.formGroup}>
                        <label htmlFor="donor-name" className={Styles.label}>
                          Full Name
                        </label>

                        <Input
                          id="donor-name"
                          placeholder="Aarav Sharma"
                          className={Styles.input}
                          required
                          value={donorName}
                          onChange={(e) => setDonorName(e.target.value)}
                        />
                      </div>
                      <div className={Styles.formGroup}>
                        <label htmlFor="donor-email" className={Styles.label}>
                          Email Address
                        </label>

                        <Input
                          id="donor-email"
                          type="email"
                          placeholder="aarav@gmail.com"
                          className={Styles.input}
                          required
                          value={donorEmail}
                          onChange={(e) => setDonorEmail(e.target.value)}
                        />
                      </div>{" "}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="form-group">
                        <label htmlFor="donor-phone">Phone Number</label>
                        <input
                          type="tel"
                          id="donor-phone"
                          className="form-input"
                          placeholder="+91 98765 43210"
                          required
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="donor-pan">PAN Number </label>
                        <input
                          type="text"
                          id="donor-pan"
                          className="form-input"
                          placeholder="ABCDE1234F"
                        />
                      </div>
                    </div>

                    <PaymentSection
                      paymentMethod={paymentMethod}
                      onMethodChange={setPaymentMethod}
                    />

                    <button
                      type="submit"
                      className="btn btn-gold btn-lg w-full justify-center mt-8"
                    >
                      Complete Donation
                    </button>
                  </form>
                </div>
              </>
            ) : (
              <SuccessScreen
                title={successMessage.title}
                message={successMessage.message}
                onReset={handleReset}
              />
            )}
          </div>

          <DonateSidebar />
        </div>
      </div>
    </section>
  );
}
