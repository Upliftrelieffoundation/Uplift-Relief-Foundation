import { Metadata } from "next";
import { LoginForm } from "@/app/Components/Forms/login-form";

export const metadata: Metadata = {
  title: "Login | Uplift Relief Foundation",
};

export default async function LoginPage(props: {
  searchParams: Promise<{ error?: string }>;
}) {
  const searchParams = await props.searchParams;
  return (
    <div className="flex min-h-screen items-center justify-center px-4 py-12">
      <LoginForm error={searchParams?.error} />
    </div>
  );
}
