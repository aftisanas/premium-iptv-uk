import HeroSection from "@/components/HeroSection";
import StatsBar from "@/components/StatsBar";
import FeaturesSection from "@/components/FeaturesSection";
import PricingSection from "@/components/PricingSection";
import DevicesSection from "@/components/DevicesSection";
import ChannelsSection from "@/components/ChannelsSection";
import FAQSection from "@/components/FAQSection";
import TrustSection from "@/components/TrustSection";
import CTASection from "@/components/CTASection";
import {
  CONTACT_EMAIL,
  FAQ_ITEMS,
  LOGO_PATH,
  PRICING_PLANS,
  SITE_NAME,
  SITE_URL,
} from "@/lib/constants";

export default function HomePage() {
  const organizationId = `${SITE_URL}/#organization`;
  const websiteId = `${SITE_URL}/#website`;
  const webpageId = `${SITE_URL}/#webpage`;
  const productId = `${SITE_URL}/#product`;
  const logoUrl = `${SITE_URL}${LOGO_PATH}`;
  const homeUrl = `${SITE_URL}/`;
  const dateModified = new Date().toISOString();

  return (
    <>
      <HeroSection />
      <StatsBar />
      <FeaturesSection />
      <PricingSection />
      <DevicesSection />
      <ChannelsSection />
      <FAQSection />
      <TrustSection />
      <CTASection />

      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Organization",
                "@id": organizationId,
                name: SITE_NAME,
                url: SITE_URL,
                logo: {
                  "@type": "ImageObject",
                  url: logoUrl,
                  width: 512,
                  height: 512,
                },
                description:
                  "UK-focused premium IPTV provider delivering 37,000+ channels, 4K UHD streaming, 24/7 British support and a 30-day refund window.",
                address: {
                  "@type": "PostalAddress",
                  addressCountry: "GB",
                  addressLocality: "London",
                },
                contactPoint: {
                  "@type": "ContactPoint",
                  contactType: "customer service",
                  availableLanguage: "English",
                  areaServed: "GB",
                  email: CONTACT_EMAIL,
                },
                sameAs: [],
              },
              {
                "@type": "WebSite",
                "@id": websiteId,
                name: SITE_NAME,
                url: SITE_URL,
                inLanguage: "en-GB",
                publisher: {
                  "@id": organizationId,
                },
              },
              {
                "@type": "WebPage",
                "@id": webpageId,
                url: homeUrl,
                name: "Premium IPTV UK 2026 — 4K Subscription From £4.17/mo",
                inLanguage: "en-GB",
                isPartOf: {
                  "@id": websiteId,
                },
                about: {
                  "@id": productId,
                },
                mainEntity: {
                  "@id": productId,
                },
                primaryImageOfPage: {
                  "@type": "ImageObject",
                  url: logoUrl,
                },
                datePublished: "2026-01-01T00:00:00Z",
                dateModified,
                speakable: {
                  "@type": "SpeakableSpecification",
                  cssSelector: ["h1", ".hero-tagline"],
                },
                description:
                  "Premium IPTV UK subscription. 37,000+ channels, 4K UHD and 24/7 UK support — from £4.17/month with a 30-day refund.",
              },
            ],
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            "@id": productId,
            name: `${SITE_NAME} Subscription`,
            sku: "PIPTVUK-SUB",
            category: "Streaming Service",
            url: homeUrl,
            image: [logoUrl],
            description:
              "Premium IPTV UK subscription with 37,000+ live channels, 198,000+ on-demand titles, 4K UHD and five simultaneous screens — from £4.17/month on the 12-month term.",
            brand: { "@type": "Brand", name: SITE_NAME },
            audience: {
              "@type": "Audience",
              geographicArea: {
                "@type": "Country",
                name: "United Kingdom",
              },
            },
            offers: PRICING_PLANS.map((plan) => ({
              "@type": "Offer",
              name: `${plan.name} Plan`,
              price: plan.price.toFixed(2),
              priceCurrency: "GBP",
              priceValidUntil: "2026-12-31",
              availability: "https://schema.org/InStock",
              itemCondition: "https://schema.org/NewCondition",
              url: `${homeUrl}#pricing`,
              seller: { "@id": organizationId },
              eligibleDuration: {
                "@type": "QuantitativeValue",
                value: plan.months,
                unitCode: "MON",
              },
              hasMerchantReturnPolicy: {
                "@type": "MerchantReturnPolicy",
                applicableCountry: "GB",
                returnPolicyCategory:
                  "https://schema.org/MerchantReturnFiniteReturnWindow",
                merchantReturnDays: 30,
                returnMethod: "https://schema.org/ReturnByMail",
                returnFees: "https://schema.org/FreeReturn",
              },
            })),
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            inLanguage: "en-GB",
            author: { "@id": organizationId },
            mainEntity: FAQ_ITEMS.map((item) => ({
              "@type": "Question",
              name: item.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: item.answer,
              },
            })),
          }),
        }}
      />
    </>
  );
}
