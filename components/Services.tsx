import { services } from "@/lib/site";
import Reveal from "./Reveal";

export default function Services() {
  return (
    <section id="services" className="bg-black py-24 md:py-32">
      <div className="mx-auto max-w-container px-6">
        <Reveal>
          <p className="text-[12px] font-600 uppercase tracking-[0.18em] text-[#0071e3]">What we do</p>
          <h2
            className="mt-4 max-w-2xl font-display font-600 leading-[1.08] tracking-[-0.03em] text-white"
            style={{ fontSize: "clamp(36px, 4vw, 48px)" }}
          >
            More than a website.<br />A customer-acquisition engine.
          </h2>
          <p className="mt-5 max-w-xl text-[17px] leading-[1.47] text-white/50">
            Anyone can hand you a pretty template. We build experiences engineered around one thing: getting you more customers.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 80}>
              <div className="group flex h-full flex-col rounded-2xl border border-white/[0.08] bg-[#1d1d1f]/60 p-8 transition-all duration-300 hover:-translate-y-1 hover:border-[#0071e3]/30">
                <div className="mb-5 grid h-10 w-10 place-items-center rounded-xl border border-white/10 font-display text-sm font-700 text-[#2997ff]">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="font-display text-xl font-600 tracking-[-0.02em] text-white">{s.title}</h3>
                <p className="mt-3 flex-1 text-[15px] leading-[1.5] text-white/50">{s.blurb}</p>
                <ul className="mt-6 space-y-2">
                  {s.points.map((p) => (
                    <li key={p} className="flex items-center gap-2 text-[13px] font-500 text-white/55">
                      <CheckIcon />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function CheckIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#0071e3" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="m20 6-11 11-5-5" />
    </svg>
  );
}
