"use client";
import { useEffect, useState } from "react";
import { site } from "@/lib/site";

export default function MobileCta() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-50 md:hidden transition-transform duration-300 ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="border-t border-[#d2d2d7] bg-white/90 px-4 py-3 pb-safe backdrop-blur-md dark:border-white/10 dark:bg-black/90">
        <a
          href={site.bookingUrl}
          className="flex min-h-[44px] w-full items-center justify-center rounded-full bg-[#0071e3] px-6 py-3 text-[14px] font-600 text-white active:scale-[0.97] transition-transform"
        >
          {site.primaryCta} →
        </a>
      </div>
    </div>
  );
}
