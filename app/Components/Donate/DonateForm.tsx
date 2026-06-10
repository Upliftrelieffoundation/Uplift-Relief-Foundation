"use client";

import React, { useState } from "react";
import { z } from "zod";
import { paymentSchema, contactSchema } from "@/app/lib/validations";
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

  const [cardNumber, setCardNumber] = useState("");
  const [cardExpiry, setCardExpiry] = useState("");
  const [cardCvv, setCardCvv] = useState("");
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});

  const clearError = (field: string) => {
    if (fieldErrors[field]) {
      setFieldErrors((prev) => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
    }
  };

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

    const errors: Record<string, string> = {};

    const contactResult = contactSchema.safeParse({
      name: donorName,
      email: donorEmail,
      phone: (document.getElementById("donor-phone") as HTMLInputElement)
        ?.value,
      pan: (document.getElementById("donor-pan") as HTMLInputElement)?.value,
    });
    if (!contactResult.success) {
      const flat = z.flattenError(contactResult.error);
      for (const [key, msgs] of Object.entries(flat.fieldErrors)) {
        if (msgs && msgs.length) errors[key] = msgs[0];
      }
    }

    if (paymentMethod === "card") {
      const paymentResult = paymentSchema.safeParse({
        cardNumber,
        expiry: cardExpiry,
        cvv: cardCvv,
      });
      if (!paymentResult.success) {
        const flat = z.flattenError(paymentResult.error);
        for (const [key, msgs] of Object.entries(flat.fieldErrors)) {
          if (msgs && msgs.length) errors[key] = msgs[0];
        }
      }
    }

    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors);
      return;
    }

    setFieldErrors({});

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
    <section className="bg-bg max-lg:px-5 max-lg:py-10 lg:px-10 lg:py-20">
      <div className="wrap">
        <div className="grid items-start mt-12 gap-3 max-lg:grid-cols-1 lg:grid-cols-[2.4fr_1fr] max-lg:gap-8">
          {/* Left Column: Interactive Form Panel */}
          <div className="bg-bg-card border border-line rounded-3xl p-[clamp(1.5rem,4vw,3rem)] shadow-[0_12px_48px_rgba(0,0,0,0.15)] reveal">
            {!showSuccess ? (
              <>
                {/* Tab Switchers */}
                <div className="flex gap-2 bg-bg p-1.5 rounded-full mb-10 border border-white/10">
                  <button
                    type="button"
                    className={`flex-1 rounded-full p-3.5 text-center font-semibold text-[0.9375rem] transition-all duration-300 ${donationMode === "monthly"
                        ? "bg-gold text-bg shadow-[0_4px_12px_rgba(200,162,78,0.25)]"
                        : "bg-transparent text-white/60 hover:text-white"
                      }`}
                    onClick={() => handleTabSwitch("monthly")}
                  >
                    Monthly Member
                  </button>
                  <button
                    type="button"
                    className={`flex-1 rounded-full p-3.5 text-center font-semibold text-[0.9375rem] transition-all duration-300 ${donationMode === "onetime"
                        ? "bg-gold text-bg shadow-[0_4px_12px_rgba(200,162,78,0.25)]"
                        : "bg-transparent text-white/60 hover:text-white"
                      }`}
                    onClick={() => handleTabSwitch("onetime")}
                  >
                    One-Time Donation
                  </button>{" "}
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
                      <div className="flex flex-col gap-2 mb-5">
                        <label
                          htmlFor="donor-phone"
                          className="text-[0.75rem] font-semibold uppercase tracking-[0.08em] text-white/60"
                        >
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="donor-phone"
                          className="bg-bg-elevated border border-white/10 rounded-xl text-white outline-none font-sans text-[0.9375rem] p-3.5 px-5 transition-colors duration-300 focus:border-gold"
                          placeholder="+91 98765 43210"
                          required
                        />
                      </div>
                      <div className="flex flex-col gap-2 mb-5">
                        <label
                          htmlFor="donor-pan"
                          className="text-[0.75rem] font-semibold uppercase tracking-[0.08em] text-white/60"
                        >
                          PAN Number{" "}
                        </label>
                        <input
                          type="text"
                          id="donor-pan"
                          className="bg-bg-elevated border border-white/10 rounded-xl text-white outline-none font-sans text-[0.9375rem] p-3.5 px-5 transition-colors duration-300 focus:border-gold"
                          placeholder="ABCDE1234F"
                        />
                      </div>
                    </div>

                    <PaymentSection
                      paymentMethod={paymentMethod}
                      onMethodChange={setPaymentMethod}
                      cardNumber={cardNumber}
                      cardExpiry={cardExpiry}
                      cardCvv={cardCvv}
                      onCardNumberChange={(v) => {
                        setCardNumber(v);
                        clearError("cardNumber");
                      }}
                      onCardExpiryChange={(v) => {
                        setCardExpiry(v);
                        clearError("expiry");
                      }}
                      onCardCvvChange={(v) => {
                        setCardCvv(v);
                        clearError("cvv");
                      }}
                      fieldErrors={fieldErrors}
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
