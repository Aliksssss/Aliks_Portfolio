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
    <main className="flex relative w-full h-screen bg-secondary text-white overflow-y-auto">
      {/* Arrière-plan moderne avec dégradé et éléments lumineux */}
      <div className="absolute inset-0 z-0">
        {/* Fond avec dégradé noir et violet */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-secondary to-primary/10"></div>
        
        {/* Éléments lumineux en arrière-plan */}
        <div className="absolute top-0 right-0 w-2/3 h-2/3 bg-primary/20 rounded-full filter blur-[150px] opacity-20 transform translate-x-1/4 -translate-y-1/4"></div>
        <div className="absolute bottom-0 left-0 w-2/3 h-2/3 bg-primary/20 rounded-full filter blur-[150px] opacity-20 transform -translate-x-1/4 translate-y-1/4"></div>
        
        {/* Petits points lumineux */}
        <div className="absolute top-1/4 left-1/3 w-24 h-24 bg-primary/30 rounded-full filter blur-[50px] opacity-20"></div>
        <div className="absolute bottom-1/3 right-1/4 w-32 h-32 bg-primary/30 rounded-full filter blur-[60px] opacity-20"></div>
      </div>
      
      {/* Conteneur principal */}
      <div className="container mx-auto px-4 py-10 md:py-16 relative z-10 mb-6">
        {/* Titre moderne */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold inline-block">
            <span className="text-white">À </span>
            <span className="text-primary">Propos</span>
          </h1>
          <div className="h-0.5 w-24 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mt-4"></div>
        </motion.div>

        {/* Section photo et introduction */}
        <motion.div
          {...fadeInUp}
          className="flex flex-col md:flex-row items-center gap-12 mb-12"
        >
          {/* Photo avec effet de glow amélioré */}
          <div className="relative group">
            <div className="absolute -inset-2 bg-gradient-to-br from-primary/40 to-primary/10 rounded-full blur-xl opacity-70 
                         group-hover:opacity-100 transition-all duration-700"></div>
            <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-2 border-white/10 
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
              className="text-2xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80"
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
              className="text-white/80 space-y-4 backdrop-blur-sm p-6 rounded-2xl bg-black/20 border border-white/5 hover:border-primary/20 transition-all duration-300"
            >
              {aboutText.map((paragraph, index) => (
                <p key={index} className="leading-relaxed text-sm">
                  {paragraph}
                </p>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* Section expérience */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 mb-6"
        >
          <div className="flex items-center mb-10">
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/20 mr-4">
              <IoSchoolOutline className="text-primary text-xl" />
            </div>
            <h2 className="text-xl font-semibold text-white">Expérience & Formation</h2>
            <div className="ml-4 h-0.5 flex-1 bg-gradient-to-r from-primary/50 to-transparent"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + 0.1 * index }}
                whileHover={{ y: -5 }}
                className="relative group"
              >
                <div className="absolute -inset-1 bg-gradient-to-br from-primary/30 to-transparent rounded-2xl blur-md opacity-0 
                             group-hover:opacity-100 transition-all duration-500"></div>
                <div className="relative p-6 bg-black/30 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-primary/30 transition-all duration-300 h-full">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="font-medium text-white group-hover:text-primary transition-colors duration-300">{exp.title}</h3>
                    <span className="text-xs text-white/90 bg-primary/20 px-3 py-1 rounded-full">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-sm text-white/80 mb-3 font-medium">{exp.company}</p>
                  <p className="text-xs text-white/70 leading-relaxed">{exp.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Section centres d'intérêt */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16 mb-6"
        >
          <div className="flex items-center mb-10">
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/20 mr-4">
              <IoHeartOutline className="text-primary text-xl" />
            </div>
            <h2 className="text-xl font-semibold text-white">Centres d'intérêt</h2>
            <div className="ml-4 h-0.5 flex-1 bg-gradient-to-r from-primary/50 to-transparent"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {interests.map((interest, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + 0.1 * index }}
                whileHover={{ scale: 1.03 }}
                className="relative group cursor-pointer"
              >
                <div className="absolute -inset-1 bg-gradient-to-br from-primary/20 to-transparent rounded-2xl blur-md opacity-0 
                             group-hover:opacity-100 transition-all duration-500"></div>
                <div className="relative p-5 bg-black/30 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-primary/30 transition-all duration-300 flex items-center gap-4 h-full">
                  <div className="w-12 h-12 flex items-center justify-center bg-primary/20 rounded-full group-hover:bg-primary/30 transition-colors duration-300">
                    <interest.icon className="text-primary text-xl" />
                  </div>
                  <span className="text-sm text-white/90 font-medium group-hover:text-white transition-colors duration-300">{interest.name}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        {/* Espace supplémentaire en bas pour éviter le chevauchement avec la barre sociale */}
        <div className="pb-16"></div>
      </div>
    </main>
  );
};

export default AboutMe;
