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

## Product gallery

The Products navigation link opens a BAGSMART Blast 28L backpack section.
Six official Beige product photographs support thumbnails, swipe, and arrow-key
navigation. This is a multi-view gallery, not a 360-degree scan; the supplier
provided no continuous rotation sequence or 3D model. Price: $69.99 USD, verified
October 2, 2026. Purchase and current pricing are handled by BAGSMART.

Source: https://www.bagsmart.com/products/28l-blast-travel-backpack?variant=41324879970386
Product data: https://www.bagsmart.com/products/28l-blast-travel-backpack.js

The original hero remains intact. Mobile navigation now occupies two rows to
keep all links accessible. The waitlist remains a demonstration form and does
not save email addresses. Other original navigation fragments remain placeholders.
