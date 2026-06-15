"use client";
import InkReveal from "@/components/ui/ink-reveal";
import Reveal from "./Reveal";

export default function Showcase() {
  return (
    <section className="bg-black py-0">
      <div className="mx-auto max-w-container px-6 pb-6">
        <Reveal>
          <div className="flex items-center justify-between pb-4">
            <p className="text-[12px] font-600 uppercase tracking-[0.18em] text-white/30">
              Featured work
            </p>
            <p className="text-[12px] text-white/25">Move your cursor to reveal</p>
          </div>
        </Reveal>
      </div>

      <div
        style={{
          position: "relative",
          width: "100%",
          height: "520px",
          overflow: "hidden",
        }}
      >
        {/* Background image — design workspace */}
        <img
          src="https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1600&q=85"
          alt="Design workspace showcase"
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center",
          }}
        />

        {/* Overlay text that sits behind InkReveal */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 0,
            background: "rgba(0,0,0,0.2)",
          }}
        />

        {/* InkReveal: black mask, reveal the image beneath */}
        <InkReveal
          maskColor={[0, 0, 0]}
          brushSize={160}
          lifetime={800}
          stampStep={8}
          maxStamps={300}
        />

        {/* Label below the canvas */}
        <div
          style={{
            position: "absolute",
            bottom: 24,
            left: 0,
            right: 0,
            display: "flex",
            justifyContent: "center",
            zIndex: 2,
            pointerEvents: "none",
          }}
        >
          <span
            style={{
              background: "rgba(0,0,0,0.55)",
              backdropFilter: "blur(8px)",
              borderRadius: 980,
              border: "1px solid rgba(255,255,255,0.1)",
              color: "rgba(255,255,255,0.5)",
              fontSize: 12,
              fontWeight: 500,
              letterSpacing: "0.04em",
              padding: "6px 16px",
            }}
          >
            Simons Design — Precision craft for ambitious businesses
          </span>
        </div>
      </div>
    </section>
  );
}
