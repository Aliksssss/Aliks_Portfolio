'use client';

import { FaLinkedin, FaInstagram, FaGithub } from 'react-icons/fa';
import Link from 'next/link';
import { Socials } from '@/constants';

interface Social {
  name: string;
  src: string;
  link?: string;
}

export default function SocialIcons() {
  // Définir les URLs par défaut
  const linkedinUrl = Socials.find((social: Social) => social.name === 'LinkedIn')?.link || 'https://linkedin.com';
  const githubUrl = Socials.find((social: Social) => social.name === 'Github')?.link || 'https://github.com';
  // URL Instagram par défaut car non présent dans les constantes
  const instagramUrl = 'https://instagram.com';

  return (
    <div className="fixed bottom-0 w-full bg-black py-2 z-20">
      <div className="flex justify-center items-center space-x-4">
        <Link 
          href={linkedinUrl}
          target="_blank" 
          rel="noopener noreferrer"
          className="text-white hover:text-primary transition-colors"
        >
          <FaLinkedin size={20} />
        </Link>
        <Link 
          href={instagramUrl} 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-white hover:text-primary transition-colors"
        >
          <FaInstagram size={20} />
        </Link>
        <Link 
          href={githubUrl}
          target="_blank" 
          rel="noopener noreferrer"
          className="text-white hover:text-primary transition-colors"
        >
          <FaGithub size={20} />
        </Link>
        <span className="text-white/60 text-xs ml-4">
          &copy; {new Date().getFullYear()} - Aliks Dev - Tous droits réservés
        </span>
      </div>
    </div>
  );
}
