# Portfolio React

Portfolio personnel moderne construit avec React, TypeScript et Vite.

## Philosophie

Le projet est volontairement **frontend-only** : aucune inscription visiteur, aucun backend et aucune base de données. Les contenus du portfolio sont pilotés par des fichiers JSON typés.

## Documentation

- `PRODUCT.md` — vision, fonctionnalités et périmètre
- `ARCHITECTURE.md` — architecture technique
- `ACCEPTANCE.md` — critères d'acceptation
- `AGENTS.md` — règles pour les agents de développement
- `START_CODEX.md` — procédure de démarrage pour Codex

## Démarrage prévu

```bash
npm install
npm run dev
```

Build de production :

```bash
npm run build
```

## Builder

Le Builder permet au propriétaire de répondre à un questionnaire étape par étape pour créer ou modifier des contenus. Il génère ensuite le JSON à intégrer au projet.

Un frontend déployé ne peut pas écrire directement dans le dépôt GitHub : le flux attendu est questionnaire → preview → export JSON → intégration → commit/push → déploiement.

## Déploiement

Le site peut être déployé comme application statique, notamment sur Vercel.
