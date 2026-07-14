# docs/ — editorial workspace & audit archive

This directory is the editorial workspace for iptv-premium-uk.tv. It holds
research, draft archives and audit outputs used while writing the site.

## Contents

- `GEO-ANALYSIS.md`, `GEO-ANALYSIS-v2.md`, `GEO-ANALYSIS-v3.md` — successive
  Generative Engine Optimisation audits. Each version supersedes the last;
  older versions are kept for historical reference.
- `best-iptv-uk-guide-2026.md`, `iptv-vs-traditional-pay-tv.md`,
  `top-tier-uk-football-streaming-guide.md`, `what-is-premium-iptv.md` —
  draft manuscripts that fed the live pages. Once shipped, the live JSX
  becomes the source of truth and drafts may fall behind.

## Read this before trusting a file

Any file here may have been superseded by the live implementation. For the
authoritative timeline, run `git log` against the relevant source file
under `src/app/`. This directory is **not** documentation for the site
itself — that lives in `CLAUDE.md` and `AGENTS.md` at the repo root.
