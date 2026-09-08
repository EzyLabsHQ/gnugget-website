# GoldenNugget Website

Landing site for [GoldenNugget](https://github.com/awesomenull-dev/GoldenNugget) — a jailbreak-free iOS 26.2–27.0+ customization tool. Built with **React + Vite**, dark GitHub-style theme.

## Pages

- **/** — landing with features, requirements and quick start
- **/features** — full tweak option lists (Status Bar, Springboard, Internal Options, Daemons)
- **/roadmap** — project roadmap (9.3.3 transitional → 9.4-refactor → backlog)

## Develop

```bash
npm install
npm run dev
```

## Build

```bash
npm run build   # outputs to dist/
npm run preview # serve the production build locally
```

## Deploy

The included GitHub Actions workflow (`.github/workflows/deploy.yml`) builds and deploys `dist/` to GitHub Pages on every push to `main`.