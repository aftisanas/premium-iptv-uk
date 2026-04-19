"use client";

import { motion } from "framer-motion";
import { Star, MapPin, Quote, ThumbsUp, Gem, MessageCircle } from "lucide-react";
import Link from "next/link";
import { TESTIMONIALS, WHATSAPP_BASE_URL } from "@/lib/constants";

const extendedReviews = [
  ...TESTIMONIALS,
  {
    name: "Tom H.",
    location: "Liverpool",
    text: "Absolutely brilliant service. I was paying over £80 a month for Sky and BT Sport combined. Now I get everything plus more for a fraction of the cost. The Premier League coverage is perfect — every match, no delays, crystal clear quality.",
    rating: 5,
    avatar: "TH",
    since: "October 2025",
  },
  {
    name: "Priya P.",
    location: "Leicester",
    text: "Finally found an IPTV service that actually works! The international channels are extensive, and my parents love the news options. Setup on our Samsung Smart TV was straightforward with their guide.",
    rating: 5,
    avatar: "PP",
    since: "August 2025",
  },
  {
    name: "Robert C.",
    location: "Edinburgh",
    text: "Been using Premium IPTV for six months now. The consistency is what impresses me most — no dropouts during live football, the VOD library is massive, and whenever I've needed help, the WhatsApp support responds in minutes.",
    rating: 5,
    avatar: "RC",
    since: "September 2025",
  },
  {
    name: "Jenny W.",
    location: "Cardiff",
    text: "My whole family uses this and we couldn't be happier. The kids love the cartoon channels, my husband gets his rugby and football, and I get all the drama channels I want. Three simultaneous streams on the annual plan means no more arguments over the remote!",
    rating: 5,
    avatar: "JW",
    since: "June 2025",
  },
  {
    name: "Ahmed H.",
    location: "Bradford",
    text: "I've recommended Premium IPTV to at least ten friends and family members. Every single one of them has thanked me. The international channel selection is the best I've found anywhere. Top-class service.",
    rating: 5,
    avatar: "AH",
    since: "July 2025",
  },
  {
    name: "Catherine M.",
    location: "Belfast",
    text: "Sceptical at first but the 30-day money-back guarantee gave me confidence to try it. Picture quality is genuinely comparable to traditional satellite, the channel list is enormous, and the catch-up feature has been a game-changer for us.",
    rating: 4,
    avatar: "CM",
    since: "November 2025",
  },
];

export default function ReviewsContent() {
  return (
    <div>
      {/* ── Premium Hero Section ── */}
      <section className="relative overflow-hidden pt-28 pb-20 lg:pt-36 lg:pb-24">
        {/* Deep premium gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a0118] via-[#1a0a3e] to-[#0c1445]" />

        {/* Aurora blobs */}
        <div
          className="aurora-blob w-[600px] h-[600px] bg-purple-600/20 -top-32 -left-32"
          style={{ animationDelay: "0s" }}
        />
        <div
          className="aurora-blob w-[450px] h-[450px] bg-blue-500/15 top-1/4 right-[-8%]"
          style={{ animationDelay: "4s" }}
        />
        <div
          className="aurora-blob w-[400px] h-[400px] bg-amber-500/10 bottom-[-15%] left-1/3"
          style={{ animationDelay: "8s" }}
        />
        <div
          className="aurora-blob w-[300px] h-[300px] bg-fuchsia-500/12 top-[30%] left-[55%]"
          style={{ animationDelay: "6s" }}
        />

        {/* Radial overlays */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(124,58,237,0.18),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(6,182,212,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(168,85,247,0.07),transparent_60%)]" />

        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.12) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />

        {/* Floating orbs */}
        <div className="absolute top-[20%] left-[12%] w-2 h-2 rounded-full bg-purple-400/50 animate-float" />
        <div className="absolute top-[40%] right-[10%] w-1.5 h-1.5 rounded-full bg-cyan-400/40 animate-float" style={{ animationDelay: "3s" }} />
        <div className="absolute bottom-[20%] left-[25%] w-1 h-1 rounded-full bg-amber-400/50 animate-float" style={{ animationDelay: "5s" }} />

        {/* Content */}
        <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-purple-400/20 bg-white/[0.07] backdrop-blur-md px-5 py-2.5 text-sm text-purple-200 mb-8"
          >
            <Gem className="h-4 w-4 text-amber-400" />
            <span className="font-medium">Trusted by Thousands of UK Viewers</span>
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
            <span className="text-white">Real Reviews from</span>
            <br />
            <span className="gradient-text-hero">Real UK Subscribers</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mx-auto max-w-2xl text-lg text-gray-300/90 leading-relaxed"
          >
            Real IPTV reviews from Premium IPTV subscribers across the United Kingdom — honest, unfiltered, and unpaid feedback on every{" "}
            <Link href="/pricing" className="text-cyan-300 hover:text-cyan-200 underline-offset-2 hover:underline">
              IPTV subscription
            </Link>{" "}
            plan.
          </motion.p>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-12 grid grid-cols-3 gap-6"
          >
            {[
              { value: "2,847+", label: "Verified Reviews" },
              { value: "4.9/5", label: "Average Rating" },
              { value: "98%", label: "Would Recommend" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl sm:text-3xl font-bold gradient-text-hero">{stat.value}</div>
                <div className="text-sm text-gray-400 mt-1">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Bottom gradient fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#fafbff] via-[#fafbff]/80 to-transparent" />
      </section>

      {/* Reviews Grid */}
      <section className="pb-24 lg:pb-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {extendedReviews.map((review, i) => (
              <motion.div
                key={review.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.03 }}
                className="group relative rounded-2xl border border-gray-100 bg-white p-6 transition-all duration-500 hover:border-primary/15 hover:shadow-lg hover:shadow-primary/5"
              >
                <Quote className="absolute top-6 right-6 h-8 w-8 text-primary/10 transition-colors group-hover:text-primary/20" />

                <div className="flex gap-1 mb-4">
                  {Array.from({ length: review.rating }).map((_, j) => (
                    <Star key={j} className="h-4 w-4 fill-amber-400 text-amber-400" />
                  ))}
                  {Array.from({ length: 5 - review.rating }).map((_, j) => (
                    <Star key={`e-${j}`} className="h-4 w-4 text-gray-200" />
                  ))}
                </div>

                <p className="text-sm text-gray-600 leading-relaxed mb-6">
                  &ldquo;{review.text}&rdquo;
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent text-sm font-bold text-white">
                      {review.avatar}
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-foreground">{review.name}</div>
                      <div className="flex items-center gap-1 text-xs text-muted">
                        <MapPin className="h-3 w-3" />
                        {review.location} · Since {review.since}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 text-xs text-muted">
                    <ThumbsUp className="h-3 w-3" />
                    <span>Helpful</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <p className="text-lg text-muted mb-6">
              Join thousands of happy subscribers across the UK
            </p>
            <a
              href={`${WHATSAPP_BASE_URL}?text=${encodeURIComponent("Hello Premium IPTV, I've seen your great reviews and would like to get started!")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 via-purple-600 to-cyan-500 px-8 py-4 text-base font-semibold text-white transition-all hover:shadow-lg hover:shadow-primary/20"
            >
              <MessageCircle className="h-5 w-5" />
              Get Started Today
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
