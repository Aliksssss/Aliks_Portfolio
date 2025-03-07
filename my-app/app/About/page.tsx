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
    <main className="relative w-full min-h-screen bg-gradient-to-b from-[#030014] to-[#090041] text-white overflow-hidden">
      {/* Fond animé */}
      <div className="fixed inset-0 z-0">
        <MatrixRain className="opacity-40" />
      </div>

      {/* Conteneur principal */}
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
            <div className="relative px-6 py-3 bg-black/50 backdrop-blur-xl rounded-lg border border-white/10">
              <h1 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">
                À Propos
              </h1>
            </div>
          </div>
        </motion.div>

        {/* En-tête avec photo */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row items-center gap-8 mb-12"
        >
          {/* Photo de profil */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600/50 to-pink-600/50 rounded-full blur-xl opacity-75 
                         group-hover:opacity-100 transition-all duration-500"></div>
            <div className="relative w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border border-white/10 
                         shadow-2xl shadow-purple-500/20">
              <Image
                src="/Alisack_magic.png"
                alt="Alisack Portrait"
                fill
                className="object-cover transform group-hover:scale-110 transition duration-700 ease-out"
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
              className="space-y-4 backdrop-blur-xl bg-white/5 rounded-2xl p-5 border border-white/10"
            >
              <p className="text-base text-gray-300 leading-relaxed">{aboutText.introduction}</p>
              <p className="text-base text-gray-300 leading-relaxed">{aboutText.mission}</p>
            </motion.div>
          </div>
        </motion.div>

        {/* Section Formation */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 rounded-lg bg-purple-500/10 backdrop-blur-xl border border-white/10">
              <IoSchoolOutline className="w-5 h-5 text-purple-300" />
            </div>
            <h2 className="text-2xl font-bold tracking-tight bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">
              Expériences 
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600/50 to-pink-600/50 rounded-2xl blur-xl opacity-50 
                             group-hover:opacity-75 transition-all duration-500"></div>
                <div className="relative h-full backdrop-blur-xl bg-black/50 rounded-2xl border border-white/10 p-5 
                             transform transition-all duration-500 hover:-translate-y-1">
                  <div className="flex flex-col h-full">
                    <div className="flex-1">
                      <div className="flex flex-col gap-2">
                        <h3 className="text-base font-semibold text-purple-200 group-hover:text-pink-200 transition-colors duration-300">
                          {exp.title}
                        </h3>
                        <span className="text-xs px-3 py-1 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 w-fit">
                          {exp.period}
                        </span>
                      </div>
                      <div className="mt-3 text-sm text-gray-300 leading-relaxed space-y-4 whitespace-pre-wrap">
                        {exp.description}
                      </div>
                    </div>
                  </div>
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
            <div className="p-2 rounded-lg bg-pink-500/10 backdrop-blur-xl border border-white/10">
              <IoHeartOutline className="w-5 h-5 text-pink-300" />
            </div>
            <h2 className="text-2xl font-bold tracking-tight bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">
              Centres d'intérêt
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {interests.map((interest, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600/50 to-pink-600/50 rounded-2xl blur-xl opacity-50 
                             group-hover:opacity-75 transition-all duration-500"></div>
                <div className="relative h-full backdrop-blur-xl bg-black/50 rounded-2xl border border-white/10 p-5 
                             transform transition-all duration-500 hover:-translate-y-1">
                  <div className="flex flex-col h-full">
                    <div className="flex-1">
                      <h3 className="text-base font-semibold text-purple-200 group-hover:text-pink-200 transition-colors duration-300 mb-3">
                        {interest.title}
                      </h3>
                      <div className="text-sm text-gray-300 leading-relaxed space-y-4 whitespace-pre-wrap">
                        {interest.description}
                      </div>
                    </div>
                  </div>
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
