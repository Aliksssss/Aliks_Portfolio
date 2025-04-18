// Types pour les projets
export interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  demo?: string;
  github?: string;
  source?: string; // Ajout pour compatibilité avec les données existantes
}

// Types pour les compétences
export interface Skill {
  name: string;
  Image: string;
  category: string;
  level?: number; // Ajout pour compatibilité avec les données existantes
  experience?: string; // Ajout pour compatibilité avec les données existantes
  color?: string; // Ajout pour compatibilité avec les données existantes
}

// Types pour les expériences
export interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
}

// Types pour les centres d'intérêt
export interface Interest {
  name: string;
  icon: React.ComponentType<any>;
}

// Types pour les liens de navigation
export interface NavLink {
  name: string;
  path: string;
  icon: React.ComponentType<any>;
  bgColor?: string; // Ajout pour compatibilité avec les données existantes
}

// Types pour les configurations EmailJS
export interface EmailJSConfig {
  SERVICE_ID: string;
  TEMPLATE_ID: string;
  PUBLIC_KEY: string;
}

// Types pour les formulaires de contact
export interface ContactFormData {
  to_name: string;
  name: string;
  email: string;
  message: string;
}
