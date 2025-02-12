"use client";

import React from "react";
import { SkillData } from "@/constants";
import Image from "next/image";
import { motion } from "framer-motion";
import MatrixRain from "@/components/MatrixRain";
import "../styles/hexagon.css";

const SkillHexagon = ({ skill, index }: { skill: any; index: number }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative group"
    >
      {/* Effet de glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl opacity-0 blur-xl transition-all duration-500 group-hover:opacity-30"></div>
      
      {/* Carte de compétence */}
      <div className="relative p-6 bg-black/40 backdrop-blur-sm border border-purple-500/20 rounded-2xl transition-all duration-300 transform group-hover:scale-105 group-hover:border-purple-500/40">
        <div className="flex flex-col items-center space-y-4">
          {/* Image avec effet de glow */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full opacity-0 blur-xl transition-all duration-500 group-hover:opacity-40"></div>
            <div className="relative w-16 h-16 flex items-center justify-center">
              <Image
                src={skill.Image}
                alt={skill.name}
                width={48}
                height={48}
                className="transition-all duration-300 transform group-hover:scale-110 filter group-hover:brightness-110"
              />
            </div>
          </div>
          
          {/* Nom de la compétence */}
          <span className="text-sm font-medium text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 group-hover:from-purple-300 group-hover:to-pink-300 transition-all duration-300">
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
    <div className="w-full min-h-screen bg-[#030014]">
      {/* MatrixRain en arrière-plan */}
      <div className="fixed inset-0 z-0">
        <MatrixRain className="opacity-30" />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-16 max-w-7xl mt-10">
        {/* Titre encadré */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-end mb-16"
        >
          <div className="relative px-6 py-3 rounded-xl border backdrop-blur-sm border-purple-500/20 bg-black/40">
            <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-pink-500">
              Mes Compétences
            </h1>
          </div>
        </motion.div>

        {/* Contenu principal */}
        <div className="space-y-20">
          {Object.entries(skillsByCategory).map(([category, skills], categoryIndex) => (
            <motion.div 
              key={category}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.2 }}
              className="relative"
            >
              {/* Titre de la catégorie avec ligne décorative */}
              <div className="flex items-center gap-4 mb-8">
                <h2 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                  {category}
                </h2>
                <div className="flex-1 h-[1px] bg-gradient-to-r from-purple-500/20 to-transparent"></div>
              </div>

              {/* Grille de compétences */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
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
