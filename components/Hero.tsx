import { site, stats } from "@/lib/site";
import Reveal from "./Reveal";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-black px-6 text-center">
      <div className="relative mx-auto max-w-container">
        <Reveal>
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-500 text-white/50 backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-[#0071e3]" />
            Premium web design studio — North Carolina
          </div>
        </Reveal>

        <Reveal delay={80}>
          <h1
            className="mt-8 font-display font-600 leading-[1.02] tracking-[-0.03em] text-white"
            style={{ fontSize: "clamp(52px, 8vw, 96px)" }}
          >
            Design that<br />
            <span className="text-gradient">commands attention.</span>
          </h1>
        </Reveal>

        <Reveal delay={160}>
          <p className="mx-auto mt-7 max-w-[540px] text-[17px] leading-[1.47] tracking-[-0.02em] text-white/55">
            Simons Design crafts premium digital experiences for businesses
            that refuse to blend in — built on precision, purpose, and craft.
          </p>
        </Reveal>

        <Reveal delay={240}>
          <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <a
              href={site.bookingUrl}
              className="inline-flex items-center gap-2 rounded-full bg-[#0071e3] px-7 py-3.5 text-[14px] font-600 text-white transition-all hover:bg-[#0077ed] active:scale-[0.98]"
            >
              {site.primaryCta}
            </a>
            <a
              href="#results"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 px-7 py-3.5 text-[14px] font-600 text-white/70 transition-all hover:border-white/30 hover:text-white"
            >
              See our work
            </a>
          </div>
        </Reveal>

        <Reveal delay={340}>
          <div className="mt-20 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.04] md:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="bg-black/60 px-6 py-6 backdrop-blur-sm">
                <div className="font-display text-3xl font-700 text-[#2997ff]">{s.value}</div>
                <div className="mt-1 text-[12px] tracking-[-0.01em] text-white/40">{s.label}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="h-10 w-[1px] bg-gradient-to-b from-white/30 to-transparent" />
      </div>
    </section>
  );
}
