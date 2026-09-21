# Kshitij Khowal — Portfolio

React + Vite portfolio. Content lives in the [`kshitij-portfolio-data`](https://github.com/kshitijkhowal/kshitij-portfolio-data) git submodule at `data/`.

## Setup

```bash
git clone --recurse-submodules https://github.com/kshitijkhowal/my-portfolio.git
cd my-portfolio
npm install
npm run dev
```

If you already cloned without submodules:

```bash
git submodule update --init --recursive
```

## Data

Section JSON is organized under `data/`:

| Folder | Purpose |
|--------|---------|
| `Socials/` | Name, contact, links |
| `Education/` | Schools & degree |
| `Experience/` | Jobs & bullets |
| `Projects/` | Featured projects |
| `Skills/` | Skill inventories |
| `Achievements/` | Awards & competitive coding |
| `Site/` | Portfolio-only copy (hero, about, nav, skills UI) |

The UI reads through [`src/lib/portfolioData.js`](src/lib/portfolioData.js). Edit JSON in the data repo, push, then bump the submodule pointer here.

## Scripts

```bash
npm run dev
npm run build
npm run preview
```
