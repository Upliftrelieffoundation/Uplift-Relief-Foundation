import Register from "@/app/Components/Forms/Register";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Register | Uplift Relief Foundation",
  description: "Create an account for Uplift Relief Foundation",
  robots: {
    index: false,
    follow: false,
  },
};

export default function RegisterPage() {
  return (
    <div className=" min-h-screen bg-[#fcfaf6] bg-[url('/images/mobile-login-bg.png')] bg-cover bg-bottom bg-no-repeat md:bg-[url('/images/register-bg.png')] md:bg-contain md:bg-bottom md:bg-no-repeat ">
      {/* Container that takes full height. Flex row to separate left and right. */}
      <div className="flex-1 w-full max-w-350 mx-auto px-5 md:px-[clamp(1.25rem,4%,2.5rem)] flex flex-col md:flex-row justify-between relative z-10 pt-24 md:pt-32 lg:pt-36 pb-12">
        {/* Left side register form - Vertically centered */}
        <div className="w-full max-w-md relative z-10 md:ml-[2%] lg:ml-[5%] xl:ml-[8%] pt-4 md:pt-0 flex flex-col justify-center">
          <Register />
        </div>
        {/* Right side text content - Top aligned */}
        <div className=" hidden md:flex flex-col max-w-105 lg:max-w-120 xl:max-w-130 text-left text-navy justify-start md:mr-[1%] lg:mr-[2%] xl:mr-[4%] -mt-12 ">
          <h1 className=" pt-5 text-5xl lg:text-5xl  font-bold leading-[1.05] tracking-tight text-navy">
            Empowering Students. Building Futures.{" "}
            <span className="text-gold font-normal">♡</span>
          </h1>
        </div>
      </div>
    </div>
  );
}
