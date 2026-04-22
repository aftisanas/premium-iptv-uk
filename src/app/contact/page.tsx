import type { Metadata } from "next";
import ContactContent from "./ContactContent";

export const metadata: Metadata = {
  title: "Contact Premium IPTV UK — 24/7 Named British Support Team",
  description:
    "Contact the Premium IPTV UK support team via WhatsApp, email or live chat, 24/7. Named British staff, average first reply under four minutes — setup, troubleshooting and billing on record.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return <ContactContent />;
}
