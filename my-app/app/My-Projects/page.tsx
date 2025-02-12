"use client";

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
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-xl blur-xl 
                     opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Carte principale */}
      <div className="relative overflow-hidden rounded-xl border border-purple-500/20 backdrop-blur-sm 
                     bg-black/40 hover:bg-purple-900/60 transition-all duration-300">
        {/* Image du projet */}
        <div className="relative h-48 overflow-hidden">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-110"
          />
          {/* Overlay au survol */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 
                         group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        {/* Contenu */}
        <div className="p-6">
          <h3 className="text-xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r 
                         from-purple-400 to-pink-400">
            {project.title}
          </h3>
          <p className="text-gray-300 mb-4 line-clamp-2">
            {project.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tag: string, tagIndex: number) => (
              <span
                key={tagIndex}
                className="px-3 py-1 text-sm rounded-full bg-purple-500/10 border border-purple-500/20 
                         text-purple-300 hover:bg-purple-500/20 transition-colors duration-300"
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
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r 
                       from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600 
                       transition-all duration-300 transform hover:scale-105"
            >
              <span>Voir le projet</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
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
          className="flex justify-end mb-16 w-full"
        >
          <div className="relative z-10 px-6 py-3 rounded-xl border backdrop-blur-sm border-purple-500/20">
            <h1 className="text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-pink-500">
              Mes Projets
            </h1>
          </div>
        </motion.div>

        {/* Grille de projets */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
