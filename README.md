# Portfolio

Personal portfolio site. Live at **[malika-buribayeva.vercel.app](https://malika-buribayeva.vercel.app)**.

Malika Buribayeva — Lehigh '27, working across data engineering, distributed
systems and design.

## What's on it

| Page | Contents |
|---|---|
| **About** | Background, focus areas, contact |
| **Tech Projects** | Case studies with live demos, screenshots and measured results |
| **Design Projects** | Industrial and graphic design work, 3D models |
| **Research** | Research posters and write-ups |

### Projects featured

| Project | What it is | Links |
|---|---|---|
| **NodeMind** | Fleet observability for a ~25-machine micro-manufacturing fab — one page answering "what happened to this machine, and why". Portfolio recreation on fully synthetic data. | [live](https://nodemind.vercel.app) · [source](https://github.com/ouiMalika/nodemind) |
| **Mini Kafka** | A partitioned, replicated message broker written in C++ from the Kafka protocol spec, with a real-time auction demo. Built for CSE 376 Distributed Systems. | [source](https://github.com/ouiMalika/mini-kafka) |
| **Boston Marathon Analytics** | Streaming pipeline replaying 715,687 checkpoint events through Kafka into SQLite and a Streamlit dashboard. | [source](https://github.com/ouiMalika/marathon-dashboard) |
| **VisionBoard AI** | Full-stack app clustering images into thematic vision boards with CLIP embeddings and K-Means. | [live](https://visionboard-ai-xi.vercel.app) · [source](https://github.com/ouiMalika/VisionBoard-AI) |

## Stack

Vue 3 · TypeScript · Vite · Vue Router · Tailwind CSS · Ionicons ·
`<model-viewer>` for 3D design pieces. Deployed on Vercel, which builds every
push to `master`.

## Layout

```
src/
├── pages/          one component per route (About, TechProjects, DesignProjects, Research)
├── components/     Navbar, Sidebar
├── data/           design.json, research.json — project entries rendered by the pages
├── assets/         vcard.css (shell, theming), research.css (case-study layout)
└── router/         route table
public/images/      screenshots, posters and project media
```

Theming lives in `src/assets/vcard.css`; light and dark are both defined there.

## Running locally

```sh
npm install
npm run dev        # http://localhost:5173
```

```sh
npm run build      # type-check + production build into dist/
npm run preview    # serve the built output
npm run lint
```

Requires Node 20.19+ or 22.12+.
