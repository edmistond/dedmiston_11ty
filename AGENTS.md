# Repository Guidelines

## Project Structure & Module Organization

- Source: Eleventy 3.x site configured via `.eleventy.js` and `configs/*.js` (markdown, filters, collections, cache-busting, excerpts).
- Content: Markdown pages at repo root (e.g., `about.md`), blog posts in `post/<year>/<slug>.md` using `post/post.json` (`layout: post.html`, `tags: post`).
- Templates: `_includes/` (layouts/partials) and `_data/` for global data.
- Assets: `css/`, `fonts/`, and `assets/` (e.g., `assets/svg/`) are passthrough-copied.
- Output: Built site in `_site/` (git-ignored). Do not edit files there.

## Build, Test, and Development Commands

- `npm run start`: Serve with Eleventy and watch for changes at `http://localhost:8080/`.
- `npm run build`: Generate the static site into `_site/`.
- `npm run clean`: Remove `_site/*` via `rimraf`.

Notes: Project uses ESM (`type: module`). Eleventy plugins/filters live under `configs/` and are wired in `.eleventy.js`.

## Coding Style & Naming Conventions

- JavaScript: ES modules, 2-space indentation, descriptive names. Keep config functions small and composable.
- Content: Each post has YAML front matter (`title`, `date`, `tags`). Prefer `tags: [post, ...]` to join post listings.
- Paths: Use the `digest` filter for cache-busted assets in templates; keep asset paths under `css/`, `fonts/`, or `assets/`.
- Templates: Reuse layouts in `_includes/`; prefer Liquid/Nunjucks includes over duplicating markup.

## Testing Guidelines

- No formal test suite. Validate by:
  - Running `npm run start` and checking pages, RSS (`/rss.xml`), and archive views.
  - Building with `npm run build` to ensure a clean, warning-free output.
  - Spot-checking dates with `readableDate`, excerpts with `excerpt`, and list pages using `recent_posts`/`postsByYear` collections.

## Commit & Pull Request Guidelines

- Commits:
  - Commits should begin with "[codex]" to differentiate them.
  - Short, present-tense, task-focused messages (e.g., "update post title", "draft: new captions review"). Group content edits separately from config changes.
- PRs: Include a clear description, linked issue (if any), steps to reproduce/verify, and screenshots for style/layout changes. Confirm `npm run build` passes and no generated `_site/` files are committed.

## Security & Configuration Tips

- Do not commit secrets or `_site/`. `.gitignore` already excludes common artifacts.
- Cache-busting reads files to hash them; keep asset locations stable to avoid broken URLs.
