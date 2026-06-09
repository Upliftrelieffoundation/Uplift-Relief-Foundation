"use client";

import { useState } from "react";
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
import { FcGoogle } from "react-icons/fc";
import { createClient } from "@/utils/supabase/client";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

const loginSchema = z.object({
  email: z.email("Please enter a valid email address."),
  password: z.string().min(6, "Password must be at least 6 characters."),
});

type LoginFormValues = z.infer<typeof loginSchema>;

const Login = () => {
  const [isLoading, setIsLoading] = useState(false);

  const supabase = createClient();
  const router = useRouter();

  const form = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: LoginFormValues) => {
    setIsLoading(true);

    const { error } = await supabase.auth.signInWithPassword({
      email: data.email,
      password: data.password,
    });

    setIsLoading(false);

    if (error) {
      toast.error(error.message || "Failed to sign in");
      return;
    }

    toast.success("Successfully logged in");
    router.push("/");
    router.refresh();
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
    <div className="w-full max-w-md mx-auto bg-bg-card border border-line p-8 rounded-2xl shadow-2xl flex flex-col gap-6">
      <div className="text-center flex flex-col gap-2">
        <div className="text-[1.875rem] font-bold text-chalk font-['Play'] tracking-tight leading-none m-0">
          Welcome Back
        </div>
        <p className="text-type/60 text-sm m-0">
          Enter your credentials to access your account
        </p>
      </div>

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col gap-5"
        >
          <Button
            type="button"
            variant="outline"
            onClick={handleGoogleLogin}
            disabled={isLoading}
            className="w-full min-h-12 bg-transparent border border-[rgba(255,255,255,0.1)] hover:bg-[rgba(255,255,255,0.05)] text-chalk font-medium rounded-full transition-all duration-300"
          >
            <FcGoogle />
            Google
          </Button>

          <div className="relative my-2">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t border-[rgba(255,255,255,0.1)]" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-bg-card px-2 text-type/60">
                Or continue with
              </span>
            </div>
          </div>

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="flex flex-col gap-1.5">
                <FormLabel className="text-type font-semibold text-sm">
                  Email Address
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="you@example.com"
                    className="bg-bg border-[rgba(255,255,255,0.1)] text-chalk placeholder:text-type/30 focus-visible:ring-gold focus-visible:border-transparent min-h-12 px-4 py-3 [&:-webkit-autofill]:bg-bg [&:-webkit-autofill]:text-chalk [&:-webkit-autofill]:shadow-[0_0_0_30px_#0b1425_inset] [&:-webkit-autofill]:-webkit-text-fill-color-white"
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
                  <FormLabel className="text-type font-semibold text-sm m-0 p-0">
                    Password
                  </FormLabel>
                  <Link
                    href="/forgot-password"
                    className="text-xs text-gold hover:text-gold-bright transition-colors m-0 p-0"
                  >
                    Forgot password?
                  </Link>
                </div>
                <FormControl>
                  <Input
                    type="password"
                    placeholder="••••••••"
                    className="bg-bg border-[rgba(255,255,255,0.1)] text-chalk placeholder:text-type/30 focus-visible:ring-gold focus-visible:border-transparent min-h-12 px-4 py-3 [&:-webkit-autofill]:bg-bg [&:-webkit-autofill]:text-chalk [&:-webkit-autofill]:shadow-[0_0_0_30px_#0b1425_inset] [&:-webkit-autofill]:-webkit-text-fill-color-white"
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
            className="w-full min-h-12 mt-2 bg-gold hover:bg-gold-bright text-bg font-bold rounded-full transition-all duration-300 shadow-[0_6px_24px_rgba(200,162,78,0.25)] hover:shadow-[0_12px_32px_rgba(200,162,78,0.4)] hover:-translate-y-0.5 border-0"
          >
            {isLoading ? (
              <Loader2 className="w-5 h-5 animate-spin" />
            ) : (
              "Sign In"
            )}
          </Button>
        </form>
      </Form>

      <div className="text-center text-sm text-type/60 mt-2">
        Don&apos;t have an account?{" "}
        <Link
          href="/register"
          className="text-gold font-semibold hover:text-gold-bright transition-colors"
        >
          Create an account
        </Link>
      </div>
    </div>
  );
};

export default Login;
