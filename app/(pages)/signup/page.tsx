import Link from "next/link";
import { Metadata } from "next";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { signup, signInWithGoogle } from "@/app/(pages)/login/actions";

export const metadata: Metadata = {
  title: "Sign Up | Uplift Relief Foundation",
};

export default async function SignupPage(props: {
  searchParams: Promise<{ error?: string }>;
}) {
  const searchParams = await props.searchParams;
  return (
    <div className="wrap" style={{ minHeight: "80vh", display: "flex", alignItems: "center", justifyContent: "center", paddingTop: "8rem", paddingBottom: "4rem" }}>
      <Card className="w-full max-w-md bg-white border border-gray-200">
        <CardHeader className="space-y-1 text-center">
          <CardTitle className="text-2xl font-bold font-play text-[#1e3a5f]">Create an account</CardTitle>
          <CardDescription className="text-[#3b6fa0]">
            Enter your details below to create your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-[#1e3a5f]">Email</Label>
              <Input id="email" name="email" type="email" placeholder="m@example.com" required className="border-gray-300 text-black" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password" className="text-[#1e3a5f]">Password</Label>
              <Input id="password" name="password" type="password" required className="border-gray-300 text-black" />
            </div>
            {searchParams?.error && (
              <p className="text-sm text-red-500">{searchParams.error}</p>
            )}
            <Button formAction={signup} className="w-full bg-[#c8a24e] text-[#0b1425] hover:bg-[#ddb963] rounded-full font-semibold border-none" type="submit">
              Sign Up
            </Button>
          </form>
          <div className="relative my-4">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t border-gray-200" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-white px-2 text-gray-500">
                Or continue with
              </span>
            </div>
          </div>
          <form>
            <Button formAction={signInWithGoogle} variant="outline" className="w-full border-gray-300 text-[#1e3a5f] hover:bg-gray-50 rounded-full" type="submit">
              Google
            </Button>
          </form>
        </CardContent>
        <CardFooter className="flex flex-col text-center">
          <p className="mt-2 text-sm text-gray-600">
            Already have an account?{" "}
            <Link href="/login" className="text-[#c8a24e] font-semibold hover:underline">
              Log in
            </Link>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
}
