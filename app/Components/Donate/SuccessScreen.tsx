import React from "react";
import { Check } from "lucide-react";

interface SuccessScreenProps {
  title: string;
  message: string;
  onReset: () => void;
}

export function SuccessScreen({ title, message, onReset }: SuccessScreenProps) {
  return (
    <div className="flex flex-col items-center text-center p-12 px-4" id="success-screen-section">
      <div className="w-16 h-16 bg-[rgba(200,162,78,0.1)] border-2 border-gold text-gold flex items-center justify-center rounded-full mb-6 animate-[pulse_2s_infinite]">
        <Check size={28} strokeWidth={3} />
      </div>
      <h3 className="!text-white mb-3 !font-heading !text-[1.75rem]">{title}</h3>
      <p className="text-white/60 text-[0.9375rem] leading-[1.7] max-w-[360px] mb-8">{message}</p>
      <button onClick={onReset} className="btn btn-gold">
        Make Another Donation
      </button>
    </div>
  );
}
