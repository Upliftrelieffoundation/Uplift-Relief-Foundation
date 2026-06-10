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
const payBtnBase = "flex items-center justify-center gap-3 bg-[#152640] border border-white/10 rounded-2xl cursor-pointer text-white/60 p-4 transition-all duration-300 hover:border-navy-light hover:text-white";
const payBtnActive = "border-gold text-white bg-[rgba(200,162,78,0.03)]";

const formGroup = "flex flex-col gap-2 mb-5";
const formLabel = "text-[0.75rem] font-semibold uppercase tracking-[0.08em] text-white/60";
const formInput = "bg-[#152640] border border-white/10 rounded-xl text-white outline-none font-sans text-[0.9375rem] p-3.5 px-5 transition-colors duration-300 focus:border-gold";

  return (
    <>
      {/* Payment Method Switching */}
      <div className="flex flex-col md:flex-row gap-3 my-8">
        <div
          className={`${payBtnBase} flex-1 ${paymentMethod === "upi" ? payBtnActive : ""}`}
          onClick={() => onMethodChange("upi")}
        >
          <QrCode className="w-6 h-6 text-gold" />
          <span>UPI / QR Code</span>
        </div>
        <div
          className={`${payBtnBase} flex-1 ${paymentMethod === "card" ? payBtnActive : ""}`}
          onClick={() => onMethodChange("card")}
        >
          <CreditCard className="w-6 h-6 text-gold" />
          <span>Credit/Debit Card</span>
        </div>
        <div
          className={`${payBtnBase} flex-1 ${paymentMethod === "bank" ? payBtnActive : ""}`}
          onClick={() => onMethodChange("bank")}
        >
          <Landmark className="w-6 h-6 text-gold" />
          <span>Net Banking</span>
        </div>
      </div>

      {/* Method 1: UPI Section */}
      {paymentMethod === "upi" && (
        <div id="method-upi-section">
          <div className="flex flex-col items-center text-center bg-[#152640] border border-white/10 rounded-2xl p-8 mt-4">
            <div className="w-[180px] h-[180px] bg-white p-2.5 rounded-xl mb-4 flex items-center justify-center relative">
              <QrCode size={150} className="bg-white p-2" />
            </div>
            <p className="text-sm text-type-2">
              Scan the QR Code using any UPI App (GPay, PhonePe, Paytm)
            </p>
            <div className="text-gold-bright font-bold mt-2 font-heading text-[0.9375rem]">UPI ID: upliftrelief@upi</div>
          </div>
        </div>
      )}

      {/* Method 2: Card Section */}
      {paymentMethod === "card" && (
        <div id="method-card-section">
          <div className={formGroup}>
            <label htmlFor="card-number" className={formLabel}>Card Number</label>
            <input
              type="text"
              id="card-number"
              className={formInput}
              placeholder="4111 2222 3333 4444"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className={formGroup}>
              <label htmlFor="card-expiry" className={formLabel}>Expiry Date</label>
              <input type="text" id="card-expiry" className={formInput} placeholder="MM/YY" />
            </div>
            <div className={formGroup}>
              <label htmlFor="card-cvv" className={formLabel}>CVV</label>
              <input type="password" id="card-cvv" className={formInput} placeholder="***" />
            </div>
          </div>
        </div>
      )}

      {/* Method 3: Net Banking Section */}
      {paymentMethod === "bank" && (
        <div id="method-bank-section">
          <div className={formGroup}>
            <label htmlFor="bank-select" className={formLabel}>Select Your Bank</label>
            <Select defaultValue="sbi">
              <SelectTrigger
                id="bank-select"
                className={`${formInput} w-full h-auto flex items-center justify-between text-left focus:border-gold focus:ring-0 focus-visible:ring-0 text-[15px]`}
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
