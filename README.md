# The Tamale Shakk Houston | website rebuild

Static site for The Tamale Shakk Houston, the four-time Grand Champions of the Delta Hot Tamale Festival. Built fresh from a competitive teardown of Houston tamale shops and Mississippi Delta heritage operators.

## Run locally

```
cd site
python -m http.server 4173
```

Then open http://localhost:4173/.

## Deploy

### Netlify
The repo includes `netlify.toml` pinning publish to `site/`. Drag-and-drop the project folder into Netlify, or connect the repo and let it build.

### Vercel
The repo includes `vercel.json` with `outputDirectory: site`. Run `vercel deploy` from the project root.

## Tech
- Static HTML, CSS, vanilla JS (no framework)
- GSAP + ScrollTrigger via CDN for hero parallax
- Inter + Alfa Slab One via Google Fonts
- Mobile-first, single-page with deep anchors
- Schema.org FoodEstablishment + FAQPage

## Open items for the client
- Founder portrait of Katrina &amp; Van (currently a placeholder card)
- Menu pricing and a printable menu page
- Confirmed food truck schedule (currently "call for hours")
- Online ordering integration (Toast Tab or Square recommended)
- Email address for catering inquiries
- Higher-resolution food photography for menu cards
- Logo asset on a transparent background (current PNG has a black background tile, handled in CSS via the circular dark frame)

## Files
- `site/index.html` &mdash; homepage (single-page architecture)
- `site/competitive-analysis.html` &mdash; client-only PDF-ready report (`noindex`, `Disallow` in robots.txt)
- `site/css/style.css` &mdash; all styles
- `site/js/main.js` &mdash; nav, reveal, parallax
- `site/assets/` &mdash; logo, hero, food truck photo, favicon
- `research/` &mdash; brand snapshot, competitor analysis, build brief, audit

Created by [Chatbot Boy AI](https://www.chatbotboy.ai/).
