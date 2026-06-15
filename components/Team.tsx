import TeamShowcase from "@/components/ui/team-showcase";
import Reveal from "./Reveal";

export default function Team() {
  return (
    <section id="team" className="bg-white py-24 md:py-32">
      <div className="mx-auto max-w-container px-6">
        <Reveal>
          <p className="text-[12px] font-600 uppercase tracking-[0.18em] text-[#0071e3]">
            The studio
          </p>
          <h2
            className="mt-4 max-w-2xl font-display font-600 leading-[1.08] tracking-[-0.03em] text-[#1d1d1f]"
            style={{ fontSize: "clamp(36px, 4vw, 48px)" }}
          >
            Small team.<br />Outsized craft.
          </h2>
          <p className="mt-5 max-w-xl text-[17px] leading-[1.47] text-[#6e6e73]">
            We keep the studio intentionally lean — every project gets a senior eye on it from strategy through launch.
          </p>
        </Reveal>
      </div>

      <Reveal delay={80}>
        <TeamShowcase />
      </Reveal>
    </section>
  );
}
