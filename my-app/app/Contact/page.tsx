"use client";

import React from "react";
import { motion } from "framer-motion";
import ContactForm from "../components/ContactForm";

const Page = () => {
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
      
      <div className="relative z-10 flex flex-col items-center justify-center w-full h-full py-16">
        {/* En-tête minimaliste */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h1 className="text-3xl md:text-4xl font-bold inline-block">
            <span className="text-white">Me </span>
            <span className="text-primary">Contacter</span>
          </h1>
          <div className="h-px w-16 bg-primary/50 mx-auto mt-3"></div>
        </motion.div>
        
        <div className="w-full max-w-md">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute -inset-1 bg-primary/10 rounded-lg blur-lg opacity-50"></div>
            <div className="relative bg-black/30 backdrop-blur-sm overflow-hidden p-6">
              <ContactForm />
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
};

export default Page;
