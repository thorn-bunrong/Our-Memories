# Our Little World

A private, responsive memory site built with React and the photos/videos in `public/assets/`.

## Personalize it

Edit [`src/content.js`](src/content.js) for every name, date, colour, caption, timeline event, letter, and message. The current gallery uses all supplied photos in `public/assets/`, beginning with `main.jpg`; the video section uses every supplied video. Add future files to `public/assets/`, then add their names to the `photoFiles` or `videoFiles` lists. The root `assets/` folder is preserved as the original media drop location.

## Run locally

1. Install Node.js 20 or later.
2. Run `npm install`.
3. Run `npm run dev` and open the URL Vite shows.

## Deploy

Run `npm run build`; upload the generated `dist` folder to Netlify, Vercel, Cloudflare Pages, or any static host. Vite copies `public/assets/` into the final build automatically.
