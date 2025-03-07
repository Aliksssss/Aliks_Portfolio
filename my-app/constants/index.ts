import { IoHomeOutline, IoPersonOutline, IoCodeSlashOutline, IoFolderOpenOutline, IoMailOutline } from "react-icons/io5";

export const Socials = [
  {
    name: "Discord",
    src: "/discord.svg",
  },
  {
    name: "Github",
    src: "/github.svg",
  },
  {
    name: "LinkedIn",
    src: "/linkedin.svg",
  },
];

export const NavLinks = [
  {
    name: "Home",
    path: "/",
    icon: IoHomeOutline,
    bgColor: "#6D28D9",
  },
  {
    name: "About",
    path: "/About",
    icon: IoPersonOutline,
    bgColor: "#7C3AED",
  },
  {
    name: "My Skills",
    path: "/My-Skills",
    icon: IoCodeSlashOutline,
    bgColor: "#8B5CF6",
  },
  {
    name: "My Projects",
    path: "/My-Projects",
    icon: IoFolderOpenOutline,
    bgColor: "#9333EA",
  },
  {
    name: "Contact",
    path: "/Contact",
    icon: IoMailOutline,
    bgColor: "#A855F7",
  },
];

export const aboutText = {
  introduction: "Passionné par le développement web et les nouvelles technologies, je suis un développeur front-end créatif et motivé. Mon parcours m'a permis d'acquérir une solide expertise dans la création d'interfaces utilisateur modernes et intuitives.",
  mission: "Ma mission est de créer des expériences web exceptionnelles qui allient esthétique et fonctionnalité. Je m'efforce constamment d'apprendre et d'adopter les meilleures pratiques du développement web.",
};

export const experiences = [
  {
    title: "Développeur Front-end - Webmaster Freelance",
    period: "2023 - Présent",
    description: "💻 Développement Web\n\n• Conception et création de sites web\n• Sites vitrines et e-commerce\n• Solutions CMS (WordPress, Joomla, Shopify)\n• Développement de fonctionnalités personnalisées\n\n🔧 Webmastering\n\n• Maintenance technique des sites\n• Optimisation SEO et performance\n• Amélioration de l'expérience utilisateur"
  },
  {
    title: "Webmaster",
    period: "2022 - 2025",
    description: "👩‍💻 Gestion et maintenance\n\n• Mise à jour régulière des contenus\n• Surveillance des performances\n• Sécurisation contre les menaces\n\n⚙️ Optimisation et SEO\n\n• Amélioration du référencement naturel\n• Optimisation des performances\n• Analyse du trafic et statistiques\n\n🧑‍🏫 Support et Formation\n\n• Assistance technique\n• Formation à la gestion de contenu\n• Conseils d'amélioration UX"
  },
  {
    title: "Stage Développeur Web",
    period: "2022 - 2023",
    description: "Participation au développement de sites web pour divers clients, utilisation de technologies modernes.",
  }
];

export const interests = [ 
  {
    title: "Développement Web",
    description: "🎨 Interface & Design\n\n• Création d'interfaces modernes\n• Design responsive et adaptatif\n• Animations et interactions fluides"
  },
  {
    title: "Nouvelles Technologies",
    description: "💡 Innovation & Veille\n\n• Veille technologique active\n• Apprentissage continu\n• Exploration des dernières tendances"
  },
  {
    title: "UI/UX Design",
    description: "✨ Expérience Utilisateur\n\n• Design centré utilisateur\n• Interfaces intuitives\n• Tests et optimisations UX"
  },
];

export const SkillData = [
  {
    name: "HTML",
    Image: "/html.png",
    category: "Frontend",
  },
  {
    name: "CSS",
    Image: "/css.png",
    category: "Frontend",
  },
  {
    name: "JavaScript",
    Image: "/js.png",
    category: "Frontend",
  },
  {
    name: "TypeScript",
    Image: "/ts.png",
    category: "Frontend",
  },
  {
    name: "React",
    Image: "/react.png",
    category: "Frontend",
  },
  {
    name: "Next.js",
    Image: "/next.png",
    category: "Frontend",
  },
  {
    name: "Tailwind",
    Image: "/tailwind.png",
    category: "Frontend",
  },
  {
    name: "Node.js",
    Image: "/node-js.png",
    category: "Backend",
  },
  {
    name: "MongoDB",
    Image: "/mongodb.png",
    category: "Backend",
  },
  {
    name: "MySQL",
    Image: "/mysql.png",
    category: "Backend",
  },
  {
    name: "PostgreSQL",
    Image: "/postges.png",
    category: "Backend",
  },
  {
    name: "Prisma",
    Image: "/prisma.webp",
    category: "Backend",
  },
  {
    name: "Docker",
    Image: "/docker.webp",
    category: "DevOps",
  },
  {
    name: "Stripe",
    Image: "/stripe.webp",
    category: "Backend",
  },
  {
    name: "WordPress",
    Image: "/Wordpress icon.png",
    category: "CMS",
  },
  {
    name: "Joomla",
    Image: "/Joomla.png",
    category: "CMS",
  }
];

export const Projects = [
  {
    title: "Quercus Assurances",
    description: "Un portfolio moderne développé avec Next.js et Tailwind CSS, présentant mes compétences et projets avec des animations fluides.",
    image: "/Quercus.png",
    tags: ["Next.js", "React", "Tailwind CSS", "Framer Motion"],
    demo: "https://www.quercus-assurances.fr",
  },
  {
    title: "Application de Gestion de Tâches",
    description: "Une application web permettant de gérer ses tâches quotidiennes avec des fonctionnalités de drag and drop et de filtrage.",
    image: "/projects/task-manager.png",
    tags: ["React", "TypeScript", "Firebase"],
    demo: "https://task-manager.dev",
  },
  {
    title: "Site E-commerce",
    description: "Une plateforme e-commerce complète avec panier d'achat, paiement en ligne et gestion des commandes.",
    image: "/projects/ecommerce.png",
    tags: ["Next.js", "Stripe", "MongoDB", "Tailwind CSS"],
    demo: "https://ecommerce.dev",
  },
  {
    title: "Portfolio Personnel",
    description: "Un portfolio moderne développé avec Next.js et Tailwind CSS, présentant mes compétences et projets avec des animations fluides.",
    image: "/projects/portfolio.png",
    tags: ["Next.js", "React", "Tailwind CSS", "Framer Motion"],
    demo: "https://portfolio.dev",
  },
  {
    title: "Application de Gestion de Tâches",
    description: "Une application web permettant de gérer ses tâches quotidiennes avec des fonctionnalités de drag and drop et de filtrage.",
    image: "/projects/task-manager.png",
    tags: ["React", "TypeScript", "Firebase"],
    demo: "https://task-manager.dev",
  },
  {
    title: "Site E-commerce",
    description: "Une plateforme e-commerce complète avec panier d'achat, paiement en ligne et gestion des commandes.",
    image: "/projects/ecommerce.png",
    tags: ["Next.js", "Stripe", "MongoDB", "Tailwind CSS"],
    source: "https://github.com/yourusername/ecommerce",
    demo: "https://ecommerce.dev",
  },
];
