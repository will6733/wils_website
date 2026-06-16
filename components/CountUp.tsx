"use client";
import { useEffect, useRef, useState } from "react";

function parse(str: string): { num: number; prefix: string; suffix: string } {
  const m = str.match(/^([^0-9]*)([0-9.]+)(.*)$/);
  if (!m) return { num: 0, prefix: "", suffix: str };
  return { num: parseFloat(m[2]), prefix: m[1], suffix: m[3] };
}

export default function CountUp({
  value,
  className,
}: {
  value: string;
  className?: string;
}) {
  const { num, prefix, suffix } = parse(value);
  const [display, setDisplay] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const done = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !done.current) {
          done.current = true;
          const duration = 1600;
          const start = performance.now();
          const tick = (now: number) => {
            const t = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - t, 3);
            setDisplay(eased * num);
            if (t < 1) requestAnimationFrame(tick);
            else setDisplay(num);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [num]);

  const formatted = Number.isInteger(num)
    ? String(Math.round(display))
    : display.toFixed(1);

  return (
    <div ref={ref} className={className}>
      {prefix}
      {formatted}
      {suffix}
    </div>
  );
}
