"use client";

import React from "react";
import Image from "next/image";
import { aboutText, experiences, interests } from "@/constants";
import { motion } from "framer-motion";
import { IoSchoolOutline, IoHeartOutline } from "react-icons/io5";
import MatrixRain from "@/components/MatrixRain";

const AboutMe = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  return (
    <main className="relative w-full min-h-screen bg-[#030014] text-white overflow-hidden">
      {/* Fond animé */}
      <div className="fixed inset-0 z-0">
        <MatrixRain className="opacity-30" />
      </div>

      {/* Conteneur principal */}
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
              À Propos
            </h1>
          </div>
        </motion.div>

        {/* En-tête avec photo */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row items-center gap-8 mb-16"
        >
          {/* Photo de profil */}
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur opacity-30 
                           group-hover:opacity-60 transition duration-500"></div>
            <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-2xl overflow-hidden border border-purple-500/20">
              <Image
                src="/Alisack_magic.png"
                alt="Alisack Portrait"
                fill
                className="object-cover transform group-hover:scale-110 transition duration-500"
                priority
              />
            </div>
          </div>

          {/* Texte d'introduction */}
          <div className="flex-1 max-w-2xl">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-4"
            >
              <p className="text-gray-300 leading-relaxed">{aboutText.introduction}</p>
              <p className="text-gray-300 leading-relaxed">{aboutText.mission}</p>
            </motion.div>
          </div>
        </motion.div>

        {/* Section Formation */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-8">
            <IoSchoolOutline className="w-6 h-6 text-purple-500" />
            <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
              Formation
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-20 
                               group-hover:opacity-40 transition duration-500"></div>
                <div className="relative p-4 bg-black/40 backdrop-blur-sm rounded-lg border border-purple-500/20 
                               hover:border-purple-500/40 transition duration-300">
                  <h3 className="text-lg font-semibold text-purple-400 mb-2 group-hover:text-pink-400 transition-colors">
                    {exp.title}
                  </h3>
                  <p className="text-sm text-pink-400/80 mb-2">{exp.period}</p>
                  <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                    {exp.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Section Centres d'intérêt */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-3 mb-8">
            <IoHeartOutline className="w-6 h-6 text-pink-500" />
            <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
              Centres d'intérêt
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {interests.map((interest, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-20 
                               group-hover:opacity-40 transition duration-500"></div>
                <div className="relative p-4 bg-black/40 backdrop-blur-sm rounded-lg border border-purple-500/20 
                               hover:border-purple-500/40 transition duration-300">
                  <h3 className="text-base font-semibold text-purple-400 mb-2 group-hover:text-pink-400 transition-colors">
                    {interest.title}
                  </h3>
                  <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                    {interest.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
    </main>
  );
};

export default AboutMe;
