import { services } from "@/lib/site";
import Reveal from "./Reveal";

export default function Services() {
  const [s0, s1, s2] = services;

  return (
    <section id="services" className="bg-[#f5f5f7] py-24 md:py-32 dark:bg-black">
      <div className="mx-auto max-w-container px-6">
        <Reveal>
          <p className="text-[12px] font-600 uppercase tracking-[0.18em] text-[#0071e3]">What we do</p>
          <h2
            className="mt-4 max-w-2xl font-display font-700 leading-[1.05] tracking-[-0.04em] text-[#1d1d1f] dark:text-white"
            style={{ fontSize: "clamp(36px, 4vw, 48px)" }}
          >
            More than a website.<br />A customer-acquisition engine.
          </h2>
          <p className="mt-5 max-w-xl text-[17px] leading-[1.6] text-[#6e6e73] dark:text-white/50">
            Anyone can hand you a pretty template. We build experiences engineered around one thing: getting you more customers.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-4 md:grid-cols-2">
          {/* Large feature card */}
          <Reveal className="md:row-span-2">
            <div className="group flex h-full flex-col rounded-2xl border border-[#d2d2d7] bg-white p-10 transition-all duration-200 hover:scale-[1.01] hover:shadow-lg hover:shadow-black/10 dark:border-white/[0.08] dark:bg-[#1d1d1f]/60 dark:hover:border-[#0071e3]/30 dark:hover:shadow-black/30">
              <div className="mb-6 grid h-10 w-10 place-items-center rounded-xl border border-[#d2d2d7] font-display text-[13px] font-700 text-[#0071e3] dark:border-white/10 dark:text-[#2997ff]">
                01
              </div>
              <h3 className="font-display text-2xl font-700 tracking-[-0.03em] text-[#1d1d1f] dark:text-white">{s0.title}</h3>
              <p className="mt-4 flex-1 text-[15px] leading-[1.65] text-[#6e6e73] dark:text-white/50">{s0.blurb}</p>
              <ul className="mt-8 space-y-2.5">
                {s0.points.map((p) => (
                  <li key={p} className="flex items-center gap-2.5 text-[13px] font-500 text-[#6e6e73] dark:text-white/55">
                    <CheckIcon /> {p}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={80}>
            <div className="group flex h-full flex-col rounded-2xl border border-[#d2d2d7] bg-white p-8 transition-all duration-200 hover:scale-[1.01] hover:shadow-lg hover:shadow-black/10 dark:border-white/[0.08] dark:bg-[#1d1d1f]/60 dark:hover:border-[#0071e3]/30 dark:hover:shadow-black/30">
              <div className="mb-5 grid h-10 w-10 place-items-center rounded-xl border border-[#d2d2d7] font-display text-[13px] font-700 text-[#0071e3] dark:border-white/10 dark:text-[#2997ff]">
                02
              </div>
              <h3 className="font-display text-xl font-700 tracking-[-0.03em] text-[#1d1d1f] dark:text-white">{s1.title}</h3>
              <p className="mt-3 flex-1 text-[14px] leading-[1.6] text-[#6e6e73] dark:text-white/50">{s1.blurb}</p>
              <ul className="mt-5 space-y-2">
                {s1.points.map((p) => (
                  <li key={p} className="flex items-center gap-2 text-[13px] font-500 text-[#6e6e73] dark:text-white/55">
                    <CheckIcon /> {p}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={160}>
            <div className="group flex h-full flex-col rounded-2xl border border-[#0071e3]/20 bg-[#0071e3]/5 p-8 transition-all duration-200 hover:scale-[1.01] hover:border-[#0071e3]/40 hover:shadow-lg hover:shadow-[#0071e3]/10 dark:border-[#0071e3]/30 dark:bg-[#0071e3]/10 dark:hover:border-[#0071e3]/50">
              <div className="mb-5 grid h-10 w-10 place-items-center rounded-xl border border-[#0071e3]/30 font-display text-[13px] font-700 text-[#0071e3]">
                03
              </div>
              <h3 className="font-display text-xl font-700 tracking-[-0.03em] text-[#1d1d1f] dark:text-white">{s2.title}</h3>
              <p className="mt-3 flex-1 text-[14px] leading-[1.6] text-[#6e6e73] dark:text-white/60">{s2.blurb}</p>
              <ul className="mt-5 space-y-2">
                {s2.points.map((p) => (
                  <li key={p} className="flex items-center gap-2 text-[13px] font-500 text-[#6e6e73] dark:text-white/65">
                    <CheckIcon /> {p}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function CheckIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#0071e3" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="m20 6-11 11-5-5" />
    </svg>
  );
}
