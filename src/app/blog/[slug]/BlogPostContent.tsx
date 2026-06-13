"use client";

import { motion } from "framer-motion";
import { Clock, ArrowLeft, Tag } from "lucide-react";
import Link from "next/link";
import type { ReactNode } from "react";
import SectionLink from "@/components/SectionLink";

interface BlogPostContentProps {
  post: {
    slug: string;
    title: string;
    excerpt: string;
    date: string;
    readTime: string;
    category: string;
  };
  content: ReactNode;
}

export default function BlogPostContent({ post, content }: BlogPostContentProps) {
  return (
    <div className="pt-20">
      <article className="py-16 lg:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          {/* Back link */}
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm text-muted hover:text-foreground transition-colors mb-8"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Blog
            </Link>
          </motion.div>

          {/* Header */}
          <motion.header
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12"
          >
            <div className="flex items-center gap-4 text-sm text-muted mb-4">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                <Tag className="h-3 w-3" />
                {post.category}
              </span>
              <span>
                {new Date(post.date).toLocaleDateString("en-GB", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="h-3 w-3" />
                {post.readTime}
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-4">
              {post.title}
            </h1>

            <p className="text-lg text-muted leading-relaxed">
              {post.excerpt}
            </p>
          </motion.header>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="prose-custom"
          >
            {content}
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 rounded-2xl border border-primary/15 bg-blue-50 p-8 text-center"
          >
            <h3 className="text-xl font-bold text-foreground mb-3">
              Ready To Start A Premium IPTV UK Subscription?
            </h3>
            <p className="text-muted mb-6">
              Start with the premium IPTV UK service built for British viewers. Plans from £4.99/month with a 30-day money-back.
            </p>
            <SectionLink
              href="/#pricing"
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 via-purple-600 to-cyan-500 px-8 py-3.5 text-sm font-semibold text-white transition-all hover:shadow-lg hover:shadow-primary/20"
            >
              View Premium IPTV Plans
            </SectionLink>
          </motion.div>
        </div>
      </article>
    </div>
  );
}
