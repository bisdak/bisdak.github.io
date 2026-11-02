# Portfolio

A static portfolio site with a small blog. Plain HTML, CSS, and JavaScript —
no build step, no dependencies, deploys straight to GitHub Pages.

## Files

```
index.html            Home: hero, projects, about, resume, contact
resume.html           Printable resume (Ctrl+P / Cmd+P → save as PDF)
blog/index.html       Post listing, rendered from posts.json
blog/posts.json       The list of posts
blog/posts/*.html     One file per post
assets/css/style.css  All styling; colours live in :root at the top
assets/js/main.js     Theme toggle, mobile nav, footer year
assets/js/blog.js     Renders the blog index
```

## Preview locally

Open `index.html` directly — everything works except the blog index, which
fetches `posts.json` and needs a server:

```sh
cd portfolio
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Make it yours

Search the project for `TODO` — that's every place needing real content.

1. **Name and details** — replace `Your Name`, `you@example.com`, and
   `your-username` across the HTML files. A find-and-replace over the folder
   handles most of it.
2. **Projects** — in `index.html`, duplicate a `.card` block per project.
3. **About** — edit the two paragraphs and the three skill groups.
4. **Resume** — fill in `resume.html`. It prints cleanly to PDF.
5. **Colours** — change `--accent` and the surfaces in `:root` at the top of
   `assets/css/style.css`. Dark mode has its own block just below.
6. **Page metadata** — update `<title>`, `<meta name="description">`, and the
   Open Graph tags in `index.html` so shared links look right.

## Add a blog post

1. Copy `blog/posts/hello-world.html` to `blog/posts/your-post.html`.
2. Update the `<title>`, the date in `.post-date`, the `<h1>`, and the body
   inside `<div class="prose">`.
3. Add an entry to `blog/posts.json`:

```json
{
  "title": "Your post title",
  "date": "2026-11-02",
  "summary": "One sentence shown on the index page.",
  "url": "posts/your-post.html",
  "tags": ["notes"]
}
```

Posts sort by date, newest first. `date` must be `YYYY-MM-DD`.

## Deploy to GitHub Pages

The site lives at `https://<username>.github.io/<repo>/`, so all paths are
relative — don't change them to start with `/`.

```sh
cd portfolio
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/<username>/<repo>.git
git push -u origin main
```

Then on GitHub: **Settings → Pages → Source: Deploy from a branch →
Branch: `main`, folder `/ (root)` → Save.**

The first deploy takes a minute or two. Re-deploying is just `git push`.

> Want the shorter URL `https://<username>.github.io`? Name the repository
> exactly `<username>.github.io`. Everything else stays the same.

### Custom domain (optional)

Add a file named `CNAME` at the repo root containing just your domain, then
point a `CNAME` DNS record at `<username>.github.io`. Enable "Enforce HTTPS"
in the Pages settings once the certificate is issued.

## Notes

- `.nojekyll` stops GitHub Pages from running Jekyll over the files. Keep it.
- The theme preference is stored in `localStorage`; first visit defaults to
  dark mode.
- No analytics, no tracking, no third-party requests. Fonts are system fonts.
