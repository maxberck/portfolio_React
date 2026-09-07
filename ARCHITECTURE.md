# ARCHITECTURE — Portfolio React TS Vite

## Stack
- React
- TypeScript
- Vite
- React Router
- Lucide React pour les icônes
- Tailwind CSS si utilisé, sans dépendance backend

## Structure cible
```text
public/
  images/
  icons/
  cv.pdf
src/
  components/
    layout/
    home/
    projects/
    skills/
    experience/
    contact/
    builder/
  pages/
    Home.tsx
    About.tsx
    Projects.tsx
    ProjectDetails.tsx
    Contact.tsx
    Builder.tsx
  data/
    profile.json
    skills.json
    projects.json
    experiences.json
    certifications.json
    testimonials.json
  types/
  services/
    portfolioData.ts
  hooks/
    usePortfolioBuilder.ts
  App.tsx
  main.tsx
  index.css
```

## Données typées
Les JSON sont la source de contenu. Les interfaces TypeScript garantissent leur structure.

### Profile
`firstName`, `lastName`, `title`, `bio`, `photo`, `email`, `cvUrl`, liens sociaux optionnels.

### Skill
`id`, `name`, `level`, `years` optionnel, `description` optionnelle, `projects`.

### Project
`id`, `title`, `description`, `image`, `technologies`, `year`, `githubUrl` optionnel, `demoUrl` optionnel, `featured` optionnel.

### Experience
`id`, `title`, `company`, `startDate`, `endDate` optionnel, `description`, `technologies`.

### Certification
`id`, `name`, `issuer`, `date`, `credentialUrl` optionnel, `description` optionnelle.

## Service de données
`portfolioData.ts` centralise l'accès aux données importées depuis les JSON et expose des fonctions simples : récupération du profil, recherche d'un projet par id, filtrage des projets et tri par année.

Aucun appel réseau n'est nécessaire pour les contenus du portfolio.

## Builder
Le Builder est une interface de questionnaire guidé :
1. choisir le type de contenu ;
2. poser une question à la fois ;
3. stocker les réponses dans un état typé ;
4. valider ;
5. prévisualiser ;
6. générer le JSON ;
7. copier ou télécharger le JSON.

Les brouillons peuvent être sauvegardés dans `localStorage`.

Le Builder ne prétend pas modifier le dépôt GitHub ou les fichiers de production directement.

## Routing
React Router gère les routes publiques et `/builder`.

Les liens internes utilisent le routing applicatif. Les liens externes (GitHub, démo, CV) utilisent des URLs normales.

## Design
- mobile-first ;
- hiérarchie visuelle forte ;
- hero comme point focal ;
- cartes projets lisibles ;
- espace négatif généreux ;
- animations courtes et discrètes ;
- dark mode cohérent ;
- `prefers-reduced-motion` respecté.

## Contact
Le formulaire est frontend-only dans le MVP. Il valide les champs et affiche un état clair. Une intégration email/API pourra être ajoutée ultérieurement sans modifier le modèle de contenu.

## Performance
- images optimisées ;
- composants raisonnablement découpés ;
- pas de librairie lourde inutile ;
- données locales ;
- lazy loading possible pour les routes secondaires si utile.

## Sécurité
Il n'existe aucune donnée secrète côté frontend. Ne jamais placer de clé privée ou secret dans le code client.

Le Builder n'est pas considéré comme une zone sécurisée puisqu'il ne dispose pas d'authentification.

## Déploiement
Le projet doit pouvoir être déployé comme site statique, notamment sur Vercel. Le build attendu est `npm run build`.

## Évolution future
Un backend/CMS/authentification pourra être ajouté plus tard si le besoin apparaît. L'architecture doit garder les types et composants suffisamment découplés pour permettre cette évolution.
