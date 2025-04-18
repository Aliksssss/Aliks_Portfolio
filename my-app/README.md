# Portfolio Personnel - Webmaster

Un portfolio moderne développé avec Next.js, React et Tailwind CSS, présentant mes compétences et projets avec des animations fluides.

![Portfolio Preview](/public/projects/portfolio.png)

## Fonctionnalités

- **Design moderne** : Interface utilisateur élégante avec des animations fluides
- **Responsive** : Adapté à tous les appareils (mobile, tablette, desktop)
- **Sections complètes** : Accueil, À propos, Compétences, Projets et Contact
- **Formulaire de contact** : Intégration avec EmailJS pour l'envoi de messages
- **Animations** : Utilisation de Framer Motion pour des transitions fluides
- **Accessibilité** : Respect des normes WCAG pour une expérience inclusive
- **Performance** : Optimisation des images et du chargement des ressources

## Technologies utilisées

- **Frontend** : Next.js, React, TypeScript
- **Styles** : Tailwind CSS
- **Animations** : Framer Motion
- **Icônes** : React Icons
- **Formulaires** : EmailJS
- **Déploiement** : Vercel

## Démarrage

### Prérequis

- Node.js (version 18 ou supérieure)
- npm ou yarn

### Installation

1. Clonez le dépôt :
   ```bash
   git clone https://github.com/votre-username/votre-portfolio.git
   cd votre-portfolio
   ```

2. Installez les dépendances :
   ```bash
   npm install
   # ou
   yarn install
   ```

3. Configuration des variables d'environnement :
   - Créez un fichier `.env.local` à la racine du projet
   - Ajoutez les variables suivantes pour EmailJS :
     ```
     NEXT_PUBLIC_EMAILJS_SERVICE_ID=votre_service_id
     NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=votre_template_id
     NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=votre_public_key
     ```

4. Lancez le serveur de développement :
   ```bash
   npm run dev
   # ou
   yarn dev
   ```

5. Ouvrez [http://localhost:3000](http://localhost:3000) dans votre navigateur.

## Structure du projet

```
my-app/
├── app/                # Répertoire principal de l'application Next.js
│   ├── About/          # Page À propos
│   ├── Contact/        # Page Contact
│   ├── My-Projects/    # Page Projets
│   ├── My-Skills/      # Page Compétences
│   ├── components/     # Composants réutilisables
│   └── page.tsx        # Page d'accueil
├── constants/          # Données constantes (projets, compétences, etc.)
├── public/             # Fichiers statiques (images, favicon, etc.)
├── styles/             # Styles globaux
├── types/              # Définitions de types TypeScript
└── utils/              # Fonctions utilitaires
```

## Sécurité

- Les clés API sont stockées dans des variables d'environnement
- Validation des entrées utilisateur dans les formulaires
- Protection contre les attaques XSS et CSRF
- Respect du RGPD pour la collecte de données

## Tests

Lancez les tests avec la commande suivante :

```bash
npm test
# ou
yarn test
```

## Responsive Design

Le portfolio est entièrement responsive et optimisé pour :
- Mobile (< 640px)
- Tablette (640px - 1024px)
- Desktop (> 1024px)

## Déploiement

Le moyen le plus simple de déployer cette application est d'utiliser la [plateforme Vercel](https://vercel.com/new).

1. Importez votre dépôt GitHub dans Vercel
2. Configurez les variables d'environnement
3. Déployez !

## Maintenance

Pour maintenir ce projet :

1. Gardez les dépendances à jour :
   ```bash
   npm outdated
   npm update
   ```

2. Exécutez régulièrement les linters :
   ```bash
   npm run lint
   ```

3. Vérifiez les performances avec Lighthouse

## Licence

Ce projet est sous licence MIT. Voir le fichier `LICENSE` pour plus de détails.

---

Créé avec ❤️ par [Votre Nom]
