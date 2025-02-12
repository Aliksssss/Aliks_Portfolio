"use client";

import { Projects } from "@/constants";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const ProjectsPage = () => {
  return (
    <div className="w-full min-h-screen">
      <div className="px-8 w-full md:px-16 lg:px-32">
        <div className="py-20">
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
              <div className="absolute -inset-[2px] bg-gradient-to-r from-pink-500 via-purple-500 to-pink-500 rounded-xl opacity-20 blur-sm group-hover:opacity-30 transition-opacity duration-300 z-[-1]"></div>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {Projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className="relative overflow-hidden rounded-xl card-rectangle">
                  <div className="card-content">
                    {/* Image du projet */}
                    <div className="relative mb-4 w-full h-48 overflow-hidden rounded-lg">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                    </div>

                    {/* Titre et description */}
                    <h3 className="mb-2 text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                      {project.title}
                    </h3>
                    <p className="mb-4 text-gray-300">
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-2 py-1 text-sm text-purple-300 bg-purple-900/30 rounded-full border border-purple-500/20"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Liens */}
                    <div className="flex gap-4">
                      <Link
                        href={project.source}
                        target="_blank"
                        className="px-4 py-2 text-sm font-semibold text-white transition-colors duration-300 bg-purple-600 rounded-lg hover:bg-purple-700"
                      >
                        Code Source
                      </Link>
                      <Link
                        href={project.demo}
                        target="_blank"
                        className="px-4 py-2 text-sm font-semibold transition-colors duration-300 border rounded-lg text-purple-400 border-purple-500/20 hover:bg-purple-900/30"
                      >
                        Démo Live
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
