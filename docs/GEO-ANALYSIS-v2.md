# GEO Analysis v2 — iptv-premium-uk.tv (re-audit)

**Date:** 2026-06-12
**Branch:** `seo/geo-fixes-and-blog-compliance-2026-06` @ 3145c9d
**Status:** branch committed + pushed, **not yet merged or deployed**
**Compared against:** `docs/GEO-ANALYSIS.md` (v1) from earlier today

---

## GEO Readiness Score: 63 / 100 (up from 58)

| Pillar | Weight | v1 | v2 | Δ |
|---|---|---|---|---|
| Citability | 25% | 18/25 | 19/25 | +1 |
| Structural Readability | 20% | 14/20 | **18/20** | **+4** |
| Multi-Modal Content | 15% | 3/15 | 3/15 | 0 |
| Authority & Brand Signals | 20% | 9/20 | 9/20 | 0 |
| Technical Accessibility | 20% | 14/20 | 14/20 | 0 |
| **Total** | | **58.0** | **63.0** | **+5.0** |

### Platform Breakdown

| Platform | v1 | v2 | Why moved |
|---|---|---|---|
| Google AI Overviews | 65 | **70** | FAQ SSR fix is the biggest extractive-AIO win |
| ChatGPT (web search) | 38 | 40 | Small lift from FAQ in HTML; entity-graph gap unchanged |
| Perplexity | 35 | 37 | Same |
| Bing Copilot | 55 | 58 | Same |

---

## Important framing — branch vs live

The fixes scored above live in commit `3145c9d` on
`seo/geo-fixes-and-blog-compliance-2026-06`. **The live site at
https://iptv-premium-uk.tv/ still shows the pre-fix state** until the PR
merges and deploys. AI crawlers hitting the site right now see the v1
baseline — JS-gated FAQ answers, the "800+ UK pack" inconsistency, and the
old blog slugs. The v2 score is the *post-deploy* expected state.

If the deploy lands, the next signal worth watching: AI Overviews
extracting from home FAQ answers other than #1 within ~30 days.

---

## 1. What got fixed (since v1)

### S1 (was Critical) — Home FAQ SSR ✅ RESOLVED
`src/components/FAQSection.tsx` now uses the always-rendered
`height/opacity` pattern matching `SubPageShell.tsx:344-362`. All 11
home FAQ answers ship in the initial HTML. Verified in Part 5: `curl /`
returned grep count = 1 for two phrases from currently-collapsed answers
("no retention calls", "minute by minute") that returned 0 pre-fix.

**Why this moved Structural Readability +4:** the home FAQ is the most
question-shaped, query-aligned content on the site. With answers now
crawler-visible, the site's *primary* AI-extractable surface went from
1/11 sections to 11/11.

### C1 (was High) — UK channel-count inconsistency ⚠ PARTIALLY RESOLVED
The "800+ UK pack" claim is gone from `/what-is-premium-iptv:237`.
The page now reads "a substantial UK-relevant pack inside that figure
covering domestic top-flight football, the main UK broadcasters,
terrestrial channels and the regional variants viewers actually watch."
That removes the contradiction with the channel-categories breakdown.

**Still outstanding:** `HeroSection.tsx:86` still says "37,000 live UK
and international channels" — phrasing that lets an extractor read 37k
as the UK figure. The fix sufficient for AI engines is to either (a)
say "37,000 channels including UK and international feeds" or (b) state
the UK pack figure explicitly and consistently with constants.

### Blog compliance scrub ✅ DONE (with a content-surface trade-off)
Banned-term scan now returns 0 across `src/`. 308 redirects in place.
**Side effect on GEO:** indexable blog content dropped from 4 posts to 1
(`how-to-setup-iptv-firestick`). Three slugs (`best-iptv-uk-guide-2026`,
`iptv-vs-traditional-pay-tv`, `top-tier-uk-football-streaming-guide`)
are noindex stubs awaiting Cowork rewrites. AI engines have fewer pages
to extract from in the interim. This is a deliberate cost — but worth
noting that until rewrites land, blog-driven AI citation is essentially
paused.

---

## 2. What hasn't moved

### SCH1 (High) — `Organization.sameAs: []` STILL EMPTY
`src/app/page.tsx:72` unchanged. Still no Trustpilot, LinkedIn, X,
YouTube, or Reddit links binding the brand to its off-site presence.
This remains the single biggest entity-graph weakness. Until populated,
ChatGPT and Perplexity have nothing structured pointing them from the
schema graph to a brand identity elsewhere on the web.

### T1 (Critical, unverified) — Cloudflare 403 risk
`WebFetch` still returns 403 to `/` and `/llms.txt`. `robots.txt`
returned 200. Edge bot policy needs verification with explicit
user-agent curls:
```
curl -A "GPTBot/1.0" -I https://iptv-premium-uk.tv/
curl -A "ClaudeBot/1.0" -I https://iptv-premium-uk.tv/
curl -A "PerplexityBot/1.0" -I https://iptv-premium-uk.tv/
```
This still blocks the entire post-deploy lift if AI bots are 403'd at
the edge. Highest-leverage *unfixed* item.

### Multi-modal content
Still one image (`public/premium-iptv-uk.webp` = the logo) across the
entire site. 3/15.

### llms.txt
Still missing. Low priority per Google, but unchanged.

### Authority signals
No author Person schema added. Editorial-team policy means this stays
deliberately anonymous; Article.author still resolves to
`#organization`. No movement, no recommendation change.

---

## 3. Top 3 highest-impact unfixed items (post-merge)

These are the same items from v1 with the deps resolved by the just-merged work.

### 1. Verify Cloudflare edge access for AI crawlers — **Critical**
Run the three user-agent curls above. If any 403, allowlist GPTBot,
OAI-SearchBot, ClaudeBot, PerplexityBot, Applebot-Extended,
Google-Extended in Cloudflare → Security → WAF. Until this is verified,
none of the SSR fix's benefit actually reaches AI engines — they
won't read what they can't fetch.

**Falsifiability:** server logs show GPTBot hitting `/` with 200 within
7 days of allowlisting.

### 2. Populate `Organization.sameAs[]` — **High**
At `src/app/page.tsx:72`. Minimum viable set: Trustpilot, LinkedIn
company page, X, YouTube, Facebook. If those don't exist yet, create
them *first* — empty `sameAs` is no worse than fake.

**Falsifiability:** search `site:wikipedia.org "Premium IPTV UK"` in 90
days; Bing Webmaster entity card render. If unchanged, the listed
profiles weren't recognised — typically because they have zero activity
or unverified status.

### 3. Reconcile hero subtitle channel claim — **High**
`HeroSection.tsx:86` still says "37,000 live UK and international" —
which lets AI engines extract 37k as the UK channel count and then
contradict it with the "domestic top-flight football, main UK
broadcasters" framing from `/what-is-premium-iptv`. Either state the
UK pack figure explicitly OR drop "UK and international" so the 37k
reads unambiguously as the global total.

**Falsifiability:** ask ChatGPT in 4 weeks "How many UK channels does
iptv-premium-uk.tv have?" — if the answer cites 37,000 or hedges
between figures, extraction is still ambiguous.

---

## 4. Net assessment

The branch fixes the largest *fixable-from-the-codebase* gap (FAQ SSR).
The 5-point score lift is real but front-loaded — the gap from 63 → 78
predicted in v1 was conditional on **all four** v1 priorities landing.
Two of the four are now done; two (Cloudflare verification and
sameAs[]) remain and need work outside the codebase.

If Cloudflare ends up blocking AI bots at the edge, none of the SSR work
matters — the actual score AI engines see stays at v1 levels. So:
verify the edge before tracking any post-deploy metrics.

---

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Built by agricidaniel — Join the AI Marketing Hub community
🆓 Free  → https://www.skool.com/ai-marketing-hub
⚡ Pro   → https://www.skool.com/ai-marketing-hub-pro
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
