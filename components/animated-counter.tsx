"use client";

import { useEffect, useRef, useState } from "react";

export function AnimatedCounter({ value, label }: { value: string; label: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  const numericValue = parseInt(value.replace(/[^0-9]/g, ""));
  const suffix = value.replace(/[0-9]/g, "");

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          let start = 0;
          const duration = 1500;
          const step = Math.ceil(numericValue / 60);
          const timer = setInterval(() => {
            start += step;
            if (start >= numericValue) {
              setCount(numericValue);
              clearInterval(timer);
            } else {
              setCount(start);
            }
          }, 25);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [numericValue]);

  return (
    <div ref={ref} className="glass-card p-5 text-center">
      <div className="gradient-text text-3xl font-bold">
        {count}{suffix}
      </div>
      <div className="mt-1 text-xs text-white/40 uppercase tracking-wider">{label}</div>
    </div>
  );
}
