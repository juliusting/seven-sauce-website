# Seven Sauce 七个酱 — Website

Recreation of the menu + brand for **七个酱 Seven Sauce Kuching** (a family café at
ICOM Square, Jalan Pending, Kuching, Sarawak) in a warm, bright **food & lifestyle**
editorial theme.

## Brand
- Family business named 七个酱 ("seven sauces") for **seven siblings, one sauce each**.
- Cuisine: **Taiwanese × Malaysian** home cooking, all day. Values: delicious, affordable, beautiful space.
- Contact: ☎ 016-924 3519 · sevensauce888@gmail.com · IG @7sauce_kch · wa.me/60169243519
- Address: No. A106 & A107 (Ground Floor), Block A, ICOM Square, Jalan Pending, 93450 Kuching, Sarawak.
- Opens ~7:30am; closed the 2nd & 3rd Tuesday of each month.

## Data provenance
- Menu pulled from the AmazPlace QR-menu API (tenant 118 / outlet 434, channel QRORDER)
  after the table session expired — see `_extract/`. 16 categories, 98 items, all with photos.
- Brand facts confirmed from the official Facebook page (facebook.com/7saucekch).
- Content lives in `src/content/{site,menu,signatures}.json` (client-editable, no code change).

## Design system
- Palette (`tailwind.config.js`): red **seal #C0392B** accent, warm **cream #FBF7F0** bg,
  **ink #2A2420** text, jade #2E6E68 fresh accent. Fonts: **Fraunces** (display) + **Inter** (body), self-hosted via @fontsource.
- One paradigm: Tailwind tokens + a few component classes in `src/index.css`. No inline styles bar dynamic motion.

## Stack & commands
- Vite + React + React Router (data router) + Framer Motion + Tailwind v3. Node 22.
- `npm run dev` / `npm run build` (→ `dist/`) / `npm run preview` (port **3960**).
- Images: `<Picture>` serves AVIF→WebP→JPG/PNG; variants generated with sharp.

## Pages
- `/` Home · `/menu` full menu (98 dishes, sticky category nav) · `/story` seven-siblings tale · `/visit` map + hours + enquiry form.

## Deployment
- **Netlify:** static `dist/` (`netlify.toml`: build `npm run build`, publish `dist`, SPA redirect).

## Status / TODO
- [ ] Unofficial RECREATION/demo — confirm consent with Seven Sauce before promoting the public link.
- [ ] Optional: replace map embed with the exact place pin if the owner shares it.
