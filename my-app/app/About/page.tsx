"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { aboutText, experiences, interests } from "@/constants";
import { IoSchoolOutline, IoHeartOutline } from "react-icons/io5";

const AboutMe = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  return (
    <main className="flex overflow-hidden relative w-full min-h-screen bg-secondary text-white">
      {/* Arrière-plan moderne avec dégradé et éléments lumineux */}
      <div className="absolute inset-0 z-0">
        {/* Fond avec dégradé noir et violet */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary"></div>
        
        {/* Éléments lumineux en arrière-plan */}
        <div className="absolute top-0 right-0 w-2/3 h-2/3 bg-primary rounded-full filter blur-[120px] opacity-20 transform translate-x-1/4 -translate-y-1/4"></div>
        <div className="absolute bottom-0 left-0 w-2/3 h-2/3 bg-primary rounded-full filter blur-[120px] opacity-20 transform -translate-x-1/4 translate-y-1/4"></div>
        
        {/* Petits points lumineux */}
        <div className="absolute top-1/4 left-1/3 w-24 h-24 bg-primary rounded-full filter blur-[50px] opacity-15 glow-effect"></div>
        <div className="absolute bottom-1/3 right-1/4 w-32 h-32 bg-primary rounded-full filter blur-[60px] opacity-15 glow-effect"></div>
      </div>
      
      {/* Conteneur principal */}
      <div className="relative z-10 container mx-auto px-4 py-16 max-w-5xl">
        {/* Titre moderne */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold inline-block">
            <span className="text-primary">À </span>
            <span className="text-white">Propos</span>
          </h1>
          <div className="h-px w-16 bg-primary/50 mx-auto mt-3"></div>
        </motion.div>

        {/* Section photo et introduction */}
        <motion.div
          {...fadeInUp}
          className="flex flex-col md:flex-row items-center gap-8 mb-16"
        >
          {/* Photo avec effet de glow amélioré */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-primary/30 rounded-full blur-lg opacity-70 
                         group-hover:opacity-100 transition-all duration-500"></div>
            <div className="relative w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border border-white/10 
                         shadow-lg shadow-primary/20">
              <Image
                src="/Alisack_magic.png"
                alt="Alisack Portrait"
                fill
                className="object-cover transform group-hover:scale-110 transition duration-700 ease-out"
              />
            </div>
          </div>

          {/* Texte d'introduction */}
          <div className="flex-1 text-center md:text-left">
            <motion.h2
              {...fadeInUp}
              transition={{ delay: 0.1 }}
              className="text-2xl font-bold mb-3 text-primary"
            >
              Alisack V
            </motion.h2>
            <motion.h3
              {...fadeInUp}
              transition={{ delay: 0.2 }}
              className="mb-6 text-lg text-white/90 md:text-xl"
            >
              <span className="text-primary">Web</span>
              <span className="text-white">master</span> & Designer Créatif
            </motion.h3>
            <motion.div
              {...fadeInUp}
              transition={{ delay: 0.3 }}
              className="text-white/80 space-y-3 backdrop-blur-sm p-4 rounded-lg bg-black/10 border border-white/5"
            >
              {aboutText.map((paragraph, index) => (
                <p key={index} className="leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* Section expérience */}
        <motion.div
          {...fadeInUp}
          transition={{ delay: 0.4 }}
          className="mb-16"
        >
          <div className="flex items-center mb-8">
            <IoSchoolOutline className="text-primary text-2xl mr-3" />
            <h2 className="text-xl font-semibold text-white">Expérience & Formation</h2>
            <div className="ml-4 h-px flex-1 bg-gradient-to-r from-primary/50 to-transparent"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                {...fadeInUp}
                transition={{ delay: 0.1 * index }}
                className="relative group"
              >
                <div className="absolute -inset-1 bg-primary/20 rounded-lg blur opacity-30 
                             group-hover:opacity-60 transition-all duration-500"></div>
                <div className="relative p-5 bg-black/40 backdrop-blur-sm rounded-lg border border-white/10 hover:border-primary/30 transition-all duration-300">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="font-medium text-white">{exp.title}</h3>
                    <span className="text-xs text-white/70 bg-primary/20 px-3 py-1 rounded-full">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-sm text-white/80 mb-2">{exp.company}</p>
                  <p className="text-xs text-white/70 italic">{exp.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Section centres d'intérêt */}
        <motion.div
          {...fadeInUp}
          transition={{ delay: 0.6 }}
        >
          <div className="flex items-center mb-8">
            <IoHeartOutline className="text-primary text-2xl mr-3" />
            <h2 className="text-xl font-semibold text-white">Centres d'intérêt</h2>
            <div className="ml-4 h-px flex-1 bg-gradient-to-r from-primary/50 to-transparent"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
            {interests.map((interest, index) => (
              <motion.div
                key={index}
                {...fadeInUp}
                transition={{ delay: 0.1 * index }}
                className="relative group"
              >
                <div className="absolute -inset-1 bg-primary/20 rounded-lg blur opacity-20 
                             group-hover:opacity-50 transition-all duration-500"></div>
                <div className="relative p-4 bg-black/40 backdrop-blur-sm rounded-lg border border-white/10 hover:border-primary/30 transition-all duration-300 flex items-center gap-4">
                  <div className="w-10 h-10 flex items-center justify-center bg-primary/20 rounded-full">
                    <interest.icon className="text-primary text-lg" />
                  </div>
                  <span className="text-sm text-white/90 font-medium">{interest.name}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </main>
  );
};

export default AboutMe;
