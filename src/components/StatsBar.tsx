"use client";

import { useEffect, useRef, useState } from "react";
import MotionReveal from "./MotionReveal";
import { STATS } from "@/lib/constants";

function AnimatedNumber({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [inView, setInView] = useState(false);
  const numericMatch = value.match(/[\d,]+/);
  const numericStr = numericMatch ? numericMatch[0] : "";
  const prefix = numericStr ? value.slice(0, value.indexOf(numericStr)) : "";
  const suffix = numericStr ? value.slice(value.indexOf(numericStr) + numericStr.length) : "";
  const [displayed, setDisplayed] = useState(numericStr ? `${prefix}0${suffix}` : value);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          io.disconnect();
        }
      },
      { threshold: 0.2, rootMargin: "0px 0px -10% 0px" }
    );
    io.observe(node);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!inView || !numericStr) {
      if (!numericStr) setDisplayed(value);
      return;
    }

    const target = parseInt(numericStr.replace(/,/g, ""), 10);
    const duration = 900;
    const steps = 36;
    const stepTime = duration / steps;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(target * easeOut);
      setDisplayed(`${prefix}${current.toLocaleString()}${suffix}`);

      if (step >= steps) {
        setDisplayed(value);
        clearInterval(timer);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [inView, value, numericStr, prefix, suffix]);

  return <span ref={ref}>{displayed}</span>;
}

export default function StatsBar() {
  return (
    <section className="relative lg:py-16 py-11 bg-[#fafbff]">
      {/* Subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-violet-50/50 via-white to-cyan-50/30" />
      <div className="absolute inset-0 border-y border-violet-100/50" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {STATS.map((stat, i) => (
            <MotionReveal
              key={stat.label}
              y={20}
              delay={i * 0.04}
              duration={0.35}
              className="relative text-center"
            >
              <div className="text-3xl sm:text-4xl lg:text-5xl font-bold gradient-text mb-2">
                <AnimatedNumber value={stat.value} />
              </div>
              <div className="text-sm sm:text-base text-muted font-medium">
                {stat.label}
              </div>
              {i < STATS.length - 1 && (
                <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 h-12 w-px bg-gradient-to-b from-transparent via-violet-200 to-transparent" />
              )}
            </MotionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
