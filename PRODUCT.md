# PRODUCT — Portfolio React TS Vite

## Vision
Créer un portfolio personnel moderne, rapide et responsive pour présenter le profil, les compétences, les expériences, les projets, les certifications et les moyens de contact.

Le projet est frontend-only : React + TypeScript + Vite. Aucune inscription visiteur, aucun backend, aucune base de données et aucune API métier.

## Utilisateurs
### Visiteur
Le visiteur consulte le portfolio, les compétences, expériences et projets, filtre les projets, consulte leur détail, télécharge le CV et utilise le contact. Aucun compte n'est nécessaire.

### Propriétaire
Le propriétaire utilise un Builder pour préparer les contenus. Le Builder n'est pas un système d'administration sécurisé et ne nécessite pas de compte.

## Données
Les contenus sont stockés dans :
- `profile.json`
- `skills.json`
- `projects.json`
- `experiences.json`
- `certifications.json`
- `testimonials.json`

Flux : `Questionnaire → Prévisualisation → Export JSON → Intégration dans le projet → Git → Déploiement`.

`localStorage` peut conserver les brouillons locaux.

Important : un frontend déployé ne peut pas réécrire directement les fichiers JSON du dépôt distant.

## Modules MVP

### Présentation
- Hero principal.
- Nom, titre et accroche.
- Photo ou visuel.
- CTA projets et CV.
- Technologies principales.

### Profil
- Présentation personnelle.
- Compétences et niveaux.
- Expériences sous forme de timeline.
- Certifications.

### Projets
- Galerie.
- Image, titre, description, technologies et année.
- GitHub et démo lorsque disponibles.
- Filtre par technologie.
- Tri par année.
- Page de détail.

### Contact
- Nom, email, message.
- Validation frontend.
- États d'erreur et succès.
- Aucun backend requis pour le MVP.

### Builder
- Questionnaire étape par étape.
- Ajout/modification des compétences, projets, expériences et certifications.
- Prévisualisation.
- Génération/export JSON.
- Brouillons via `localStorage`.

### Expérience et qualité
- Responsive mobile/tablette/desktop.
- Dark mode.
- Animations discrètes.
- Navigation claire.
- Accessibilité clavier.
- États vides et erreurs.
- Textes alternatifs et contraste correct.

## Routes
- `/` — Accueil
- `/about` — À propos
- `/projects` — Projets
- `/projects/:id` — Détail projet
- `/contact` — Contact
- `/builder` — Builder propriétaire

## Hors périmètre MVP
- inscription, connexion et comptes utilisateurs ;
- backend, Laravel, PHP, MySQL ;
- API métier, Axios pour une API inexistante ;
- Sanctum ;
- système multi-utilisateur ;
- paiement ;
- CMS distant ;
- stockage serveur des JSON ;
- administration sécurisée.

## Critère de réussite
Un visiteur doit comprendre rapidement qui est le propriétaire, découvrir ses compétences et son parcours, explorer les projets, consulter leur détail et accéder au CV/contact.

Le propriétaire doit pouvoir utiliser le Builder pour préparer de nouveaux contenus et obtenir des JSON conformes à l'application.
