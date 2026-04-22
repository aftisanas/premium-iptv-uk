import type { Metadata } from "next";
import BlogContent from "./BlogContent";

export const metadata: Metadata = {
  title: "Premium IPTV UK Blog — Guides, Tips & Streaming News",
  description:
    "Expert guides on premium IPTV UK setup, streaming tips, device compatibility and the latest from British IPTV. The research layer behind every premium IPTV subscription decision.",
  alternates: { canonical: "/blog" },
};

export default function BlogPage() {
  return <BlogContent />;
}
