import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BLOG_POSTS, LOGO_PATH, SITE_URL, SITE_NAME } from "@/lib/constants";
import { buildBreadcrumbSchema } from "@/lib/breadcrumbSchema";
import BlogPostContent from "./BlogPostContent";

// Bodies for posts not present in this map render a "being updated" stub
// with robots: noindex, follow. Three bodies were taken offline in the
// 2026-06 compliance scrub pending editorial rewrite.
const blogContent: Record<string, { content: string[] }> = {
  "how-to-setup-iptv-firestick": {
    content: [
      "Setting up a premium IPTV UK subscription on an Amazon Fire Stick is surprisingly simple and takes just a few minutes. This step-by-step guide walks through the entire process from start to finish.",
      "## Premium IPTV Setup — Equipment Required\n\n- An Amazon Fire Stick (any generation)\n- A stable internet connection (10 Mbps minimum for HD, 25 Mbps for 4K)\n- An active premium IPTV subscription with login credentials\n- 5–10 minutes of hands-on time",
      "## Step 1 — Enable Apps From Unknown Sources For Premium IPTV\n\nGo to Settings → My Fire TV → Developer Options → Install unknown apps. Find the Downloader app and toggle it ON. This allows installation of premium IPTV apps that are not available on the Amazon App Store.",
      "## Step 2 — Install The Downloader App For Premium IPTV\n\nFrom the Fire Stick home screen, search for \"Downloader\" and install it. This free app downloads premium IPTV applications directly to the Fire Stick.",
      "## Step 3 — Download The Premium IPTV App\n\nOpen the Downloader app and enter the URL provided by the premium IPTV UK service for the app download. Popular options include IPTV Smarters Pro, TiviMate and Smart IPTV. The default recommendation on most premium IPTV UK platforms is IPTV Smarters Pro.",
      "## Step 4 — Enter Credentials From The Premium IPTV Account\n\nOpen the installed app and enter the login details supplied by the premium IPTV UK service — typically a server URL, username, and password. Credentials arrive by both email and WhatsApp within minutes of purchase.",
      "## Step 5 — Start Watching The Premium IPTV UK Service\n\nThat is it. Channels load, the EPG populates, and the premium IPTV VOD library becomes available. If anything stalls during setup, the UK support team walks subscribers through it in real time.",
    ],
  },
};

type PageParams = { slug: string };

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<PageParams> }): Promise<Metadata> {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) return {};

  const hasBody = Boolean(blogContent[slug]);

  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
    robots: hasBody
      ? { index: true, follow: true }
      : { index: false, follow: true },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      url: `${SITE_URL}/blog/${post.slug}`,
      images: [{ url: LOGO_PATH, width: 512, height: 512, alt: post.title }],
    },
  };
}

export default async function BlogPostPage({ params }: { params: Promise<PageParams> }) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const content = blogContent[slug];
  const logoUrl = `${SITE_URL}${LOGO_PATH}`;
  const postUrl = `${SITE_URL}/blog/${post.slug}`;

  const breadcrumbLd = buildBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Blog", path: "/blog" },
    { name: post.title, path: `/blog/${post.slug}` },
  ]);

  // Stub: post exists in index but body is offline pending editorial rewrite.
  // Metadata above already set robots: noindex, follow.
  if (!content) {
    return (
      <>
        <div className="pt-20">
          <article className="py-16 lg:py-24">
            <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-4">
                {post.title}
              </h1>
              <p className="text-lg text-muted leading-relaxed mb-8">
                {post.excerpt}
              </p>
              <div className="rounded-2xl border border-violet-100/60 bg-violet-50/40 p-6 text-base text-gray-700 leading-relaxed">
                This article is being updated. Please check back soon.
              </div>
            </div>
          </article>
        </div>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
        />
      </>
    );
  }

  const wordCount = content.content.join(" ").split(/\s+/).filter(Boolean).length;

  const articleLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    image: [logoUrl],
    datePublished: post.date,
    dateModified: post.date,
    wordCount,
    articleSection: post.category,
    author: {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: SITE_NAME,
    },
    publisher: {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: SITE_NAME,
      logo: {
        "@type": "ImageObject",
        url: logoUrl,
        width: 512,
        height: 512,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": postUrl,
    },
  };

  return (
    <>
      <BlogPostContent post={post} content={content.content} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
    </>
  );
}
