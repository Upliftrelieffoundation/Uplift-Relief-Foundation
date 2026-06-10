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
  cardNumber: string;
  cardExpiry: string;
  cardCvv: string;
  onCardNumberChange: (value: string) => void;
  onCardExpiryChange: (value: string) => void;
  onCardCvvChange: (value: string) => void;
  fieldErrors: Record<string, string>;
}
const bankOptions = [
  { value: "sbi", label: "State Bank of India" },
  { value: "hdfc", label: "HDFC Bank" },
  { value: "icici", label: "ICICI Bank" },
  { value: "axis", label: "Axis Bank" },
  { value: "kotak", label: "Kotak Mahindra Bank" },
];

export function PaymentSection({
  paymentMethod,
  onMethodChange,
  cardNumber,
  cardExpiry,
  cardCvv,
  onCardNumberChange,
  onCardExpiryChange,
  onCardCvvChange,
  fieldErrors,
}: PaymentSectionProps) {
  const payBtnBase =
    "flex items-center justify-center gap-3 bg-[#152640] border border-white/10 rounded-2xl cursor-pointer text-white/60 p-4 transition-all duration-300 hover:border-navy-light hover:text-white";
  const payBtnActive = "border-gold text-white bg-[rgba(200,162,78,0.03)]";

  const formGroup = "flex flex-col gap-2 mb-5";
  const formLabel =
    "text-[0.75rem] font-semibold uppercase tracking-[0.08em] text-white/60";
  const formInput =
    "bg-[#152640] border border-white/10 rounded-xl text-white outline-none font-sans text-[0.9375rem] p-3.5 px-5 transition-colors duration-300 focus:border-gold";
  const formInputError = "border-red-500/60 focus:border-red-500";

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
          <div className="flex flex-col items-center text-center bg-bg-elevated border border-white/10 rounded-2xl p-8 mt-4">
            <div className="w-45 h-45 bg-white p-2.5 rounded-xl mb-4 flex items-center justify-center relative">
              <QrCode size={150} className="bg-white p-2" />
            </div>
            <p className="text-sm text-type-2">
              Scan the QR Code using any UPI App (GPay, PhonePe, Paytm)
            </p>
            <div className="text-gold-bright font-bold mt-2 font-heading text-[0.9375rem]">
              UPI ID: upliftrelief@upi
            </div>
          </div>
        </div>
      )}

      {/* Method 2: Card Section */}
      {paymentMethod === "card" && (
        <div id="method-card-section">
          <div className={formGroup}>
            <label htmlFor="card-number" className={formLabel}>
              Card Number
            </label>
            <input
              type="text"
              id="card-number"
              className={`${formInput} ${fieldErrors.cardNumber ? formInputError : ""}`}
              placeholder="4111 2222 3333 4444"
              value={cardNumber}
              onChange={(e) => onCardNumberChange(e.target.value)}
              maxLength={19}
            />
            {fieldErrors.cardNumber && (
              <span className="text-red-400 text-xs mt-1">
                {fieldErrors.cardNumber}
              </span>
            )}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className={formGroup}>
              <label htmlFor="card-expiry" className={formLabel}>
                Expiry Date
              </label>
              <input
                type="text"
                id="card-expiry"
                className={`${formInput} ${fieldErrors.expiry ? formInputError : ""}`}
                placeholder="MM/YY"
                value={cardExpiry}
                onChange={(e) => onCardExpiryChange(e.target.value)}
                maxLength={5}
              />
              {fieldErrors.expiry && (
                <span className="text-red-400 text-xs mt-1">
                  {fieldErrors.expiry}
                </span>
              )}
            </div>
            <div className={formGroup}>
              <label htmlFor="card-cvv" className={formLabel}>
                CVV
              </label>
              <input
                type="password"
                id="card-cvv"
                className={`${formInput} ${fieldErrors.cvv ? formInputError : ""}`}
                placeholder="***"
                value={cardCvv}
                onChange={(e) => onCardCvvChange(e.target.value)}
                maxLength={4}
              />
              {fieldErrors.cvv && (
                <span className="text-red-400 text-xs mt-1">
                  {fieldErrors.cvv}
                </span>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Method 3: Net Banking Section */}
      {paymentMethod === "bank" && (
        <div id="method-bank-section">
          <div className={formGroup}>
            <label htmlFor="bank-select" className={formLabel}>
              Select Your Bank
            </label>
            <Select defaultValue="sbi">
              <SelectTrigger
                id="bank-select"
                className={`${formInput} w-full  flex items-center justify-between text-left focus:border-gold focus:ring-0 focus-visible:ring-0 text-[15px] py-6`}
              >
                <SelectValue placeholder="Select Your Bank" />
              </SelectTrigger>
              <SelectContent className="bg-bg-elevated border border-white/10 text-white shadow-xl rounded-xl">
                {bankOptions.map((bank) => (
                  <SelectItem
                    key={bank.value}
                    value={bank.value}
                    className="focus:bg-navy-light focus:text-white  focus:ring-gold cursor-pointer py-2.5 px-4"
                  >
                    {bank.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      )}
    </>
  );
}
