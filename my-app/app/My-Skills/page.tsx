"use client";

import React, { useState, useEffect } from "react";
import { SkillData } from "@/constants";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

// Animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 }
};

// Composant de carte de compétence ultra-moderne avec design rond
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
          relative overflow-hidden p-4
          transition-all duration-300 h-full
          rounded-full aspect-square
          flex items-center justify-center
          cursor-pointer
          ${isHovered 
            ? 'bg-gradient-to-br from-primary/20 to-primary/5 shadow-lg shadow-primary/10 scale-105' 
            : 'bg-black/20 hover:bg-black/30'
          }
        `}
      >
        <div className="relative z-10 flex flex-col items-center justify-center text-center">
          {/* Image de la compétence */}
          <div className={`
            relative w-12 h-12 mb-2 flex items-center justify-center
            transition-all duration-300
            ${isHovered ? 'scale-110' : 'scale-100'}
          `}>
            <Image
              src={skill.Image}
              alt={skill.name}
              width={isSvg ? 28 : 36}
              height={isSvg ? 28 : 36}
              className="object-contain drop-shadow-md"
            />
          </div>
          
          {/* Nom de la compétence */}
          <h3 className={`
            text-xs font-medium transition-colors duration-300
            ${isHovered ? 'text-primary' : 'text-white/90'}
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
  const [activeCategory, setActiveCategory] = useState<string>(categories[0]);
  
  // Filtrer les compétences en fonction de la catégorie active
  const filteredSkills = SkillData.filter(skill => skill.category === activeCategory);

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

        {/* Filtres de catégorie modernisés */}
        <div className="flex justify-center mb-12">
          <div className="bg-black/20 backdrop-blur-sm rounded-full p-1 inline-flex">
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`
                  px-5 py-2 text-sm font-medium transition-all duration-300 rounded-full
                  cursor-pointer
                  ${activeCategory === category 
                    ? 'bg-primary text-white shadow-md' 
                    : 'bg-transparent text-white/80 hover:text-white hover:bg-black/20'
                  }
                `}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </div>

        {/* Grille de compétences avec animation */}
        <AnimatePresence mode="wait">
          <motion.div 
            key={activeCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6 max-w-5xl mx-auto"
          >
            {filteredSkills.map((skill, index) => (
              <SkillCard key={skill.name} skill={skill} index={index} />
            ))}
          </motion.div>
        </AnimatePresence>
        
        {/* Message si aucune compétence n'est trouvée */}
        {filteredSkills.length === 0 && (
          <motion.div 
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            className="text-center mt-12"
          >
            <div className="inline-block p-6 bg-black/30 rounded-xl backdrop-blur-sm">
              <p className="text-white/80">Aucune compétence trouvée dans cette catégorie.</p>
              <button 
                onClick={() => setActiveCategory(categories[0])}
                className="mt-4 px-4 py-2 bg-primary/80 text-white text-sm rounded-full hover:bg-primary transition-colors duration-300 cursor-pointer"
              >
                Voir une autre catégorie
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </main>
  );
};

export default Page;
