# Financieel Groeipad & Roadmap

Financiële tijdlijn, herinvesteringsmodel en interactieve roadmap — van Vinted-startkapitaal tot cyclische opschaling naar 6 woningen.

## Functionaliteiten

- **Interactieve roadmap** — tijdlijn met fases, inclusief detailweergave per fase via een modal (`TimelineSection`, `PhaseModal`)
- **Financieel model** — inzicht in het herinvesteringsmodel (`FinancialModel`)
- **Inkomstenstromen** — uitsplitsing van de verschillende inkomstenbronnen (`RevenueBreakdown`)
- **Mijlpalen-tracker** — mijlpalen afvinken per fase, met voortgangsteller in de header en resetoptie; voortgang wordt lokaal opgeslagen in `localStorage` (`MilestoneProgress`)
- **Overzichtskaarten** — snelle navigatie naar model en inkomstenstromen (`OverviewCards`)
- **Print/export** — de roadmap kan direct geprint of als PDF geëxporteerd worden

## Tech stack

- [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Vite 6](https://vite.dev/) als build tool
- [Tailwind CSS 4](https://tailwindcss.com/) voor styling
- [Motion](https://motion.dev/) voor animaties
- [Lucide](https://lucide.dev/) iconen
- [canvas-confetti](https://github.com/catdad/canvas-confetti) voor feestelijke effecten

## Lokaal draaien

**Vereisten:** Node.js (of Bun)

1. Installeer dependencies:
   ```bash
   npm install
   ```
2. Start de dev server:
   ```bash
   npm run dev
   ```
3. Open http://localhost:3000 in je browser.

## Scripts

| Script | Omschrijving |
| --- | --- |
| `npm run dev` | Start de dev server op poort 3000 |
| `npm run build` | Maakt een productie-build in `dist/` |
| `npm run preview` | Bekijk de productie-build lokaal |
| `npm run lint` | Typecheck met TypeScript (`tsc --noEmit`) |
| `npm run clean` | Verwijdert build-artefacten |

## Projectstructuur

```
├── index.html
├── src/
│   ├── App.tsx                # Hoofdcomponent met tabnavigatie en state
│   ├── main.tsx               # Entry point
│   ├── index.css              # Globale styles (Tailwind)
│   ├── types.ts               # Gedeelde TypeScript-types
│   ├── data/
│   │   └── roadmapData.ts     # Fases, mijlpalen en roadmap-data
│   └── components/
│       ├── Header.tsx         # Sticky header met tabs en voortgang
│       ├── OverviewCards.tsx  # Overzichtskaarten
│       ├── TimelineSection.tsx# Roadmap-tijdlijn
│       ├── PhaseModal.tsx     # Detailmodal per fase
│       ├── FinancialModel.tsx # Financieel model
│       ├── RevenueBreakdown.tsx # Inkomstenstromen
│       └── MilestoneProgress.tsx # Mijlpalen-tracker
├── vite.config.ts
└── tsconfig.json
```
