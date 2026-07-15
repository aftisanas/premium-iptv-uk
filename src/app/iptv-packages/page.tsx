import type { Metadata } from "next";
import Link from "next/link";
import SubPageShell, {
  type SubPageFAQItem,
  type SubPageRelatedGuide,
} from "@/components/SubPageShell";
import { LOGO_PATH, SITE_URL } from "@/lib/constants";

const SLUG = "iptv-packages";
const TITLE = "IPTV Packages UK — What A Subscription Actually Includes Beyond The Headline Price";
const INTRO =
  "“Package” gets used loosely across UK IPTV. Sometimes it means the plan tier — three months versus twelve. Sometimes it means the channel bundle alone. Sometimes it means the base subscription and every add-on stacked on top, all folded into one word. That looseness is exactly why buyers end up confused about what they are actually comparing when they put two operators side by side.";
const DESCRIPTION =
  "What a UK IPTV package actually includes — base subscription, features, add-ons, connection allowance and support level — and seven checks to run before choosing one.";

export const metadata: Metadata = {
  title: "IPTV Packages UK — What A Subscription Includes | Premium IPTV UK",
  description: DESCRIPTION,
  alternates: { canonical: `/${SLUG}` },
  openGraph: {
    type: "article",
    title: TITLE,
    description: DESCRIPTION,
    url: `${SITE_URL}/${SLUG}`,
    images: [{ url: LOGO_PATH, width: 512, height: 512, alt: TITLE }],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: [LOGO_PATH],
  },
  robots: { index: true, follow: true },
};

const FAQ_ITEMS: ReadonlyArray<SubPageFAQItem> = [
  {
    question: "What's included in a UK IPTV package?",
    answer:
      "Most UK IPTV packages include live channel access, an on-demand (VOD) library, an electronic programme guide, and a catch-up window that is typically around seven days, all bundled into the base subscription price. Beyond that standard baseline, what counts as included varies significantly by operator — some bundle extra simultaneous connections or a routing add-on into the base price, while others charge separately for both. The safest approach is to treat anything beyond live channels, VOD, EPG and catch-up as unconfirmed until the operator states plainly whether it is included or an add-on, rather than assuming a feature is bundled because a competitor bundles it.",
  },
  {
    question: "What's the difference between an IPTV package and an IPTV subscription?",
    answer:
      "In practice the two terms are often used interchangeably, but “subscription” more precisely refers to the billing arrangement — the plan tier and term length you are paying for — while “package” more usefully describes everything that arrangement actually gets you: the included features, the connection allowance, the support level, and any add-ons layered on top. Two operators can sell an identical subscription price and term length while delivering very different packages once the actual contents are compared feature by feature. Thinking in terms of “package” rather than just “subscription” is what pushes a buyer to compare contents rather than only the number on the page.",
  },
  {
    question: "How do I choose the right IPTV package for my household?",
    answer:
      "Start from how your household actually watches rather than from the cheapest headline price. A single viewer on one device needs very little beyond a short-term plan to test reliability, while a family with several simultaneous viewers needs a connection allowance that genuinely matches that number, not just enough devices to technically qualify. Sport-heavy households should prioritise peak-hour reliability over total channel count, and film or series-heavy households should weigh VOD library depth and refresh cadence more heavily than live feeds. Matching the package to the actual viewing pattern in your household, rather than to the biggest headline numbers on a pricing page, is what determines whether it turns out to be a good fit.",
  },
  {
    question: "What's a typical UK IPTV package cost?",
    answer:
      "Cost varies by term length and operator, generally falling somewhere between roughly £3 and £9 a month once billed per term rather than monthly, with longer terms bringing the effective monthly rate down in exchange for a larger upfront prepayment. The cost breakdown at /iptv-cost sets out the full arithmetic behind these figures, including how different term lengths convert to a genuine monthly rate and where hidden costs typically hide. Package content should be weighed alongside price rather than in isolation, since two packages at an identical monthly cost can include very different connection allowances, add-ons and support levels once actually compared.",
  },
  {
    question: "Can I upgrade my IPTV package after buying?",
    answer:
      "In most cases, yes, though the specific terms depend entirely on the operator, which makes it worth checking before rather than after you need to upgrade. Common options include adding extra simultaneous connections mid-term, or moving to a longer term at renewal to lower the effective monthly rate going forward. Whether a genuine mid-term tier upgrade is available, and whether it is prorated against time already used or charged at full price on top, varies by operator and is rarely advertised prominently. Asking this question directly before committing to a package is one of the seven checks worth running on any operator under consideration, rather than discovering the answer only once an upgrade is actually needed.",
  },
  {
    question: "What add-ons are standard on UK IPTV packages?",
    answer:
      "The most common paid add-ons across UK IPTV packages are a secure proxy or routing service, extra simultaneous connections beyond whatever number is bundled into the base plan, and in some cases support for higher device tiers. None of these should be assumed included by default — treat each as a separate line item to confirm, since operators differ significantly on which of these sit inside the base price versus which are charged on top. A package that looks cheaper on the headline figure can end up costing more once the add-ons a household actually needs are added back in, which is why comparing add-on pricing matters as much as comparing the base rate itself.",
  },
];

const RELATED_GUIDES: ReadonlyArray<SubPageRelatedGuide> = [
  {
    title: "IPTV Cost In The UK",
    href: "/iptv-cost",
    description:
      "The full arithmetic behind IPTV pricing in the UK — per-term billing, effective monthly rates, and where hidden costs hide.",
  },
  {
    title: "4K IPTV UK",
    href: "/4k-iptv",
    description:
      "What real 4K IPTV requires — bitrate, HEVC decoding, hardware compatibility and broadband headroom — plus seven checks before paying.",
  },
  {
    title: "Reliable IPTV UK",
    href: "/reliable-iptv",
    description:
      "What legal and reliable IPTV means in the UK, how to verify uptime claims, and seven reliability checks worth running before paying.",
  },
];

const h2Class = "text-2xl sm:text-3xl font-bold text-foreground mt-12 mb-4";
const h3Class = "text-xl font-semibold text-foreground mt-8 mb-3";
const pClass = "text-base text-gray-700 leading-relaxed mb-4";
const linkClass =
  "text-violet-600 underline-offset-2 hover:text-violet-700 hover:underline";

export default function IptvPackagesPage() {
  return (
    <SubPageShell
      slug={SLUG}
      title={TITLE}
      category="Packages & Plans"
      intro={INTRO}
      byline={{
        name: "IPTV Premium UK Editorial",
        role: "Editor",
        description:
          "The editorial team behind the buyer's guides published on iptv-premium-uk.tv, covering UK IPTV subscription pricing, reliability, 4K playback and package structure.",
        publishedDate: "2026-07-14",
        updatedDate: "2026-07-14",
      }}
      readTime="11 min read"
      relatedGuides={RELATED_GUIDES}
      faqItems={FAQ_ITEMS}
    >
      <h2 className={h2Class}>What &ldquo;IPTV Package&rdquo; Actually Means</h2>
      <p className={pClass}>
        This page uses &ldquo;package&rdquo; to mean the full contents of what a buyer actually receives: the base subscription (plan tier plus term length), the features included at that price, the optional add-ons available on top, the connection allowance, and the level of support behind it. That is deliberately different from the headline price itself, which is covered in full at{" "}
        <Link href="/iptv-cost" className={linkClass}>
          the cost breakdown
        </Link>
        , and different again from the specific numbers on any given tier, published at{" "}
        <Link href="/#pricing" className={linkClass}>
          current plans
        </Link>
        . This page is about what is inside a package, not what it costs.
      </p>
      <p className={pClass}>
        The distinction matters because two packages can carry an identical headline price while containing genuinely different things. A buyer comparing only the number on the page is comparing one variable out of several that determine whether a package actually suits their household.
      </p>

      <h2 className={h2Class}>What A UK IPTV Package Typically Includes</h2>
      <p className={pClass}>
        A package has two layers: the base subscription you are actually buying, and the list of what sits inside it versus what costs extra.
      </p>

      <h3 className={h3Class}>The Base Subscription</h3>
      <p className={pClass}>
        The base subscription is defined by two things: the plan tier and the term length attached to it. Most UK IPTV services structure their plans around 3, 6, 12 and 24-month terms, with the term length doing most of the work in determining the effective monthly rate — longer terms lower that rate but require a larger single prepayment upfront. This trade-off between rate and commitment is the first decision a package forces, before any feature comparison even starts.
      </p>
      <p className={pClass}>
        Tier positioning also tends to follow a pattern across the market: the shortest term is priced as a trial, the middle terms carry the bulk of the discount, and the longest term is positioned as the committed buyer&rsquo;s rate — which explains why one operator&rsquo;s four plans can look so different in value even when the package contents behind each are identical.
      </p>

      <h3 className={h3Class}>Included Features vs Paid Add-Ons</h3>
      <p className={pClass}>
        Certain features are standard across most UK IPTV packages: live channel access, an on-demand catalogue, an electronic programme guide (EPG), and a catch-up window that is typically around seven days. Beyond that baseline, operators diverge. Common paid add-ons include a secure proxy or routing service, extra simultaneous connections beyond whatever number is bundled into the base plan, and support for higher device tiers. What counts as &ldquo;included&rdquo; and what counts as an add-on varies significantly by operator, which means the safest working assumption is that nothing is included until an operator states it plainly — treat every feature as an add-on until confirmed otherwise.
      </p>
      <p className={pClass}>
        The practical version of this check is simple: before paying, ask for a written list of what the base price covers and a separate list of what costs extra. An operator willing to separate the two clearly is generally more trustworthy on this point than one whose pricing page blurs included features and paid extras into a single list — the same distinction between verifiable claims and marketing language that runs through{" "}
        <Link href="/what-is-premium-iptv" className={linkClass}>
          the definition of premium IPTV
        </Link>
        .
      </p>

      <h2 className={h2Class}>How Packages Vary Between UK Providers</h2>
      <p className={pClass}>
        Once the base structure is understood, the real differences between UK IPTV packages show up in six specific places.
      </p>
      <p className={pClass}>
        <strong className="text-foreground">Channel lineup depth.</strong> Total feed counts vary dramatically between operators — some advertise around 10,000, others 40,000 or more — but the total matters far less than it looks. What actually determines whether a package suits a UK household is the size of the UK-relevant pack specifically, not the global total padded out with feeds most viewers will never open.
      </p>
      <p className={pClass}>
        <strong className="text-foreground">VOD library size and refresh cadence.</strong> A large on-demand library that never changes stagnates within months, as new releases land elsewhere and the listed titles quietly age. A smaller library that refreshes regularly holds its value better than a static one, however large the headline number looks on day one.
      </p>
      <p className={pClass}>
        <strong className="text-foreground">Simultaneous connection allowance.</strong> Most UK packages include somewhere between two and five simultaneous connections as standard, with anything beyond that allowance typically costing extra per additional stream.
      </p>
      <p className={pClass}>
        <strong className="text-foreground">Catch-up and EPG depth.</strong> Seven days of catch-up is the common standard, though some operators extend it further. EPG accuracy — whether listings are current and correctly mapped to the right channel — varies considerably and is worth checking rather than assuming.
      </p>
      <p className={pClass}>
        <strong className="text-foreground">Support tier.</strong> A WhatsApp line, email support, phone support and a self-service portal each represent a genuinely different level of accountability when something goes wrong, which matters more than it sounds until the evening it actually goes wrong — see{" "}
        <Link href="/reliable-iptv" className={linkClass}>
          reliability and legal position
        </Link>
        {" "}for how to judge an operator&rsquo;s support claims specifically.
      </p>
      <p className={pClass}>
        <strong className="text-foreground">Refund window.</strong> Fourteen days is the UK legal minimum for most distance-sold digital services. Operators positioning themselves at the premium end of the market tend to offer 30 days or more, which is a reasonable signal of confidence worth weighing alongside everything else in the package. A window shorter than the legal minimum is a stronger warning sign than almost any other single detail on a pricing page.
      </p>
      <p className={pClass}>
        None of these six variables shows up clearly on a headline price alone — which is exactly where most of the genuine difference between operators actually lives.
      </p>

      <h2 className={h2Class}>Seven Checks Before Choosing A Package</h2>
      <p className={pClass}>
        A package looks similar to its competitors on the surface. These seven checks are where the real differences surface.
      </p>
      <p className={pClass}>
        <strong className="text-foreground">Term length matched to your commitment level.</strong> Start with a shorter term if the operator is untested for you, and only move to a longer term once reliability has actually been confirmed on your own setup, rather than committing to the longest term first for the sake of the lowest headline rate.
      </p>
      <p className={pClass}>
        <strong className="text-foreground">What&rsquo;s genuinely included versus an add-on in disguise.</strong> Confirm the base plan covers the features you actually need before assuming they are bundled in — a headline price built around a stripped-back base plan can look cheaper than it functions once the add-ons a household actually needs are added back on top.
      </p>
      <p className={pClass}>
        <strong className="text-foreground">Connection allowance matched to household size.</strong> Count the number of people likely to be watching simultaneously in your household, not just the number of devices you own, and check the included allowance against that real number rather than the device count.
      </p>
      <p className={pClass}>
        <strong className="text-foreground">UK-relevant channel depth, not padded totals.</strong> A large global channel count is not the same as a large UK-relevant pack — ask specifically for the UK figure rather than accepting the headline total, which is usually inflated by feeds a UK household will never open.
      </p>
      <p className={pClass}>
        <strong className="text-foreground">VOD library refresh, not just size.</strong> Ask when the library was last updated. A static catalogue frozen at launch loses relevance quickly regardless of how large it was on day one, while a smaller but actively refreshed library holds its value considerably longer.
      </p>
      <p className={pClass}>
        <strong className="text-foreground">Catch-up window matched to your viewing habits.</strong> Seven days suits most casual viewing patterns; anyone who regularly falls more than a week behind on a series or a schedule should check whether the window extends further before assuming the standard figure is enough.
      </p>
      <p className={pClass}>
        <strong className="text-foreground">Room to scale mid-term without penalty.</strong> Check whether the operator allows adding a connection or upgrading a tier partway through a term, and on what terms — an operator that only offers upgrades at full renewal price is less flexible than one that prorates a mid-term change against time already used.
      </p>
      <p className={pClass}>
        Run through all seven before comparing two packages side by side. Together they cover most of what a headline price alone cannot tell you.
      </p>

      <h2 className={h2Class}>How To Match A Package To Your Household</h2>
      <p className={pClass}>
        The right package depends on who is actually watching and how, more than on any single headline figure.
      </p>
      <p className={pClass}>
        <strong className="text-foreground">Single viewer, one device.</strong> The cheapest short-term plan is usually the sensible starting point — confirm reliability first, then move to a longer term once the service has proven itself rather than committing upfront.
      </p>
      <p className={pClass}>
        <strong className="text-foreground">Couple or two viewers, occasional simultaneous use.</strong> A base plan with two to three simultaneous connections included generally covers this pattern without needing to pay for extras.
      </p>
      <p className={pClass}>
        <strong className="text-foreground">Family, three or more simultaneous viewers.</strong> Look specifically for a five-or-more connection allowance, or budget in advance for the cost of extra connections if the base plan falls short of actual household need.
      </p>
      <p className={pClass}>
        <strong className="text-foreground">Sport-heavy viewer.</strong> Peak-hour reliability matters far more here than total feed count — a service that buckles during a big evening fixture is a worse fit than one with a smaller but stable lineup.
      </p>
      <p className={pClass}>
        <strong className="text-foreground">Film and series-heavy viewer.</strong> VOD library depth and refresh cadence matter more than live channel count for this pattern, since most of the actual viewing time is spent in the on-demand catalogue rather than live feeds.
      </p>
      <p className={pClass}>
        <strong className="text-foreground">Multi-device household with 4K TVs.</strong> Confirm HEVC decoding support and genuine broadband headroom before assuming every device in the house can run 4K simultaneously —{" "}
        <Link href="/4k-iptv" className={linkClass}>
          the 4K IPTV requirements
        </Link>
        {" "}covers exactly what to check here, including which devices actually decode HEVC and how much bandwidth multiple simultaneous 4K streams genuinely need.
      </p>
      <p className={pClass}>
        None of these six profiles is exclusive — most households are a blend, and the honest approach is to weight the connection allowance toward whichever pattern describes most of the actual viewing.
      </p>

      <h2 className={h2Class}>How This Service Structures Its Packages</h2>
      <p className={pClass}>
        This section describes the service operated by the same team publishing this page, disclosed here directly rather than folded into the general guidance above.
      </p>
      <p className={pClass}>
        Four plan tiers are offered, running 3, 6, 12 and 24 months — the per-term rates and monthly arithmetic behind each are set out in full at{" "}
        <Link href="/iptv-cost" className={linkClass}>
          the cost breakdown
        </Link>
        {" "}rather than repeated here. Every tier includes the same baseline regardless of term length: live channel access, the full VOD library, EPG, a 7-day catch-up window, five simultaneous connections, and UK support reachable via WhatsApp. None of that baseline shrinks on the shorter terms — the difference between tiers is the term length and the effective monthly rate, not what is included.
      </p>
      <p className={pClass}>
        Two paid add-ons sit outside that baseline. A Secure Proxy is available as an add-on tiered by term, priced at £4.75, £9.50, £19 and £38 across the 3, 6, 12 and 24-month plans respectively. Extra simultaneous connections beyond the five included in every plan are available at £7.25 per additional stream. Every tier carries the same 30-day refund window regardless of term length or which add-ons are chosen.
      </p>
      <p className={pClass}>
        For the current numbers behind each tier,{" "}
        <Link href="/#pricing" className={linkClass}>
          current plans
        </Link>
        {" "}has the up-to-date pricing; for how those numbers convert to an effective monthly rate, the cost breakdown covers the arithmetic in full.
      </p>
    </SubPageShell>
  );
}
