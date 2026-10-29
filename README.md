# Portfolio

Personal site. Live at **[malika-buribayeva.vercel.app](https://malika-buribayeva.vercel.app)**.

## Pages

| Route | Contents |
|---|---|
| `/` | Bio, news, honors, contact |
| `/research` | Research projects |
| `/tech` | Systems, data and machine learning projects |
| `/design` | Architecture, product and interaction design, drawing |

Each collection page is a grid of cards. Opening a card shows the project in place at
`/<collection>/<slug>`, with a back link to the grid.

## Editing content

All project content lives in `src/data/projects.ts` (one entry per project: cover image,
course and term, intro, and sections of text and images). News items are in
`src/data/news.ts`, newest first. Images are in `public/images/<collection>/<project>/`.

## Stack

Vue 3 · TypeScript · Vite · Vue Router. Deployed on Vercel from `master`; `vercel.json`
rewrites deep links to the app.

```sh
npm install
npm run dev        # http://localhost:5173
npm run build      # type-check + production build into dist/
npm run preview
```

Requires Node 20.19+ or 22.12+.
