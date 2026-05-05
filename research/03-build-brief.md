# Website Build Brief. The Tamale Shakk Houston

## Design Direction

### Color Palette (locked from existing brand)
- `#D55A1B` Burnt orange. primary, hero accents, CTA buttons
- `#C8102E` Festival red. championship badges, secondary CTA
- `#F5B335` Cornmeal gold. highlight, hover states, dividers
- `#4A2A18` Smoked walnut. text on cream, footer background
- `#FAF3E3` Cornmeal cream. paper background, card surface
- `#1A0F08` Deep ink. body text on cream, near-black

### Typography
- **Display:** Alfa Slab One (Google Fonts). for hero H1, section titles, championship banners. Honors the western-shack logo.
- **Body:** Inter (Google Fonts). 400/500/600. Reads cleanly on every phone.
- Display sized large (clamp 56–96px hero), body 16–18px, caption 13–14px.

### Photography style
- Use the downloaded `hero-original.jpg` (close-up tamales on husks) as the dominant homepage hero. It's good enough.
- Use `food-truck.jpg` as the "Find the Truck" anchor.
- Logo gets its own pedestal. never crowded with wordmark text adjacent.
- Founder portrait is a TODO; ship a clean placeholder card that says "Photo of Katrina &amp; Van. coming soon" with a warm muted tone, not silhouette.

### Animation recommendations
- GSAP + ScrollTrigger for section reveals
- Subtle parallax on hero food image (translateY -10%)
- Hover lift + warm glow on menu cards
- Championship banner: gentle counter on "4× Grand Champions"
- Force-reveal fallback after 3s so nothing stays opacity:0
- `prefers-reduced-motion` respected. disable parallax + count-up

### What to avoid (from competitor research)
- Wix-template flat hierarchy (current site, Hot Tamale Heaven)
- Phone number as the only CTA
- Black backgrounds that dim the food
- Stock tamale photography. we have real product shots
- Em-dashes in body copy (hard rule)

## Site Architecture
Single-page with deep anchors on launch. Standalone routes spin up once the client provides the missing assets.

1. **Hero**. name, tagline, four-time champion badge, primary CTA "Find the Truck", secondary CTA "Pre-Order by Text"
2. **Story**. Greenville → Houston narrative, founder quote, championship years
3. **What is a Delta tamale**. educational, doubles as SEO
4. **The Menu**. placeholder cards (tamales, tacos, sides) until pricing arrives
5. **Find the Truck**. Pearland service area, phone numbers, "call to confirm hours" honest disclosure
6. **Press**. Above the Fold quote pull-out, festival accolades
7. **Catering**. short pitch + phone CTA
8. **Footer**. phone numbers, social, hours disclaimer, Chatbot Boy AI credit

## Content Framework

### Homepage headline options
1. **"A taste of the Mississippi Delta. Parked in Pearland."**. geographic specificity + heritage in 8 words.
2. **"The only real Mississippi Delta tamales in Houston."**. direct claim, SEO-rich.
3. **"Four-time champions. Mississippi born. Hand-rolled in Houston."**. leans on the credential first.

**Recommended:** Option 1 as H1, Option 3 as eyebrow above it.

### Section copy directions
- Story section opens with Katrina's quote about people saying "we've been looking for a Mississippi Delta tamale".
- Delta tamale education is 4 bullets: cornmeal not masa, cigar shape, seasoning in the dough, simmered in the spice liquid.
- Menu placeholder copy says "Hand-rolled. Slow-simmered. By the half-dozen, the dozen, the catering tray." with each card showing what the actual menu will be once prices land.
- Press pull-out: real Above the Fold quote about the freeze-and-haul logistics.

### SEO targets
Page title: `The Tamale Shakk Houston | Mississippi Delta Tamales in Pearland, TX`
Meta description: `Four-time Grand Champions of the Delta Hot Tamale Festival. Real Mississippi Delta tamales hand-rolled in Greenville and brought to Houston. Find the truck in Pearland.`
H1: `A taste of the Mississippi Delta. Parked in Pearland.`
LocalBusiness + FoodEstablishment schema with Pearland service area.
FAQPage schema for the "What is a Delta tamale" section.

## Conversion Playbook
- **Primary goal:** customer finds the truck and shows up, OR pre-orders by text
- **Lead capture:** phone-first (it's a food truck. text/call is how this category actually converts), with a "join the schedule list" form ready for when they have a CRM
- **Social proof plan:** championship badge in hero, press quote pull-out mid-page, Facebook + Instagram links in footer
- **Trust signals:** four-time champion banner, James Beard-style press credential, "Family-owned. Made in Greenville. Sold in Houston." footer line

## Tech Stack
HTML + CSS + vanilla JS. GSAP via CDN for scroll. Mobile-first. Single-page on launch. Deploy via Netlify (`netlify.toml` pinning `publish = "site"`).

## Approval Note
Greenfield execution mode is enabled. proceeding directly to build. The client (and you, the user) can redirect on the rendered site at the verification step. Hard STOP after browser verification, before any deploy.
