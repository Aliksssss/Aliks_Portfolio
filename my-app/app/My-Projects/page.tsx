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
      <div className="relative overflow-hidden rounded-xl shadow-md h-full transition-all duration-300
                    hover:shadow-lg border border-transparent group cursor-pointer" 
      style={{ 
        backgroundColor: 'rgba(204, 145, 77, 0.1)', 
        borderColor: 'rgba(131, 121, 46, 0.2)' 
      }}>
        
        {/* Image du projet avec overlay */}
        <div className="relative w-full h-48 overflow-hidden">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 opacity-80 group-hover:opacity-70 transition-opacity duration-300" style={{ background: 'linear-gradient(to top, rgba(64, 48, 17, 0.9), rgba(64, 48, 17, 0.5), transparent)' }}></div>
          
          {/* Technologies utilisées (positionnées sur l'image) */}
          <div className="absolute bottom-3 right-3 flex flex-wrap justify-end gap-1.5 max-w-[80%] transition-transform duration-300 group-hover:translate-y-[-3px]">
            {project.tags && project.tags.slice(0, 3).map((tech: string, techIndex: number) => (
              <span 
                key={techIndex}
                className="px-2 py-1 text-[10px] backdrop-blur-sm rounded-full font-medium transition duration-300" 
                style={{ 
                  backgroundColor: 'rgba(64, 48, 17, 0.7)', 
                  color: '#F6EBD4' 
                }}
              >
                {tech}
              </span>
            ))}
            {project.tags && project.tags.length > 3 && (
              <span className="px-2 py-1 text-[10px] backdrop-blur-sm rounded-full font-medium transition duration-300"
                style={{ 
                  backgroundColor: 'rgba(64, 48, 17, 0.7)', 
                  color: '#F6EBD4' 
                }}>
                +{project.tags.length - 3}
              </span>
            )}
          </div>
        </div>
        
        {/* Contenu du projet */}
        <div className="p-5">
          <h3 className="text-base font-medium mb-2 transition duration-300 flex items-center" style={{ color: '#403011' }}>
            <span className="inline-block w-1.5 h-1.5 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition duration-300" style={{ backgroundColor: '#626C3B' }}></span>
            {project.title}
          </h3>
          <p className="text-xs mb-4 line-clamp-2 transition duration-300" style={{ color: 'rgba(64, 48, 17, 0.8)' }}>
            {project.description}
          </p>
          
          {/* Ligne de séparation avec animation */}
          <div className="w-0 h-px mb-4 group-hover:w-full transition duration-500 ease-out" style={{ backgroundColor: 'rgba(98, 108, 59, 0.3)' }}></div>
          
          {/* Liens */}
          <div className="flex gap-3">
            {project.demo && (
              <Link 
                href={project.demo} 
                target="_blank"
                className="px-3 py-1.5 text-xs font-medium transition duration-300 flex items-center gap-1 rounded-full cursor-pointer transform group-hover:translate-y-[-2px]" 
                style={{ 
                  backgroundColor: '#626C3B', 
                  color: '#F6EBD4' 
                }}
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
                className="px-3 py-1.5 text-xs font-medium bg-transparent transition duration-300 flex items-center gap-1 border border-transparent rounded-full cursor-pointer transform group-hover:translate-y-[-2px]" 
                style={{ 
                  color: '#403011', 
                  borderColor: 'rgba(98, 108, 59, 0.3)' 
                }}
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
    <main className="relative w-full min-h-screen overflow-hidden" style={{ backgroundColor: '#F6EBD4', color: '#403011' }}>
      {/* Arrière-plan beige */}
      <div className="absolute inset-0 z-0" style={{ backgroundColor: '#F6EBD4' }}>
        <div className="absolute inset-0" style={{ backgroundColor: '#F6EBD4' }}></div>
        
        {/* Éléments subtils pour ajouter de la profondeur */}
        <div className="absolute top-0 right-0 w-1/2 h-1/2 rounded-full filter blur-[180px] opacity-20" style={{ backgroundColor: '#626C3B' }}></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 rounded-full filter blur-[180px] opacity-20" style={{ backgroundColor: '#83792E' }}></div>
        
        {/* Éléments lumineux pour un effet moderne */}
        <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full filter blur-[80px] opacity-15" style={{ backgroundColor: '#E8AF3B' }}></div>
        <div className="absolute bottom-1/4 right-1/4 w-32 h-32 rounded-full filter blur-[80px] opacity-15" style={{ backgroundColor: '#CC914D' }}></div>
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
            <span style={{ color: '#403011' }}>Mes </span>
            <span style={{ color: '#626C3B' }}>Projets</span>
          </h1>
          <div className="h-0.5 w-24 mx-auto mt-4" style={{ background: 'linear-gradient(to right, transparent, #626C3B, transparent)' }}></div>
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
