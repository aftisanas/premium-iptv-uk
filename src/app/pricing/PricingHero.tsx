"use client";

import { motion } from "framer-motion";
import { Star, Gem } from "lucide-react";

export default function PricingHero() {
  return (
    <section className="relative overflow-hidden pt-28 pb-20 lg:pt-36 lg:pb-24">
      {/* ── Deep premium gradient background (matching homepage hero) ── */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0118] via-[#1a0a3e] to-[#0c1445]" />

      {/* ── Aurora blobs ── */}
      <div
        className="aurora-blob w-[600px] h-[600px] bg-purple-600/20 -top-32 -left-32"
        style={{ animationDelay: "0s" }}
      />
      <div
        className="aurora-blob w-[450px] h-[450px] bg-blue-500/15 top-1/4 right-[-8%]"
        style={{ animationDelay: "4s" }}
      />
      <div
        className="aurora-blob w-[400px] h-[400px] bg-cyan-500/15 bottom-[-15%] left-1/3"
        style={{ animationDelay: "8s" }}
      />
      <div
        className="aurora-blob w-[300px] h-[300px] bg-fuchsia-500/12 top-[30%] left-[55%]"
        style={{ animationDelay: "6s" }}
      />

      {/* ── Radial overlays ── */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(124,58,237,0.18),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(6,182,212,0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(168,85,247,0.07),transparent_60%)]" />

      {/* ── Subtle grid ── */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.12) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* ── Floating orbs ── */}
      <div className="absolute top-[20%] left-[12%] w-2 h-2 rounded-full bg-purple-400/50 animate-float" />
      <div className="absolute top-[40%] right-[10%] w-1.5 h-1.5 rounded-full bg-cyan-400/40 animate-float" style={{ animationDelay: "3s" }} />
      <div className="absolute bottom-[20%] left-[25%] w-1 h-1 rounded-full bg-blue-400/50 animate-float" style={{ animationDelay: "5s" }} />

      {/* ── Content ── */}
      <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 rounded-full border border-purple-400/20 bg-white/[0.07] backdrop-blur-md px-5 py-2.5 text-sm text-purple-200 mb-8"
        >
          <Gem className="h-4 w-4 text-cyan-400" />
          <span className="font-medium">Flexible Plans for Every Budget</span>
          <span className="flex gap-0.5 text-amber-400">
            {[...Array(5)].map((_, i) => <Star key={i} className="h-3 w-3 fill-current" />)}
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] mb-6"
        >
          <span className="text-white">IPTV UK Subscription Plans —</span>
          <br />
          <span className="gradient-text-hero">Choose What Suits You</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mx-auto max-w-2xl text-lg text-gray-300/90 leading-relaxed"
        >
          Every IPTV UK subscription plan delivers the same complete experience:{" "}
          <strong className="text-white font-semibold">37,000+ live channels</strong>,{" "}
          <strong className="text-white font-semibold">198,000+ films and series</strong> on demand,
          full EPG, 7-day catch-up, and streaming in up to 4K quality.
          No contracts. No hidden fees. Cancellation available at any time.
        </motion.p>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#fafbff] via-[#fafbff]/80 to-transparent" />
    </section>
  );
}
