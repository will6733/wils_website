"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { site, stats } from "@/lib/site";
import CountUp from "./CountUp";

const TOTAL_FRAMES = 150;

function padNum(n: number) {
  return String(n).padStart(3, "0");
}

function frameUrl(i: number) {
  return `/sequence-1/ezgif-frame-${padNum(i)}.jpg`;
}

export default function HeroScroll() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<(HTMLImageElement | null)[]>(
    new Array(TOTAL_FRAMES).fill(null)
  );
  const currentFrameRef = useRef(0);
  const rafRef = useRef<number | null>(null);
  const [firstLoaded, setFirstLoaded] = useState(false);
  const [loadPct, setLoadPct] = useState(0);

  // Draw a frame cover-fitted to the canvas (physical pixel coords)
  const drawFrame = useCallback((idx: number) => {
    const canvas = canvasRef.current;
    const img = imagesRef.current[idx];
    if (!canvas || !img || !img.complete || !img.naturalWidth) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const cw = canvas.width;
    const ch = canvas.height;
    const scale = Math.max(cw / img.naturalWidth, ch / img.naturalHeight);
    const w = img.naturalWidth * scale;
    const h = img.naturalHeight * scale;

    ctx.fillStyle = "#eaeaea";
    ctx.fillRect(0, 0, cw, ch);
    ctx.drawImage(img, (cw - w) / 2, (ch - h) / 2, w, h);
  }, []);

  // Preload: show frame 1 immediately, load rest in background
  useEffect(() => {
    let loadedCount = 0;
    const images = imagesRef.current;

    for (let i = 0; i < TOTAL_FRAMES; i++) {
      const img = new window.Image();
      img.src = frameUrl(i + 1);
      images[i] = img;

      const capturedIdx = i;
      img.onload = () => {
        loadedCount++;
        setLoadPct(loadedCount / TOTAL_FRAMES);
        if (capturedIdx === 0) {
          setFirstLoaded(true);
          drawFrame(0);
        }
      };
    }
  }, [drawFrame]);

  // Map scroll position → frame index
  useEffect(() => {
    const onScroll = () => {
      const container = containerRef.current;
      if (!container) return;

      const scrolled = -container.getBoundingClientRect().top;
      const scrollable = container.offsetHeight - window.innerHeight;
      const progress = Math.max(0, Math.min(1, scrolled / scrollable));
      const target = Math.round(progress * (TOTAL_FRAMES - 1));

      if (target === currentFrameRef.current) return;
      currentFrameRef.current = target;

      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => {
        rafRef.current = null;
        drawFrame(currentFrameRef.current);
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    };
  }, [drawFrame]);

  // Size canvas to viewport at device pixel ratio (sharp on retina)
  useEffect(() => {
    const resize = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      drawFrame(currentFrameRef.current);
    };

    resize();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, [drawFrame]);

  return (
    <section ref={containerRef} className="relative h-[500vh]" aria-label="Hero">
      {/* Sticky viewport — stays fixed while scroll plays through frames */}
      <div className="sticky top-0 h-screen overflow-hidden">

        {/* Full-bleed canvas (always light — image background drives the bg) */}
        <canvas ref={canvasRef} className="absolute inset-0" aria-hidden />

        {/* Pre-load state */}
        {!firstLoaded && (
          <div className="absolute inset-0 flex items-center justify-center bg-[#eaeaea]">
            <div className="w-40 text-center">
              <div className="h-px w-full bg-[#1d1d1f]/10">
                <div
                  className="h-full bg-[#0071e3] transition-all duration-150"
                  style={{ width: `${loadPct * 100}%` }}
                />
              </div>
              <p className="mt-3 text-[10px] tracking-[0.15em] text-[#1d1d1f]/30">
                LOADING
              </p>
            </div>
          </div>
        )}

        {/* Top gradient — keeps headline legible over any frame */}
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-[60%]"
          style={{
            background:
              "linear-gradient(to bottom, rgba(234,234,234,0.94) 0%, rgba(234,234,234,0.0) 100%)",
          }}
        />

        {/* Bottom fade */}
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 h-36"
          style={{
            background:
              "linear-gradient(to top, rgba(234,234,234,0.65) 0%, transparent 100%)",
          }}
        />

        {/* Text content — pinned in the sticky viewport */}
        <div className="absolute inset-0 flex flex-col items-center px-6 pt-28 text-center">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-[#1d1d1f]/10 bg-[#1d1d1f]/5 px-4 py-1.5 text-[12px] font-500 text-[#1d1d1f]/50 backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-[#0071e3]" aria-hidden />
            Premium web design studio — North Carolina
          </div>

          {/* Headline */}
          <h1
            className="mt-6 font-display font-700 leading-[1.0] tracking-[-0.04em] text-[#1d1d1f]"
            style={{ fontSize: "clamp(44px, 7vw, 88px)" }}
          >
            Design that<br />
            <span className="text-gradient">commands the world.</span>
          </h1>

          <p className="mx-auto mt-5 max-w-[480px] text-[16px] leading-[1.65] text-[#1d1d1f]/55">
            Simons Design crafts premium digital experiences for businesses
            that refuse to blend in — built on precision, purpose, and craft.
          </p>

          {/* CTAs */}
          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <a
              href={site.bookingUrl}
              className="inline-flex min-h-[44px] items-center gap-2 rounded-full bg-[#0071e3] px-8 py-3.5 text-[14px] font-600 text-white transition-colors duration-200 hover:bg-[#0077ed] active:scale-[0.97]"
            >
              {site.primaryCta}
            </a>
            <a
              href="#results"
              className="inline-flex min-h-[44px] items-center gap-2 rounded-full border border-[#1d1d1f]/20 px-8 py-3.5 text-[14px] font-600 text-[#1d1d1f]/60 transition-all duration-200 hover:border-[#1d1d1f]/40 hover:text-[#1d1d1f]"
            >
              See our work
            </a>
          </div>

          {/* Stats — pinned to bottom of sticky viewport */}
          <div className="mt-auto mb-8 w-full max-w-2xl">
            <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-[#1d1d1f]/10 bg-[#1d1d1f]/8 backdrop-blur-sm md:grid-cols-4">
              {stats.map((s) => (
                <div key={s.label} className="bg-white/60 px-4 py-5 backdrop-blur-sm">
                  <CountUp
                    value={s.value}
                    className="font-display text-2xl font-700 text-[#0071e3]"
                  />
                  <div className="mt-1 text-[11px] leading-[1.4] text-[#6e6e73]">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll nudge */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2" aria-hidden>
          <div className="flex flex-col items-center gap-1.5">
            <span className="text-[9px] tracking-[0.2em] text-[#1d1d1f]/25">
              SCROLL
            </span>
            <div className="h-8 w-px bg-gradient-to-b from-[#1d1d1f]/20 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
