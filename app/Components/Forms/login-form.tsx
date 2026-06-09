"use client";

import { useTransition } from "react";
import Link from "next/link";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { login, signInWithGoogle } from "@/lib/actions";

const formSchema = z.object({
  email: z.string().email("Please enter a valid email address."),
  password: z.string().min(1, "Password is required."),
});

type FormValues = z.infer<typeof formSchema>;

export function LoginForm({ error }: { error?: string }) {
  const [isPending, startTransition] = useTransition();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function onSubmit(values: FormValues) {
    startTransition(() => {
      const formData = new FormData();
      formData.append("email", values.email);
      formData.append("password", values.password);
      // We call the server action with the formData
      login(formData);
    });
  }

  return (
    <Card className="w-full max-w-sm border border-white/10 bg-[#0f1d34]/95 shadow-2xl backdrop-blur">
      <CardHeader className="px-8 pt-8 pb-6">
        <div className="space-y-2 text-center">
          <CardTitle className="text-3xl font-semibold tracking-tight text-white">
            Welcome back
          </CardTitle>

          <CardDescription className="text-base text-white/60">
            Sign in to your account
          </CardDescription>
        </div>
      </CardHeader>

      <CardContent className="px-8 pb-8">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="space-y-2">
                  <FormLabel className="text-sm font-medium text-white/80">
                    Email
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="janedoe@gmail.com"
                      type="email"
                      className="flex h-12 w-full px-4 py-2 border-white/10 bg-[#08111f] text-white placeholder:text-white/35 focus-visible:ring-1 focus-visible:ring-[#c8a24e] focus-visible:border-[#c8a24e] rounded-xl
                      "
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="text-red-400" />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem className="space-y-2">
                  <FormLabel className="text-sm font-medium text-white/80">
                    Password
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="password"
                      className="
                        flex
                        h-12
                        w-full
                        px-4
                        py-2
                        border-white/10
                        bg-[#08111f]
                        text-white
                        focus-visible:ring-1
                        focus-visible:ring-[#c8a24e]
                        focus-visible:border-[#c8a24e]
                        rounded-xl
                      "
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="text-red-400" />
                </FormItem>
              )}
            />

            <div className="flex justify-end">
              <Link
                href="#"
                className="text-sm text-[#c8a24e] hover:text-[#ddb963]"
              >
                Forgot password?
              </Link>
            </div>

            {error && (
              <div className="rounded-md border border-red-500/20 bg-red-500/10 p-3 text-sm text-red-400">
                {error}
              </div>
            )}

            <Button
              disabled={isPending}
              type="submit"
              className="
                h-11
                w-full
                bg-[#c8a24e]
                text-[#08111f]
                font-semibold
                hover:bg-[#ddb963]
                rounded-full
              "
            >
              Sign In
            </Button>
          </form>
        </Form>

        <div className="my-6 flex items-center gap-3">
          <div className="h-px flex-1 bg-white/10" />
          <span className="text-xs uppercase tracking-wider text-white/40">
            or
          </span>
          <div className="h-px flex-1 bg-white/10" />
        </div>

        <form action={signInWithGoogle}>
          <Button
            variant="outline"
            type="submit"
            className="
              h-11
              w-full
              border-white/10
              bg-[#08111f]
              text-white
              hover:bg-white/5
              hover:text-white
              rounded-full
            "
          >
            <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24">
              <path
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                fill="#4285F4"
              />
              <path
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                fill="#34A853"
              />
              <path
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                fill="#FBBC05"
              />
              <path
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                fill="#EA4335"
              />
            </svg>
            Continue with Google
          </Button>
        </form>

        <p className="mt-6 text-center text-sm text-white/60">
          Don't have an account?{" "}
          <Link
            href="/signup"
            className="font-medium text-[#c8a24e] hover:text-[#ddb963]"
          >
            Sign up
          </Link>
        </p>
      </CardContent>
    </Card>
  );
}
