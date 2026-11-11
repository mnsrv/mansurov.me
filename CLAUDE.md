# mansurov.me

Personal site of Sasha Mansurov. Eleventy 3 (ESM), Liquid layouts, Markdown pages.

## Workflow

- Solo project: commit and push straight to `main`, no feature branches or PRs.
- Deploy is automatic: Cloudflare Workers Builds (configured in the Cloudflare dashboard, not in this repo) builds and deploys every push to `main`. Don't run `npm run deploy` unless asked.
- `npm start` — dev server; `npm run build` — build into `public/`.
- `.github/workflows/worldcup-results.yml` commits World Cup scores daily, so pull before pushing.
- `vercel.json` is a leftover from old hosting; redirects that matter live in `src/static/_redirects`.
- `main` has a ruleset blocking force pushes and deletion: never rewrite pushed history.

## Dependencies

- Node 24: `.nvmrc` is the single source (Cloudflare Workers Builds and the GitHub workflow both read it); `engines` is `>=24`.
- Dependabot is deliberately quiet: one grouped npm PR monthly, one Actions PR quarterly, 7-day cooldown; security updates arrive immediately, also grouped. Don't add schedules or ungroup.
- npm 11 gates install scripts: approved ones are listed in `allowScripts` in `package.json`.
- `chessground` on npm is deprecated (renamed `@lichess-org/chessground`); the site serves its own bundle `src/static/chessground.js`, so the npm package doesn't ship.

## Layout

- `src/` is the input, `public/` the output. Config: `eleventy.config.js`.
- Blog posts: `src/blog/*.md`, each with `tags: posts` and `layout: post.liquid` in front matter (no directory data file).
- Book reviews: `src/books/*.md`, tag `bookReviews`, layout `book.liquid`.
- Other pages (parks, activities, sleep, worldcup, quotes, vocabulary, wishlist, concerts, chess, calendars) are single pages rendered from `src/_data/`.
- Year-summary posts (front matter `summary: "2025"`) get extra lists added by `src/_data/eleventyComputed.js` and rendered in `post.liquid`.
- Per-page CSS/JS: list paths in front matter `styles:` / `scripts:` (loaded in `<head>` by `base.liquid`, scripts as modules). Keep `<link>`/`<script>`/inline `style` out of post bodies so the feed stays clean.
- Static assets are passthrough-copied one by one in `eleventy.config.js` — add a new entry there when adding a file under `src/static/`.

## Feed

- Atom feed at `/feed.xml`, built by `@11ty/eleventy-plugin-rss`'s virtual template (configured in `eleventy.config.js`, no template file). It contains the 20 most recent `posts` as full HTML.
- Feed title, subtitle, URL, author and language come from `src/_data/metadata.js`.
- The footer has a "Valid Atom 1.0" badge, so keep the feed valid: escape `&` as `&amp;` in raw HTML inside posts (e.g. `<img src>` query strings), and check https://www.rssboard.org/rss-validator/check.cgi?url=https%3A%2F%2Fmansurov.me%2Ffeed.xml after feed changes.
- Hotlinked images with signed URLs (Instagram `cdninstagram.com`, etc.) expire; save images under `src/images/` instead.
