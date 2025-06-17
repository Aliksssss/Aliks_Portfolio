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
    <main className="flex relative w-full h-screen overflow-y-auto" style={{ backgroundColor: '#F6EBD4', color: '#403011' }}>
      {/* Arrière-plan uni avec éléments lumineux */}
      <div className="absolute inset-0 z-0" style={{ backgroundColor: '#F6EBD4' }}>
        {/* Fond uni beige */}
        <div className="absolute inset-0" style={{ backgroundColor: '#F6EBD4' }}></div>
        
        {/* Éléments lumineux en arrière-plan avec nouvelles couleurs */}
        <div className="absolute top-0 right-0 w-2/3 h-2/3 rounded-full filter blur-[150px] opacity-10 transform translate-x-1/4 -translate-y-1/4" style={{ backgroundColor: '#626C3B' }}></div>
        <div className="absolute bottom-0 left-0 w-2/3 h-2/3 rounded-full filter blur-[150px] opacity-10 transform -translate-x-1/4 translate-y-1/4" style={{ backgroundColor: '#83792E' }}></div>
        
        {/* Petits points lumineux avec nouvelles couleurs */}
        <div className="absolute top-1/4 left-1/3 w-24 h-24 rounded-full filter blur-[50px] opacity-15" style={{ backgroundColor: '#E8AF3B' }}></div>
        <div className="absolute bottom-1/3 right-1/4 w-32 h-32 rounded-full filter blur-[60px] opacity-15" style={{ backgroundColor: '#CC914D' }}></div>
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
            <span style={{ color: '#403011' }}>À </span>
            <span style={{ color: '#626C3B' }}>Propos</span>
          </h1>
          <div className="h-0.5 w-24 mx-auto mt-4" style={{ background: 'linear-gradient(to right, transparent, #626C3B, transparent)' }}></div>
        </motion.div>

        {/* Section photo et introduction */}
        <motion.div
          {...fadeInUp}
          className="flex flex-col md:flex-row items-center gap-12 mb-12"
        >
          {/* Photo avec effet de glow amélioré */}
          <div className="relative group">
            <div className="absolute -inset-2 rounded-full blur-xl opacity-70 
                         group-hover:opacity-100 transition-all duration-700" style={{ background: 'linear-gradient(to bottom right, rgba(98, 108, 59, 0.4), rgba(98, 108, 59, 0.1))' }}></div>
            <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-2 
                         shadow-lg" style={{ borderColor: 'rgba(98, 108, 59, 0.3)', boxShadow: '0 10px 15px -3px rgba(98, 108, 59, 0.2)' }}>
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
              className="text-2xl font-bold mb-3"  style={{ color: '#626C3B' }}
            >
              Alisack V
            </motion.h2>
            <motion.h3
              {...fadeInUp}
              transition={{ delay: 0.2 }}
              className="mb-6 text-lg text-white/90 md:text-xl"
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#626C3B] to-[#83792E] font-medium">Webmaster & Designer Créatif</span>
            </motion.h3>
            <motion.div
              {...fadeInUp}
              transition={{ delay: 0.3 }}
              className="space-y-4 backdrop-blur-sm p-6 rounded-2xl border transition-all duration-300" style={{ backgroundColor: 'rgba(204, 145, 77, 0.1)', borderColor: 'rgba(131, 121, 46, 0.2)', color: '#403011' }}
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
            <div className="flex items-center justify-center w-10 h-10 rounded-full mr-4" style={{ backgroundColor: 'rgba(98, 108, 59, 0.2)' }}>
              <IoSchoolOutline className="text-xl" style={{ color: '#626C3B' }} />
            </div>
            <h2 className="text-xl font-semibold" style={{ color: '#403011' }}>Expérience & Formation</h2>
            <div className="ml-4 h-0.5 flex-1" style={{ background: 'linear-gradient(to right, rgba(98, 108, 59, 0.5), transparent)' }}></div>
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
                <div className="absolute -inset-1 rounded-2xl blur-md opacity-0 
                             group-hover:opacity-100 transition-all duration-500" style={{ background: 'linear-gradient(to bottom right, rgba(98, 108, 59, 0.3), transparent)' }}></div>
                <div className="relative p-6 backdrop-blur-sm rounded-2xl border transition-all duration-300 h-full" style={{ backgroundColor: 'rgba(204, 145, 77, 0.1)', borderColor: 'rgba(131, 121, 46, 0.2)' }}>
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="font-medium group-hover:transition-colors duration-300" style={{ color: '#403011' }}>{exp.title}</h3>
                    <span className="text-xs px-3 py-1 rounded-full" style={{ backgroundColor: 'rgba(98, 108, 59, 0.2)', color: '#403011' }}>
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-sm mb-3 font-medium" style={{ color: '#403011' }}>{exp.company}</p>
                  <p className="text-xs leading-relaxed" style={{ color: 'rgba(64, 48, 17, 0.8)' }}>{exp.description}</p>
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
            <div className="flex items-center justify-center w-10 h-10 rounded-full mr-4" style={{ backgroundColor: 'rgba(98, 108, 59, 0.2)' }}>
              <IoHeartOutline className="text-xl" style={{ color: '#626C3B' }} />
            </div>
            <h2 className="text-xl font-semibold" style={{ color: '#403011' }}>Centres d'intérêt</h2>
            <div className="ml-4 h-0.5 flex-1" style={{ background: 'linear-gradient(to right, rgba(98, 108, 59, 0.5), transparent)' }}></div>
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
                <div className="absolute -inset-1 rounded-2xl blur-md opacity-0 
                             group-hover:opacity-100 transition-all duration-500" style={{ background: 'linear-gradient(to bottom right, rgba(98, 108, 59, 0.2), transparent)' }}></div>
                <div className="relative p-5 backdrop-blur-sm rounded-2xl border transition-all duration-300 flex items-center gap-4 h-full" style={{ backgroundColor: 'rgba(204, 145, 77, 0.1)', borderColor: 'rgba(131, 121, 46, 0.2)' }}>
                  <div className="w-12 h-12 flex items-center justify-center rounded-full transition-colors duration-300" style={{ backgroundColor: 'rgba(98, 108, 59, 0.2)' }}>
                    <interest.icon className="text-xl" style={{ color: '#626C3B' }} />
                  </div>
                  <span className="text-sm font-medium transition-colors duration-300" style={{ color: '#403011' }}>{interest.name}</span>
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
