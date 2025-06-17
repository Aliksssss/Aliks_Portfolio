"use client";

import React from "react";
import { motion } from "framer-motion";
import ContactForm from "../components/ContactForm";

const Page = () => {
  return (
    <main className="relative w-full min-h-screen bg-[#F6EBD4] text-[#403011]">
      {/* Arrière-plan beige */}
      <div className="absolute inset-0 z-0 bg-[#F6EBD4]">
        <div className="absolute inset-0"></div>
        
        {/* Éléments subtils pour ajouter de la profondeur */}
        <div className="absolute top-0 right-0 w-1/2 h-1/2 rounded-full filter blur-[180px] opacity-20" style={{ backgroundColor: '#626C3B' }}></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 rounded-full filter blur-[180px] opacity-20" style={{ backgroundColor: '#83792E' }}></div>
        
        {/* Éléments lumineux pour un effet moderne */}
        <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full filter blur-[80px] opacity-15" style={{ backgroundColor: '#E8AF3B' }}></div>
        <div className="absolute bottom-1/4 right-1/4 w-32 h-32 rounded-full filter blur-[80px] opacity-15" style={{ backgroundColor: '#CC914D' }}></div>
      </div>
      
      <div className="relative z-10 flex flex-col items-center justify-center w-full h-full py-12">
        {/* En-tête minimaliste */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h1 className="text-3xl md:text-4xl font-bold inline-block">
            <span style={{ color: '#403011' }}>Me </span>
            <span style={{ color: '#626C3B' }}>Contacter</span>
          </h1>
          <div className="h-0.5 w-24 mx-auto mt-4" style={{ background: 'linear-gradient(to right, transparent, #626C3B, transparent)' }}></div>
        </motion.div>
        
        <div className="w-full max-w-md">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute -inset-1 rounded-lg blur-lg opacity-50" style={{ backgroundColor: 'rgba(98, 108, 59, 0.1)' }}></div>
            <div className="relative backdrop-blur-sm overflow-hidden p-6" style={{ backgroundColor: 'rgba(204, 145, 77, 0.1)', borderColor: 'rgba(131, 121, 46, 0.2)', border: '1px solid' }}>
              <ContactForm />
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
};

export default Page;
