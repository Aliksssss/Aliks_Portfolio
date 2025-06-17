'use client';

import Link from "next/link";
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <main className="flex relative inset-0 justify-center items-center h-screen overflow-hidden" style={{ backgroundColor: '#F6EBD4' }}>
      <div className="absolute inset-0 z-0" style={{ backgroundColor: '#F6EBD4' }}>
        {/* Fond uni beige */}
        <div className="absolute inset-0" style={{ backgroundColor: '#F6EBD4' }}></div>
        
        {/* Éléments lumineux en arrière-plan avec nouvelles couleurs */}
        <div className="absolute top-0 right-0 w-2/3 h-2/3 rounded-full filter blur-[120px] opacity-10 transform translate-x-1/4 -translate-y-1/4" style={{ backgroundColor: '#626C3B' }}></div>
        <div className="absolute bottom-0 left-0 w-2/3 h-2/3 rounded-full filter blur-[120px] opacity-10 transform -translate-x-1/4 translate-y-1/4" style={{ backgroundColor: '#83792E' }}></div>
        
        {/* Ajout de petits points lumineux avec nouvelles couleurs */}
        <div className="absolute top-1/4 left-1/3 w-24 h-24 rounded-full filter blur-[50px] opacity-15 glow-effect" style={{ backgroundColor: '#E8AF3B' }}></div>
        <div className="absolute bottom-1/3 right-1/4 w-32 h-32 rounded-full filter blur-[60px] opacity-15 glow-effect" style={{ backgroundColor: '#CC914D' }}></div>
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
              <span style={{ color: '#626C3B' }}>Alisack </span>
              <span style={{ color: '#403011' }}>V.</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mb-10 text-lg md:text-xl max-w-md"
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#626C3B] to-[#83792E] font-medium">
                Webmaster Freelance & Designer Créatif
              </span>
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex gap-4"
            >
              <Link 
                href="/Contact"
                className="inline-block px-6 py-3 text-l font-medium rounded-full transition-all duration-300 hover:scale-105 cursor-pointer"
                style={{ backgroundColor: '#626C3B', color: '#F6EBD4' }}
              >
                Me Contacter
              </Link>
              <Link 
                href="/My-Projects"
                className="inline-block px-6 py-3 text-l font-medium rounded-full transition-all duration-300 hover:scale-105"
                style={{ backgroundColor: 'transparent', color: '#403011', border: '1px solid #83792E' }}
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
