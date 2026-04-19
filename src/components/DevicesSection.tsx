"use client";

import { motion } from "framer-motion";
import { Tv, Smartphone, Monitor, Flame, Box, Airplay } from "lucide-react";
import Link from "next/link";
import { DEVICES } from "@/lib/constants";

const iconMap = { Tv, Smartphone, Monitor, Flame, Box, Airplay } as const;

export default function DevicesSection() {
  return (
    <section className="relative py-11 lg:py-16">
      <div className="absolute inset-0 section-gradient-2" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block rounded-full bg-cyan-50 border border-cyan-200 px-4 py-1.5 text-sm font-medium text-cyan-700 mb-4">
            Multi-Device Access
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Buy IPTV Once &mdash; Watch Across{" "}
            <span className="gradient-text">Every Household Screen</span>
          </h2>
          <p className="mx-auto max-w-xl text-lg text-muted">
            One{" "}
            <Link href="/pricing" className="text-violet-600 hover:text-violet-700 underline-offset-2 hover:underline">
              IPTV purchase
            </Link>
            , one login, five screens — the IPTV service runs on every device in the household with no extra hardware required.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 lg:gap-6">
          {DEVICES.map((device, i) => {
            const Icon = iconMap[device.icon];
            return (
              <motion.div
                key={device.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                whileHover={{ y: -8, scale: 1.05 }}
                className="group flex flex-col items-center gap-4 rounded-2xl border border-violet-100/50 bg-white p-6 transition-all duration-300 hover:border-violet-200 hover:shadow-lg hover:shadow-violet-100/40 cursor-default"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-100 to-cyan-50 transition-all group-hover:from-violet-200/80 group-hover:to-cyan-100/50 group-hover:shadow-md group-hover:shadow-violet-200/30">
                  <Icon className="h-7 w-7 text-violet-600 transition-colors group-hover:text-purple-600" />
                </div>
                <span className="text-sm font-medium text-muted text-center transition-colors group-hover:text-foreground">
                  {device.name}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
