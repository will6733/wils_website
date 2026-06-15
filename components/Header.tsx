"use client";

import { useEffect, useState } from "react";
import { nav, site, socials } from "@/lib/site";
import { SocialIcon } from "./SocialIcon";

export default function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  const allLinks = [...nav, { label: "Contact", href: "#book" }];

  return (
    <>
      {/* Brand name — fixed top left */}
      <a
        href="#"
        className="fixed left-5 top-5 z-50 font-display text-[15px] font-600 tracking-[-0.02em] text-white transition-opacity hover:opacity-60"
      >
        {site.brand}
      </a>

      {/* Backdrop */}
      <div
        onClick={() => setOpen(false)}
        aria-hidden
        className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-500"
        style={{
          background: "rgba(10,10,10,0.55)",
          backdropFilter: open ? "blur(4px)" : "blur(0px)",
          opacity: open ? 1 : 0,
          pointerEvents: open ? "auto" : "none",
        }}
      />

      {/* Pill → panel */}
      <div
        role="dialog"
        aria-modal={open}
        aria-label="Navigation menu"
        className="fixed right-5 top-5 z-40 overflow-hidden"
        style={{
          width: open ? "min(400px, calc(100vw - 40px))" : "92px",
          height: open ? "calc(100dvh - 40px)" : "48px",
          borderRadius: open ? "18px" : "100px",
          backgroundColor: "#FAFAF7",
          color: "#0A0A0A",
          transitionProperty: "width, height, border-radius",
          transitionDuration: "900ms, 1000ms, 900ms",
          transitionTimingFunction:
            "cubic-bezier(0.34,1.56,0.64,1), cubic-bezier(0.34,1.4,0.64,1), ease",
        }}
      >
        {/* Closed state: "menu" button */}
        <button
          onClick={() => setOpen(true)}
          aria-label="Open menu"
          aria-expanded={open}
          className="absolute inset-0 flex w-full items-center justify-between px-[18px] transition-[opacity,transform] duration-200"
          style={{
            opacity: open ? 0 : 1,
            transform: open ? "scale(0.9)" : "scale(1)",
            transitionDelay: open ? "0ms" : "350ms",
            pointerEvents: open ? "none" : "auto",
          }}
        >
          <span className="text-[14px] font-500 text-[#0A0A0A]">menu</span>
          <span className="h-[7px] w-[7px] rounded-full bg-[#0A0A0A]" />
        </button>

        {/* Open state: nav links */}
        <div
          className="absolute inset-0 flex flex-col justify-center px-10 pb-20"
          style={{
            opacity: open ? 1 : 0,
            transition: "opacity 0.3s ease",
            transitionDelay: open ? "280ms" : "0ms",
            pointerEvents: open ? "auto" : "none",
          }}
        >
          <nav className="nav-links flex flex-col" style={{ gap: "0.15em" }}>
            {allLinks.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="nav-link group relative leading-[1.1] font-500 text-[#0A0A0A]"
                style={{
                  fontSize: "clamp(40px, 5.2vw, 70px)",
                  letterSpacing: "-0.04em",
                }}
              >
                <span
                  className="absolute left-0 top-1/2 -translate-y-1/2 scale-0 rounded-full bg-[#0A0A0A] group-hover:scale-100"
                  style={{
                    height: "20px",
                    width: "20px",
                    transition: "transform 500ms cubic-bezier(0.34, 1.56, 0.64, 1)",
                  }}
                />
                {item.label}
              </a>
            ))}
          </nav>
        </div>

        {/* Open state: footer row */}
        <div
          className="absolute bottom-0 left-0 right-0 flex items-center justify-between px-10 py-6"
          style={{
            opacity: open ? 1 : 0,
            transition: "opacity 0.3s ease",
            transitionDelay: open ? "350ms" : "0ms",
            pointerEvents: open ? "auto" : "none",
          }}
        >
          <div className="flex flex-col gap-3">
            <a
              href={`mailto:${site.email}`}
              className="text-[13px] font-500 text-[#0A0A0A]/50 transition-colors hover:text-[#0A0A0A]"
            >
              {site.email}
            </a>
            <div className="social-links flex gap-1">
              {socials.map((s) => (
                <a
                  key={s.icon}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="social-link"
                >
                  <span className="social-link-inner flex h-10 w-10 items-center justify-center rounded-full bg-[#0A0A0A] text-[#FAFAF7] transition-all duration-300">
                    <SocialIcon icon={s.icon} />
                  </span>
                </a>
              ))}
            </div>
          </div>
          <button
            onClick={() => setOpen(false)}
            aria-label="Close menu"
            className="flex h-11 w-11 items-center justify-center rounded-full bg-[#0A0A0A] text-[#FAFAF7] transition-opacity hover:opacity-70"
          >
            <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
              <line x1="1" y1="1" x2="10" y2="10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
              <line x1="10" y1="1" x2="1" y2="10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
}
