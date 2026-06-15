import { clientLogos } from "@/lib/site";
import Reveal from "./Reveal";

export default function TrustBar() {
  return (
    <section className="border-b border-[#d2d2d7] bg-[#f5f5f7] py-10">
      <div className="mx-auto max-w-container px-6">
        <Reveal>
          <p className="text-center text-[12px] font-600 uppercase tracking-[0.2em] text-[#6e6e73]">
            Trusted by ambitious businesses across the Carolinas
          </p>
          <div className="mt-7 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
            {clientLogos.map((logo) => (
              <span
                key={logo}
                className="font-display text-[14px] font-600 text-[#86868b] transition-colors hover:text-[#1d1d1f]"
              >
                {logo}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
