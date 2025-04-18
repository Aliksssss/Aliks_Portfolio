// Définition des valeurs par défaut pour le développement local
// Ces valeurs seront remplacées par les variables d'environnement en production
const DEFAULT_SERVICE_ID = 'service_6vwiuf7'; // À remplacer par votre ID de service
const DEFAULT_TEMPLATE_ID = 'template_0ygnqll'; // À remplacer par votre ID de template
const DEFAULT_PUBLIC_KEY = '9p5VQDmbIblhbd72W'; // À remplacer par votre clé publique

// Configuration avec fallback pour le développement local
export const EMAILJS_CONFIG = {
  SERVICE_ID: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || DEFAULT_SERVICE_ID,
  TEMPLATE_ID: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || DEFAULT_TEMPLATE_ID,
  PUBLIC_KEY: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || DEFAULT_PUBLIC_KEY
} as const;

// Avertissement en développement si les variables d'environnement ne sont pas définies
if (process.env.NODE_ENV === 'development') {
  if (!process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID) {
    console.warn('⚠️ NEXT_PUBLIC_EMAILJS_SERVICE_ID n\'est pas défini. Utilisation de la valeur par défaut.');
  }
  if (!process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID) {
    console.warn('⚠️ NEXT_PUBLIC_EMAILJS_TEMPLATE_ID n\'est pas défini. Utilisation de la valeur par défaut.');
  }
  if (!process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY) {
    console.warn('⚠️ NEXT_PUBLIC_EMAILJS_PUBLIC_KEY n\'est pas défini. Utilisation de la valeur par défaut.');
  }
}

// Instructions pour configurer les variables d'environnement
/**
 * Pour configurer EmailJS en production :
 * 
 * 1. Créez un fichier .env.local à la racine du projet
 * 2. Ajoutez les variables suivantes :
 *    NEXT_PUBLIC_EMAILJS_SERVICE_ID=votre_service_id
 *    NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=votre_template_id
 *    NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=votre_public_key
 * 
 * Note: Le fichier .env.local ne doit pas être commité dans le dépôt Git
 */
