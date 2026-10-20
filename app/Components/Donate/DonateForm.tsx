"use client";

import React, { useState, useEffect } from "react";
import { z } from "zod";
import { contactSchema } from "@/app/lib/validations";
import { DonateSidebar } from "./DonateSidebar";
import { SuccessScreen } from "./SuccessScreen";
import { DonationTiers } from "./DonationTiers";
import { PaymentSection } from "./PaymentSection";
import { Input } from "@/components/ui/input";
import { createRazorpayOrder, verifyAndSaveDonation } from "@/lib/actions/donations";
import { toast } from "sonner";

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
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);

  const [showSuccess, setShowSuccess] = useState(false);
  const [successMessage, setSuccessMessage] = useState({
    title: "",
    message: "",
  });

  // Dynamically load the Razorpay Checkout script on component mount
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const clearError = (field: string) => {
    if (fieldErrors[field]) {
      setFieldErrors((prev) => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
    }
  };

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!amount || Number(amount) < 100) {
      toast.error("Minimum donation amount is ₹100");
      return;
    }

    setLoading(true);
    const errors: Record<string, string> = {};

    const phoneInput = document.getElementById("donor-phone") as HTMLInputElement;
    const panInput = document.getElementById("donor-pan") as HTMLInputElement;
    const phoneValue = phoneInput?.value || "";
    const panValue = panInput?.value || "";

    const contactResult = contactSchema.safeParse({
      name: donorName,
      email: donorEmail,
      phone: phoneValue,
      pan: panValue,
    });

    if (!contactResult.success) {
      const flat = z.flattenError(contactResult.error);
      for (const [key, msgs] of Object.entries(flat.fieldErrors)) {
        if (msgs && msgs.length) errors[key] = msgs[0];
      }
    }

    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors);
      setLoading(false);
      return;
    }

    setFieldErrors({});

    try {
      // Create Razorpay Order on server side
      const orderRes = await createRazorpayOrder(Number(amount));
      if (!orderRes.success || !orderRes.orderId) {
        throw new Error(orderRes.error || "Failed to create payment order.");
      }

      // Configure checkout options
      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID || "",
        amount: orderRes.amount,
        currency: orderRes.currency,
        name: "Uplift Relief Foundation",
        description: `Donation: ${donationMode === "monthly" ? "Monthly Membership" : "One-Time Donation"}`,
        order_id: orderRes.orderId,
        handler: async function (response: {
          razorpay_order_id: string;
          razorpay_payment_id: string;
          razorpay_signature: string;
        }) {
          try {
            setLoading(true);
            // Verify payment and save to database
            const verifyRes = await verifyAndSaveDonation({
              donorName,
              donorEmail,
              donorPhone: phoneValue,
              donorPan: panValue,
              amount: Number(amount),
              donationMode,
              paymentMethod,
              razorpayOrderId: response.razorpay_order_id,
              razorpayPaymentId: response.razorpay_payment_id,
              razorpaySignature: response.razorpay_signature,
            });

            if (!verifyRes.success) {
              throw new Error(verifyRes.error || "Payment signature verification failed.");
            }

            const formattedAmt = Number(amount).toLocaleString("en-IN");
            const typeText = donationMode === "monthly" ? "/month" : " (one-time)";

            setSuccessMessage({
              title: `Thank You, ${donorName.split(" ")[0]}!`,
              message: `Your contribution of ₹${formattedAmt}${typeText} was processed successfully. A 100% transparent audit receipt and tax exemption certificate will be sent to ${donorEmail} shortly.`,
            });

            setShowSuccess(true);
            window.scrollTo({ top: 0, behavior: "smooth" });
          } catch (err: any) {
            console.error("Signature verification error:", err);
            toast.error(err.message || "Failed to verify transaction. Please contact support.");
          } finally {
            setLoading(false);
          }
        },
        prefill: {
          name: donorName,
          email: donorEmail,
          contact: phoneValue,
          method: paymentMethod === "upi" ? "upi" : paymentMethod === "card" ? "card" : "netbanking",
        },
        theme: {
          color: "#c8a24e",
        },
        modal: {
          ondismiss: function () {
            setLoading(false);
            toast.info("Payment cancelled.");
          },
        },
      };

      // Open Razorpay Standard Checkout
      if (!(window as any).Razorpay) {
        throw new Error("Razorpay SDK failed to load. Please refresh and try again.");
      }
      const rzp = new (window as any).Razorpay(options);
      rzp.open();
    } catch (error: any) {
      console.error("Initiation error:", error);
      toast.error(error.message || "Failed to initiate payment transaction.");
      setLoading(false);
    }
  };

  const handleReset = () => {
    setShowSuccess(false);
    setDonorName("");
    setDonorEmail("");
    const phoneInput = document.getElementById("donor-phone") as HTMLInputElement;
    const panInput = document.getElementById("donor-pan") as HTMLInputElement;
    if (phoneInput) phoneInput.value = "";
    if (panInput) panInput.value = "";
  };

  return (
    <section className="bg-bg px-3 pb-10 md:px-5 lg:px-10 lg:py-20">
      <div className="w-full max-w-315 mx-auto">
        <div className="grid items-start mt-12 gap-3 max-lg:grid-cols-1 lg:grid-cols-[2.4fr_1fr] max-lg:gap-8">
          {/* Left Column: Interactive Form Panel */}
          <div className="bg-bg-card border border-line rounded-3xl px-4 py-8 md:p-[clamp(1.5rem,4vw,3rem)] shadow-[0_12px_48px_rgba(0,0,0,0.15)] reveal">
            {!showSuccess ? (
              <>
                {/* Tab Switchers */}
                <div className="flex gap-2 bg-bg p-1.5 rounded-full mb-10 border border-white/10">
                  <button
                    type="button"
                    className={`flex-1 rounded-full p-2.5 sm:p-3.5 text-center font-semibold text-[0.875rem] sm:text-[0.9375rem] transition-all duration-300 ${
                      donationMode === "monthly"
                        ? "bg-gold text-bg shadow-[0_4px_12px_rgba(200,162,78,0.25)]"
                        : "bg-transparent text-white/60 hover:text-white"
                    }`}
                    onClick={() => handleTabSwitch("monthly")}
                  >
                    Monthly<span className="hidden sm:inline"> Member</span>
                  </button>
                  <button
                    type="button"
                    className={`flex-1 rounded-full p-2.5 sm:p-3.5 text-center font-semibold text-[0.875rem] sm:text-[0.9375rem] transition-all duration-300 ${
                      donationMode === "onetime"
                        ? "bg-gold text-bg shadow-[0_4px_12px_rgba(200,162,78,0.25)]"
                        : "bg-transparent text-white/60 hover:text-white"
                    }`}
                    onClick={() => handleTabSwitch("onetime")}
                  >
                    One-Time<span className="hidden sm:inline"> Donation</span>
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
                          className={`${Styles.input} ${
                            fieldErrors.name ? "border-red-500/60 focus-visible:border-red-500" : ""
                          }`}
                          required
                          value={donorName}
                          onChange={(e) => {
                            setDonorName(e.target.value);
                            clearError("name");
                          }}
                        />
                        {fieldErrors.name && (
                          <span className="text-red-400 text-xs mt-1">
                            {fieldErrors.name}
                          </span>
                        )}
                      </div>
                      <div className={Styles.formGroup}>
                        <label htmlFor="donor-email" className={Styles.label}>
                          Email Address
                        </label>

                        <Input
                          id="donor-email"
                          type="email"
                          placeholder="aarav@gmail.com"
                          className={`${Styles.input} ${
                            fieldErrors.email ? "border-red-500/60 focus-visible:border-red-500" : ""
                          }`}
                          required
                          value={donorEmail}
                          onChange={(e) => {
                            setDonorEmail(e.target.value);
                            clearError("email");
                          }}
                        />
                        {fieldErrors.email && (
                          <span className="text-red-400 text-xs mt-1">
                            {fieldErrors.email}
                          </span>
                        )}
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
                          className={`bg-bg-elevated border rounded-xl text-white outline-none font-sans text-[0.9375rem] p-3.5 px-5 transition-colors duration-300 focus:border-gold ${
                            fieldErrors.phone ? "border-red-500/60 focus:border-red-500" : "border-white/10"
                          }`}
                          placeholder="+91 98765 43210"
                          required
                          onChange={() => clearError("phone")}
                        />
                        {fieldErrors.phone && (
                          <span className="text-red-400 text-xs mt-1">
                            {fieldErrors.phone}
                          </span>
                        )}
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
                          className={`bg-bg-elevated border rounded-xl text-white outline-none font-sans text-[0.9375rem] p-3.5 px-5 transition-colors duration-300 focus:border-gold ${
                            fieldErrors.pan ? "border-red-500/60 focus:border-red-500" : "border-white/10"
                          }`}
                          placeholder="ABCDE1234F"
                          onChange={() => clearError("pan")}
                        />
                        {fieldErrors.pan && (
                          <span className="text-red-400 text-xs mt-1">
                            {fieldErrors.pan}
                          </span>
                        )}
                      </div>
                    </div>

                    <PaymentSection
                      paymentMethod={paymentMethod}
                      onMethodChange={setPaymentMethod}
                    />

                    <button
                      type="submit"
                      disabled={loading}
                      className="btn btn-gold btn-lg w-full justify-center mt-8 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {loading ? (
                        <span className="flex items-center gap-2">
                          <span className="h-4 w-4 animate-spin rounded-full border-2 border-bg border-t-transparent"></span>
                          Processing...
                        </span>
                      ) : (
                        "Complete Donation"
                      )}
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
