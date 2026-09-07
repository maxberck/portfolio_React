# AGENTS — Portfolio React

## Mission
Construire et maintenir un portfolio personnel frontend-only en React + TypeScript + Vite.

## Contraintes absolues
- React + TypeScript + Vite uniquement.
- Aucun Laravel, PHP, MySQL ou backend.
- Aucune inscription/connexion visiteur.
- Aucun système multi-utilisateur.
- Pas d'API métier inexistante.
- Pas de secrets côté client.
- Les contenus métier résident dans les JSON typés.

## Avant toute modification
Inspecter le dépôt et lire `PRODUCT.md`, `ARCHITECTURE.md` et `ACCEPTANCE.md`.
Ne pas supprimer ou écraser des données existantes sans raison explicite.

## Code
- TypeScript strict autant que possible.
- Composants React petits et cohérents.
- Éviter les duplications.
- Utiliser des types partagés pour les données JSON.
- Garder les données séparées de la présentation.
- Utiliser React Router pour la navigation.
- Préférer des icônes cohérentes à des caractères Unicode décoratifs pour l'UI.

## Données
Toute donnée de portfolio doit être modifiable depuis les fichiers JSON prévus.
Ne pas disperser le contenu personnel en dur dans les composants si celui-ci peut venir du JSON.

## Builder
Le Builder est un questionnaire guidé, pas un faux panneau d'administration sécurisé.
Chaque étape doit avoir une réponse claire, une validation et un retour utilisateur.
Le JSON généré doit respecter les types de données de l'application.
`localStorage` sert uniquement aux brouillons locaux.
Ne jamais prétendre écrire directement dans GitHub depuis le frontend.

## UI
- Responsive mobile-first.
- Hiérarchie visuelle forte.
- Dark mode cohérent.
- Animations subtiles.
- Respecter `prefers-reduced-motion`.
- Accessibilité clavier et formulaires correctement labellisés.

## Vérification
Après une modification significative :
1. lancer les tests disponibles ;
2. lancer `npm run build` ;
3. corriger les erreurs avant de conclure ;
4. vérifier les critères pertinents dans `ACCEPTANCE.md`.

## Definition of Done
Une tâche n'est terminée que si le code est cohérent avec les spécifications, le build passe et les critères concernés sont vérifiés.

## Stop conditions
Demander validation avant :
- d'ajouter un backend ;
- d'ajouter une authentification ;
- de modifier fortement l'architecture ;
- de supprimer des données existantes ;
- d'ajouter des paiements ;
- de publier ou exposer une fonctionnalité sensible non prévue.
