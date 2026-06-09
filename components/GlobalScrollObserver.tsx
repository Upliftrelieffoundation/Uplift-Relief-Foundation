"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export function GlobalScrollObserver() {
  const pathname = usePathname();

  useEffect(() => {
    // Reveal Observer
    const ro = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            ro.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    document.querySelectorAll(".reveal").forEach((el) => {
      ro.observe(el);
    });

    // Counter Observer
    const co = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll("[data-target]").forEach((el) => {
              const targetStr = (el as HTMLElement).dataset.target;
              if (!targetStr) return;
              const t = +targetStr;
              let c = 0;
              const s = t / 60;
              const i = setInterval(() => {
                c = Math.min(c + s, t);
                el.textContent = Math.floor(c).toLocaleString() + "+";
                if (c >= t) clearInterval(i);
              }, 22);
            });
            co.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );

    document.querySelectorAll(".impact-numbers").forEach((el) => {
      co.observe(el);
    });

    return () => {
      ro.disconnect();
      co.disconnect();
    };
  }, [pathname]);

  return null;
}
