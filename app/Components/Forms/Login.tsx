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

const loginSchema = z.object({
  email: z.email("Please enter a valid email address."),
  password: z.string().min(6, "Password must be at least 6 characters."),
});

type LoginFormValues = z.infer<typeof loginSchema>;

const Login = () => {
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: LoginFormValues) => {
    setIsLoading(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log("Login data:", data);
    setIsLoading(false);
  };

  return (
    <div className="w-full max-w-md mx-auto bg-[#101d32] border border-[rgba(255,255,255,0.07)] p-8 rounded-2xl shadow-2xl flex flex-col gap-6">
      <div className="text-center flex flex-col gap-2">
        <div className="text-[1.875rem] font-bold text-[#ffffff] font-['Play'] tracking-tight leading-none m-0">
          Welcome Back
        </div>
        <p className="text-[#e4e4e0]/60 text-sm m-0">
          Enter your credentials to access your account
        </p>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-5">
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
                <div className="flex justify-between items-center m-0 p-0">
                  <FormLabel className="text-[#e4e4e0] font-semibold text-sm m-0 p-0">
                    Password
                  </FormLabel>
                  <Link
                    href="/forgot-password"
                    className="text-xs text-[#c8a24e] hover:text-[#ddb963] transition-colors m-0 p-0"
                  >
                    Forgot password?
                  </Link>
                </div>
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
              "Sign In"
            )}
          </Button>
        </form>
      </Form>

      <div className="text-center text-sm text-[#e4e4e0]/60 mt-2">
        Don&apos;t have an account?{" "}
        <Link
          href="/register"
          className="text-[#c8a24e] font-semibold hover:text-[#ddb963] transition-colors"
        >
          Create an account
        </Link>
      </div>
    </div>
  );
};

export default Login;