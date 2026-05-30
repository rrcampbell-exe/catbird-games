# Catbird Games

Marketing site for **Catbird Games**, an independent game studio. The site introduces the studio and features [Real Fake Birds](https://www.realfakebirds.app) — a trivia game where players decide whether birds are real or fake.

## Tech Stack

- **React 19** + **TypeScript**
- **Vite** — dev server and build
- **Vitest** + **Testing Library** — unit tests
- **Vercel** — hosting (SPA rewrites configured in `vercel.json`)

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start the dev server |
| `npm run build` | Type-check and build for production |
| `npm run preview` | Preview the production build locally |
| `npm test` | Run tests in watch mode |
| `npm run test:run` | Run tests once |
| `npm run coverage` | Run tests with coverage report |
| `npm run lint` | Lint the codebase |

## Project Structure

```
src/
  App.tsx          # Main site component (header, hero, featured game, footer)
  App.test.tsx     # Component tests
  main.tsx         # React entry point
public/
  images/
    badges/        # Feather badge assets used as decorative motifs
```
