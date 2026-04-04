# Portfolio - Ando Henri

[![Vite](https://img.shields.io/badge/Vite-7.x-646CFF?logo=vite&logoColor=white)](https://vite.dev/)
[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=111827)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-4.x-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![GSAP](https://img.shields.io/badge/GSAP-3.x-88CE02?logo=greensock&logoColor=111827)](https://gsap.com/)
[![Vercel](https://img.shields.io/badge/Deploy-Vercel-black?logo=vercel)](https://vercel.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Portfolio personnel moderne et interactif pour presenter mon profil de developpeur web/mobile, mes competences, mes services et mes projets reels.

## Apercu

- Interface one-page avec navigation fluide
- Animations GSAP (transitions, reveal, parallax)
- Sections: Hero, About, Skills, Work, Contact
- Cartes projet avec technologies et liens live
- Design responsive desktop/mobile

## Stack Technique

- React 19
- TypeScript
- Vite
- Tailwind CSS v4
- GSAP + ScrollTrigger
- Vercel Speed Insights

## Optimisations Performance

- Lazy loading de sections non critiques
- Decoupage du bundle (chunks vendor)
- Images optimisees en WebP
- Garde-fous pour `prefers-reduced-motion`
- Reduction d'effets couteux sur appareils tactiles

## Structure Du Projet

```text
src/
  components/
  constants/
  App.tsx
  main.tsx
public/
  *.webp
```

## Installation

Prerequis:

- Node.js 20.19+ (recommande)
- npm 10+

```bash
npm install
```

## Lancement En Local

```bash
npm run dev
```

Application disponible sur `http://localhost:5173`.

## Scripts Utiles

```bash
npm run dev      # Developpement
npm run build    # Build production
npm run preview  # Preview build local
npm run lint     # Verification ESLint
```

## Variables D'Environnement

Creer un fichier `.env` a la racine:

```bash
VITE_CV_LINK=https://drive.google.com/file/d/XXXXXXXX/view
```

## Deploiement (Vercel)

1. Pousser le repository sur GitHub.
2. Importer le projet dans Vercel.
3. Build command: `npm run build`.
4. Output directory: `dist`.
5. Ajouter les variables d'environnement (ex: `VITE_CV_LINK`).
6. Deployer.

## Auteur

RAZAFINATOANDRO Ando Henri

- LinkedIn: https://www.linkedin.com/in/ando-henri
- GitHub: https://github.com/andohenri

## Licence

Ce projet est distribue sous licence MIT.
