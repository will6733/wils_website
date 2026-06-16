import { clientLogos } from "@/lib/site";

const DOUBLED = [...clientLogos, ...clientLogos];

export default function TrustBar() {
  return (
    <section className="border-b border-[#d2d2d7] bg-[#f5f5f7] py-8 overflow-hidden">
      <p className="mb-5 text-center text-[11px] font-600 uppercase tracking-[0.22em] text-[#86868b]">
        Trusted by ambitious businesses
      </p>
      <div className="marquee-wrap">
        <div className="marquee-track animate-marquee gap-0">
          {DOUBLED.map((logo, i) => (
            <span
              key={i}
              className="inline-flex items-center px-10 font-display text-[14px] font-600 text-[#86868b] transition-colors duration-200 hover:text-[#1d1d1f]"
            >
              {logo}
              <span className="ml-10 h-1 w-1 rounded-full bg-[#d2d2d7]" aria-hidden />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
