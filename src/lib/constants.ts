export const SITE_NAME = "Premium IPTV UK";
export const SITE_URL = "https://iptv-premium-uk.tv";
export const CONTACT_EMAIL = "contact@buy-iptv-uk.com";
export const LOGO_PATH = "/premium-iptv-uk.webp";

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Why Us", href: "/#features" },
  { label: "Pricing", href: "/#pricing" },
  { label: "FAQ", href: "/#faq" },
] as const;

export const LEGAL_LINKS = [
  { label: "Terms of Service", href: "/terms" },
  { label: "Privacy Policy", href: "/privacy" },
  { label: "DMCA Policy", href: "/dmca" },
  { label: "Refund Policy", href: "/refund" },
] as const;

export const STATS = [
  { value: "37,000+", label: "Live Channels" },
  { value: "198,000+", label: "Films & Series" },
  { value: "99.9%", label: "Uptime Target" },
  { value: "30-Day", label: "Money-Back Guarantee" },
] as const;

export const FEATURES = [
  {
    title: "4K On Every British Screen — Smart TV, Firestick Or MAG",
    description:
      "Every match and every series plays in crystal-clear UHD. The premium IPTV engine scales smoothly across Smart TVs, tablets and phones — never capped by the plan.",
    icon: "Monitor" as const,
  },
  {
    title: "Anti-Freeze 9.0 — Stable Streams Through Saturday Peaks",
    description:
      "No slow streams and no frozen kick-offs. The premium IPTV platform holds 99.9% uptime through peak sports hours with zero-freeze performance built in.",
    icon: "Zap" as const,
  },
  {
    title: "Premium IPTV UK With A Built-In VPN Included",
    description:
      "Every premium IPTV subscription ships with a full VPN tunnel at no extra cost. No bandwidth cap, no logs, and instant activation the moment payment clears.",
    icon: "Shield" as const,
  },
  {
    title: "Affordable Premium IPTV With 24/7 UK Support",
    description:
      "A fair, low monthly price without cutting corners. A British team answers live chat, WhatsApp and email around the clock on every premium IPTV plan.",
    icon: "Smartphone" as const,
  },
  {
    title: "Five Simultaneous Screens On One Premium IPTV Plan",
    description:
      "Five concurrent streams on every plan. The premium IPTV account covers parents, kids and grandparents without anyone fighting for the remote.",
    icon: "LayoutGrid" as const,
  },
  {
    title: "Instant Activation In Under 60 Seconds",
    description:
      "Credentials for the premium IPTV account arrive by email before the checkout tab closes. No manual review, no queue — seconds, not hours, end-to-end.",
    icon: "Clock" as const,
  },
  {
    title: "Full Catch-Up EPG On The Premium IPTV Platform",
    description:
      "A complete electronic programme guide with 7-day catch-up. The premium IPTV interface feels like cable, minus the contract and the inflated monthly bill.",
    icon: "Film" as const,
  },
  {
    title: "Verified Premium IPTV Servers On UK Infrastructure",
    description:
      "Streams originate from servers on British soil. Premium IPTV keeps latency low for top-tier UK football kick-offs and locks the EPG to GMT for regional accuracy.",
    icon: "Tv" as const,
  },
] as const;

export const PRICING_PLANS = [
  {
    id: "bronze",
    tier: "Bronze",
    name: "3 Months",
    months: 3,
    subtitle: "Three months of the full premium IPTV UK service",
    price: 25.99,
    originalPrice: 49.99,
    perMonth: 8.66,
    period: "3 months",
    devices: 5,
    badge: "Quick Start",
    discount: "-48%",
    accentColor: "violet",
    features: [
      "37,000+ live channels with full UK coverage",
      "198,000+ films, series and documentaries on demand",
      "Full EPG with 7-day catch-up TV",
      "HD, Full HD and 4K UHD streaming",
      "Five simultaneous screens on one account",
      "24/7 dedicated UK support",
      "Built-in VPN included at no extra cost",
      "30-day money-back guarantee",
      "Instant activation in under 60 seconds",
    ],
    popular: false,
    savings: null,
  },
  {
    id: "silver",
    tier: "Silver",
    name: "6 Months",
    months: 6,
    subtitle: "Six months of uninterrupted premium IPTV streaming",
    price: 39.99,
    originalPrice: 69.99,
    perMonth: 6.66,
    period: "6 months",
    devices: 5,
    badge: "Half-Year Value",
    discount: "-43%",
    accentColor: "violet",
    features: [
      "37,000+ live channels with full UK coverage",
      "198,000+ films, series and documentaries on demand",
      "Full EPG with 7-day catch-up TV",
      "HD, Full HD and 4K UHD streaming",
      "Five simultaneous screens on one account",
      "24/7 dedicated UK support",
      "Built-in VPN included at no extra cost",
      "30-day money-back guarantee",
      "Instant activation in under 60 seconds",
    ],
    popular: false,
    savings: "Save 43%",
  },
  {
    id: "gold",
    tier: "Gold",
    name: "12 Months",
    months: 12,
    subtitle: "A full year of premium IPTV UK at £4.99/month",
    price: 59.99,
    originalPrice: 99.99,
    perMonth: 4.99,
    period: "year",
    devices: 5,
    badge: "Most Popular — Save 40%",
    discount: "-40%",
    accentColor: "blue",
    features: [
      "37,000+ live channels with full UK coverage",
      "198,000+ films, series and documentaries on demand",
      "Full EPG with 7-day catch-up TV",
      "HD, Full HD and 4K UHD streaming",
      "Five simultaneous screens on one account",
      "24/7 dedicated UK support",
      "Built-in VPN included at no extra cost",
      "30-day money-back guarantee",
      "Instant activation in under 60 seconds",
    ],
    popular: true,
    savings: "Save 40%",
  },
  {
    id: "diamond",
    tier: "Diamond",
    name: "24 Months",
    months: 24,
    subtitle: "Two years locked at the lowest premium IPTV UK rate",
    price: 89.99,
    originalPrice: 199.99,
    perMonth: 3.75,
    period: "2 years",
    devices: 5,
    badge: "Elite — Save 55%",
    discount: "-55%",
    accentColor: "violet",
    features: [
      "37,000+ live channels with full UK coverage",
      "198,000+ films, series and documentaries on demand",
      "Full EPG with 7-day catch-up TV",
      "HD, Full HD and 4K UHD streaming",
      "Five simultaneous screens on one account",
      "24/7 dedicated UK support",
      "Built-in VPN included at no extra cost",
      "30-day money-back guarantee",
      "Instant activation in under 60 seconds",
    ],
    popular: false,
    savings: "Save 55%",
  },
] as const;

export const DEVICES = [
  { name: "Amazon Fire Stick", icon: "Flame" as const },
  { name: "Smart TV", icon: "Tv" as const },
  { name: "Android / iOS", icon: "Smartphone" as const },
  { name: "Windows / Mac", icon: "Monitor" as const },
  { name: "IPTV Box / MAG", icon: "Box" as const },
  { name: "Apple TV", icon: "Airplay" as const },
] as const;

export const FAQ_ITEMS = [
  {
    question: "Is premium IPTV UK easy to set up?",
    answer:
      "Setup takes under two minutes. Login details arrive by email straight after ordering — open any supported IPTV app, enter the credentials, and the premium IPTV UK service is ready to play immediately.",
  },
  {
    question: "What devices work with a premium IPTV UK subscription?",
    answer:
      "Every major device is supported — Smart TVs, Firestick, Android TV boxes, iPhones, iPads, Android phones, MAG devices, Formuler boxes, Windows PCs and Macs. One premium IPTV account covers up to five concurrent screens.",
  },
  {
    question: "How fast does broadband need to be for premium IPTV UK?",
    answer:
      "10 Mbps is enough for HD on the premium IPTV UK platform. 25 Mbps or faster is recommended for 4K UHD. Adaptive bitrate scaling keeps the picture stable on slower rural connections too.",
  },
  {
    question: "Is there a minimum contract on premium IPTV UK plans?",
    answer:
      "No contracts and no hidden fees. Every premium IPTV UK plan is a one-off term length — pay once, stream for the full period, and renew only when it suits the household.",
  },
  {
    question: "What happens if the premium IPTV UK service disappoints?",
    answer:
      "Every plan includes a 30-day money-back guarantee. If the premium IPTV UK service does not meet expectations within the first 30 days, contact support and receive a full refund — no forms, no retention calls.",
  },
  {
    question: "How many screens are included with premium IPTV UK?",
    answer:
      "All premium IPTV UK plans include up to five simultaneous screens. Ideal for households where different members want to watch different channels at the same time with no extra cost.",
  },
  {
    question: "Does premium IPTV UK include British sports channels?",
    answer:
      "Yes. The full sports lineup streams live on the premium IPTV UK platform — top-tier UK football, European cup nights, motorsport, combat sports, rugby and cricket — across high-bitrate HD and 4K feeds.",
  },
  {
    question: "What uptime does the premium IPTV UK platform target?",
    answer:
      "The premium IPTV UK service runs on a 99.9% uptime target with Anti-Freeze 9.0 technology and 24/7 monitoring. A public status page tracks performance minute by minute for subscribers to verify.",
  },
  {
    question: "What happens when a premium IPTV UK plan expires?",
    answer:
      "Nothing changes in the account details. The premium IPTV UK service simply stops at the end of the term — no surprise renewals, no hidden charges. Renewing is manual and always opt-in.",
  },
  {
    question: "Is support available for the premium IPTV UK service?",
    answer:
      "A UK-based team is on call 24 hours a day, 7 days a week via live chat, email and WhatsApp. Average first reply on the premium IPTV UK support queue sits under four minutes.",
  },
  {
    question: "Is streaming via premium IPTV UK legal in the United Kingdom?",
    answer:
      "Streaming through a licensed premium IPTV UK provider is legal in the United Kingdom. Subscribers are responsible for ensuring their use of the service complies with applicable broadcasting and copyright law in their jurisdiction.",
  },
] as const;

export const CHANNEL_CATEGORIES = [
  {
    name: "Premium IPTV Sport — Every Major UK Fixture",
    count: "5,500+",
    icon: "Trophy" as const,
    channels:
      "Every major UK sporting moment streams live in HD and 4K — top-tier football, domestic cup ties, European nights, rugby, racing, cricket, golf and combat sports. Whatever the fixture, it lands on the premium IPTV lineup under one subscription — no add-ons, no missed kick-offs.",
    linkHref: "/blog/top-tier-uk-football-streaming-guide",
    linkLabel: "Top-tier UK football streaming guide",
  },
  {
    name: "Premium IPTV Entertainment — The British Lineup",
    count: "500+",
    icon: "Tv" as const,
    channels:
      "The full British entertainment lineup runs from the flagship free-to-air networks to the top premium drama and comedy channels. Regional variants and +1 timeshift feeds come bundled in, so every household catches every show the way they want to watch it — nothing is ever missed.",
    linkHref: "/#pricing",
    linkLabel: "Compare premium IPTV UK plans",
  },
  {
    name: "Premium IPTV On-Demand — 198,000 Films & Series",
    count: "198,000+",
    icon: "Film" as const,
    channels:
      "A vast on-demand library covers the full spectrum of film and television — the latest blockbusters, award winners, international premieres and a back-catalogue stretching decades. Every genre, every era, and the shelf refreshes the day new releases hit digital.",
    linkHref: "/blog/iptv-vs-traditional-pay-tv",
    linkLabel: "Premium IPTV vs traditional pay-TV comparison",
  },
  {
    name: "Premium IPTV For Kids & Family Viewing",
    count: "800+",
    icon: "Baby" as const,
    channels:
      "A dedicated kids and family line-up covers every age group in HD — pre-school favourites, animation, tween and teen series, educational programming and weekend family films. A four-digit PIN locks any channel from the parental control tab for safe household viewing.",
    linkHref: "/#features",
    linkLabel: "See premium IPTV parental tools",
  },
  {
    name: "Premium IPTV News — Rolling UK & Global Feeds",
    count: "1,200+",
    icon: "Newspaper" as const,
    channels:
      "Round-the-clock coverage from the UK's leading news broadcasters sits alongside the biggest international networks and financial feeds. The dedicated news category groups them all together — every story, as it breaks, through a single premium IPTV feed.",
    linkHref: "/#faq",
    linkLabel: "Read the premium IPTV FAQ",
  },
  {
    name: "International Premium IPTV — 40+ Language Packs",
    count: "17,000+",
    icon: "Globe" as const,
    channels:
      "Over forty language packs cover every major region — full HD feeds from Europe, the Middle East, Asia, Africa and the Americas in a single international lineup. Country filters sit in the sidebar, so switching languages takes one tap — bundled into every premium IPTV plan at no extra fee.",
    linkHref: "/#faq",
    linkLabel: "Read the premium IPTV FAQ",
  },
] as const;

export const BLOG_POSTS = [
  {
    slug: "best-iptv-uk-guide-2026",
    title: "Best Premium IPTV UK 2026 — How To Choose The Right Service",
    excerpt:
      "Finding the best premium IPTV UK service means looking past flashy promises. This guide breaks down the seven criteria that matter most for British viewers — from channel quality and reliability to support and genuine value.",
    date: "2026-04-01",
    readTime: "12 min read",
    category: "Guide",
  },
  {
    slug: "how-to-setup-iptv-firestick",
    title: "How To Set Up Premium IPTV On Amazon Fire Stick",
    excerpt:
      "A complete, beginner-friendly guide to installing and configuring a premium IPTV UK subscription on the Amazon Fire Stick. Streaming is ready in under ten minutes with the step-by-step instructions below.",
    date: "2026-03-20",
    readTime: "6 min read",
    category: "Tutorial",
  },
  {
    slug: "iptv-vs-traditional-pay-tv",
    title: "Premium IPTV vs Traditional UK Pay-TV — Which Wins For UK Viewers In 2026?",
    excerpt:
      "An honest comparison of modern premium IPTV UK services and traditional UK pay-TV. Costs, channel coverage, picture quality, flexibility and long-term value — everything a British household needs to make the switch.",
    date: "2026-03-15",
    readTime: "8 min read",
    category: "Comparison",
  },
  {
    slug: "top-tier-uk-football-streaming-guide",
    title: "Watch Every Top-Tier UK Football Fixture — Premium IPTV Streaming Guide",
    excerpt:
      "Every domestic top-flight football match, plus European leagues, all in stunning HD and 4K through a single premium IPTV UK subscription.",
    date: "2026-03-10",
    readTime: "5 min read",
    category: "Sports",
  },
] as const;
