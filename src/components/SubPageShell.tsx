"use client";

// Ported from the pillar site (best-iptv-uk-subscription.com) on 2026-06-11.
// Adaptations for iptv-premium-uk.tv:
//  • Logo URL now sourced from LOGO_PATH constant (the pillar hardcoded
//    /buy-iptv-uk.webp, which 500s on this domain). Single source of truth
//    lives in src/lib/constants.ts.
//  • Back-link text changed from "Best IPTV UK" → "Premium IPTV UK".
//  • Related-guides subtitle changed to reference the Premium IPTV UK cluster.
//  • All other imports (ParticleBackground, PricingSection, CTASection, cn)
//    map 1:1 to local components that already exist with identical export
//    shape — no substitutions required.
//  • FAQ SSR pattern preserved exactly: every <motion.div> answer panel is
//    rendered in the DOM at all times with height/opacity controlling
//    visibility (NOT AnimatePresence + isOpen-conditional). This keeps the
//    full answer text in the initial server-rendered HTML for crawlers.

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Tag, Clock, User, ChevronDown, ChevronRight } from "lucide-react";
import Link from "next/link";
import ParticleBackground from "./ParticleBackground";
import PricingSection from "./PricingSection";
import CTASection from "./CTASection";
import { LOGO_PATH, SITE_NAME, SITE_URL } from "@/lib/constants";
import { cn } from "@/lib/utils";

export interface SubPageByline {
  readonly name: string;
  readonly role: string;
  readonly description: string;
  readonly publishedDate: string;
  readonly updatedDate: string;
}

export interface SubPageRelatedGuide {
  readonly title: string;
  readonly href: string;
  readonly description: string;
}

export interface SubPageFAQItem {
  readonly question: string;
  readonly answer: string;
}

export interface SubPageShellProps {
  readonly slug: string;
  readonly title: string;
  readonly category: string;
  readonly intro: string;
  readonly byline: SubPageByline;
  readonly readTime?: string;
  readonly relatedGuides: ReadonlyArray<SubPageRelatedGuide>;
  readonly faqItems: ReadonlyArray<SubPageFAQItem>;
  readonly children: React.ReactNode;
}

const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

export default function SubPageShell({
  slug,
  title,
  category,
  intro,
  byline,
  readTime,
  relatedGuides,
  faqItems,
  children,
}: SubPageShellProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const canonicalUrl = `${SITE_URL}/${slug.replace(/^\/+/, "")}`;
  const logoUrl = `${SITE_URL}${LOGO_PATH}`;

  const articleSchema = {
    "@type": "Article",
    "@id": `${canonicalUrl}#article`,
    headline: title,
    description: intro,
    inLanguage: "en-GB",
    isPartOf: { "@id": `${SITE_URL}/#website` },
    mainEntityOfPage: { "@id": `${canonicalUrl}#webpage` },
    datePublished: byline.publishedDate,
    dateModified: byline.updatedDate,
    author: {
      "@type": "Person",
      name: byline.name,
      jobTitle: byline.role,
      description: byline.description,
    },
    publisher: {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: SITE_NAME,
      logo: {
        "@type": "ImageObject",
        url: logoUrl,
      },
    },
    articleSection: category,
  };

  const breadcrumbSchema = {
    "@type": "BreadcrumbList",
    "@id": `${canonicalUrl}#breadcrumb`,
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: `${SITE_URL}/`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: title,
        item: canonicalUrl,
      },
    ],
  };

  const faqSchema = {
    "@type": "FAQPage",
    "@id": `${canonicalUrl}#faq`,
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  const graphSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${canonicalUrl}#webpage`,
        url: canonicalUrl,
        name: title,
        inLanguage: "en-GB",
        isPartOf: { "@id": `${SITE_URL}/#website` },
        about: { "@id": `${SITE_URL}/#organization` },
        description: intro,
        primaryImageOfPage: { "@type": "ImageObject", url: logoUrl },
      },
      articleSchema,
      breadcrumbSchema,
      faqSchema,
    ],
  };

  return (
    <>
      {/* ── Hero ── */}
      <section className="relative overflow-hidden">
        {/* Deep premium gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a0118] via-[#1a0a3e] to-[#0c1445]" />

        {/* Aurora blobs */}
        <div
          className="aurora-blob w-[700px] h-[700px] bg-purple-600/25 -top-32 -left-32"
          style={{ animationDelay: "0s" }}
        />
        <div
          className="aurora-blob w-[500px] h-[500px] bg-blue-500/20 top-1/4 right-[-8%]"
          style={{ animationDelay: "4s" }}
        />
        <div
          className="aurora-blob w-[600px] h-[600px] bg-violet-500/15 bottom-[-15%] left-1/3"
          style={{ animationDelay: "8s" }}
        />
        <div
          className="aurora-blob w-[400px] h-[400px] bg-cyan-500/20 top-[60%] left-[-5%]"
          style={{ animationDelay: "12s" }}
        />

        {/* Radial overlays */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(124,58,237,0.2),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(6,182,212,0.12),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(168,85,247,0.08),transparent_60%)]" />

        {/* Mesh grid */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        {/* Decorative floating orbs */}
        <div className="absolute top-[15%] left-[10%] w-2 h-2 rounded-full bg-purple-400/60 animate-float" />
        <div
          className="absolute top-[35%] right-[15%] w-1.5 h-1.5 rounded-full bg-cyan-400/50 animate-float"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute bottom-[25%] left-[20%] w-1 h-1 rounded-full bg-blue-400/60 animate-float"
          style={{ animationDelay: "4s" }}
        />

        {/* Particles */}
        <ParticleBackground />

        {/* Hero content */}
        <div className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 sm:pt-32 lg:pt-36 pb-16 sm:pb-20 lg:pb-24">
          {/* Back link */}
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm text-gray-300 hover:text-white transition-colors mb-6"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Premium IPTV UK
            </Link>
          </motion.div>

          {/* Category badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.05 }}
          >
            <span className="inline-flex items-center gap-1.5 rounded-full border border-purple-400/25 bg-white/[0.07] backdrop-blur-md px-4 py-1.5 text-xs font-semibold tracking-wider text-purple-200 uppercase mb-6">
              <Tag className="h-3 w-3 text-cyan-300" />
              {category}
            </span>
          </motion.div>

          {/* H1 */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-bold tracking-tight leading-[1.1] text-white mb-5"
          >
            {title}
          </motion.h1>

          {/* Intro paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.18 }}
            className="text-base sm:text-lg text-gray-300/90 leading-relaxed max-w-3xl mb-8"
          >
            {intro}
          </motion.p>

          {/* Byline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs sm:text-sm text-gray-400"
          >
            <span className="inline-flex items-center gap-1.5">
              <User className="h-3.5 w-3.5 text-purple-300" />
              <span className="text-gray-200 font-medium">{byline.name}</span>
              <span className="text-gray-500">— {byline.role}</span>
            </span>
            <span className="inline-flex items-center gap-1.5">
              <span aria-hidden="true" className="h-1 w-1 rounded-full bg-gray-500" />
              <span>Updated {formatDate(byline.updatedDate)}</span>
            </span>
            {readTime && (
              <span className="inline-flex items-center gap-1.5">
                <Clock className="h-3.5 w-3.5 text-cyan-300" />
                <span>{readTime}</span>
              </span>
            )}
          </motion.div>
        </div>

        {/* Bottom gradient fade to site background */}
        <div className="absolute bottom-0 left-0 right-0 h-6 bg-gradient-to-t from-[#fafbff] to-transparent pointer-events-none" />
      </section>

      {/* ── Article body slot ── */}
      <article className="relative py-12 lg:py-16">
        <div className="absolute inset-0 mesh-gradient" />
        <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          {children}
        </div>
      </article>

      {/* ── FAQ (driven by faqItems prop, schema-aligned) ── */}
      {faqItems.length > 0 && (
        <section className="relative py-11 lg:py-14">
          <div className="absolute inset-0 mesh-gradient" />
          <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <div className="mb-10 text-center">
              <span className="inline-block rounded-full bg-violet-50 border border-violet-200 px-4 py-1.5 text-sm font-medium text-violet-700 mb-4">
                Frequently Asked Questions
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground">
                Questions UK Buyers Ask About{" "}
                <span className="gradient-text">This Topic</span>
              </h2>
            </div>

            <div className="space-y-3">
              {faqItems.map((item, i) => {
                const isOpen = openFaq === i;
                return (
                  <div key={`${item.question}-${i}`}>
                    <button
                      type="button"
                      onClick={() => setOpenFaq(isOpen ? null : i)}
                      aria-expanded={isOpen}
                      aria-controls={`subpage-faq-panel-${i}`}
                      id={`subpage-faq-trigger-${i}`}
                      className={cn(
                        "w-full flex items-center justify-between gap-4 rounded-xl border p-5 text-left transition-all duration-300 focus-visible:outline-2 focus-visible:outline-violet-600 focus-visible:outline-offset-2",
                        isOpen
                          ? "border-violet-200 bg-violet-50/60 shadow-sm"
                          : "border-violet-100/50 bg-white hover:border-violet-200 hover:shadow-sm",
                      )}
                    >
                      <span className="text-sm sm:text-base font-medium text-foreground pr-4">
                        {item.question}
                      </span>
                      <ChevronDown
                        aria-hidden="true"
                        className={cn(
                          "h-5 w-5 shrink-0 text-muted transition-transform duration-300",
                          isOpen && "rotate-180 text-violet-600",
                        )}
                      />
                    </button>
                    {/* SSR-preserved: always rendered, height/opacity controls visibility */}
                    <motion.div
                      id={`subpage-faq-panel-${i}`}
                      role="region"
                      aria-labelledby={`subpage-faq-trigger-${i}`}
                      aria-hidden={!isOpen}
                      initial={false}
                      animate={{
                        height: isOpen ? "auto" : 0,
                        opacity: isOpen ? 1 : 0,
                      }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 py-4 text-sm text-muted leading-relaxed">
                        {item.answer}
                      </div>
                    </motion.div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* ── Related guides ── */}
      {relatedGuides.length > 0 && (
        <section className="relative py-11 lg:py-14">
          <div className="absolute inset-0 section-gradient-1" />
          <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="mb-8 text-center">
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">
                Continue Reading —{" "}
                <span className="gradient-text">Related UK IPTV Guides</span>
              </h2>
              <p className="text-sm text-muted">
                Sibling guides from the Premium IPTV UK 2026 cluster.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {relatedGuides.map((guide) => (
                <Link
                  key={guide.href}
                  href={guide.href}
                  className="group relative flex flex-col rounded-2xl border border-violet-100/60 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-violet-300 hover:shadow-lg hover:shadow-violet-100/60"
                >
                  <h3 className="text-base font-semibold text-foreground mb-2 group-hover:text-violet-700 transition-colors">
                    {guide.title}
                  </h3>
                  <p className="text-sm text-muted leading-relaxed flex-1">
                    {guide.description}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-violet-600 group-hover:text-violet-700">
                    Read the guide
                    <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── Conversion footer ── */}
      <PricingSection />
      <CTASection />

      {/* ── JSON-LD @graph (WebPage + Article + BreadcrumbList + FAQPage) ── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(graphSchema) }}
      />
    </>
  );
}
