"use client";

import { useState } from 'react';
import { IoAccessibilityOutline, IoCloseOutline, IoTextOutline, IoContrastOutline, IoEyeOutline } from 'react-icons/io5';

export default function AccessibilityMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [fontSize, setFontSize] = useState(100);
  const [highContrast, setHighContrast] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  // Fonction pour changer la taille de police
  const changeFontSize = (size: number) => {
    setFontSize(size);
    document.documentElement.style.fontSize = `${size}%`;
  };

  // Fonction pour activer/désactiver le contraste élevé
  const toggleHighContrast = () => {
    const newState = !highContrast;
    setHighContrast(newState);
    document.documentElement.classList.toggle('high-contrast', newState);
  };

  // Fonction pour activer/désactiver les animations réduites
  const toggleReducedMotion = () => {
    const newState = !reducedMotion;
    setReducedMotion(newState);
    document.documentElement.classList.toggle('reduced-motion', newState);
  };

  return (
    <>
      {/* Bouton d'accessibilité */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed top left-4 z-50 p-3 rounded-full bg-[#83792E] text-white hover:bg-[#83792E]/90 transition duration-300 shadow-lg focus:outline-none focus:ring-2 focus:ring-[#83792E]/50"
        aria-label="Ouvrir le menu d'accessibilité"
      >
        <IoAccessibilityOutline className="w-5 h-5" />
      </button>

      {/* Menu d'accessibilité */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <div className="bg-secondary p-6 rounded-lg shadow-xl w-full max-w-md mx-4 relative border border-white/10">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-3 right-3 text-white/70 hover:text-white transition duration-300"
              aria-label="Fermer le menu d'accessibilité"
            >
              <IoCloseOutline className="w-6 h-6" />
            </button>

            <h2 className="text-xl font-bold mb-4 text-white flex items-center gap-2">
              <IoAccessibilityOutline className="w-5 h-5" />
              Options d'accessibilité
            </h2>

            <div className="space-y-6">
              {/* Taille de police */}
              <div>
                <h3 className="text-md font-medium mb-2 text-white/90 flex items-center gap-2">
                  <IoTextOutline className="w-4 h-4" />
                  Taille du texte
                </h3>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => changeFontSize(90)}
                    className={`px-3 py-1.5 rounded ${
                      fontSize === 90 ? 'bg-[#83792E] text-white' : 'bg-black/30 text-white/70 hover:text-white'
                    } transition duration-300`}
                    aria-label="Petite taille de texte"
                  >
                    A-
                  </button>
                  <button
                    onClick={() => changeFontSize(100)}
                    className={`px-3 py-1.5 rounded ${
                      fontSize === 100 ? 'bg-[#83792E] text-white' : 'bg-black/30 text-white/70 hover:text-white'
                    } transition duration-300`}
                    aria-label="Taille de texte normale"
                  >
                    A
                  </button>
                  <button
                    onClick={() => changeFontSize(110)}
                    className={`px-3 py-1.5 rounded ${
                      fontSize === 110 ? 'bg-[#83792E] text-white' : 'bg-black/30 text-white/70 hover:text-white'
                    } transition duration-300`}
                    aria-label="Grande taille de texte"
                  >
                    A+
                  </button>
                  <button
                    onClick={() => changeFontSize(120)}
                    className={`px-3 py-1.5 rounded ${
                      fontSize === 120 ? 'bg-[#83792E] text-white' : 'bg-black/30 text-white/70 hover:text-white'
                    } transition duration-300`}
                    aria-label="Très grande taille de texte"
                  >
                    A++
                  </button>
                </div>
              </div>

              {/* Contraste élevé */}
              <div>
                <h3 className="text-md font-medium mb-2 text-white/90 flex items-center gap-2">
                  <IoContrastOutline className="w-4 h-4" />
                  Contraste élevé
                </h3>
                <button
                  onClick={toggleHighContrast}
                  className={`px-4 py-2 rounded flex items-center gap-2 ${
                    highContrast ? 'bg-[#83792E] text-white' : 'bg-black/30 text-white/70 hover:text-white'
                  } transition duration-300`}
                  aria-pressed={highContrast}
                >
                  {highContrast ? 'Désactiver' : 'Activer'} le contraste élevé
                </button>
              </div>

              {/* Réduire les animations */}
              <div>
                <h3 className="text-md font-medium mb-2 text-white/90 flex items-center gap-2">
                  <IoEyeOutline className="w-4 h-4" />
                  Animations
                </h3>
                <button
                  onClick={toggleReducedMotion}
                  className={`px-4 py-2 rounded flex items-center gap-2 ${
                    reducedMotion ? 'bg-[#83792E] text-white' : 'bg-black/30 text-white/70 hover:text-white'
                  } transition duration-300`}
                  aria-pressed={reducedMotion}
                >
                  {reducedMotion ? 'Réactiver' : 'Réduire'} les animations
                </button>
              </div>
            </div>

            <p className="mt-6 text-xs text-white/50">
              Ces paramètres seront sauvegardés pour votre prochaine visite.
            </p>
          </div>
        </div>
      )}
    </>
  );
}
