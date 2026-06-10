import Login from "@/app/Components/Forms/Login";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login | Uplift Foundation",
  description: "Login to your Uplift Foundation account",
};

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-white/90 flex items-center justify-center py-20 px-4 relative overflow-hidden">
      <div className="w-full max-w-md relative z-10 pt-16 md:pt-19">
        <Login />
      </div>
    </div>
  );
}
