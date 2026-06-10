import Login from "@/app/Components/Forms/Login";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login | Uplift Foundation",
  description: "Login to your Uplift Foundation account",
};

export default function LoginPage() {
  return (
    <div className=" min-h-screen bg-[#fcfaf6] bg-[url('/images/mobile-login-bg.png')] bg-cover bg-bottom bg-no-repeat md:bg-[url('/images/login-bg.png')] md:bg-cover md:bg-position-[center_bottom_-80px] md:bg-no-repeat ">
      {/* Container that takes full height. Flex row to separate left and right. */}
      <div className="flex-1 w-full max-w-350 mx-auto px-5 md:px-[clamp(1.25rem,4%,2.5rem)] flex flex-col md:flex-row justify-between relative z-10 pt-24 md:pt-32 lg:pt-36 pb-12">
        {/* Left side text content - Top aligned */}
        <div className="hidden md:flex flex-col max-w-125 lg:max-w-137.5 xl:max-w-155 text-left text-navy justify-start">
          <h3 className="text-gold font-bold tracking-widest text-[10px] lg:text-xs uppercase mb-1">
            For Dogs. For Students. For a Better Future.
          </h3>
          <h1 className="text-5xl lg:text-6xl text-navy font-bold leading-[1.05]">
            Compassion Today, <br /> Better Tomorrow.
            <span className="text-gold font-normal">♡</span>
          </h1>
        </div>
        {/* Right side login form - Vertically centered */}
        <div className="w-full max-w-md relative z-10 md:mr-[2%] lg:mr-[5%] xl:mr-[8%] flex flex-col justify-center">
          <Login />
        </div>
      </div>
    </div>
  );
}
