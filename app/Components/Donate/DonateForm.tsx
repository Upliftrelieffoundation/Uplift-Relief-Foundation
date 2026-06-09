"use client";

import { useState } from "react";

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

  return (
    <section className="intro" style={{ paddingTop: "4rem", background: "var(--ivory)" }}>
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
                              <span style={{ fontSize: "0.875rem", fontWeight: 400, color: "var(--type-3)" }}>
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
                              <span style={{ fontSize: "0.875rem", fontWeight: 400, color: "var(--type-3)" }}>
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
                              <span style={{ fontSize: "0.875rem", fontWeight: 400, color: "var(--type-3)" }}>
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

                    <hr style={{ border: 0, borderTop: "1px solid var(--line)", margin: "2rem 0" }} />

                    {/* Contact Info */}
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
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

                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
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
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <rect x="2" y="5" width="20" height="14" rx="2" />
                          <path d="M2 10h20" />
                          <circle cx="6" cy="14" r="1" />
                        </svg>
                        <span>UPI / QR Code</span>
                      </div>
                      <div
                        className={`payment-method-btn ${paymentMethod === "card" ? "active" : ""}`}
                        onClick={() => setPaymentMethod("card")}
                      >
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <rect x="2" y="5" width="20" height="14" rx="2" />
                          <path d="M2 10h20" />
                        </svg>
                        <span>Credit/Debit Card</span>
                      </div>
                      <div
                        className={`payment-method-btn ${paymentMethod === "bank" ? "active" : ""}`}
                        onClick={() => setPaymentMethod("bank")}
                      >
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M3 22h18M6 18h12M4 10h16M12 2L4 6v4h16V6L12 2z" />
                        </svg>
                        <span>Net Banking</span>
                      </div>
                    </div>

                    {/* Method 1: UPI Section */}
                    {paymentMethod === "upi" && (
                      <div id="method-upi-section">
                        <div className="qr-container">
                          <div className="qr-code">
                            <svg width="150" height="150" viewBox="0 0 29 29" style={{ background: "#fff" }}>
                              <path
                                d="M0 0h7v7H0zm1 1v5h5V1zm1 1h3v3H2zm20-2h7v7h-7zm1 1v5h5V1zm1 1h3v3h-3zM0 22h7v7H0zm1 1v5h5V23zm1 1h3v3H2zm8-22h2v4h-2zm0 6h2v3h-2zm4-6h2v2h-2zm0 4h2v2h-2zm4-4h2v3h-2zm-8 8h4v2h-4zm6 0h3v2h-3zm-6 4h2v4h-2zm4 0h4v2h-4zm0 3v1h1v1h-2v-2zm7-7h2v2h-2zm-3 3h2v2h-2zm3 1h2v3h-2zm-3 2h2v2h-2zm-4 2h2v2h-2zm6 2h3v1h-3zm-3 2h2v2h-2zm5-1v2h2v-2zm-2-2h1v1h-1zM9 9h2v2H9zm2 2h2v2h-2zm-2 2h2v2H9zm2-4h2v2h-2zm2 2h2v2h-2zm2 2h2v2h-2z"
                                fill="#0B1425"
                              />
                            </svg>
                          </div>
                          <p style={{ fontSize: "0.875rem", color: "var(--type-2)" }}>
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
                        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
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
                          <select
                            id="bank-select"
                            className="form-input"
                            style={{
                              WebkitAppearance: "none",
                              backgroundImage:
                                "url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%2224%22 height=%2224%22 viewBox=%220 0 24 24%22 fill=%22none%22 stroke=%22%23C8A24E%22 stroke-width=%222%22><path d=%22M6 9l6 6 6-6%22/></svg>')",
                              backgroundRepeat: "no-repeat",
                              backgroundPosition: "right 1.25rem center",
                              backgroundSize: "16px",
                            }}
                          >
                            <option value="sbi">State Bank of India</option>
                            <option value="hdfc">HDFC Bank</option>
                            <option value="icici">ICICI Bank</option>
                            <option value="axis">Axis Bank</option>
                            <option value="kotak">Kotak Mahindra Bank</option>
                          </select>
                        </div>
                      </div>
                    )}

                    <button
                      type="submit"
                      className="btn btn-gold btn-lg"
                      style={{ width: "100%", justifyContent: "center", marginTop: "2rem" }}
                    >
                      Complete Secure Donation
                    </button>
                  </form>
                </div>
              </>
            ) : (
              /* Success Screen */
              <div
                className="success-screen"
                id="success-screen-section"
                style={{ display: "flex" }}
              >
                <div className="success-icon">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    width="28"
                    height="28"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
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
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
                Why Support Us?
              </h4>
              <p>Uplift Relief Foundation is a grassroots NGO built on relentless action and transparency.</p>
              <ul className="sidebar-bullets">
                <li>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span>
                    <strong>80G Tax Exemption:</strong> Get 50% tax deductions on your donations.
                  </span>
                </li>
                <li>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span>
                    <strong>100% Transparent:</strong> Every rupee is tracked and audited monthly.
                  </span>
                </li>
                <li>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span>
                    <strong>Cancel Anytime:</strong> Easily manage or cancel memberships from your dashboard.
                  </span>
                </li>
              </ul>
            </div>

            <div className="sidebar-box" style={{ background: "var(--navy)", color: "var(--chalk)", border: "none" }}>
              <h4 style={{ color: "var(--gold)" }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                </svg>
                Donor Care
              </h4>
              <p style={{ color: "var(--type-2)" }}>
                Need help with your donation or certificates? Get in touch with our support desk.
              </p>
              <p style={{ marginBottom: 0, fontWeight: 600, color: "var(--gold-pale)" }}>
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
