import { pricing, site } from "@/lib/site";
import Reveal from "./Reveal";

export default function Pricing() {
  return (
    <section id="pricing" className="bg-[#f5f5f7] py-24 md:py-32">
      <div className="mx-auto max-w-container px-6">
        <Reveal>
          <p className="text-[12px] font-600 uppercase tracking-[0.18em] text-[#0071e3]">Simple, honest pricing</p>
          <h2
            className="mt-4 max-w-2xl font-display font-600 leading-[1.08] tracking-[-0.03em] text-[#1d1d1f]"
            style={{ fontSize: "clamp(36px, 4vw, 48px)" }}
          >
            Premium work, packaged for<br />ambitious businesses.
          </h2>
          <p className="mt-5 max-w-xl text-[17px] leading-[1.47] text-[#6e6e73]">
            No vague quotes or surprise invoices. Pick a starting point — we&apos;ll tailor the details on your free call.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {pricing.map((p, i) => (
            <Reveal key={p.name} delay={i * 80}>
              <div
                className={`flex h-full flex-col rounded-2xl border p-8 ${
                  p.featured
                    ? "border-[#0071e3]/40 bg-white shadow-lg md:-translate-y-3"
                    : "border-[#d2d2d7] bg-white"
                }`}
              >
                {p.featured && (
                  <span className="mb-4 inline-flex w-fit rounded-full bg-[#0071e3]/10 px-3 py-1 text-[11px] font-700 text-[#0071e3]">
                    Most popular
                  </span>
                )}
                <h3 className="font-display text-xl font-600 tracking-[-0.02em] text-[#1d1d1f]">{p.name}</h3>
                <div className="mt-3 font-display text-4xl font-700 tracking-[-0.03em] text-[#1d1d1f]">
                  {p.price}
                  {p.price !== "Custom" && (
                    <span className="text-base font-400 text-[#6e6e73]"> starting</span>
                  )}
                </div>
                <p className="mt-3 text-[14px] text-[#6e6e73]">{p.tagline}</p>
                <ul className="mt-7 flex-1 space-y-3">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-[14px]">
                      <span className="mt-0.5 text-[#0071e3]">✓</span>
                      <span className="text-[#1d1d1f]/80">{f}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href={site.bookingUrl}
                  className={`mt-8 inline-flex items-center justify-center rounded-full px-6 py-3 text-[14px] font-600 transition-all active:scale-[0.98] ${
                    p.featured
                      ? "bg-[#0071e3] text-white hover:bg-[#0077ed]"
                      : "border border-[#1d1d1f]/20 text-[#1d1d1f] hover:border-[#1d1d1f]/40"
                  }`}
                >
                  {site.primaryCta}
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
