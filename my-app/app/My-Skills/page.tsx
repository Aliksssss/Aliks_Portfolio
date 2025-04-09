"use client";

import React, { useState } from "react";
import { SkillData } from "@/constants";
import Image from "next/image";
import { motion } from "framer-motion";

// Animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 }
};

// Composant de carte de compétence ultra-moderne et minimaliste
const SkillCard = ({ skill, index }: { skill: any; index: number }) => {
  const [isHovered, setIsHovered] = useState(false);
  const isSvg = skill.Image.endsWith('.svg');

  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.03 }}
      className="relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div 
        className={`
          relative overflow-hidden p-3
          transition-all duration-200 h-full
          border border-white/5 rounded-[3px]
          ${isHovered 
            ? 'bg-white border-white shadow-sm' 
            : 'bg-black/20'
          }
        `}
      >
        <div className="relative z-10 flex flex-col items-center justify-center text-center">
          {/* Image de la compétence */}
          <div className={`
            relative w-10 h-10 mb-2 flex items-center justify-center
            ${isHovered ? 'opacity-100' : 'opacity-90'}
            transition-all duration-200
            ${isHovered ? 'scale-110' : 'scale-100'}
          `}>
            <Image
              src={skill.Image}
              alt={skill.name}
              width={isSvg ? 24 : 30}
              height={isSvg ? 24 : 30}
              className="object-contain"
            />
          </div>
          
          {/* Nom de la compétence */}
          <h3 className={`
            text-xs font-medium transition-colors duration-200
            ${isHovered ? 'text-secondary' : 'text-white'}
          `}>
            {skill.name}
          </h3>
        </div>
      </div>
    </motion.div>
  );
};

const Page = () => {
  // Extraire toutes les catégories uniques
  const categories = Array.from(new Set(SkillData.map(skill => skill.category)));
  
  // État pour suivre la catégorie active
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  
  // Filtrer les compétences en fonction de la catégorie active
  const filteredSkills = activeCategory 
    ? SkillData.filter(skill => skill.category === activeCategory)
    : SkillData;

  return (
    <main className="relative w-full min-h-screen bg-secondary overflow-hidden">
      {/* Arrière-plan minimaliste */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-secondary via-black to-primary/20"></div>
        
        {/* Éléments subtils pour ajouter de la profondeur */}
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-primary/10 rounded-full filter blur-[180px] opacity-30"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-primary/10 rounded-full filter blur-[180px] opacity-30"></div>
        
        {/* Éléments lumineux pour un effet moderne */}
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-primary/5 rounded-full filter blur-[80px]"></div>
        <div className="absolute bottom-1/4 right-1/4 w-32 h-32 bg-primary/5 rounded-full filter blur-[80px]"></div>
      </div>
      
      <div className="relative z-10 container mx-auto px-4 py-16 max-w-6xl">
        {/* En-tête minimaliste */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h1 className="text-3xl md:text-4xl font-bold inline-block">
            <span className="text-white">Mes </span>
            <span className="text-primary">Compétences</span>
          </h1>
          <div className="h-px w-16 bg-primary/50 mx-auto mt-3"></div>
        </motion.div>

        {/* Filtres de catégorie simplifiés */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          <motion.button
            key="all"
            onClick={() => setActiveCategory(null)}
            className={`
              px-3 py-1.5 text-xs font-medium transition-all duration-200
              ${activeCategory === null 
                ? 'bg-primary/10 text-primary border-b border-primary' 
                : 'bg-transparent text-white/70 hover:text-white hover:bg-black/20'
              }
            `}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Toutes
          </motion.button>
          
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`
                px-3 py-1.5 text-xs font-medium transition-all duration-200
                ${activeCategory === category 
                  ? 'bg-primary/10 text-primary border-b border-primary' 
                  : 'bg-transparent text-white/70 hover:text-white hover:bg-black/20'
                }
              `}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {category}
            </motion.button>
          ))}
        </div>

        {/* Grille de compétences */}
        <motion.div 
          variants={fadeInUp}
          initial="initial"
          animate="animate"
          className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-2 max-w-4xl mx-auto"
        >
          {filteredSkills.map((skill, index) => (
            <SkillCard key={skill.name} skill={skill} index={index} />
          ))}
        </motion.div>
        
        {/* Message si aucune compétence n'est trouvée */}
        {filteredSkills.length === 0 && (
          <motion.p 
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            className="text-center text-white/60 mt-8 text-sm"
          >
            Aucune compétence trouvée dans cette catégorie.
          </motion.p>
        )}
      </div>
    </main>
  );
};

export default Page;
