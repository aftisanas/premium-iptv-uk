"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export interface FAQAccordionItem {
  readonly question: string;
  readonly answer: string;
}

interface FAQAccordionProps {
  items: ReadonlyArray<FAQAccordionItem>;
  variant?: "home" | "subpage";
}

export default function FAQAccordion({
  items,
  variant = "home",
}: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const idPrefix = variant === "subpage" ? "subpage-faq" : "faq";

  return (
    <div className="space-y-3">
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        const triggerId = `${idPrefix}-trigger-${i}`;
        const panelId = `${idPrefix}-panel-${i}`;

        const body = (
          <>
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : i)}
              aria-expanded={isOpen}
              aria-controls={panelId}
              id={triggerId}
              className={cn(
                "w-full flex items-center justify-between gap-4 rounded-xl border p-5 text-left transition-all duration-300 focus-visible:outline-2 focus-visible:outline-violet-600 focus-visible:outline-offset-2",
                isOpen
                  ? "border-violet-200 bg-violet-50/60 shadow-sm"
                  : "border-violet-100/50 bg-white hover:border-violet-200 hover:shadow-sm"
              )}
            >
              <span className="text-sm sm:text-base font-medium text-foreground pr-4">
                {item.question}
              </span>
              <ChevronDown
                aria-hidden="true"
                className={cn(
                  "h-5 w-5 shrink-0 text-muted transition-transform duration-300",
                  isOpen && "rotate-180 text-violet-600"
                )}
              />
            </button>

            {/* SSR-preserved: always rendered, height/opacity controls visibility
                so the full answer text is in the initial HTML for crawlers. */}
            <motion.div
              id={panelId}
              role="region"
              aria-labelledby={triggerId}
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
          </>
        );

        if (variant === "home") {
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.03 }}
            >
              {body}
            </motion.div>
          );
        }

        return <div key={`${item.question}-${i}`}>{body}</div>;
      })}
    </div>
  );
}
