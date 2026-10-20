import { QrCode, CreditCard, Landmark } from "lucide-react";

interface PaymentSectionProps {
  paymentMethod: "upi" | "card" | "bank";
  onMethodChange: (method: "upi" | "card" | "bank") => void;
}

export function PaymentSection({
  paymentMethod,
  onMethodChange,
}: PaymentSectionProps) {
  const payBtnBase =
    "flex items-center justify-center gap-3 bg-[#152640] border border-white/10 rounded-2xl cursor-pointer text-white/60 p-4 transition-all duration-300 hover:border-white/25 hover:text-white";
  const payBtnActive = "border-gold text-white bg-[rgba(200,162,78,0.03)]";

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

      {/* Info Boxes based on Selected Method */}
      <div className="mt-4 bg-bg-elevated border border-white/10 rounded-2xl p-6 md:p-8 text-center flex flex-col items-center">
        {paymentMethod === "upi" && (
          <div className="flex flex-col items-center max-w-sm">
            <QrCode className="w-16 h-16 text-gold mb-4 animate-pulse" />
            <h4 className="text-white font-semibold mb-2">Pay via UPI Apps</h4>
            <p className="text-xs md:text-sm text-white/60 leading-relaxed">
              When you click the checkout button, a secure Razorpay popup will open. You can pay instantly using Google Pay, PhonePe, Paytm, BHIM, or any UPI ID.
            </p>
          </div>
        )}

        {paymentMethod === "card" && (
          <div className="flex flex-col items-center max-w-sm">
            <CreditCard className="w-16 h-16 text-gold mb-4 animate-pulse" />
            <h4 className="text-white font-semibold mb-2">Credit or Debit Card</h4>
            <p className="text-xs md:text-sm text-white/60 leading-relaxed">
              We support Visa, Mastercard, RuPay, Maestro, and Diners Club. A secure, PCI-DSS compliant Razorpay overlay will collect your card details safely.
            </p>
          </div>
        )}

        {paymentMethod === "bank" && (
          <div className="flex flex-col items-center max-w-sm">
            <Landmark className="w-16 h-16 text-gold mb-4 animate-pulse" />
            <h4 className="text-white font-semibold mb-2">Net Banking</h4>
            <p className="text-xs md:text-sm text-white/60 leading-relaxed">
              Support HDFC, SBI, ICICI, Axis, Kotak, and over 50 other Indian banks. You will be redirected securely to your bank's net banking portal.
            </p>
          </div>
        )}
      </div>
    </>
  );
}
