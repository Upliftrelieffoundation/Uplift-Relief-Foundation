"use client";

import React, { useState } from "react";
import { QrCode, CreditCard, Landmark, Check, Shield, Users, ChevronDown } from "lucide-react";

export default function DonateFormSection() {
  const [donationMode, setDonationMode] = useState<"monthly" | "onetime">("monthly");
  const [paymentMethod, setPaymentMethod] = useState<"upi" | "card" | "bank">("upi");
  const [amount, setAmount] = useState<number | "">(1200);
  const [activeTierId, setActiveTierId] = useState<string>("tier-1200");
  
  const [donorName, setDonorName] = useState("");
  const [donorEmail, setDonorEmail] = useState("");
  
  const [showSuccess, setShowSuccess] = useState(false);
  const [successMessage, setSuccessMessage] = useState({ title: "", message: "" });

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

  const handleSubmit = (e: React.SubmitEvent) => {
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

  return (
    <section className="intro pt-16 bg-[var(--ivory)]">
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
                    {/* Tab 1: Monthly Membership Tiers */}
                    {donationMode === "monthly" && (
                      <div id="content-monthly">
                        <div className="tier-grid">
                          <div
                            className={`tier-card ${activeTierId === "tier-500" ? "active" : ""}`}
                            onClick={() => handleTierSelect(500, "tier-500")}
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
                            onClick={() => handleTierSelect(1200, "tier-1200")}
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
                            onClick={() => handleTierSelect(3000, "tier-3000")}
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
                    )}

                    {/* Tab 2: One-Time Quick Select Buttons */}
                    {donationMode === "onetime" && (
                      <div id="content-onetime">
                        <div className="tier-grid">
                          <div
                            className={`tier-card ${activeTierId === "one-1000" ? "active" : ""}`}
                            onClick={() => handleTierSelect(1000, "one-1000")}
                          >
                            <span className="tier-title">Sponsor Meal</span>
                            <span className="tier-price">₹1,000</span>
                            <p className="tier-desc">Feeds a street pack during night drives.</p>
                          </div>
                          <div
                            className={`tier-card popular ${activeTierId === "one-2500" ? "active" : ""}`}
                            onClick={() => handleTierSelect(2500, "one-2500")}
                          >
                            <span className="tier-title">Rescue Mission</span>
                            <span className="tier-price">₹2,500</span>
                            <p className="tier-desc">Covers vehicle dispatch &amp; emergency care.</p>
                          </div>
                          <div
                            className={`tier-card ${activeTierId === "one-5000" ? "active" : ""}`}
                            onClick={() => handleTierSelect(5000, "one-5000")}
                          >
                            <span className="tier-title">Sponsor Center</span>
                            <span className="tier-price">₹5,000</span>
                            <p className="tier-desc">Supplies books &amp; study materials for center.</p>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Custom Amount Input */}
                    <div className="form-group">
                      <label htmlFor="donation-amount">Donation Amount (INR)</label>
                      <div className="amount-input-wrapper">
                        <span className="amount-currency">₹</span>
                        <input
                          type="number"
                          id="donation-amount"
                          className="amount-input"
                          value={amount}
                          min="100"
                          required
                          onChange={handleAmountChange}
                        />
                      </div>
                    </div>

                    <hr className="border-0 border-t border-[var(--line)] my-8" />

                    {/* Contact Info */}
                    <div className="grid grid-cols-2 gap-4">
                      <div className="form-group">
                        <label htmlFor="donor-name">Full Name</label>
                        <input
                          type="text"
                          id="donor-name"
                          className="form-input"
                          placeholder="Aarav Sharma"
                          required
                          value={donorName}
                          onChange={(e) => setDonorName(e.target.value)}
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="donor-email">Email Address</label>
                        <input
                          type="email"
                          id="donor-email"
                          className="form-input"
                          placeholder="aarav@gmail.com"
                          required
                          value={donorEmail}
                          onChange={(e) => setDonorEmail(e.target.value)}
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
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
                        <label htmlFor="donor-pan">PAN Number (For 80G Tax Exemption)</label>
                        <input
                          type="text"
                          id="donor-pan"
                          className="form-input"
                          placeholder="ABCDE1234F"
                        />
                      </div>
                    </div>

                    {/* Payment Method Switching */}
                    <div className="payment-methods">
                      <div
                        className={`payment-method-btn ${paymentMethod === "upi" ? "active" : ""}`}
                        onClick={() => setPaymentMethod("upi")}
                      >
                        <QrCode />
                        <span>UPI / QR Code</span>
                      </div>
                      <div
                        className={`payment-method-btn ${paymentMethod === "card" ? "active" : ""}`}
                        onClick={() => setPaymentMethod("card")}
                      >
                        <CreditCard />
                        <span>Credit/Debit Card</span>
                      </div>
                      <div
                        className={`payment-method-btn ${paymentMethod === "bank" ? "active" : ""}`}
                        onClick={() => setPaymentMethod("bank")}
                      >
                        <Landmark />
                        <span>Net Banking</span>
                      </div>
                    </div>

                    {/* Method 1: UPI Section */}
                    {paymentMethod === "upi" && (
                      <div id="method-upi-section">
                        <div className="qr-container">
                          <div className="qr-code">
                            <QrCode size={150} className="bg-white p-2" />
                          </div>
                          <p className="text-sm text-[var(--type-2)]">
                            Scan the QR Code using any UPI App (GPay, PhonePe, Paytm)
                          </p>
                          <div className="qr-upi-id">UPI ID: upliftrelief@upi</div>
                        </div>
                      </div>
                    )}

                    {/* Method 2: Card Section */}
                    {paymentMethod === "card" && (
                      <div id="method-card-section">
                        <div className="form-group">
                          <label htmlFor="card-number">Card Number</label>
                          <input
                            type="text"
                            id="card-number"
                            className="form-input"
                            placeholder="4111 2222 3333 4444"
                          />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="form-group">
                            <label htmlFor="card-expiry">Expiry Date</label>
                            <input type="text" id="card-expiry" className="form-input" placeholder="MM/YY" />
                          </div>
                          <div className="form-group">
                            <label htmlFor="card-cvv">CVV</label>
                            <input type="password" id="card-cvv" className="form-input" placeholder="***" />
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Method 3: Net Banking Section */}
                    {paymentMethod === "bank" && (
                      <div id="method-bank-section">
                        <div className="form-group">
                          <label htmlFor="bank-select">Select Your Bank</label>
                          <div className="relative">
                            <select
                              id="bank-select"
                              className="form-input appearance-none"
                            >
                              <option value="sbi">State Bank of India</option>
                              <option value="hdfc">HDFC Bank</option>
                              <option value="icici">ICICI Bank</option>
                              <option value="axis">Axis Bank</option>
                              <option value="kotak">Kotak Mahindra Bank</option>
                            </select>
                            <ChevronDown
                              size={16}
                              className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-[var(--gold,#C8A24E)]"
                            />
                          </div>
                        </div>
                      </div>
                    )}

                    <button
                      type="submit"
                      className="btn btn-gold btn-lg w-full justify-center mt-8"
                    >
                      Complete Secure Donation
                    </button>
                  </form>
                </div>
              </>
            ) : (
              /* Success Screen */
              <div
                className="success-screen flex"
                id="success-screen-section"
              >
                <div className="success-icon">
                  <Check size={28} strokeWidth={3} />
                </div>
                <h3>{successMessage.title}</h3>
                <p>{successMessage.message}</p>
                <button onClick={() => setShowSuccess(false)} className="btn btn-gold">
                  Make Another Donation
                </button>
              </div>
            )}
          </div>

          {/* Right Column: Sidebar and Info Box */}
          <div className="donate-sidebar reveal reveal-d1">
            <div className="sidebar-box">
              <h4>
                <Shield />
                Why Support Us?
              </h4>
              <p>Uplift Relief Foundation is a grassroots NGO built on relentless action and transparency.</p>
              <ul className="sidebar-bullets">
                <li>
                <Check />
                <span>
                    <strong>80G Tax Exemption:</strong> Get 50% tax deductions on your donations.
                  </span>
                </li>
                <li>
                <Check />
                <span>
                    <strong>100% Transparent:</strong> Every rupee is tracked and audited monthly.
                  </span>
                </li>
                <li>
                <Check />
                <span>
                    <strong>Cancel Anytime:</strong> Easily manage or cancel memberships from your dashboard.
                  </span>
                </li>
              </ul>
            </div>

            <div className="sidebar-box bg-[var(--navy)] text-[var(--chalk)] border-0">
              <h4 className="text-[var(--gold)]">
                <Users />
                Donor Care
              </h4>
              <p className="text-[var(--type-2)]">
                Need help with your donation or certificates? Get in touch with our support desk.
              </p>
              <p className="mb-0 font-semibold text-[var(--gold-pale)]">
                Email: billing@upliftrelief.org
                <br />
                Phone: +91 98765 43210
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
