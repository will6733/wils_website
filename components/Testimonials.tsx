import { testimonials } from "@/lib/site";
import Reveal from "./Reveal";

export default function Testimonials() {
  return (
    <section className="bg-[#f5f5f7] py-24 md:py-32 dark:bg-black">
      <div className="mx-auto max-w-container px-6">
        <Reveal>
          <p className="text-center text-[12px] font-600 uppercase tracking-[0.18em] text-[#0071e3]">
            Client voices
          </p>
        </Reveal>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 80}>
              <figure className="flex h-full flex-col rounded-2xl border border-[#d2d2d7] bg-white p-8 dark:border-white/[0.08] dark:bg-[#1d1d1f]/60">
                <div className="text-[#0071e3]" aria-hidden>★★★★★</div>
                <blockquote className="mt-5 flex-1 text-[17px] leading-[1.6] text-[#1d1d1f]/70 dark:text-white/65">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-7">
                  <div className="font-display text-[15px] font-600 tracking-[-0.02em] text-[#1d1d1f] dark:text-white">{t.name}</div>
                  <div className="mt-1 text-[13px] text-[#6e6e73] dark:text-white/40">{t.role}</div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
