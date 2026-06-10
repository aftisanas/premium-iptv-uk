import type { Metadata } from "next";
import ContactContent from "./ContactContent";
import { buildBreadcrumbSchema } from "@/lib/breadcrumbSchema";

export const metadata: Metadata = {
  title: "Contact Premium IPTV UK — 24/7 Named British Support Team",
  description:
    "Contact the Premium IPTV UK support team via WhatsApp, email or live chat, 24/7. Named British staff, average first reply under four minutes — setup, troubleshooting and billing on record.",
  alternates: { canonical: "/contact" },
};

const breadcrumbLd = buildBreadcrumbSchema([
  { name: "Home", path: "/" },
  { name: "Contact", path: "/contact" },
]);

export default function ContactPage() {
  return (
    <>
      <ContactContent />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
    </>
  );
}
