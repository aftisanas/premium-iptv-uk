import type { Metadata } from "next";
import { CONTACT_EMAIL, LOGO_PATH, SITE_URL } from "@/lib/constants";

const TITLE = "About Premium IPTV UK — Editorial Team & Approach";
const DESCRIPTION =
  "About Premium IPTV UK: a British IPTV subscription service. Our editorial approach, UK consumer-law alignment, and how to reach support.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/about" },
  openGraph: {
    type: "website",
    title: TITLE,
    description: DESCRIPTION,
    url: `${SITE_URL}/about`,
    images: [
      {
        url: LOGO_PATH,
        width: 512,
        height: 512,
        alt: "About Premium IPTV UK",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: [LOGO_PATH],
  },
  robots: { index: true, follow: true },
};

export default function AboutPage() {
  const aboutLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "AboutPage",
        "@id": `${SITE_URL}/about#webpage`,
        url: `${SITE_URL}/about`,
        name: "About Premium IPTV UK",
        inLanguage: "en-GB",
        isPartOf: { "@id": `${SITE_URL}/#website` },
        about: { "@id": `${SITE_URL}/#organization` },
        mainEntity: { "@id": `${SITE_URL}/#organization` },
        primaryImageOfPage: {
          "@type": "ImageObject",
          url: `${SITE_URL}${LOGO_PATH}`,
        },
        datePublished: "2026-06-11T00:00:00Z",
        dateModified: new Date().toISOString(),
      },
      {
        "@type": "BreadcrumbList",
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
            name: "About",
            item: `${SITE_URL}/about`,
          },
        ],
      },
    ],
  };

  return (
    <div className="pt-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutLd) }}
      />
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-8">
          About Premium IPTV UK
        </h1>
        <div className="space-y-8 text-base text-gray-700 leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">
              Who We Are
            </h2>
            <p>
              Premium IPTV UK is a British-operated IPTV subscription service for UK households. The site publishes its plans in GBP, applies UK consumer law to every refund, and offers a direct contact route for British viewers. The service runs across Smart TVs, streaming sticks, set-top streamers, mobile and desktop, with a single account supporting up to five simultaneous screens. Pricing, refund terms and supported devices are stated on the relevant product pages — not buried in terms-and-conditions text.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">
              Our Editorial Approach
            </h2>
            <p>
              The editorial principles below shape every guide on this site. Content is reviewed against UK primary sources — Ofcom, legislation.gov.uk and gov.uk — before publication, with outbound citations linking back to those sources. The site does not name licensed broadcasters or sports rights-holders in editorial content; coverage is described in generic terms instead. Claims about service performance — uptime targets, channel counts, on-demand library size — link to verifiable on-site evidence wherever possible. Pricing claims are stated in GBP only, with the per-month figure shown next to the plan total. Refund terms are stated identically across every plan length, so the protection a buyer keeps does not shrink with a longer commitment.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">
              How To Reach Us
            </h2>
            <p>
              Reach the Premium IPTV UK support team by email at{" "}
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="text-violet-600 underline-offset-2 hover:text-violet-700 hover:underline"
              >
                {CONTACT_EMAIL}
              </a>
              . The support queue runs 24 hours a day, seven days a week and is the primary route for billing questions, technical issues and refund requests.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">
              Editorial Team
            </h2>
            <p>
              The Premium IPTV UK Editorial Team writes and reviews every guide published on this site. No individual bylines appear on editorial pages. Each draft is checked against the editorial principles above — primary-source citations, generic broadcaster framing, transparent GBP pricing and consistent refund-window phrasing — before it goes live. Submissions and corrections from readers go through the same review. Editorial corrections are handled at the support address above and applied with a dated update on the affected page.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
