"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Loader2 } from "lucide-react";
import { createClient } from "@/utils/supabase/client";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

const registerSchema = z
  .object({
    name: z.string().min(2, "Name must be at least 2 characters."),
    email: z.string().email("Please enter a valid email address."),
    password: z.string().min(6, "Password must be at least 6 characters."),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

type RegisterFormValues = z.infer<typeof registerSchema>;

const Register = () => {
  const [isLoading, setIsLoading] = useState(false);

  const supabase = createClient();
  const router = useRouter();

  const form = useForm<RegisterFormValues>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = async (data: RegisterFormValues) => {
    setIsLoading(true);
    
    const { error } = await supabase.auth.signUp({
      email: data.email,
      password: data.password,
      options: {
        data: {
          full_name: data.name,
        },
      },
    });

    setIsLoading(false);

    if (error) {
      toast.error(error.message || "Failed to create account");
      return;
    }

    toast.success("Registration successful! Please check your email to verify your account.");
    router.push("/login");
  };

  const handleGoogleLogin = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: `${window.location.origin}/auth/callback`,
      },
    });

    if (error) {
      toast.error(error.message || "Failed to sign in with Google");
    }
  };

  return (
    <div className="w-full max-w-md mx-auto bg-bg-card border border-line p-8 rounded-2xl shadow-2xl flex flex-col gap-6 pt-10">
      <div className="text-center flex flex-col gap-2">
        <div className="text-[1.875rem] font-bold text-chalk font-['Play'] tracking-tight leading-none m-0">
          Create Account
        </div>
        <p className="text-[#e4e4e0]/60 text-sm m-0">
          Join Uplift Foundation to make a difference
        </p>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-5">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem className="flex flex-col gap-1.5">
                <FormLabel className="text-[#e4e4e0] font-semibold text-sm">
                  Full Name
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="John Doe"
                    className="bg-[#0b1425] border-[rgba(255,255,255,0.1)] text-[#ffffff] placeholder:text-[#e4e4e0]/30 focus-visible:ring-[#c8a24e] focus-visible:border-transparent min-h-[3rem] px-4 py-3 [&:-webkit-autofill]:bg-[#0b1425] [&:-webkit-autofill]:text-[#ffffff] [&:-webkit-autofill]:shadow-[0_0_0_30px_#0b1425_inset] [&:-webkit-autofill]:-webkit-text-fill-color-white"
                    {...field}
                  />
                </FormControl>
                <FormMessage className="text-red-400 text-xs" />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="flex flex-col gap-1.5">
                <FormLabel className="text-[#e4e4e0] font-semibold text-sm">
                  Email Address
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="you@example.com"
                    className="bg-[#0b1425] border-[rgba(255,255,255,0.1)] text-[#ffffff] placeholder:text-[#e4e4e0]/30 focus-visible:ring-[#c8a24e] focus-visible:border-transparent min-h-[3rem] px-4 py-3 [&:-webkit-autofill]:bg-[#0b1425] [&:-webkit-autofill]:text-[#ffffff] [&:-webkit-autofill]:shadow-[0_0_0_30px_#0b1425_inset] [&:-webkit-autofill]:-webkit-text-fill-color-white"
                    {...field}
                  />
                </FormControl>
                <FormMessage className="text-red-400 text-xs" />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem className="flex flex-col gap-1.5">
                <FormLabel className="text-[#e4e4e0] font-semibold text-sm">
                  Password
                </FormLabel>
                <FormControl>
                  <Input
                    type="password"
                    placeholder="••••••••"
                    className="bg-[#0b1425] border-[rgba(255,255,255,0.1)] text-[#ffffff] placeholder:text-[#e4e4e0]/30 focus-visible:ring-[#c8a24e] focus-visible:border-transparent min-h-[3rem] px-4 py-3 [&:-webkit-autofill]:bg-[#0b1425] [&:-webkit-autofill]:text-[#ffffff] [&:-webkit-autofill]:shadow-[0_0_0_30px_#0b1425_inset] [&:-webkit-autofill]:-webkit-text-fill-color-white"
                    {...field}
                  />
                </FormControl>
                <FormMessage className="text-red-400 text-xs" />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="confirmPassword"
            render={({ field }) => (
              <FormItem className="flex flex-col gap-1.5">
                <FormLabel className="text-[#e4e4e0] font-semibold text-sm">
                  Confirm Password
                </FormLabel>
                <FormControl>
                  <Input
                    type="password"
                    placeholder="••••••••"
                    className="bg-[#0b1425] border-[rgba(255,255,255,0.1)] text-[#ffffff] placeholder:text-[#e4e4e0]/30 focus-visible:ring-[#c8a24e] focus-visible:border-transparent min-h-[3rem] px-4 py-3 [&:-webkit-autofill]:bg-[#0b1425] [&:-webkit-autofill]:text-[#ffffff] [&:-webkit-autofill]:shadow-[0_0_0_30px_#0b1425_inset] [&:-webkit-autofill]:-webkit-text-fill-color-white"
                    {...field}
                  />
                </FormControl>
                <FormMessage className="text-red-400 text-xs" />
              </FormItem>
            )}
          />

          <Button
            type="submit"
            disabled={isLoading}
            className="w-full min-h-[3rem] mt-2 bg-[#c8a24e] hover:bg-[#ddb963] text-[#0b1425] font-bold rounded-full transition-all duration-300 shadow-[0_6px_24px_rgba(200,162,78,0.25)] hover:shadow-[0_12px_32px_rgba(200,162,78,0.4)] hover:-translate-y-0.5 border-0"
          >
            {isLoading ? (
              <Loader2 className="w-5 h-5 animate-spin" />
            ) : (
              "Create Account"
            )}
          </Button>

          <div className="relative my-2">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t border-[rgba(255,255,255,0.1)]" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-[#101d32] px-2 text-[#e4e4e0]/60">
                Or continue with
              </span>
            </div>
          </div>

          <Button
            type="button"
            variant="outline"
            onClick={handleGoogleLogin}
            disabled={isLoading}
            className="w-full min-h-[3rem] bg-transparent border border-[rgba(255,255,255,0.1)] hover:bg-[rgba(255,255,255,0.05)] text-[#ffffff] font-medium rounded-full transition-all duration-300"
          >
            <svg
              className="mr-2 h-4 w-4"
              aria-hidden="true"
              focusable="false"
              data-prefix="fab"
              data-icon="google"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 488 512"
            >
              <path
                fill="currentColor"
                d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
              ></path>
            </svg>
            Google
          </Button>
        </form>
      </Form>

      <div className="text-center text-sm text-[#e4e4e0]/60 mt-2">
        Already have an account?{" "}
        <Link
          href="/login"
          className="text-[#c8a24e] font-semibold hover:text-[#ddb963] transition-colors"
        >
          Sign in
        </Link>
      </div>
    </div>
  );
};

export default Register;