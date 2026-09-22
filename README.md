# Portfolio — MATCHAME GNATI KEVIN

Portfolio personnel de **MATCHAME GNATI KEVIN** — développeur web frontend, titulaire d'une licence obtenue en 2025.

Site en français : accueil (hero, projets, compétences, à propos, récompenses, parcours, contact), page `work` (archive technique + galerie créative) et page `projects`.

## Stack

- **Next.js 16** (App Router) + **React 18**
- **Tailwind CSS 3.4** + CSS sur mesure (`app/globals.css`)
- **lucide-react** (icônes)
- JavaScript / JSX

## Lancer en local

```bash
npm install
npm run dev
```

Ouvrir http://localhost:3000

## Structure

```
├── app/
│   ├── layout.jsx            # layout racine + métadonnées SEO + thème (no-FOUC)
│   ├── page.jsx              # page d'accueil → <Portfolio />
│   ├── projects/page.jsx     # grille de tous les projets
│   ├── work/page.jsx         # archive technique + galerie créative
│   ├── globals.css           # design system (variables CSS, light/dark)
│   └── api/coffee-count/     # route API compteur "Offre-moi un café"
├── components/               # composants client (Portfolio, Header, Reveal, …)
├── data/
│   └── projects.js           # projets du carrousel d'accueil
├── lib/projects.js           # jeu de données complet des projets
├── scripts/
│   └── AppsScript-CoffeeCounter.gs  # webhook Google Apps Script du compteur de cafés
└── public/                   # images, CV, pdfs, gifs
```

## Variables d'environnement

| Variable | Rôle |
|---|---|
| `GOOGLE_SHEET_WEBAPP_URL` | URL `/exec` du webhook Apps Script qui persiste le compteur de cafés. Sans elle, le compteur bascule sur un fichier local (`data/coffee-count.json`), non persistant en production. |

Créez un fichier `.env.local` :

```
GOOGLE_SHEET_WEBAPP_URL=https://script.google.com/macros/s/VOTRE_ID/exec
```

Pour générer cette URL : ouvrez `scripts/AppsScript-CoffeeCounter.gs` sur https://script.google.com, collez le code, puis *Déployer → Nouveau déploiement → Application Web* (exécution : *Moi*, accès : *Tout le monde*).

Le formulaire de contact utilise son propre Apps Script (URL directement en dur dans `components/Portfolio.jsx`).

## Déployer sur Vercel

Pousser sur GitHub puis importer le repo dans [Vercel](https://vercel.com/new) — Next.js est détecté automatiquement. En production, définissez `GOOGLE_SHEET_WEBAPP_URL` dans les variables d'environnement du projet.