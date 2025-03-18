"use client"

import { Projects } from "@/constants";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import MatrixRain from "@/components/MatrixRain";

const ProjectCard = ({ project, index }: { project: any; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative group"
    >
      {/* Effet de glow en arrière-plan */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-lg blur-lg 
                     opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Carte principale */}
      <div className="relative overflow-hidden rounded-lg border border-white/5 backdrop-blur-sm 
                     bg-black/30 hover:bg-black/40 transition-all duration-500 group-hover:border-purple-500/20">
        {/* Image du projet */}
        <div className="relative h-40 overflow-hidden">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          {/* Overlay au survol */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-0 
                         group-hover:opacity-100 transition-opacity duration-500" />
        </div>

        {/* Contenu */}
        <div className="p-4">
          <h3 className="text-lg font-semibold mb-2 text-transparent bg-clip-text bg-gradient-to-r 
                         from-purple-300 to-pink-300 group-hover:from-purple-200 group-hover:to-pink-200 transition-colors duration-300">
            {project.title}
          </h3>
          <p className="text-xs italic text-gray-400 mb-3 line-clamp-2 group-hover:text-gray-300 transition-colors duration-300">
            {project.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5 mb-3">
            {project.tags.map((tag: string, tagIndex: number) => (
              <span
                key={tagIndex}
                className="px-2 py-0.5 text-xs rounded-md bg-white/5 border border-white/10 
                         text-gray-300 group-hover:bg-purple-500/10 group-hover:border-purple-500/20 transition-all duration-300"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Lien démo */}
          {project.demo && (
            <Link
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-md bg-purple-500/20 text-purple-300 hover:bg-purple-500/30 
                       transition-all duration-300 group-hover:scale-[1.02]"
            >
              <span>Voir le projet</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-3.5 w-3.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </Link>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const ProjectsPage = () => {
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
            <div className="relative px-6 py-3 bg-black/50 backdrop-blur-xl rounded-lg border border-white/10">
              <h1 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">
                Mes Projets
              </h1>
            </div>
          </div>
        </motion.div>

        {/* Grille de projets */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {Projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
