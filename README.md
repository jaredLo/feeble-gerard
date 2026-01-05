# feeble-gerard

Landing page built with the Next.js App Router.

## Tech Stack
- Next.js (App Router) + React
- TypeScript
- Tailwind CSS
- Framer Motion
- `next/font/local` for General Sans

## Implementation Notes / Assumptions
- Chose **Next.js (App Router)** because the role specifies **React/Next.js**, and it provides a clean, production-like baseline (routing/layout primitives, asset handling, and easy deployment) even for a single-page assignment.
- Used **`next/font/local`** to self-host General Sans for consistent renderingg.
- "Pixel-perfect" was interpreted as **matching the Figma output** (including minor optical offsets present in the design). Minor kerning differences may occur between Figma and browser text rendering (eg. "Workflows", the "f" and "lows" spacing in Figma are oddly spaced), typography was matched using the provided font files and letter-spacing.
- Added **`prefers-reduced-motion`** handling for looping/ambient animations.
- If the product needs true adaptive behavior (e.g., better accessibility on smaller viewports), we can replace the scale with breakpoint-based typography/spacing and responsive positioning; the current approach just shipped the requested pixel-perfect look quickly.

## Project Structure
- `src/app` — App Router layout and route files (`page.tsx` is the main landing page)
- `src/components` — reusable UI and motion components (Button, BgBird, CloudLayer, DecorBird)
- `src/assets/fonts` — local font files (General Sans)
- `public` — static assets (SVGs for clouds, birds, icons)
- `src/app/globals.css` — global styles and scaling rules

## Run Locally
Prereqs: Node v20

```bash
# node.js 20 recommended
npm install
npm run lint
npm run build
npm run dev
```

Open http://localhost:3000.
