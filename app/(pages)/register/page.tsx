import Register from "@/app/Components/Forms/Register";

import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Register | Uplift Foundation",
  description: "Create an account for Uplift Foundation",
};

export default function RegisterPage() {
  return (
    <div className="min-h-screen bg-white/90 flex items-start justify-center pt-32 pb-20 px-4 relative overflow-hidden">
      <div className="w-full max-w-md relative z-10">
        <Register />
      </div>
    </div>
  );
}
