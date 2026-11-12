# Dia / GDAY

— version full-stack avancée du projet Dia

**Dia** (Distributed Intelligence Architecture) est un système d'agents IA organisés en 4 strates fonctionnelles, exposé via une interface React moderne et une API Express/tRPC.

---

## Agents fonctionnels

| Nom         | Fonction               |
| :---------- | :--------------------- |
| **MINOS**   | Architecture logique   |
| **DIAGNOS** | Vision analytique      |
| **LUX**     | Filtre perceptif       |
| **CHRONOS** | Boucle temporelle      |
| **LÉTHÉ**   | Mémoire liquide        |
| **PSYCHE**  | Interface émotion-code |
| **DERA**    | Bouclier réseau        |
| **MÉTIS**   | Algorithme adaptatif   |
| **ANIMA**   | Impulsion vitale       |
| **NOESIS**  | Perception intuitive   |
| **EROS**    | Attracteur de lien     |
| **CHLOROS** | Régénération lente     |

---

## 🛠 Stack technique

| Couche          | Technologie                      |
| --------------- | -------------------------------- |
| Frontend        | React 19, TypeScript 5, Vite 7   |
| Styles          | Tailwind CSS 4, Framer Motion 12 |
| Routage         | Wouter 3                         |
| Backend         | Express 4, tRPC 11               |
| Base de données | Drizzle ORM, MySQL               |
| Tests           | Vitest                           |

---

## 📦 Prérequis

- Node.js ≥ 20
- <a href="https://pnpm.io">pnpm</a> (`npm install -g pnpm`)
- MySQL (local ou cloud)

---

## ⚙️ Variables d'environnement

Copiez `.env.example` en `.env` et renseignez les valeurs :

```bash
cp .env.example .env
```

Les variables requises sont :

| Variable                 | Description                                     |
| ------------------------ | ----------------------------------------------- |
| `DATABASE_URL`           | Chaîne de connexion MySQL                       |
| `JWT_SECRET`             | Secret pour la signature des cookies de session |
| `OAUTH_SERVER_URL`       | URL du serveur OAuth                            |
| `OWNER_OPEN_ID`          | OpenID de l'administrateur                      |
| `VITE_APP_ID`            | Identifiant de l'application Manus              |
| `VITE_OAUTH_PORTAL_URL`  | URL du portail de connexion                     |
| `BUILT_IN_FORGE_API_URL` | URL de l'API Forge / LLM                        |
| `BUILT_IN_FORGE_API_KEY` | Clé de l'API Forge / LLM                        |

---

## 🚀 Installation

```bash
pnpm install
pnpm db:push   # Appliquer le schéma Drizzle
pnpm dev       # Lancer en développement
```

---

## 📜 Commandes disponibles

| Commande       | Description                                       |
| -------------- | ------------------------------------------------- |
| `pnpm dev`     | Serveur de développement (Express + Vite HMR)     |
| `pnpm build`   | Build de production (vite build + esbuild server) |
| `pnpm start`   | Lancer le serveur en production                   |
| `pnpm check`   | Vérification TypeScript                           |
| `pnpm format`  | Formatage Prettier                                |
| `pnpm test`    | Tests Vitest                                      |
| `pnpm db:push` | Générer et appliquer les migrations Drizzle       |

---

## 🗂 Structure du projet

```
/
├── client/
│   ├── index.html
│   ├── public/images/avatars/   # portraits des 12 agents
│   └── src/
│       ├── App.tsx
│       ├── main.tsx
│       ├── index.css
│       ├── app/                 # routeur et layout racine
│       ├── components/          # composants Dia + components/ui (shadcn)
│       ├── contexts/
│       ├── data/
│       ├── features/agents/     # données, types, pages et composants des agents
│       ├── hooks/
│       ├── lib/
│       ├── pages/
│       └── styles/
├── server/
│   ├── _core/                   # serveur Express, tRPC, auth, LLM
│   ├── agents.ts
│   ├── db.ts
│   ├── routers/
│   └── services/
├── shared/
├── drizzle/                     # schéma et migrations
├── docs/                        # sommaire dans docs/README.md
│   ├── agents/                  # présentation complète des 12 agents
│   ├── business/                # résumé exécutif, budget, étude de marché, business plan
│   ├── design/                  # pistes de design et direction « La Faille »
│   │   └── systeme-dia/         # design system : récit, visuel, UX, son, animations
│   └── archive/                 # anciens documents
├── tasks/
│   ├── todo.md                  # plan en cours
│   └── lessons.md               # leçons retenues
├── .env.example                 # modèle de variables d'environnement
├── package.json
├── vite.config.ts
└── drizzle.config.ts
```

---

## 🌐 Déploiement

### Production avec Express

```bash
pnpm build
pnpm start
```

Le serveur Express sert les assets statiques depuis `dist/public` et expose l'API tRPC.

### Frontend statique (Netlify)

Pour déployer uniquement le frontend sur Netlify, un fichier `netlify.toml` est fourni à la racine. Les variables d'environnement nécessaires doivent être configurées dans le panneau Netlify.

---

## 📄 Licence

MIT
