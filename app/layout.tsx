import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { GlobalScrollObserver } from "@/components/GlobalScrollObserver";

export const metadata: Metadata = {
  title: "Uplift Relief Foundation | Rescue. Educate. Transform.",
  description: "We rescue injured street dogs and provide free education for underprivileged children across Nagpur. 100% transparent, grassroots NGO.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <GlobalScrollObserver />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
