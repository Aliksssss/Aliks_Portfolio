"use client";

import React from "react";
import { SkillData } from "@/constants";
import Image from "next/image";
import { motion } from "framer-motion";
import MatrixRain from "@/components/MatrixRain";
import "../styles/hexagon.css";

const SkillHexagon = ({ skill, index }: { skill: any; index: number }) => {
  // Vérifier si l'image est un SVG
  const isSvg = skill.Image.endsWith('.svg');

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative group"
    >
      {/* Effet de glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl opacity-0 blur-xl transition-all duration-500 group-hover:opacity-30"></div>
      
      {/* Carte de compétence */}
      <div className="relative p-3 bg-black/30 backdrop-blur-sm border border-purple-500/10 rounded-xl transition-all duration-300 transform group-hover:scale-105 group-hover:border-purple-500/40 hover:shadow-[0_0_15px_rgba(168,85,247,0.3)]">
        <div className="flex flex-col items-center space-y-2">
          {/* Image avec effet de glow */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full opacity-0 blur-xl transition-all duration-500 group-hover:opacity-40"></div>
            <div className="relative w-10 h-10 flex items-center justify-center">
              {isSvg ? (
                // Rendu direct pour les SVG
                <img
                  src={skill.Image}
                  alt={skill.name}
                  className="w-8 h-8 transition-all duration-300 transform group-hover:scale-110 filter group-hover:brightness-110"
                />
              ) : (
                // Utiliser le composant Image de Next.js pour les autres formats
                <Image
                  src={skill.Image}
                  alt={skill.name}
                  width={32}
                  height={32}
                  className="transition-all duration-300 transform group-hover:scale-110 filter group-hover:brightness-110"
                />
              )}
            </div>
          </div>
          
          {/* Nom de la compétence */}
          <span className="text-xs font-medium text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 group-hover:from-purple-300 group-hover:to-pink-300 transition-all duration-300">
            {skill.name}
          </span>
        </div>
      </div>
    </motion.div>
  );
};

const Page = () => {
  // Grouper les compétences par catégorie
  const skillsByCategory = SkillData.reduce((acc: { [key: string]: typeof SkillData }, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {});

  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-[#030014] to-[#090041] text-white overflow-hidden">
      {/* Fond animé */}
      <div className="fixed inset-0 z-0">
        <MatrixRain className="opacity-40" />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-8 max-w-5xl mt-6">
        {/* Titre encadré */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-end mb-12"
        >
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600/50 to-pink-600/50 rounded-lg blur-xl opacity-75 
                         group-hover:opacity-100 transition-all duration-500"></div>
            <div className="relative px-8 py-4 bg-black/50 backdrop-blur-xl rounded-lg border border-white/10">
              <h1 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">
                Mes Compétences
              </h1>
            </div>
          </div>
        </motion.div>

        {/* Contenu principal */}
        <div className="space-y-16">
          {Object.entries(skillsByCategory).map(([category, skills], categoryIndex) => (
            <motion.div 
              key={category}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              className="relative"
            >
              {/* Titre de la catégorie avec style moderne */}
              <div className="mb-8 flex items-center">
                <div className="w-1.5 h-8 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full mr-3"></div>
                <h2 className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-pink-300">
                  {category}
                </h2>
                <div className="ml-4 flex-1 h-[1px] bg-gradient-to-r from-purple-500/30 via-pink-500/20 to-transparent"></div>
              </div>

              {/* Grille de compétences avec effet de décalage */}
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8 gap-3">
                {skills.map((skill, index) => (
                  <SkillHexagon key={skill.name} skill={skill} index={index} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;
