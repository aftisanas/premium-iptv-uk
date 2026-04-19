"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { STATS } from "@/lib/constants";

function AnimatedNumber({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const [displayed, setDisplayed] = useState("0");

  useEffect(() => {
    if (!isInView) return;

    const numericMatch = value.match(/[\d,]+/);
    if (!numericMatch) {
      setDisplayed(value);
      return;
    }

    const numericStr = numericMatch[0];
    const target = parseInt(numericStr.replace(/,/g, ""), 10);
    const prefix = value.slice(0, value.indexOf(numericStr));
    const suffix = value.slice(value.indexOf(numericStr) + numericStr.length);
    const duration = 2000;
    const steps = 60;
    const stepTime = duration / steps;
    let current = 0;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      const easeOut = 1 - Math.pow(1 - progress, 3);
      current = Math.round(target * easeOut);
      setDisplayed(`${prefix}${current.toLocaleString()}${suffix}`);

      if (step >= steps) {
        setDisplayed(value);
        clearInterval(timer);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [isInView, value]);

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
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
