import { process } from "@/lib/site";
import Reveal from "./Reveal";

export default function Process() {
  return (
    <section id="process" className="bg-[#f5f5f7] py-24 md:py-32">
      <div className="mx-auto max-w-container px-6">
        <Reveal>
          <p className="text-[12px] font-600 uppercase tracking-[0.18em] text-[#0071e3]">
            The Simons Method
          </p>
          <h2
            className="mt-4 max-w-2xl font-display font-600 leading-[1.08] tracking-[-0.03em] text-[#1d1d1f]"
            style={{ fontSize: "clamp(36px, 4vw, 48px)" }}
          >
            A clear route from where you are<br />to measurable growth.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-[#d2d2d7] bg-[#d2d2d7] md:grid-cols-4">
          {process.map((p, i) => (
            <Reveal key={p.step} delay={i * 80}>
              <div className="h-full bg-[#f5f5f7] p-8">
                <div className="font-display text-[13px] font-700 text-[#0071e3]">{p.step}</div>
                <h3 className="mt-4 font-display text-2xl font-600 tracking-[-0.02em] text-[#1d1d1f]">{p.title}</h3>
                <p className="mt-3 text-[14px] leading-[1.57] text-[#6e6e73]">{p.blurb}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
