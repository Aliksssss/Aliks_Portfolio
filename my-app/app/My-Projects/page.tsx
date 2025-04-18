"use client"

import { Projects } from "@/constants";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

// Animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 }
};

// Composant de carte de projet minimaliste et moderne
const ProjectCard = ({ project, index }: { project: any; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      className="relative group"
      whileHover={{ y: -5 }}
    >
      <div className="relative overflow-hidden bg-black/10 rounded-xl shadow-md h-full transition-all duration-300
                    hover:shadow-lg hover:shadow-primary/20 border border-transparent hover:border-primary/20 group">
        
        {/* Image du projet avec overlay */}
        <div className="relative w-full h-48 overflow-hidden">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-80 group-hover:opacity-70 transition-opacity duration-300"></div>
          
          {/* Technologies utilisées (positionnées sur l'image) */}
          <div className="absolute bottom-3 right-3 flex flex-wrap justify-end gap-1.5 max-w-[80%] transition-transform duration-300 group-hover:translate-y-[-3px]">
            {project.tags && project.tags.slice(0, 3).map((tech: string, techIndex: number) => (
              <span 
                key={techIndex}
                className="px-2 py-1 text-[10px] bg-black/70 text-white/90 backdrop-blur-sm rounded-full font-medium transition duration-300 group-hover:bg-primary/80"
              >
                {tech}
              </span>
            ))}
            {project.tags && project.tags.length > 3 && (
              <span className="px-2 py-1 text-[10px] bg-black/70 text-white/90 backdrop-blur-sm rounded-full font-medium transition duration-300 group-hover:bg-primary/80">
                +{project.tags.length - 3}
              </span>
            )}
          </div>
        </div>
        
        {/* Contenu du projet */}
        <div className="p-5">
          <h3 className="text-base font-medium mb-2 text-white group-hover:text-primary transition duration-300 flex items-center">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary mr-2 opacity-0 group-hover:opacity-100 transition duration-300"></span>
            {project.title}
          </h3>
          <p className="text-white/70 text-xs mb-4 line-clamp-2 group-hover:text-white/90 transition duration-300">
            {project.description}
          </p>
          
          {/* Ligne de séparation avec animation */}
          <div className="w-0 h-px bg-primary/30 mb-4 group-hover:w-full transition duration-500 ease-out"></div>
          
          {/* Liens */}
          <div className="flex gap-3">
            {project.demo && (
              <Link 
                href={project.demo} 
                target="_blank"
                className="px-3 py-1.5 text-xs font-medium bg-primary text-white hover:bg-primary/90 transition duration-300 flex items-center gap-1 rounded-full cursor-pointer transform group-hover:translate-y-[-2px]"
              >
                <span>Voir</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </Link>
            )}
            {project.github && (
              <Link 
                href={project.github} 
                target="_blank"
                className="px-3 py-1.5 text-xs font-medium bg-transparent text-white/80 hover:text-white transition duration-300 flex items-center gap-1 group-hover:text-primary/90 border border-transparent group-hover:border-primary/30 rounded-full cursor-pointer transform group-hover:translate-y-[-2px]"
              >
                <span>Code</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </Link>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const ProjectsPage = () => {
  return (
    <main className="relative w-full min-h-screen bg-secondary text-white overflow-hidden">
      {/* Arrière-plan minimaliste */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-secondary via-black to-primary/20"></div>
        
        {/* Éléments subtils pour ajouter de la profondeur */}
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-primary/10 rounded-full filter blur-[180px] opacity-30"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-primary/10 rounded-full filter blur-[180px] opacity-30"></div>
        
        {/* Éléments lumineux pour un effet moderne */}
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-primary/5 rounded-full filter blur-[80px]"></div>
        <div className="absolute bottom-1/4 right-1/4 w-32 h-32 bg-primary/5 rounded-full filter blur-[80px]"></div>
      </div>
      
      <div className="relative z-10 container mx-auto px-4 py-16 max-w-6xl">
        {/* En-tête minimaliste */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h1 className="text-3xl md:text-4xl font-bold inline-block">
            <span className="text-white">Mes </span>
            <span className="text-primary">Projets</span>
          </h1>
          <div className="h-px w-16 bg-primary/50 mx-auto mt-3"></div>
        </motion.div>

        {/* Grille de projets */}
        <motion.div 
          variants={fadeInUp}
          initial="initial"
          animate="animate"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto"
        >
          {Projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </motion.div>
      </div>
    </main>
  );
};

export default ProjectsPage;
