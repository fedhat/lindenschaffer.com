# lindenschaffer.com

Plain HTML/CSS site for Linden Schaffer, hosted on GitHub Pages. Migrated from Squarespace in October 2026. No build step: what's in this repo is exactly what's served.

## Layout

```
index.html                     Home
about/index.html               About
psychedelic-articles/index.html         Article list ("Written Works")
psychedelic-articles/<slug>/index.html  One folder per article (slugs match the old Squarespace URLs)
book-articles/                 Old Squarespace URLs (articles, list, tag pages) → redirect to psychedelic-articles/
home/                          Old /home URL → redirects to /
404.html                       Not-found page (self-contained: GitHub serves it at any missing URL)
css/style.css                  All styles
js/site.js                     Mobile menu + testimonial arrows
fonts/                         Jost and Poppins, self-hosted (SIL Open Font License)
images/                        All images
sitemap.xml, robots.txt
```

Links between pages are **relative** (`../about/`, not `/about/`), so the site works both at the GitHub preview address (`https://fedhat.github.io/lindenschaffer.com/`) and at the real domain.

The header and footer are repeated in every page. To change the nav or footer, find-and-replace across all `index.html` files.

## Adding an article

1. Copy an existing article folder, e.g. `psychedelic-articles/vettingguides/` → `psychedelic-articles/<new-slug>/`.
2. In the new `index.html`, update `<title>`, the `description`, `canonical`, `og:` tags, `article:published_time`, the `<h1>`, the body and the tags.
3. Add the cover image to `images/<new-slug>.webp` (or `.jpg`; about 600×316) and a static `images/share-<new-slug>.jpg` for social previews.
4. Add a card for it at the top of the list in **both** `index.html` (Written Works) and `psychedelic-articles/index.html`. (New articles don't need a redirect in `book-articles/`; that folder only covers the old URLs.)
5. Update the previous/next links at the bottom of the neighbouring article(s).
6. Add the URL to `sitemap.xml`.

## Preview locally

```sh
cd ..                                # the folder that contains lindenschaffer.com/
python3 -m http.server 8000
# open http://localhost:8000/lindenschaffer.com/
```

## Going live

1. Push to `main`, then in **Settings → Pages** set *Source: Deploy from a branch*, *Branch: main / (root)*. The preview appears at `https://fedhat.github.io/lindenschaffer.com/`.
2. Verify the domain under your GitHub account's **Settings → Pages → Verified domains**.
3. When ready to switch over, set the custom domain in the repo's **Settings → Pages** to `www.lindenschaffer.com` (matches the existing canonical URLs). GitHub adds a `CNAME` file. Don't add it earlier: once it exists, the preview URL redirects to the real domain.
4. DNS: apex `A` records `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`; `www` `CNAME` → `fedhat.github.io`.
5. Turn on **Enforce HTTPS** once the certificate is issued.
