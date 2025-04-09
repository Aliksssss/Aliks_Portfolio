import { IoHomeOutline, IoPersonOutline, IoCodeSlashOutline, IoFolderOpenOutline, IoMailOutline } from "react-icons/io5";
import { 
  IoCodeOutline, 
  IoDesktopOutline, 
  IoGameControllerOutline, 
  IoMusicalNotesOutline, 
  IoBookOutline, 
  IoGlobeOutline 
} from "react-icons/io5";

export const Socials = [
  // {
  //   name: "Discord",
  //   src: "/discord.svg",
  // },
  {
    name: "Github",
    src: "/github.svg",
    link:"https://github.com/",
  },
  {
    name: "LinkedIn",
    src: "/linkedin.svg",
    link:"https://www.linkedin.com/in/roberto-fernando-fernandez",
    
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

// Convertir aboutText en tableau pour pouvoir utiliser map()
export const aboutText = [
  "Passionné par le développement web et les nouvelles technologies, je conçois des interfaces modernes, intuitives et performantes.",
  "Mon objectif est de transformer chaque projet en une expérience fluide et unique, alliant esthétique et fonctionnalité.",
  "Ma mission est de créer des expériences web qui se démarquent. Mon approche repose sur des pratiques solides et une amélioration continue pour offrir des solutions adaptées aux besoins de chacun.",
  "Prêt à donner vie à vos idées ? Contactez-moi pour créer ensemble une présence en ligne unique et performante !"
];

export const experiences = [
  {
    title: "Webmaster Freelance",
    company: "Indépendant",
    period: "2023 - Présent",
    description: "Conception et création de sites web, maintenance technique, optimisation SEO et amélioration de l'expérience utilisateur."
  },
  {
    title: "Webmaster",
    company: "Agence Web",
    period: "2022 - 2025",
    description: "Gestion et maintenance de sites, optimisation des performances, analyse du trafic et formation à la gestion de contenu."
  },
  {
    title: "Stage Développeur Web",
    company: "Studio Digital",
    period: "2022 - 2023",
    description: "Participation au développement de sites web pour divers clients, utilisation de technologies modernes."
  }
];

export const interests = [ 
  {
    name: "Développement Web",
    icon: IoCodeOutline
  },
  {
    name: "Nouvelles Technologies",
    icon: IoDesktopOutline
  },
  {
    name: "UI/UX Design",
    icon: IoGlobeOutline
  },
  {
    name: "Jeux Vidéo",
    icon: IoGameControllerOutline
  },
  {
    name: "Musique",
    icon: IoMusicalNotesOutline
  },
  {
    name: "Lecture",
    icon: IoBookOutline
  }
];

export const SkillData = [
  {
    name: "HTML",
    Image: "/html.png",
    category: "Frontend",
    level: 95,
    experience: "5+ ans"
  },
  {
    name: "CSS",
    Image: "/css.png",
    category: "Frontend",
    level: 90,
    experience: "5+ ans"
  },
  {
    name: "JavaScript",
    Image: "/js.png",
    category: "Frontend",
    level: 85,
    experience: "4+ ans"
  },
  {
    name: "TypeScript",
    Image: "/ts.png",
    category: "Frontend",
    level: 80,
    experience: "3+ ans"
  },
  {
    name: "React",
    Image: "/react.png",
    category: "Frontend",
    level: 85,
    experience: "3+ ans"
  },
  {
    name: "Next.js",
    Image: "/next.png",
    category: "Frontend",
    level: 80,
    experience: "2+ ans"
  },
  {
    name: "Tailwind",
    Image: "/tailwind.png",
    category: "Frontend",
    level: 90,
    experience: "3+ ans"
  },
  {
    name: "Node.js",
    Image: "/node-js.png",
    category: "Backend",
    level: 75,
    experience: "3+ ans"
  },
  {
    name: "MySQL",
    Image: "/mysql.png",
    category: "Backend",
    level: 80,
    experience: "4+ ans"
  },
  {
    name: "PHP",
    Image: "/php.png",
    category: "Backend",
    level: 85,
    experience: "4+ ans"
  },
  {
    name: "Docker",
    Image: "/docker.webp",
    category: "DevOps",
    level: 70,
    experience: "2+ ans"
  },
  {
    name: "WordPress",
    Image: "/Wordpress icon.png",
    category: "CMS",
    level: 95,
    experience: "5+ ans"
  },
  {
    name: "Joomla",
    Image: "/Joomla.png",
    category: "CMS",
    level: 85,
    experience: "3+ ans"
  },
  {
    name: "Shopify",
    Image: "/shopify.png",
    category: "CMS",
    level: 80,
    experience: "2+ ans"
  },
  {
    name: "ChatGPT",
    Image: "/chatgpt2.png",
    category: "IA",
    level: 90,
    experience: "2+ ans"
  },
  {
    name: "Gemini",
    Image: "/Gemini.png",
    category: "IA",
    color:"bg-white",
    level: 85,
    experience: "1+ an"
  },
  {
    name: "Claude",
    Image: "/claude.png",
    category: "IA",
    level: 80,
    experience: "1+ an"
  },
  {
    name: "Midjourney",
    Image: "/midjourney.png",
    category: "IA",
    level: 80,
    experience: "1+ an"
  },
  {
    name: "Figma",
    Image: "/figma.png",
    category: "Design",
    level: 90,
    experience: "3+ ans"
  },
  {
    name: "Canva",
    Image: "/canva.png",
    category: "Design",
    level: 85,
    experience: "3+ ans"
  },
  {
    name: "Photoshop",
    Image: "/adobe-photoshop.png",
    category: "Design",
    level: 80,
    experience: "3+ ans"
  }
];

export const Projects = [
  {
    title: "Quercus Assurances",
    description: "Courtier indépendant spécialisé en assurance de personnes, accompagne ses clients avec des solutions sur-mesure.",
    image: "/Quercus.png",
    tags: ["Wordpress","CSS"],
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
