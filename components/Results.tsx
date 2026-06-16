import { caseStudies } from "@/lib/site";
import Reveal from "./Reveal";

export default function Results() {
  return (
    <section id="results" className="bg-white py-24 md:py-32">
      <div className="mx-auto max-w-container px-6">
        <Reveal>
          <p className="text-[12px] font-600 uppercase tracking-[0.18em] text-[#0071e3]">Proof, not promises</p>
          <h2
            className="mt-4 max-w-2xl font-display font-700 leading-[1.05] tracking-[-0.04em] text-[#1d1d1f]"
            style={{ fontSize: "clamp(36px, 4vw, 48px)" }}
          >
            Real businesses.<br />Measurable growth.
          </h2>
          <p className="mt-5 max-w-xl text-[17px] leading-[1.6] text-[#6e6e73]">
            We measure success in customers and revenue — here&apos;s what that looks like.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {caseStudies.map((c, i) => (
            <Reveal key={c.client} delay={i * 80}>
              <div className="group flex h-full flex-col overflow-hidden rounded-2xl border border-[#d2d2d7] bg-[#f5f5f7] transition-all duration-200 hover:scale-[1.01] hover:shadow-lg hover:shadow-black/10">
                <div className="relative aspect-[4/3] w-full overflow-hidden">
                  <img
                    src={c.image}
                    alt={`${c.client} result`}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="flex flex-1 flex-col p-7">
                  <div className="text-[11px] font-600 uppercase tracking-wider text-[#86868b]">
                    {c.industry}
                  </div>
                  <div className="mt-5 font-display text-5xl font-700 tracking-[-0.04em] text-gradient">
                    {c.metric}
                  </div>
                  <p className="mt-2 text-[15px] font-500 text-[#1d1d1f]">{c.result}</p>
                  <p className="mt-5 flex-1 border-l-2 border-[#0071e3]/25 pl-4 text-[13px] italic leading-[1.6] text-[#6e6e73]">
                    &ldquo;{c.quote}&rdquo;
                  </p>
                  <div className="mt-6 text-[13px] font-600 text-[#1d1d1f]">{c.client}</div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120}>
          <p className="mt-8 text-center text-[12px] text-[#86868b]">
            Illustrative results — we&apos;ll feature your real numbers here as we grow together.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
