# GEO Analysis v3 — iptv-premium-uk.tv (re-audit, hero edit)

**Date:** 2026-06-12
**Branch:** `seo/geo-fixes-and-blog-compliance-2026-06` @ 3145c9d + 1 uncommitted edit
**Compared against:** v2 (`docs/GEO-ANALYSIS-v2.md`)

---

## GEO Readiness Score: 64 / 100 (v1: 58, v2: 63, v3: **64**)

| Pillar | Weight | v1 | v2 | v3 |
|---|---|---|---|---|
| Citability | 25% | 18 | 19 | **20** |
| Structural Readability | 20% | 14 | 18 | 18 |
| Multi-Modal Content | 15% | 3 | 3 | 3 |
| Authority & Brand Signals | 20% | 9 | 9 | 9 |
| Technical Accessibility | 20% | 14 | 14 | 14 |
| **Total** | | **58** | **63** | **64** |

| Platform | v1 | v2 | v3 |
|---|---|---|---|
| Google AI Overviews | 65 | 70 | 71 |
| ChatGPT | 38 | 40 | 41 |
| Perplexity | 35 | 37 | 38 |
| Bing Copilot | 55 | 58 | 59 |

---

## What changed (v2 → v3)

### Hero subtitle reconciliation ✅ — closes the last code-fixable v2 item
`HeroSection.tsx:86` previously said *"37,000 live UK and international
channels"*, which let AI extractors read 37k as the UK figure and then
contradict it against `/what-is-premium-iptv`'s "substantial UK-relevant
pack" framing. Now reads:

> "37,000+ live channels with a substantial UK-relevant pack inside the total, 198,000 films and 4K UHD streaming…"

This phrasing:
- Treats 37,000+ as the global total (unambiguous)
- Acknowledges a UK-relevant pack without committing to a specific number that conflicts elsewhere
- Mirrors the `/what-is-premium-iptv` body language so AI engines pulling from either page get the same model
- Still ships under the `.hero-tagline` selector → speakable schema in `page.tsx:107` resolves to the same DOM node, unchanged structurally

Citability **+1** (19 → 20). Cross-surface numerical consistency is now intact.

---

## Three of three v2 priorities now resolved in code

| v2 Priority | Status |
|---|---|
| 1. Verify AI crawler access at Cloudflare edge | ❌ Still unverified — off-codebase |
| 2. Populate `Organization.sameAs[]` | ❌ Still empty — requires real off-site profiles |
| 3. Reconcile hero subtitle channel claim | ✅ **Done in v3** |

The two outstanding items are **both off-codebase**. They can't be moved by another edit to the repo.

---

## Where the next 10 points live

The score is now at the ceiling of what can be reached from the codebase alone. To move from 64 → 75+, the next moves are operational rather than editorial:

1. **Cloudflare AI-bot allowlist verification** (Critical, unverified).
   Three curls, ~2 minutes of work, decides whether the SSR fix actually reaches AI engines or hits a 403 at the edge.

2. **Build minimum brand presence** before populating `sameAs[]`.
   Trustpilot listing, LinkedIn company page, X handle, YouTube channel.
   Each profile needs basic activity (name, logo, bio, ≥1 post) before `sameAs[]` resolution counts. Two weeks of execution, not editing.

3. **First multi-modal asset on `/what-is-premium-iptv`**.
   One comparison diagram or one explainer-video embed. Multi-modal pillar is 3/15 — moving it to 8/15 alone is +0.75 to total.

These are the same items as v2's outstanding list — nothing in the repo can substitute for them.

---

## Important framing — still pre-deploy

The v3 score remains the *expected post-deploy state*. The hero edit is uncommitted in the working tree; commit `3145c9d` is pushed but not merged. Live site still serves v1 baseline until merge + deploy.

When the PR lands and deploys, run:
```
curl -A "GPTBot/1.0" -I https://iptv-premium-uk.tv/
```
If 200, the gains v1→v3 land for real. If 403, all of it is locked behind the edge until the WAF is reconfigured.

---

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Built by agricidaniel — Join the AI Marketing Hub community
🆓 Free  → https://www.skool.com/ai-marketing-hub
⚡ Pro   → https://www.skool.com/ai-marketing-hub-pro
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
