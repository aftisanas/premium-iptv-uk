import type { Metadata } from "next";
import BlogContent from "./BlogContent";
import { buildBreadcrumbSchema } from "@/lib/breadcrumbSchema";

export const metadata: Metadata = {
  title: "Premium IPTV UK Blog — Guides, Tips & Streaming News",
  description:
    "Expert guides on premium IPTV UK setup, streaming tips, device compatibility and the latest from British IPTV. The research layer behind every premium IPTV subscription decision.",
  alternates: { canonical: "/blog" },
};

const breadcrumbLd = buildBreadcrumbSchema([
  { name: "Home", path: "/" },
  { name: "Blog", path: "/blog" },
]);

export default function BlogPage() {
  return (
    <>
      <BlogContent />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
    </>
  );
}
