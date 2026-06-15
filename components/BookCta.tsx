import { site } from "@/lib/site";
import Reveal from "./Reveal";

export default function BookCta() {
  return (
    <section id="book" className="bg-white py-24 md:py-32">
      <div className="mx-auto max-w-container px-6">
        <div className="grid items-start gap-16 md:grid-cols-2">
          <Reveal>
            <div>
              <p className="text-[12px] font-600 uppercase tracking-[0.18em] text-[#0071e3]">Let&apos;s talk</p>
              <h2
                className="mt-4 font-display font-600 leading-[1.08] tracking-[-0.03em] text-[#1d1d1f]"
                style={{ fontSize: "clamp(36px, 4vw, 48px)" }}
              >
                Ready to build something that brings you customers?
              </h2>
              <p className="mt-5 max-w-md text-[17px] leading-[1.47] text-[#6e6e73]">
                Book a free 30-minute consultation. We&apos;ll review your current presence, spot the biggest opportunities, and show you a clear plan — no pressure, no jargon.
              </p>
              <ul className="mt-8 space-y-4">
                {[
                  "A free growth audit of your current site",
                  "A clear plan to get more customers",
                  "Straight talk on timeline and cost",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-[15px] text-[#1d1d1f]/70">
                    <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-[#0071e3]/10 text-[10px] font-700 text-[#0071e3]">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-8 text-[14px] text-[#6e6e73]">
                Prefer to talk now?{" "}
                <a href={site.phoneHref} className="font-600 text-[#0071e3] hover:underline">
                  {site.phone}
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <form
              className="rounded-2xl border border-[#d2d2d7] bg-[#f5f5f7] p-8"
              action={`mailto:${site.email}`}
              method="post"
              encType="text/plain"
            >
              <h3 className="font-display text-xl font-600 tracking-[-0.02em] text-[#1d1d1f]">
                Request your free consultation
              </h3>
              <div className="mt-6 space-y-4">
                <Field label="Name" name="name" placeholder="Your name" />
                <Field label="Business" name="business" placeholder="Business name" />
                <Field label="Email" name="email" type="email" placeholder="you@business.com" />
                <Field label="Current website" name="website" placeholder="yoursite.com (optional)" required={false} />
                <div>
                  <label className="mb-1.5 block text-[13px] font-500 text-[#6e6e73]">
                    What do you want to improve?
                  </label>
                  <textarea
                    name="message"
                    rows={3}
                    placeholder="More leads, a redesign, better SEO…"
                    className="w-full rounded-lg border border-[#86868b] bg-white px-4 py-3 text-[15px] text-[#1d1d1f] placeholder:text-[#86868b] outline-none transition-colors focus:border-[#0071e3]"
                  />
                </div>
              </div>
              <button
                type="submit"
                className="mt-6 w-full rounded-full bg-[#0071e3] px-6 py-4 text-[14px] font-600 text-white transition-all hover:bg-[#0077ed] active:scale-[0.98]"
              >
                {site.primaryCta} →
              </button>
              <p className="mt-3 text-center text-[11px] text-[#86868b]">
                No spam. We reply within one business day.
              </p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  required = true,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="mb-1.5 block text-[13px] font-500 text-[#6e6e73]">{label}</label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        required={required}
        className="w-full rounded-lg border border-[#86868b] bg-white px-4 py-3 text-[15px] text-[#1d1d1f] placeholder:text-[#86868b] outline-none transition-colors focus:border-[#0071e3]"
      />
    </div>
  );
}
