# Hichem — Personal Space

A dark, minimal personal profile site built for an Instagram bio link.
React + Vite + Tailwind CSS + Lucide icons.

## Run it locally

```bash
npm install
npm run dev
```

Open the URL it prints (usually `http://localhost:5173`).

To build the production version:

```bash
npm run build
npm run preview   # preview the production build locally
```

The `dist/` folder from `npm run build` is what you deploy (Vercel, Netlify,
GitHub Pages, etc. all work — just point them at this repo with build command
`npm run build` and output directory `dist`).

## Where to put your stuff

Everything personal lives in **one file**: `src/data/config.js`.
You never need to touch the component files.

| # | What | Where |
|---|------|-------|
| 1 | Profile picture | Put the image at `public/images/profile.jpg`, then set `profile.photo` in `src/data/config.js` to `'/images/profile.jpg'` |
| 2 | Gallery photos | Put images in `public/images/`, then update the `src` of each entry in the `gallery` array in `src/data/config.js`. The `span` field (`'tall' \| 'wide' \| 'square'`) controls how big each photo looks in the mosaic — mix them for a natural layout |
| 3 | Instagram / TikTok / YouTube / GitHub / Discord / Snapchat links | Update the `url` and `handle` fields in the `socials` array in `src/data/config.js` |
| 4 | Name & username | `profile.name` and `profile.username` in `src/data/config.js` |
| 5 | Music file (optional) | Put an mp3 at `public/audio/ambient.mp3`. It will never autoplay — it only plays when the button in the bottom-right corner is tapped |

A few smaller things, also in `src/data/config.js`:
- `profile.bio` — the line under your name
- `profile.tags` — the small status line (`Algeria • 20 • Creator • Tech • Gaming`)
- `about.paragraph` and `about.interests` — the About section and its tag pills
- `site.footerLine` — the line above the copyright in the footer

## Sharing metadata (for the Instagram/iMessage link preview)

In `index.html`:
- Page title and description are already set to your text.
- Add a real preview image at `public/og-cover.jpg` (1200×630px is the safe size) —
  right now `og:image` points at that path, but there's no file there yet.
- Update `og:url` to your real deployed domain once you have one.

## Notes

- Until you swap in your own photos, the site uses temporary photos from
  Unsplash so you can see the real layout working immediately — replace them
  before sharing the link.
- The favicon at `public/favicon.svg` is a placeholder "H" mark — swap it for
  your own icon whenever you like.
- Animations respect `prefers-reduced-motion`, and the whole layout is
  responsive from small phones up to desktop (it stays a centered card on
  large screens, like a phone screen, rather than stretching wide).
