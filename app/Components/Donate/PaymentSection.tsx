import React from "react";
import { QrCode, CreditCard, Landmark } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface PaymentSectionProps {
  paymentMethod: "upi" | "card" | "bank";
  onMethodChange: (method: "upi" | "card" | "bank") => void;
}

export function PaymentSection({
  paymentMethod,
  onMethodChange,
}: PaymentSectionProps) {
  return (
    <>
      {/* Payment Method Switching */}
      <div className="payment-methods">
        <div
          className={`payment-method-btn ${paymentMethod === "upi" ? "active" : ""}`}
          onClick={() => onMethodChange("upi")}
        >
          <QrCode />
          <span>UPI / QR Code</span>
        </div>
        <div
          className={`payment-method-btn ${paymentMethod === "card" ? "active" : ""}`}
          onClick={() => onMethodChange("card")}
        >
          <CreditCard />
          <span>Credit/Debit Card</span>
        </div>
        <div
          className={`payment-method-btn ${paymentMethod === "bank" ? "active" : ""}`}
          onClick={() => onMethodChange("bank")}
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
            <Select defaultValue="sbi">
              <SelectTrigger
                id="bank-select"
                className="form-input w-full h-auto flex items-center justify-between text-left border-line focus:border-gold focus:ring-0 focus-visible:ring-0 text-[15px]"
              >
                <SelectValue placeholder="Select Your Bank" />
              </SelectTrigger>
              <SelectContent className="bg-bg-elevated border border-line text-white">
                <SelectItem value="sbi" className="focus:bg-[#203454] focus:text-white cursor-pointer">
                  State Bank of India
                </SelectItem>
                <SelectItem value="hdfc" className="focus:bg-[#203454] focus:text-white cursor-pointer">
                  HDFC Bank
                </SelectItem>
                <SelectItem value="icici" className="focus:bg-[#203454] focus:text-white cursor-pointer">
                  ICICI Bank
                </SelectItem>
                <SelectItem value="axis" className="focus:bg-[#203454] focus:text-white cursor-pointer">
                  Axis Bank
                </SelectItem>
                <SelectItem value="kotak" className="focus:bg-[#203454] focus:text-white cursor-pointer">
                  Kotak Mahindra Bank
                </SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      )}
    </>
  );
}
