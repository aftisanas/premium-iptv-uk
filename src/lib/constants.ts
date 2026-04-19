export const WHATSAPP_NUMBER = "";
export const WHATSAPP_BASE_URL = `https://wa.me/${WHATSAPP_NUMBER}`;
export const SITE_NAME = "Buy IPTV UK";
export const SITE_URL = "https://buy-iptv-uk.com";
export const CONTACT_EMAIL = "support@buy-iptv-uk.com";

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Why Us", href: "#features" },
  { label: "Pricing", href: "#pricing" },
  { label: "Reviews", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
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
  { value: "99.9%", label: "Uptime" },
  { value: "50,000+", label: "UK Subscribers" },
] as const;

export const FEATURES = [
  {
    title: "Buy IPTV UK With Instant Activation",
    description:
      "Your login fires the second your payment clears. Open the link, scan the QR code and your first channel plays in under two minutes.",
    icon: "Tv" as const,
  },
  {
    title: "4K UHD IPTV Streaming On Every Plan",
    description:
      "Every plan — from three months to 24 — streams in 4K UHD where the channel supports it. HD falls back on older kit without a setting change.",
    icon: "Monitor" as const,
  },
  {
    title: "IPTV For Firestick UK — One-Tap Setup",
    description:
      "Install IPTV Smarters Pro from the Amazon store and paste your login. No sideloading, no tech knowledge, no calls to support.",
    icon: "Clock" as const,
  },
  {
    title: "37,000+ Channels From UK IPTV Providers",
    description:
      "Sport, drama, news, kids and international feeds land in one clean guide. UK IPTV providers update the list weekly at no extra cost.",
    icon: "Film" as const,
  },
  {
    title: "IPTV 4K UK Sports With Zero Delay",
    description:
      "Premier League, F1, UFC and Test cricket stream with near-zero lag on our UK server grid. The picture holds in 4K even at peak kick-off.",
    icon: "Smartphone" as const,
  },
  {
    title: "IPTV Trial UK — Risk-Free 30 Days",
    description:
      "Every purchase comes with a 30-day money-back window. Test the full service, all channels and all devices, then decide.",
    icon: "LayoutGrid" as const,
  },
  {
    title: "IPTV Box UK Compatible Out Of The Box",
    description:
      "Plug any MAG, Formuler or Enigma2 IPTV box into your router and paste the M3U link. The guide loads in under a minute.",
    icon: "Zap" as const,
  },
  {
    title: "Cheap IPTV UK Price, Premium Quality",
    description:
      "Starting from £12.99 a month, our cheap IPTV UK plans cost less than one round at the pub and deliver far more entertainment.",
    icon: "Shield" as const,
  },
] as const;

export const PRICING_PLANS = [
  {
    id: "bronze",
    tier: "Bronze",
    name: "3 Months",
    subtitle: "Perfect first step before a longer plan",
    price: 29.99,
    originalPrice: 49.99,
    perMonth: 8.66,
    period: "3 months",
    devices: 5,
    badge: "Shortest Commitment",
    discount: "-35%",
    accentColor: "violet",
    features: [
      "37,000+ live channels with full UK coverage",
      "198,000+ films, series, and documentaries on demand",
      "Full EPG with 7-day catch-up TV",
      "HD, Full HD & 4K streaming quality",
      "Multi-device access — up to 5 simultaneous connections",
      "24/7 dedicated UK support",
      "Netflix, Disney, Apple & More",
      "30-day money-back guarantee",
      "Instant activation",
    ],
    popular: false,
    savings: null,
  },
  {
    id: "silver",
    tier: "Silver",
    name: "6 Months",
    subtitle: "Six months of 4K sport and entertainment",
    price: 39.99,
    originalPrice: 69.99,
    perMonth: 6.00,
    period: "6 months",
    devices: 5,
    badge: "Most Flexible",
    discount: "-40%",
    accentColor: "violet",
    features: [
      "37,000+ live channels with full UK coverage",
      "198,000+ films, series, and documentaries on demand",
      "Full EPG with 7-day catch-up TV",
      "HD, Full HD & 4K streaming quality",
      "Multi-device access — up to 5 simultaneous connections",
      "24/7 dedicated UK support",
      "Netflix, Disney, Apple & More",
      "30-day money-back guarantee",
      "Instant activation",
    ],
    popular: false,
    savings: "Save 40%",
  },
  {
    id: "gold",
    tier: "Gold",
    name: "12 Months",
    subtitle: "Full year of every match, film and series",
    price: 59.99,
    originalPrice: 89.99,
    perMonth: 4.17,
    period: "year",
    devices: 5,
    badge: "BEST SELLER",
    discount: "-38%",
    accentColor: "blue",
    features: [
      "37,000+ live channels with full UK coverage",
      "198,000+ films, series, and documentaries on demand",
      "Full EPG with 7-day catch-up TV",
      "HD, Full HD & 4K streaming quality",
      "Multi-device access — up to 5 simultaneous connections",
      "24/7 dedicated UK support",
      "Netflix, Disney, Apple & More",
      "30-day money-back guarantee",
      "Instant activation",
    ],
    popular: true,
    savings: "Save 38%",
  },
  {
    id: "diamond",
    tier: "Diamond",
    name: "24 Months",
    subtitle: "Lowest rate locked in for two full years",
    price: 89.99,
    originalPrice: 119.99,
    perMonth: 3.33,
    period: "2 years",
    devices: 5,
    badge: "MAXIMUM SAVING",
    discount: "-38%",
    accentColor: "violet",
    features: [
      "37,000+ live channels with full UK coverage",
      "198,000+ films, series, and documentaries on demand",
      "Full EPG with 7-day catch-up TV",
      "HD, Full HD & 4K streaming quality",
      "Multi-device access — up to 5 simultaneous connections",
      "24/7 dedicated UK support",
      "Netflix, Disney, Apple & More",
      "30-day money-back guarantee",
      "Instant activation",
    ],
    popular: false,
    savings: "Save 38%",
  },
] as const;

export const TESTIMONIALS = [
  {
    name: "Marcus T.",
    location: "Liverpool",
    text: "I compared every UK IPTV provider for an hour and bought here because of the money-back guarantee. Best decision I made all year. Every Sky Sports channel live in 4K.",
    rating: 5,
    avatar: "MT",
    since: "January 2026",
  },
  {
    name: "Claire N.",
    location: "Edinburgh",
    text: "Bought the 12-month plan and my Firestick was live in three minutes. The setup guide in the dashboard is clearer than any YouTube video.",
    rating: 5,
    avatar: "CN",
    since: "March 2025",
  },
  {
    name: "Hassan A.",
    location: "Leicester",
    text: "The Arabic and Asian channels are complete. I pay less than I used to for a basic satellite dish and I get ten times more.",
    rating: 5,
    avatar: "HA",
    since: "November 2025",
  },
  {
    name: "Emma J.",
    location: "Cardiff",
    text: "Wanted a cheap IPTV UK option that still looked sharp on a 65-inch screen. Found it. The 4K picture on film night is genuinely cinema quality.",
    rating: 5,
    avatar: "EJ",
    since: "February 2025",
  },
  {
    name: "Ryan S.",
    location: "Newcastle",
    text: "Ordered the 24-month plan. The VPN runs quietly in the background and the stream held 4K for the full 90 minutes on match night. Zero buffering.",
    rating: 5,
    avatar: "RS",
    since: "December 2025",
  },
  {
    name: "Priya K.",
    location: "Coventry",
    text: "CBBC and Nick Jr keep the kids busy and the parental PIN locks everything else. Five screens running at once with no lag whatsoever.",
    rating: 5,
    avatar: "PK",
    since: "April 2025",
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
    question: "How do I buy IPTV in the UK?",
    answer:
      "Choose a plan on this page, pay by card or PayPal and check your email. Your login and setup guide land in under 60 seconds. You do not need any technical knowledge to get started.",
  },
  {
    question: "Is it safe to buy IPTV online?",
    answer:
      "Yes, when you buy from a provider with a secure checkout and a money-back guarantee. We use Stripe and PayPal for all payments, and no card data touches our servers.",
  },
  {
    question: "What is the best IPTV UK package to buy?",
    answer:
      "The 12-month plan is our best-seller because it cuts the monthly rate by 40 percent while covering every channel, screen and VOD title. The 24-month plan saves 55 percent for viewers who are committed.",
  },
  {
    question: "Can I buy IPTV for a Firestick?",
    answer:
      "Yes. Install IPTV Smarters Pro from the Amazon store, open the app, and enter the M3U credentials from your welcome email. The full 37,000-channel guide loads in under two minutes.",
  },
  {
    question: "Do I need an IPTV box to use this service?",
    answer:
      "No. A dedicated IPTV box UK works, but so does any phone, tablet, smart TV or laptop. One login covers up to five devices at the same time.",
  },
  {
    question: "What internet speed do I need after I buy IPTV?",
    answer:
      "25 Mbps gives you clean 4K. 10 Mbps is enough for HD. Our servers adapt the bitrate if your connection dips during a live stream.",
  },
  {
    question: "Is there an IPTV trial UK option?",
    answer:
      "Every plan comes with a 30-day money-back window. Buy any package, test every channel and all five screens and request a full refund within 30 days if you are not happy.",
  },
  {
    question: "What channels come with every plan?",
    answer:
      "All 37,000 channels open immediately. That includes every Sky Sports feed, TNT Sports, Premier Sports, BBC, ITV, Channel 4, Sky Cinema and 40+ international language packs.",
  },
] as const;

export const CHANNEL_CATEGORIES = [
  { name: "British IPTV 4K Drama & Entertainment", count: "500+", icon: "Tv" as const, channels: "ITV1 to ITV4, Channel 4, E4, More4, Channel 5, Dave, Gold and Sky Max all land in HD. Every regional variant and every +1 timeshift channel comes included." },
  { name: "Live UK Sport on the Best IPTV UK Subscription", count: "5,500+", icon: "Trophy" as const, channels: "Stream every Sky Sports channel, TNT Sports, Premier Sports, Eurosport and FreeSports. Watch Premier League, Champions League, F1, rugby, darts and the Masters live in 4K." },
  { name: "IPTV UK 4K On-Demand Movies & Cinema", count: "198,000+", icon: "Film" as const, channels: "The VOD library holds 198,000 films and series, refreshed each day. Open Sky Cinema, Paramount Network and global premiere feeds from the same menu." },
  { name: "Buy IPTV UK for Kids & Family Entertainment", count: "800+", icon: "Baby" as const, channels: "CBBC, CBeebies, Nickelodeon, Nick Jr, Cartoon Network and Disney Channel stream in HD. Set a four-digit PIN to lock any channel from the parental control tab." },
  { name: "Rolling News from Top-Tier IPTV Providers UK", count: "1,200+", icon: "Newspaper" as const, channels: "BBC News, Sky News, GB News, CNN International, Al Jazeera and Bloomberg run live in a dedicated news category. Stay current on every story as it breaks." },
  { name: "Premium IPTV UK International Channels", count: "17,000+", icon: "Globe" as const, channels: "Arabic, Urdu, Polish, Portuguese, Turkish, French and African channels stream in full HD. Switch country feeds from the sidebar filter in a single tap." },
] as const;

export const BLOG_POSTS = [
  {
    slug: "best-iptv-uk-guide-2026",
    title: "Best IPTV UK 2026 — How to Choose the Right IPTV Provider",
    excerpt:
      "Finding the best IPTV service in the UK means looking beyond flashy promises. We break down the 7 criteria that matter most for British viewers — from channel quality and reliability to support and genuine value.",
    date: "2026-04-01",
    readTime: "12 min read",
    category: "Guide",
  },
  {
    slug: "how-to-setup-iptv-firestick",
    title: "How to Set Up Your IPTV Subscription on Amazon Fire Stick — Step by Step",
    excerpt:
      "A complete, beginner-friendly guide to installing and configuring IPTV on your Amazon Fire Stick. Get streaming in under 10 minutes with our easy instructions.",
    date: "2026-03-20",
    readTime: "6 min read",
    category: "Tutorial",
  },
  {
    slug: "iptv-vs-sky-comparison",
    title: "IPTV vs Sky — Which IPTV Service Is Better for UK Viewers in 2026?",
    excerpt:
      "An honest comparison of IPTV and Sky TV for UK households. We break down costs, channel availability, picture quality, flexibility, and value to help you make the switch.",
    date: "2026-03-15",
    readTime: "8 min read",
    category: "Comparison",
  },
  {
    slug: "premier-league-streaming-guide",
    title: "Watch Every Premier League Match Live — Premium IPTV Streaming Guide",
    excerpt:
      "Never miss a Premier League match again. Learn how IPTV gives you access to every live game — plus Championship, La Liga, Serie A and more — all in stunning HD and 4K quality.",
    date: "2026-03-10",
    readTime: "5 min read",
    category: "Sports",
  },
] as const;
