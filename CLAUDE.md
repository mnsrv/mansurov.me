# mansurov.me

Personal site of Sasha Mansurov. Eleventy 3 (ESM), Liquid layouts, Markdown pages.

## Workflow

- Solo project: commit and push straight to `main`, no feature branches or PRs.
- Deploy is automatic: Cloudflare Workers Builds (configured in the Cloudflare dashboard, not in this repo) builds and deploys every push to `main`. Don't run `npm run deploy` unless asked.
- `npm start` — dev server; `npm run build` — build into `public/`.
- `.github/workflows/worldcup-results.yml` commits World Cup scores daily, so pull before pushing.
- `vercel.json` is a leftover from old hosting; redirects that matter live in `src/static/_redirects`.

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
