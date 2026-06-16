import { site, stats } from "@/lib/site";
import CountUp from "./CountUp";
import Reveal from "./Reveal";

export default function Hero() {
  return (
    <section className="relative flex min-h-[100svh] flex-col items-center justify-center overflow-hidden bg-black px-6 text-center">
      <div className="relative mx-auto max-w-container">
        <Reveal>
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-[12px] font-500 text-white/50 backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-[#0071e3]" aria-hidden />
            Premium web design studio — North Carolina
          </div>
        </Reveal>

        <Reveal delay={80}>
          <h1
            className="mt-8 font-display font-700 leading-[1.0] tracking-[-0.04em] text-white"
            style={{ fontSize: "clamp(52px, 8vw, 100px)" }}
          >
            Design that<br />
            <span className="text-gradient">commands attention.</span>
          </h1>
        </Reveal>

        <Reveal delay={160}>
          <p className="mx-auto mt-7 max-w-[540px] text-[17px] leading-[1.6] text-white/55">
            Simons Design crafts premium digital experiences for businesses
            that refuse to blend in — built on precision, purpose, and craft.
          </p>
        </Reveal>

        <Reveal delay={240}>
          <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <a
              href={site.bookingUrl}
              className="inline-flex min-h-[44px] items-center gap-2 rounded-full bg-[#0071e3] px-8 py-3.5 text-[14px] font-600 text-white transition-colors duration-200 hover:bg-[#0077ed] active:scale-[0.97] animate-pulse-glow"
            >
              {site.primaryCta}
            </a>
            <a
              href="#results"
              className="inline-flex min-h-[44px] items-center gap-2 rounded-full border border-white/15 px-8 py-3.5 text-[14px] font-600 text-white/70 transition-all duration-200 hover:border-white/35 hover:text-white active:scale-[0.97]"
            >
              See our work
            </a>
          </div>
        </Reveal>

        <Reveal delay={340}>
          <div className="mt-20 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.04] md:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="bg-black/60 px-6 py-7 backdrop-blur-sm">
                <CountUp
                  value={s.value}
                  className="font-display text-3xl font-700 text-[#2997ff]"
                />
                <div className="mt-1.5 text-[12px] leading-[1.4] text-white/40">{s.label}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2" aria-hidden>
        <div className="h-10 w-[1px] bg-gradient-to-b from-white/30 to-transparent" />
      </div>
    </section>
  );
}
