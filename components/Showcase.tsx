"use client";
import { useEffect, useState } from "react";
import InkReveal from "@/components/ui/ink-reveal";
import Reveal from "./Reveal";

export default function Showcase() {
  const [dark, setDark] = useState(true);

  useEffect(() => {
    const check = () => setDark(document.documentElement.classList.contains("dark"));
    check();
    const observer = new MutationObserver(check);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
    return () => observer.disconnect();
  }, []);

  const maskColor: [number, number, number] = dark ? [0, 0, 0] : [245, 245, 247];

  return (
    <section className="bg-white dark:bg-black">
      <div className="mx-auto max-w-container px-6 pb-4 pt-8">
        <Reveal>
          <div className="flex items-center justify-between">
            <p className="text-[12px] font-600 uppercase tracking-[0.18em] text-[#86868b]">Featured work</p>
            <p className="text-[12px] text-[#86868b]">Move cursor to reveal</p>
          </div>
        </Reveal>
      </div>

      <div style={{ position: "relative", width: "100%", height: "520px", overflow: "hidden" }}>
        <img
          src="https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1600&q=85"
          alt="Design workspace"
          loading="lazy"
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
        />
        <InkReveal maskColor={maskColor} brushSize={160} lifetime={800} stampStep={8} maxStamps={300} />
        <div style={{ position: "absolute", bottom: 24, left: 0, right: 0, display: "flex", justifyContent: "center", zIndex: 2, pointerEvents: "none" }}>
          <span style={{
            background: dark ? "rgba(0,0,0,0.55)" : "rgba(245,245,247,0.8)",
            backdropFilter: "blur(8px)",
            borderRadius: 980,
            border: dark ? "1px solid rgba(255,255,255,0.1)" : "1px solid rgba(0,0,0,0.08)",
            color: dark ? "rgba(255,255,255,0.5)" : "rgba(29,29,31,0.5)",
            fontSize: 12, fontWeight: 500, letterSpacing: "0.04em", padding: "6px 16px",
          }}>
            Simons Design — Precision craft for ambitious businesses
          </span>
        </div>
      </div>
    </section>
  );
}
