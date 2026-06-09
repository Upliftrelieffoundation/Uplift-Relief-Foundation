import Register from "@/app/Components/Forms/Register";

import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Register | Uplift Foundation",
  description: "Create an account for Uplift Foundation",
};

export default function RegisterPage() {
  return (
    <div className="min-h-screen bg-bg flex items-start justify-center pt-32 pb-20 px-4 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-navy/30 blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-gold/10 blur-[120px]" />
      </div>

      <div className="w-full max-w-md relative z-10">
        <Register />
      </div>
    </div>
  );
}
