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

        <div
          className="nav-menu"
          style={
            menuOpen
              ? {
                display: "flex",
                flexDirection: "column",
                position: "absolute",
                top: "100%",
                left: "0",
                right: "0",
                background: "var(--bg)",
                padding: "1.5rem 2rem",
                gap: "1rem",
                boxShadow: "0 12px 32px rgba(0,0,0,.3)",
                zIndex: 99,
              }
              : {}
          }
        >
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/work">Our Work</Link>
          <Link href="/impact">Impact</Link>
          <Link href="/stories">Stories</Link>
          <Link href="/login" className='text-gold hover:text-gold/80 transition'>
            Login
          </Link>
        </div>

        <div
          className="nav-cta"
          style={
            menuOpen
              ? {
                display: "flex",
                position: "absolute",
                top: "calc(100% + 220px)",
                left: "0",
                right: "0",
                background: "var(--bg)",
                padding: "0 2rem 1.5rem",
                zIndex: 99,
              }
              : {}
          }
        >
          <Link href="/donate" className="btn btn-gold">
            Donate Now{" "}
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        <button
          className="hamburger"
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
