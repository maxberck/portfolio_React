# START CODEX — Première instruction

## Règle importante
Au premier passage, **ne modifie aucun fichier**. Commence par inspecter et comprendre le dépôt.

## 1. Inspection
Inspecte au minimum :
- `package.json` ;
- `src/` ;
- `public/` ;
- configuration Vite, TypeScript et Tailwind si présente ;
- `README.md` ;
- `PRODUCT.md` ;
- `ARCHITECTURE.md` ;
- `ACCEPTANCE.md` ;
- `AGENTS.md`.

## 2. Rapport obligatoire
Avant toute modification, présente :
1. ta compréhension du produit ;
2. l'état actuel du dépôt ;
3. les éléments déjà présents ;
4. les éléments manquants ;
5. les risques ou incohérences ;
6. ton plan d'implémentation.

Attends ensuite l'approbation avant de modifier le code.

## 3. Ordre d'implémentation après approbation
1. Structure Vite/React/TypeScript.
2. Types et JSON.
3. Service de données.
4. Layout et navigation.
5. Accueil.
6. Profil, compétences, expériences et certifications.
7. Projets, filtres et détails.
8. Contact.
9. Builder questionnaire.
10. Dark mode et animations.
11. Responsive et accessibilité.
12. Tests et build.

## 4. Vérification
Exécute `npm run build` et tous les tests disponibles.
Vérifie les critères applicables dans `ACCEPTANCE.md`.
Ne dis jamais que le projet est terminé sans preuve de vérification.

## 5. Git
Le dépôt GitHub `maxberck/portfolio_React` est la source de vérité.
Après les modifications validées et vérifiées, préparer un commit clair et pousser sur la branche `main` si les permissions et l'environnement le permettent.
