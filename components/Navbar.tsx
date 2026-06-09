"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <nav
        id="nav"
        className={[
          "fixed top-0 left-0 right-0 z-[900] bg-white border-b-4 border-navy",
          "transition-all duration-300",
          scrolled
            ? "h-[76px] shadow-[0_4px_32px_rgba(0,0,0,0.1)]"
            : "h-[90px] shadow-[0_4px_20px_rgba(0,0,0,0.05)]",
        ].join(" ")}
      >
        <div className="flex items-center justify-between h-full max-w-[1400px] mx-auto px-6 md:px-10">
          {/* Logo */}
          <Link href="/" onClick={closeMenu} className="shrink-0 z-10">
            <Image
              src="/images/logo_horizontal.png"
              alt="Uplift Relief Foundation"
              width={200}
              height={52}
              style={{ width: "auto", height: "52px" }}
              priority
            />
          </Link>

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/"
              className="text-[0.9375rem] font-semibold text-navy tracking-wide hover:text-gold-deep transition-colors"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-[0.9375rem] font-semibold text-navy tracking-wide hover:text-gold-deep transition-colors"
            >
              About
            </Link>
            <Link
              href="/work"
              className="text-[0.9375rem] font-semibold text-navy tracking-wide hover:text-gold-deep transition-colors"
            >
              Our Work
            </Link>
            <Link
              href="/impact"
              className="text-[0.9375rem] font-semibold text-navy tracking-wide hover:text-gold-deep transition-colors"
            >
              Impact
            </Link>
            <Link
              href="/stories"
              className="text-[0.9375rem] font-semibold text-navy tracking-wide hover:text-gold-deep transition-colors"
            >
              Stories
            </Link>
            <Link
              href="/login"
              className="text-[0.9375rem] font-semibold text-gold-bright hover:text-gold-deep transition-colors"
            >
              Login
            </Link>
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Link href="/donate" className="btn btn-gold btn-lg">
              Donate Now
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="w-4 h-4"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          {/* Hamburger */}
          <button
            id="ham"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex flex-col justify-between w-6 h-[18px] bg-transparent border-none cursor-pointer z-10 shrink-0"
          >
            <span
              className={[
                "block w-full h-0.5 bg-navy origin-center transition-all duration-300",
                menuOpen ? "translate-y-[8px] rotate-45" : "",
              ].join(" ")}
            />
            <span
              className={[
                "block w-full h-0.5 bg-navy transition-all duration-300",
                menuOpen ? "opacity-0 scale-x-0" : "",
              ].join(" ")}
            />
            <span
              className={[
                "block w-full h-0.5 bg-navy origin-center transition-all duration-300",
                menuOpen ? "-translate-y-[8px] -rotate-45" : "",
              ].join(" ")}
            />
          </button>
        </div>
      </nav>

      {/* Mobile menu — rendered outside nav so it's full-screen */}
      <div
        className={[
          "fixed inset-0 z-[800] flex flex-col md:hidden",
          "bg-bg transition-all duration-300",
          menuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none",
        ].join(" ")}
        style={{ paddingTop: scrolled ? "76px" : "90px" }}
      >
        <div className="flex flex-col h-full overflow-y-auto px-6 pt-8 pb-10 gap-1">
          {/* Nav links */}
          {[
            { href: "/", label: "Home" },
            { href: "/about", label: "About" },
            { href: "/work", label: "Our Work" },
            { href: "/impact", label: "Impact" },
            { href: "/stories", label: "Stories" },
          ].map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={closeMenu}
              className="text-xl font-semibold text-chalk py-4 border-b border-white/[0.07] hover:text-gold-bright transition-colors"
            >
              {label}
            </Link>
          ))}

          <Link
            href="/login"
            onClick={closeMenu}
            className="text-xl font-semibold text-gold-bright py-4 border-b border-white/[0.07] hover:text-gold transition-colors"
          >
            Login
          </Link>

          {/* CTA at bottom */}
          <div className="mt-auto pt-8">
            <Link
              href="/donate"
              onClick={closeMenu}
              className="btn btn-gold btn-lg w-full justify-center text-base"
            >
              Donate Now
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="w-4 h-4"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
