# Meadow

Faithful reproduction of the supplied Meadow React 19, TypeScript, Vite 8,
Tailwind CSS 4, and Framer Motion template. The original hero video is stored
in `public/hero.mp4`.

## Development

Use Node.js 24 and pnpm 11.19.0.

```sh
pnpm install --frozen-lockfile
pnpm dev
pnpm lint
pnpm build
pnpm preview
```

Open the preview at http://localhost:4173/creative-website/.

## Deployment

Repository: https://github.com/juliatumino-coder/creative-website

Website: https://juliatumino-coder.github.io/creative-website/

The Vite base path is `/creative-website/`. Video and favicon paths respect
that base. Pushes to `main` run lint, build, and GitHub Pages deployment.
In repository Settings → Pages → Build and deployment, select **GitHub Actions**.
To retry deployment, open Actions → Deploy Meadow to GitHub Pages → Run workflow
and choose `main`.

## Template behavior

The original source is preserved except for deployment asset paths. The navbar
changes its highlighted link. Its fragment links have no corresponding content
sections in the supplied template. The waitlist form prevents submission and
does not store email addresses or connect to a backend. The supplied fixed-width
navigation can overlap on narrow screens; its layout is preserved as requested.
