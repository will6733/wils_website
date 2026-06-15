import { site, nav, socials } from "@/lib/site";
import { SocialIcon } from "./SocialIcon";

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.08] bg-[#1d1d1f] py-14">
      <div className="mx-auto max-w-container px-6">
        <div className="flex flex-col justify-between gap-10 md:flex-row">
          <div className="max-w-xs">
            <div className="font-display text-[17px] font-600 tracking-[-0.02em] text-white">
              {site.brand}
            </div>
            <p className="mt-2 text-[14px] text-white/45">{site.tagline}</p>
            <p className="mt-1 text-[13px] text-white/25">{site.location}</p>
            <div className="social-links mt-6 flex gap-2">
              {socials.map((s) => (
                <a
                  key={s.icon}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="social-link"
                >
                  <span className="social-link-inner flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white/60 transition-all duration-300 hover:bg-white/20 hover:text-white">
                    <SocialIcon icon={s.icon} />
                  </span>
                </a>
              ))}
            </div>
          </div>

          <div className="flex gap-16">
            <div>
              <div className="text-[11px] font-600 uppercase tracking-wider text-white/30">Explore</div>
              <ul className="mt-4 space-y-2">
                {nav.map((n) => (
                  <li key={n.href}>
                    <a href={n.href} className="text-[14px] text-white/45 transition-colors hover:text-white">
                      {n.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <div className="text-[11px] font-600 uppercase tracking-wider text-white/30">Contact</div>
              <ul className="mt-4 space-y-2 text-[14px] text-white/45">
                <li>
                  <a href={site.phoneHref} className="transition-colors hover:text-white">{site.phone}</a>
                </li>
                <li>
                  <a href={`mailto:${site.email}`} className="transition-colors hover:text-white">{site.email}</a>
                </li>
                <li>
                  <a href={site.bookingUrl} className="font-600 text-[#0071e3] transition-colors hover:text-[#2997ff]">
                    {site.primaryCta} →
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/[0.06] pt-6 text-[11px] text-white/20 md:flex-row">
          <span>© {new Date().getFullYear()} {site.brand}. All rights reserved.</span>
          <span>Designed &amp; built in {site.location}.</span>
        </div>
      </div>
    </footer>
  );
}
