"use client";

import { useState, useEffect } from 'react';
import { IoMoonOutline, IoSunnyOutline } from 'react-icons/io5';

type Theme = 'dark' | 'light';

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>('dark');
  const [mounted, setMounted] = useState(false);

  // Effet pour initialiser le thème depuis localStorage ou préférence système
  useEffect(() => {
    setMounted(true);
    
    // Récupérer le thème depuis localStorage
    const savedTheme = localStorage.getItem('theme') as Theme | null;
    
    // Si un thème est sauvegardé, l'utiliser
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.toggle('light-theme', savedTheme === 'light');
    } 
    // Sinon, utiliser la préférence système
    else {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setTheme(prefersDark ? 'dark' : 'light');
      document.documentElement.classList.toggle('light-theme', !prefersDark);
    }
  }, []);

  // Fonction pour changer de thème
  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.toggle('light-theme', newTheme === 'light');
  };

  // Ne pas rendre le composant côté serveur pour éviter les erreurs d'hydratation
  if (!mounted) return null;

  return (
    <button
      onClick={toggleTheme}
      className="fixed top-4 right-4 z-50 p-2 rounded-full bg-black/30 backdrop-blur-md border border-white/10 text-white hover:bg-primary/20 transition duration-300 focus:outline-none focus:ring-2 focus:ring-primary/50"
      aria-label={theme === 'dark' ? 'Passer au mode clair' : 'Passer au mode sombre'}
    >
      {theme === 'dark' ? (
        <IoSunnyOutline className="w-5 h-5" />
      ) : (
        <IoMoonOutline className="w-5 h-5" />
      )}
    </button>
  );
}
