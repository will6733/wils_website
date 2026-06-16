"use client";
import { useState } from "react";
import Reveal from "./Reveal";

const faqs = [
  {
    q: "How long does a project take?",
    a: "Most Launch projects ship in 2–3 weeks. Growth projects take 4–6 weeks. We'll give you a firm timeline on your free consultation call before anything is signed.",
  },
  {
    q: "Do you work with businesses outside North Carolina?",
    a: "Absolutely. We work with clients across the US — fully remote, async-friendly. Most of our process runs on video calls and shared docs, so location is never a barrier.",
  },
  {
    q: "What do you need from me to get started?",
    a: "A 30-minute discovery call, access to your existing branding (if any), and a clear sense of your goals. We handle the rest — copy, design, development, and launch.",
  },
  {
    q: "Will my site rank on Google?",
    a: "Every site we build includes a solid SEO foundation — semantic HTML, fast Core Web Vitals, proper metadata, and schema markup. Growth and Partner packages include an active local SEO campaign.",
  },
  {
    q: "What happens after launch?",
    a: "Launch and Growth packages include 30 days of post-launch support. Growth includes 90 days of optimization. Partner clients get ongoing monthly support, CRO sprints, and priority response.",
  },
  {
    q: "Can I update the site myself after it's built?",
    a: "Yes. We build on a CMS of your choice (Sanity, Contentful, or a custom admin) so you can update copy, images, and blog posts without touching code.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="bg-[#f5f5f7] py-24 md:py-32">
      <div className="mx-auto max-w-container px-6">
        <Reveal>
          <p className="text-[12px] font-600 uppercase tracking-[0.18em] text-[#0071e3]">FAQ</p>
          <h2
            className="mt-4 max-w-2xl font-display font-600 leading-[1.08] tracking-[-0.03em] text-[#1d1d1f]"
            style={{ fontSize: "clamp(36px, 4vw, 48px)" }}
          >
            Questions we get<br />before every project.
          </h2>
        </Reveal>

        <Reveal delay={80}>
          <div className="mt-12 divide-y divide-[#d2d2d7]">
            {faqs.map((item, i) => (
              <div key={i}>
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  aria-expanded={open === i}
                  className="flex min-h-[44px] w-full items-center justify-between gap-6 py-5 text-left transition-colors hover:text-[#0071e3] focus-visible:text-[#0071e3]"
                >
                  <span className="text-[17px] font-500 tracking-[-0.01em] text-[#1d1d1f]">
                    {item.q}
                  </span>
                  <span
                    className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-[#d2d2d7] text-[#1d1d1f] transition-transform duration-200"
                    style={{ transform: open === i ? "rotate(45deg)" : "rotate(0deg)" }}
                    aria-hidden
                  >
                    <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
                      <line x1="5.5" y1="0" x2="5.5" y2="11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                      <line x1="0" y1="5.5" x2="11" y2="5.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  </span>
                </button>
                <div
                  className="overflow-hidden transition-all duration-300 ease-out"
                  style={{ maxHeight: open === i ? "300px" : "0px" }}
                >
                  <p className="pb-5 pr-10 text-[15px] leading-[1.6] text-[#6e6e73]">
                    {item.a}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
