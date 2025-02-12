"use client";

import React from "react";
import { SkillData } from "@/constants";
import Image from "next/image";
import { motion } from "framer-motion";
import MatrixRain from "@/components/MatrixRain"; // Assuming MatrixRain is a component in the components directory
import "../styles/hexagon.css";

const SkillHexagon = ({ skill, index }: { skill: any; index: number }) => {
  const delay = `${index * 0.1}s`;

  return (
    
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative group floating" 
      style={{ animationDelay: delay }}
    >
      
      {/* Hexagone background avec glow */}
      <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-gradient-to-r opacity-0 blur-xl transition-opacity duration-500 -translate-x-1/2 -translate-y-1/2 from-purple-600/50 to-pink-600/50 group-hover:opacity-100"></div>
      
      {/* Hexagone container */}
      <div className="flex relative justify-center items-center mx-auto w-32 h-32 bg-gradient-to-r from-purple-600 to-pink-600 transition-all duration-300 transform hexagon group-hover:scale-105 group-hover:rotate-6">
        <div className="hexagon-inner absolute inset-[2px] bg-[#030014] flex items-center justify-center">
          <Image
            src={skill.Image}
            alt={skill.name}
            width={75}
            height={75}
            className="transition-all duration-300 transform group-hover:scale-110 group-hover:-rotate-6"
          />
        </div>
      </div>
      
      {/* Skill name */}
      <div className="absolute -bottom-8 left-1/2 opacity-0 transition-opacity duration-300 transform -translate-x-1/2 group-hover:opacity-100">
        <span className="px-3 py-1 text-sm font-semibold text-white bg-purple-600/20 rounded-full backdrop-blur-sm">
          {skill.name}
        </span>
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
        <MatrixRain className="opacity-40" />
      </div>

      <div className="relative z-10 px-8 py-20 md:px-16 lg:px-32">
        {/* Titre */}
        <motion.div
          initial={{ opacity: 1, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="flex justify-end mb-10 w-full"
        >
          <div className="relative z-10 px-6 py-3 rounded-xl border backdrop-blur-sm border-purple-500/20">
            <h1 className="text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-pink-500">
              Mes Compétences
            </h1>
          </div>
        </motion.div>

        <div className="flex flex-col items-center justify-center min-h-screen py-20 px-4">
          {/* <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text"
          ></motion.h1> */}

          {Object.entries(skillsByCategory).map(([category, skills], categoryIndex) => (
            <motion.div 
              key={category}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.2 }}
              className="mb-16 w-full max-w-6xl"
            >
              <h2 className="text-2xl font-semibold mb-8 text-purple-400">{category}</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-16">
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
