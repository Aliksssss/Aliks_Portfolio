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
          relative overflow-hidden
          transition-all duration-300
          rounded-full aspect-square
          flex items-center justify-center
          cursor-pointer
          p-2 sm:p-3 md:p-4
          max-w-[80px] sm:max-w-[100px] md:max-w-full
          mx-auto
          ${isHovered 
            ? 'bg-gradient-to-br from-[#626C3B]/20 to-[#83792E]/5 shadow-lg scale-105' 
            : 'bg-[#CC914D]/10 hover:bg-[#CC914D]/20'
          }
        `}
      >
        <div className="relative z-10 flex flex-col items-center justify-center text-center">
          {/* Image de la compétence */}
          <div className={`
            relative flex items-center justify-center
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
            text-xs font-medium transition-colors duration-300 mt-1
            ${isHovered ? 'text-[#626C3B]' : 'text-[#403011]'}
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
    <main className="relative w-full min-h-screen overflow-hidden bg-[#F6EBD4]">
      {/* Arrière-plan beige */}
      <div className="absolute inset-0 z-0 bg-[#F6EBD4]">
        <div className="absolute inset-0"></div>
        
        {/* Éléments subtils pour ajouter de la profondeur */}
        <div className="absolute top-0 right-0 w-1/2 h-1/2 rounded-full filter blur-[180px] opacity-20" style={{ backgroundColor: '#626C3B' }}></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 rounded-full filter blur-[180px] opacity-20" style={{ backgroundColor: '#83792E' }}></div>
        
        {/* Éléments lumineux pour un effet moderne */}
        <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full filter blur-[80px] opacity-15" style={{ backgroundColor: '#E8AF3B' }}></div>
        <div className="absolute bottom-1/4 right-1/4 w-32 h-32 rounded-full filter blur-[80px] opacity-15" style={{ backgroundColor: '#CC914D' }}></div>
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
            <span style={{ color: '#403011' }}>Mes </span>
            <span style={{ color: '#626C3B' }}>Compétences</span>
          </h1>
          <div className="h-0.5 w-24 mx-auto mt-4" style={{ background: 'linear-gradient(to right, transparent, #626C3B, transparent)' }}></div>
        </motion.div>

        {/* Filtres de catégorie modernisés */}
        <div className="flex justify-center mb-12">
          <div className="backdrop-blur-sm rounded-full p-1 inline-flex" style={{ backgroundColor: 'rgba(204, 145, 77, 0.1)' }}>
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`
                  px-5 py-2 text-sm font-medium transition-all duration-300 rounded-full
                  cursor-pointer
                  ${activeCategory === category 
                    ? 'shadow-md' 
                    : 'bg-transparent hover:bg-[#CC914D]/10'
                  }
                  ${activeCategory === category ? 'text-[#F6EBD4]' : 'text-[#403011]'}
                  ${activeCategory === category ? 'bg-[#626C3B]' : ''}
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
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 sm:gap-4 md:gap-6 max-w-5xl mx-auto"
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
            <div className="inline-block p-6 rounded-xl backdrop-blur-sm" style={{ backgroundColor: 'rgba(204, 145, 77, 0.1)' }}>
              <p style={{ color: '#403011' }}>Aucune compétence trouvée dans cette catégorie.</p>
              <button 
                onClick={() => setActiveCategory(categories[0])}
                className="mt-4 px-4 py-2 text-sm rounded-full transition-colors duration-300 cursor-pointer"
                style={{ backgroundColor: '#626C3B', color: '#F6EBD4' }}
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
