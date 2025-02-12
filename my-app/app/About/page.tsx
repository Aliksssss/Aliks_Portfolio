"use client";

import React from "react";
import Image from "next/image";
import { aboutText, experiences, interests } from "@/constants";
import { motion, useScroll, useTransform } from "framer-motion";
import "../styles/about.css";
import { IoSchoolOutline, IoBriefcaseOutline, IoHeartOutline } from "react-icons/io5";
import MatrixRain from "@/components/MatrixRain";

const AboutMe = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 300], [0, 100]);
  const y2 = useTransform(scrollY, [0, 300], [0, -100]);
  const opacity = useTransform(scrollY, [0, 200, 300, 500], [0.3, 1, 1, 0.3]);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div className="relative w-full min-h-screen overflow-x-hidden bg-[#030014]">
      {/* MatrixRain en arrière-plan */}
      <div className="fixed inset-0 z-0">
        <MatrixRain className="opacity-40" />
      </div>
      {/* Particules en arrière-plan */}
      <motion.div style={{ opacity }} className="absolute inset-0 overflow-hidden">
        <motion.div style={{ y: y1 }} className="absolute top-20 left-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        <motion.div style={{ y: y2 }} className="absolute bottom-20 right-10 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/4 left-1/3 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-72 h-72 bg-indigo-500/10 rounded-full blur-3xl" />
      </motion.div>

      <div className="relative z-10 flex flex-col items-center justify-start min-h-screen py-20">
        {/* Titre */}
        <motion.div
          initial={{ opacity: 1, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="flex justify-end mb-16 w-full max-w-6xl px-8"
        >
          <div className="relative z-10 px-6 py-3 rounded-xl border backdrop-blur-sm border-purple-500/20">
            <h1 className="text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-pink-500">
              À Propos
            </h1>
          </div>
        </motion.div>

        {/* Section 1: Introduction */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full max-w-6xl px-8 mb-32"
        >
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
            {/* Photo avec effet de hover */}
            <motion.div
              variants={item}
              className="relative flex-shrink-0 group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded-full blur-xl 
                             transition-all duration-300 group-hover:blur-2xl group-hover:scale-110" />
              <div className="relative w-[250px] h-[250px] rounded-full overflow-hidden border-2 border-white/10 
                             bg-black/40 backdrop-blur-sm transition-transform duration-300 group-hover:scale-105">
                <Image
                  src="/Alisack_magic.png"
                  alt="Alisack Portrait"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                  priority
                />
              </div>
            </motion.div>

            {/* Description */}
            <motion.div variants={item} className="relative flex-grow">
              <div className="relative p-8 bg-black/40 backdrop-blur-sm rounded-2xl border border-white/10 
                             hover:bg-black/50 transition-all duration-300">
                <h2 className="mb-6 text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                  Introduction
                </h2>
                <div className="space-y-4">
                  <p className="text-gray-300 leading-relaxed text-lg">
                    {aboutText.introduction}
                  </p>
                  <p className="text-gray-300 leading-relaxed text-lg">
                    {aboutText.mission}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Section 2: Formation */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full max-w-6xl px-8 mb-32"
        >
          <div className="relative group p-8 bg-black/40 backdrop-blur-sm rounded-2xl border border-white/10">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-2xl blur-xl 
                           transition-all duration-300 group-hover:blur-2xl" />
            <div className="relative">
              <div className="flex items-center gap-4 mb-8">
                <IoSchoolOutline className="w-10 h-10 text-purple-400" />
                <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                  Formation
                </h2>
              </div>
              <div className="grid gap-6 md:grid-cols-2">
                {experiences.map((exp, index) => (
                  <motion.div
                    key={index}
                    variants={item}
                    className="relative p-6 bg-white/5 rounded-xl hover:bg-white/10 transition-colors duration-300"
                  >
                    <h3 className="text-xl font-semibold text-purple-300 mb-2">{exp.title}</h3>
                    <p className="text-pink-300 mb-3">{exp.period}</p>
                    <p className="text-gray-400">{exp.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.section>

        {/* Section 3: Intérêts */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="w-full max-w-6xl px-8"
        >
          <div className="relative group p-8 bg-black/40 backdrop-blur-sm rounded-2xl border border-white/10">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-pink-500/10 rounded-2xl blur-xl 
                           transition-all duration-300 group-hover:blur-2xl" />
            <div className="relative">
              <div className="flex items-center gap-4 mb-8">
                <IoHeartOutline className="w-10 h-10 text-indigo-400" />
                <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-pink-400">
                  Centres d'intérêt
                </h2>
              </div>
              <div className="grid gap-6 md:grid-cols-3">
                {interests.map((interest, index) => (
                  <motion.div
                    key={index}
                    variants={item}
                    className="relative p-6 bg-white/5 rounded-xl hover:bg-white/10 transition-colors duration-300"
                  >
                    <h3 className="text-xl font-semibold text-indigo-300 mb-3">{interest.title}</h3>
                    <p className="text-gray-400">{interest.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default AboutMe;
