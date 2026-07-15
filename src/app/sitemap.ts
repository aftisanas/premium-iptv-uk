import type { MetadataRoute } from "next";
import { BLOG_POSTS, SITE_URL } from "@/lib/constants";
import { TUTORIAL_DEVICES } from "@/lib/tutorial-content";

// Stable-date pattern (from A2.5-c): sprint-anchored lastModified so sitemap
// entries do not shift every deploy.
const SPRINT_P05_DATE = new Date("2026-07-14");
const SPRINT_P3_DATE = new Date("2026-07-14");

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const parseDateOrNow = (value: string) => {
    const parsed = new Date(value);
    return Number.isNaN(parsed.getTime()) ? now : parsed;
  };

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${SITE_URL}/`, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${SITE_URL}/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${SITE_URL}/tutorials`, lastModified: SPRINT_P05_DATE, changeFrequency: "weekly", priority: 0.8 },
    { url: `${SITE_URL}/what-is-premium-iptv`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/iptv-cost`, lastModified: SPRINT_P3_DATE, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/reliable-iptv`, lastModified: SPRINT_P3_DATE, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/4k-iptv`, lastModified: SPRINT_P3_DATE, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/iptv-packages`, lastModified: SPRINT_P3_DATE, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE_URL}/about`, lastModified: now, changeFrequency: "yearly", priority: 0.5 },
    { url: `${SITE_URL}/terms`, lastModified: now, changeFrequency: "yearly", priority: 0.4 },
    { url: `${SITE_URL}/privacy`, lastModified: now, changeFrequency: "yearly", priority: 0.4 },
    { url: `${SITE_URL}/dmca`, lastModified: now, changeFrequency: "yearly", priority: 0.4 },
    { url: `${SITE_URL}/refund`, lastModified: now, changeFrequency: "yearly", priority: 0.4 },
  ];

  const blogRoutes: MetadataRoute.Sitemap = BLOG_POSTS.filter((post) =>
    Boolean(post.slug)
  ).map((post) => ({
    url: `${SITE_URL}/blog/${post.slug}`,
    lastModified: parseDateOrNow(post.date),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const tutorialRoutes: MetadataRoute.Sitemap = TUTORIAL_DEVICES.map((d) => ({
    url: `${SITE_URL}/tutorials/${d.slug}`,
    lastModified: SPRINT_P05_DATE,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticRoutes, ...blogRoutes, ...tutorialRoutes];
}
