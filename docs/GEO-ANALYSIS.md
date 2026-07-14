# GEO Analysis — iptv-premium-uk.tv

**Date:** 2026-06-12
**Branch:** `seo/subpage-shell-and-what-is-premium-iptv-2026-06`
**Method:** source-level audit of the Next.js 16 app (live `WebFetch` returns 403 — see Finding T1)
**Scope:** AI-search readiness across Google AI Overviews, ChatGPT web search, Perplexity, Bing Copilot

---

## GEO Readiness Score: 58 / 100

| Pillar | Weight | Score | Weighted |
|---|---|---|---|
| Citability | 25% | 18/25 | 18.0 |
| Structural Readability | 20% | 14/20 | 14.0 |
| Multi-Modal Content | 15% | 3/15 | 3.0 |
| Authority & Brand Signals | 20% | 9/20 | 9.0 |
| Technical Accessibility | 20% | 14/20 | 14.0 |
| **Total** | | | **58.0** |

### Platform Breakdown

| Platform | Score | Why |
|---|---|---|
| **Google AI Overviews** | 65/100 | Strong schema graph, citation[] on /what-is-premium-iptv, consistent SSR via Next.js — but home FAQ answers gate behind JS (see S2) and Cloudflare may be 403-ing AI fetches (T1) |
| **ChatGPT (web search)** | 38/100 | Citation sources skew Wikipedia (47.9%) + Reddit (11.3%). Brand has zero presence on either. `sameAs:[]` is empty |
| **Perplexity** | 35/100 | Citation sources skew Reddit (46.7%) + Wikipedia. Same gap as ChatGPT |
| **Bing Copilot** | 55/100 | Standard SEO surfaces apply; no IndexNow detected |

---

## 1. AI Crawler Access — `robots.txt`

```
User-Agent: *
Allow: /
Disallow: /api/
Disallow: /_next/
Disallow: /admin/
Sitemap: https://iptv-premium-uk.tv/sitemap.xml
```

`src/app/robots.ts:4-15` emits one wildcard rule. AI crawlers are *implicitly* allowed via `User-Agent: *`. None are named.

**Crawler-by-crawler status (declared intent):**

| Crawler | robots.txt | Verified at edge? |
|---|---|---|
| GPTBot (ChatGPT training/search) | ✅ Allowed (via `*`) | ❓ unverified |
| OAI-SearchBot (ChatGPT search) | ✅ Allowed | ❓ unverified |
| ClaudeBot | ✅ Allowed | ❓ unverified |
| PerplexityBot | ✅ Allowed | ❓ unverified |
| Google-Extended (AI Overviews training) | ✅ Allowed | ❓ unverified |
| Applebot-Extended | ✅ Allowed | ❓ unverified |
| CCBot (Common Crawl) | ✅ Allowed | ❓ unverified |

**Finding T1 — Cloudflare 403 risk (Critical, unverified).** `WebFetch` to both `https://iptv-premium-uk.tv/` and `/llms.txt` returned **403 Forbidden**. `robots.txt` returned 200, so DNS/origin are reachable; the block is at the edge. Cloudflare's "Block AI Scrapers and Crawlers" toggle and default "Bot Fight Mode" will return 403 to GPTBot, ClaudeBot, PerplexityBot, OAI-SearchBot regardless of what `robots.txt` says. **If this edge block is active, every AI crawler is silently denied even though the robots file invites them.** Verify with `curl -A "GPTBot/1.0" https://iptv-premium-uk.tv/` and `curl -A "ClaudeBot/1.0" ...`. If 403, allowlist AI bots in the Cloudflare WAF.

---

## 2. `llms.txt` Status

**Missing.** `/llms.txt` returns 403 (see T1) — also no route exists in `src/app/`. Google has stated `llms.txt` is **not currently a citation lever** for major AI search systems (see `references/llmstxt-evidence.md`), so this is Info priority, not Critical. Adding it is cheap insurance and signals editorial intent; do not expect ranking lift.

---

## 3. Schema Graph — Inventory

The schema graph on this site is one of its strongest GEO assets.

### Home (`src/app/page.tsx:40-185`)
- **Organization** (`#organization`) — name, url, logo, address (GB/London), contactPoint, **`sameAs: []`** ← empty
- **WebSite** (`#website`) — publisher → organization
- **WebPage** (`#webpage`) — `speakable` selector targets `h1` and `.hero-tagline`, `datePublished`/`dateModified` present
- **Product** (`#product`) — 4 `Offer` entries with `priceCurrency: GBP`, `priceValidUntil: 2026-12-31`, `availability: InStock`, `hasMerchantReturnPolicy` (30-day, FreeReturn). Eligible-duration QuantitativeValue per plan.
- **FAQPage** — 11 questions, author → organization

### `/about` (`src/app/about/page.tsx:36-72`)
- **AboutPage** + **BreadcrumbList**, both correctly `@id`-linked back to `#organization` and `#website`

### `/what-is-premium-iptv` (`src/app/what-is-premium-iptv/page.tsx:85-120` + `SubPageShell.tsx:82-159`)
- **WebPage** + **Article** + **BreadcrumbList** + **FAQPage**
- **`Article.citation[]`** linking to Ofcom CMR, Consumer Rights Act 2015, Consumer Contracts Regulations 2013, gov.uk TV Licence, Project Gigabit — **this is the kind of structured citation AI engines reward**
- **`Article.about[]`** — Thing/"Premium IPTV", Thing/"United Kingdom"
- `@id`-merge pattern is correctly used (one Article node, extended cleanly)

### Findings

| ID | Severity | Finding |
|---|---|---|
| **SCH1** | **High** | `Organization.sameAs: []` (`page.tsx:72`) is empty. This is the single biggest entity-graph weakness. AI engines use `sameAs` to resolve the brand to Wikipedia/Wikidata/Crunchbase/LinkedIn/YouTube — without it the brand is an isolated node. Ahrefs Dec 2025: brand mentions correlate ~3× more strongly with AI citation than backlinks. |
| **SCH2** | **Info** | `Article.author` is the Organization, not a Person. By design per the editorial policy in `/about` ("No individual bylines appear"). Trade-off accepted — but it costs you the Person/credentials lever that ChatGPT and Perplexity reward. |
| **SCH3** | **Info** | FAQPage emitted on a commercial site. Google removed FAQ rich-result eligibility for commercial sites in Aug 2023, so no SERP carousel — but the structured Q&A still helps AI engines extract self-contained answers. Keep it; do not expect Google rich snippets. |
| **SCH4** | **Low** | `priceValidUntil: "2026-12-31"` (`page.tsx:143`) is hard-coded. Will silently expire on 2027-01-01 and Google Merchant rejects offers with past `priceValidUntil`. Rolling 1-year forward computed at render time is safer. |

---

## 4. Server-Side Rendering — Citability Killer Found

Next.js 16 App Router SSRs `"use client"` components on first paint (then hydrates). The HTML response **does** contain section text — so most content is crawler-visible.

**Finding S1 (Critical) — Home FAQ answers are NOT in the initial HTML.**

`src/components/FAQSection.tsx:81-98` wraps the answer panel in `<AnimatePresence>{isOpen && (<motion.div>{item.answer}</motion.div>)}`. With default `openIndex = 0`, only the **first** answer renders to HTML — the other 10 FAQ answers are gated behind a JS-triggered state change. AI crawlers do not execute JavaScript. The JSON-LD `FAQPage` schema does contain all 11 answers, so they're discoverable via structured data — but the on-page text version (which AI engines extract from for passage selection) is missing 10 of 11.

The team already knows the fix — `SubPageShell.tsx:319-365` deliberately uses the always-rendered + `height/opacity` pattern, with a comment block explicitly explaining why (lines 14-16): *"FAQ SSR pattern preserved exactly: every motion.div answer panel is rendered in the DOM at all times… This keeps the full answer text in the initial server-rendered HTML for crawlers."*

The home page was simply not migrated.

**Fix:** port the SubPageShell pattern to `FAQSection.tsx`. ~10 line change.

---

## 5. Citability — Passage-Level Scoring

Optimal passage length is 134-167 words. Below are passages already on the site graded for AI extraction.

### Strong (cite-ready as-is)

**`/what-is-premium-iptv` — "How do I verify a premium IPTV service before I pay?"** (FAQ, ~135 words)
> Verify a premium IPTV service by running four checks no sales page can fake. First, open its public status page… Fourth, check the refund window is the same across every plan length…

Definition-led, numbered, falsifiable. Exactly the shape ChatGPT/Perplexity quote.

**`/what-is-premium-iptv` — "What's the difference between premium IPTV and standard IPTV?"** (FAQ, ~150 words). Two-axis frame (infrastructure / features) + named criteria. High extraction value.

**`/what-is-premium-iptv` — Comparison table** (lines 277-337). 8-row, 4-column table comparing Standard vs Premium with explicit "How To Verify" column. Tables are over-indexed by AI engines for comparison queries.

### Weak (rewrite or augment)

**Home hero subtitle** (`HeroSection.tsx:86`):
> 37,000 live UK and international channels, 198,000 films and 4K UHD streaming — the premium IPTV UK service built for British viewers. From £4.99/month with a 30-day refund.

Promotional fragment; not a self-contained answer. Speakable targets it but no AI engine will quote it as a definition. Add an SSR'd `<p class="hero-tagline">` paragraph below the hero that defines what "Premium IPTV UK" *is*, in 134-167 words, plain text.

**Home Features** (`FeaturesSection.tsx` + `constants.ts:27-76`): each tile is 35-45 words. Too short to stand alone, too promotional ("Anti-Freeze 9.0", "Smart TVs sold since 2018" — branded jargon with no external referent). AI engines drop these.

### Numerical-claim inconsistency (Finding C1, High)

Three figures for the UK channel pack don't reconcile across pages:

| Source | Claim |
|---|---|
| `HeroSection.tsx:86` | "37,000 live UK and international channels" |
| `/what-is-premium-iptv` body (`page.tsx:237`) | "37,000+ channels in total, with an 800+ UK pack" |
| `ChannelsSection` constants (`constants.ts:271`) | "Premium IPTV Entertainment — The British Lineup … 500+" |
| `ChannelsSection` constants (`constants.ts:289`) | "Premium IPTV For Kids & Family Viewing … 800+" |

AI engines extract numbers and check them across surfaces. When the same brand says "800+ UK pack" on one page and "500+ entertainment + 800+ kids" on another, the model may either drop the citation, hedge with "between 500 and 800", or pick the smaller number. Reconcile in one canonical place (`constants.ts`) and reference from each surface.

---

## 6. Multi-Modal Content

Per `public/`, the site ships **one** image asset: `premium-iptv-uk.webp` (the logo, reused as OG, primary-image-of-page, and ImageObject across schema).

| Modality | Present? |
|---|---|
| Logo | ✅ (one file) |
| Product screenshots | ❌ |
| Channel-lineup screenshots | ❌ |
| Device-compatibility imagery | ❌ |
| Comparison diagrams / infographics | ❌ |
| Video embeds | ❌ |
| Charts (uptime, channel pack composition) | ❌ |

Industry data cited in the GEO skill: multi-modal content sees **156% higher AI selection rates**. This is the lowest-scoring pillar in the audit (3/15).

---

## 7. Authority & Brand Signals

| Signal | Status |
|---|---|
| Publication date | ✅ (page.tsx:103, what-is page.tsx:133) |
| Last-updated date | ✅ (dynamic `dateModified`) |
| Primary-source citations | ✅ (Article.citation[] on `/what-is-premium-iptv`) |
| Author byline (Person) | ❌ Organization-only by editorial policy |
| Author credentials / bio | ❌ |
| Organization address | ✅ (GB/London) |
| Organization sameAs[] | ❌ **empty** |
| Wikipedia entity | ❌ |
| YouTube channel | ❌ |
| Reddit presence | ❌ |
| LinkedIn company page | ❌ |
| Trustpilot listing | ❓ unverified |

The editorial policy on `/about` explicitly chooses anonymity: *"No individual bylines appear on editorial pages."* That's a defensible stance for a commercial publisher, but it forfeits the Person/credentials lever. The biggest fixable gap is `sameAs: []`.

---

## Top 5 Highest-Impact Changes

Ordered by leverage. Each carries a falsifiability check (how you'd know the change failed) and a leading indicator (what to watch).

### 1. Verify AI crawler access at the Cloudflare edge — **Critical, dependency blocker**

**THINK:** robots.txt is permissive but the edge returned 403 to WebFetch. If the same WAF challenges GPTBot/ClaudeBot/PerplexityBot, the entire rest of this audit is moot.

**Do:**
```bash
curl -A "GPTBot/1.0" -I https://iptv-premium-uk.tv/
curl -A "ClaudeBot/1.0" -I https://iptv-premium-uk.tv/
curl -A "PerplexityBot/1.0" -I https://iptv-premium-uk.tv/
curl -A "OAI-SearchBot/1.0" -I https://iptv-premium-uk.tv/
```
If any returns 403/503/429, allowlist the user-agent in Cloudflare → Security → WAF, and disable "Block AI Bots" if on.

**Falsifiability:** AI bots still 403 after change → block is elsewhere (origin server / Next middleware). Check `next.config.ts` (no middleware present in repo currently — good).

**Leading indicator:** server logs show GPTBot/ClaudeBot hitting `/` with 200 within 7 days.

### 2. SSR all home-page FAQ answers — **Critical, citability**

**THINK:** AI engines extract from rendered HTML, not from JSON-LD body text. 10 of 11 home FAQ answers are JS-gated.

**Do:** edit `src/components/FAQSection.tsx:81-98` to match the always-rendered `height/opacity` pattern at `src/components/SubPageShell.tsx:344-362`. Drop `AnimatePresence` and the `isOpen && (…)` conditional.

**Falsifiability:** `curl https://iptv-premium-uk.tv/ | grep "30-day money-back guarantee"` should return body text after deploy, not just JSON-LD.

**Leading indicator:** Search Console "Indexed pages" coverage for home page text snippets increases; AI Overviews extracting from FAQ answers rather than meta description.

### 3. Populate `Organization.sameAs[]` — **High, entity graph**

**THINK:** Brand-mention signals correlate ~3× backlinks for AI visibility. `sameAs` is the explicit machine-readable hook that lets engines resolve the brand to other platforms.

**Do:** at `src/app/page.tsx:72`, fill `sameAs` with real URLs the brand controls. Minimum viable set: Trustpilot company page, LinkedIn company page, X/Twitter, YouTube channel, Facebook page. If those don't exist yet, create them *first* — empty `sameAs` is no worse than a fake one.

**Falsifiability:** if entries are added but the listed accounts have zero activity or are unverified, Google ignores them. Each `sameAs` URL should be a profile with at least name + logo + bio matching the Organization.

**Leading indicator:** Knowledge Graph eligibility — search `site:wikipedia.org "Premium IPTV UK"` in 90 days; Bing entity card render in webmaster tools.

### 4. Reconcile UK channel-count claims — **High, factual consistency**

**THINK:** AI engines cross-check numbers. "800+ UK pack" vs "500+ entertainment + 800+ kids" reads as a contradiction. Pick one canonical number and propagate.

**Do:** add a single export to `src/lib/constants.ts` (e.g. `UK_CHANNEL_PACK = 800`) and reference it from the hero, the channels section, the what-is page body, and the comparison table. If 800 is the real figure, drop "37,000 live UK and international" from the hero subtitle (it implies the 37k figure is UK-relevant; it isn't).

**Falsifiability:** ask ChatGPT "How many UK channels does iptv-premium-uk.tv carry?" in 4 weeks — if the answer hedges or contradicts, the reconciliation didn't land in extractable HTML.

**Leading indicator:** SERP People-Also-Ask answers for "premium iptv uk channels" pull a stable number.

### 5. Add multi-modal evidence to `/what-is-premium-iptv` — **Medium, citation lift**

**THINK:** /what-is-premium-iptv is the strongest page for AI citation (definition-led, citation[], comparison table). Adding multi-modal content multiplies its selection probability ~156%.

**Do:** above the comparison table, add (a) an inline chart showing "Standard IPTV vs Premium IPTV — Uptime by hour of day" (real or illustrative-labeled), and (b) an image showing 5-screen device layout. Both with descriptive `alt` text. Both as `<Image>` with explicit dimensions to avoid CLS.

**Falsifiability:** AI Overview screenshots in 60 days still pull only text — check whether the image is referenced as a source. If not, the image isn't bound to a citable claim (probably needs caption + `<figure>`).

**Leading indicator:** Google Images impressions for "premium iptv comparison" begin appearing in Search Console.

---

## Quick Wins (low cost, do this week)

1. **Add `/llms.txt`** at `src/app/llms.txt/route.ts` — a 200 OK plain-text file with site title, 1-sentence description, and 6 links: `/`, `/what-is-premium-iptv`, `/about`, `/blog`, `/contact`, `/refund`. Costs an hour. No citation lift expected (per Google), but it's a clear "we welcome AI" signal.
2. **Replace hard-coded `priceValidUntil: "2026-12-31"`** with a render-time computed rolling 365-day-forward date.
3. **Convert hero subtitle to a sentence that defines the product**, e.g. "Premium IPTV UK is a British-operated IPTV subscription delivering 37,000+ live channels and 198,000+ on-demand titles in 4K UHD, with a 30-day refund on every plan." Put it in an SSR'd `<p class="hero-tagline">` so the speakable schema selector hits a definition.
4. **Add an `Editorial Team` Person-like entity** (still anonymous) with `sameAs` pointing to the org LinkedIn + a /about anchor — gives AI engines something to resolve "the author".

## Medium Effort (1-4 weeks)

5. **Build minimum viable brand-mention surface area** before SEO budget — Trustpilot account, LinkedIn page, YouTube channel with 3-5 explainer videos, Reddit account participating in r/IPTVPremium and r/CordCutters (organic, not promo). Update `sameAs[]` only after each profile has activity.
6. **Embed 1-2 explainer videos** on `/what-is-premium-iptv` (the YouTube ones from step 5). Multi-modal.
7. **Add IndexNow** ping on publish (Bing + Yandex) — Next.js middleware or build hook.

## High Impact (deliberate investment)

8. **Original data** — publish a quarterly "State of UK IPTV" report (uptime data from your status page, channel-pack composition, peak-hour latency by ISP). Unique citable data is the strongest AI-citation magnet.
9. **Wikipedia entity** for the brand (only viable once independent secondary coverage exists — work on press first).

---

## Synthesis — What This Adds Up To

The site is built by someone who *understands SEO*. The `/what-is-premium-iptv` page is unusually well-structured for AI citation (Article + citation[] + about[] + comparison table + question-shaped H2/H3). The schema graph uses `@id`-merging correctly. SubPageShell explicitly documents why FAQ answers must be SSR'd.

What's holding the GEO score down is not the *editorial craft* on the deep pages — it's:

- A **distribution risk** (Cloudflare may be 403-ing the AI bots the schema is designed to feed)
- A **single-page regression** (home FAQ wasn't migrated to the SubPageShell SSR pattern)
- An **entity-graph void** (`sameAs:[]`, zero brand mentions on the platforms ChatGPT and Perplexity actually cite from)
- A **numerical inconsistency** (UK channel pack figure varies across pages)

Fix items 1-4 above and the GEO score moves from 58 → ~78 with no new content written. Items 5-9 are the multi-quarter brand-presence build that no schema improvement can substitute for.

---

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Built by agricidaniel — Join the AI Marketing Hub community
🆓 Free  → https://www.skool.com/ai-marketing-hub
⚡ Pro   → https://www.skool.com/ai-marketing-hub-pro
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
