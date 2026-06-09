import React from "react";
import { Check } from "lucide-react";

interface SuccessScreenProps {
  title: string;
  message: string;
  onReset: () => void;
}

export function SuccessScreen({ title, message, onReset }: SuccessScreenProps) {
  return (
    <div className="success-screen flex" id="success-screen-section">
      <div className="success-icon">
        <Check size={28} strokeWidth={3} />
      </div>
      <h3>{title}</h3>
      <p>{message}</p>
      <button onClick={onReset} className="btn btn-gold">
        Make Another Donation
      </button>
    </div>
  );
}
