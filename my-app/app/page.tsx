'use client';

import Link from "next/link";
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <main className="flex overflow-hidden absolute inset-0 justify-center items-center bg-secondary">
      <div className="absolute inset-0 z-0">
        {/* Fond moderne avec dégradé rose et noir */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary"></div>
        
        {/* Éléments lumineux en arrière-plan */}
        <div className="absolute top-0 right-0 w-2/3 h-2/3 bg-primary rounded-full filter blur-[120px] opacity-20 transform translate-x-1/4 -translate-y-1/4"></div>
        <div className="absolute bottom-0 left-0 w-2/3 h-2/3 bg-primary rounded-full filter blur-[120px] opacity-20 transform -translate-x-1/4 translate-y-1/4"></div>
        
        {/* Ajout de petits points lumineux */}
        <div className="absolute top-1/4 left-1/3 w-24 h-24 bg-primary rounded-full filter blur-[50px] opacity-15 glow-effect"></div>
        <div className="absolute bottom-1/3 right-1/4 w-32 h-32 bg-primary rounded-full filter blur-[60px] opacity-15 glow-effect"></div>
      </div>
      
      <div className="flex relative justify-center items-center w-full h-full">
        <div className="relative z-[30] px-6 md:px-20 w-full max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-start text-left"
          >
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-6xl md:text-7xl lg:text-8xl font-bold mb-4"
            >
              <span className="text-primary">Alisack </span>
              <span className="text-white">V.</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mb-10 text-lg text-white/90 md:text-xl max-w-md"
            >
             Webmaster Freelance & Designer Créatif
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex gap-4"
            >
              <Link 
                href="/Contact"
                className="inline-block px-6 py-3 text-l font-medium text-white bg-primary rounded-full transition-all duration-300 hover:bg-primary/80 hover:scale-105 cursor-pointer"
              >
                Me Contacter
              </Link>
              <Link 
                href="/My-Projects"
                className="inline-block px-6 py-3 text-l font-medium text-white bg-transparent border border-white/30 rounded-full transition-all duration-300 hover:bg-white/10 hover:scale-105"
              >
                Mes Projets
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
