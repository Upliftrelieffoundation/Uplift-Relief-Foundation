"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

import { ArrowRight } from "lucide-react";
export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
            <Link
              href="/login"
              className="text-gold hover:text-gold/80 transition"
              onClick={() => setMenuOpen(false)}
            >
              Login
            </Link>
          </div>

          <div className="nav-cta">
            <Link href="/donate" className="btn btn-gold" onClick={() => setMenuOpen(false)}>
              Donate Now <ArrowRight />
            </Link>
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
