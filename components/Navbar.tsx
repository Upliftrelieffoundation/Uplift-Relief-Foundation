"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { User } from "@supabase/supabase-js";
import { createClient } from "@/utils/supabase/client";

import { ArrowRight, LogOut, ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [user, setUser] = useState<User | null>(null);

  const supabase = createClient();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const getUser = async () => {
      const { data } = await supabase.auth.getUser();
      setUser(data?.user ?? null);
    };
    getUser();

    const { data: authListener } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setUser(session?.user ?? null);
      }
    );

    return () => {
      authListener.subscription.unsubscribe();
    };
  }, [supabase.auth]);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    setUser(null);
  };

  const getInitials = (name?: string, email?: string) => {
    if (name) {
      return name.charAt(0).toUpperCase();
    }
    if (email) {
      return email.charAt(0).toUpperCase();
    }
    return "U";
  };

  return (
    <nav className={`nav ${scrolled ? "scrolled" : ""}`} id="nav">
      <div className="nav-inner">
        <Link href="/" className="nav-logo">
          <Image
            src="/images/logo_horizontal.png"
            alt="Uplift Relief Foundation"
            width={200}
            height={52}
            style={{ width: "auto", height: "52px" }}
            priority
          />
        </Link>

        <div className={`nav-collapse ${menuOpen ? "open" : ""}`}>
          <div className="nav-menu">
            <Link href="/" onClick={() => setMenuOpen(false)}>Home</Link>
            <Link href="/about" onClick={() => setMenuOpen(false)}>About</Link>
            <Link href="/work" onClick={() => setMenuOpen(false)}>Our Work</Link>
            <Link href="/impact" onClick={() => setMenuOpen(false)}>Impact</Link>
            <Link href="/stories" onClick={() => setMenuOpen(false)}>Stories</Link>
            {!user && (
              <Link
                href="/login"
                className="text-gold hover:text-gold/80 transition"
                onClick={() => setMenuOpen(false)}
              >
                Login
              </Link>
            )}
          </div>

          <div className="nav-cta flex items-center gap-4">
            <Link href="/donate" className="btn btn-gold" onClick={() => setMenuOpen(false)}>
              Donate Now <ArrowRight />
            </Link>
            {user && (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button className="flex items-center gap-2 rounded-full p-1 pr-3 hover:bg-[rgba(11,20,37,0.05)] transition focus:outline-none focus-visible:ring-2 focus-visible:ring-gold border-none bg-transparent">
                    <Avatar className="h-9 w-9 border border-gray-200 shadow-sm">
                      <AvatarImage src={user.user_metadata?.avatar_url} />
                      <AvatarFallback className="bg-gray-100 text-[#0b1425] font-bold text-sm">
                        {getInitials(user.user_metadata?.full_name, user.email)}
                      </AvatarFallback>
                    </Avatar>
                    <span className="text-sm font-semibold text-navy hidden md:block max-w-[120px] truncate">
                      {user.user_metadata?.full_name || user.email?.split("@")[0] || "User"}
                    </span>
                    <ChevronDown className="h-4 w-4 text-navy/60 hidden md:block" />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56 bg-white border border-gray-200 z-[1000] shadow-lg rounded-xl mt-2 p-1">
                  <div className="px-2 py-2 mb-1 border-b border-gray-100 md:hidden">
                    <p className="text-sm font-medium text-navy truncate">
                      {user.user_metadata?.full_name || user.email?.split("@")[0] || "User"}
                    </p>
                    <p className="text-xs text-navy/60 truncate">{user.email}</p>
                  </div>
                  <DropdownMenuItem
                    onClick={handleLogout}
                    className="cursor-pointer text-red-600 focus:text-red-700 focus:bg-red-50 flex items-center p-2 rounded-md font-medium transition-colors"
                  >
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Log out</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            )}
          </div>
        </div>

        <button
          className={`hamburger ${menuOpen ? "open" : ""}`}
          id="ham"
          aria-label="Menu"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  );
}
