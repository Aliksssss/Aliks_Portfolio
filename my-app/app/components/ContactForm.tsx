"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [showNameModal, setShowNameModal] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));

    // Afficher le modal lorsque le nom est entré
    if (name === 'name' && value.trim() !== '' && !showNameModal) {
      setShowNameModal(true);
      // Cacher le modal après 3 secondes
      setTimeout(() => setShowNameModal(false), 3000);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Logique d'envoi du formulaire
    console.log('Form submitted:', formData);
  };

  return (
    <div className="relative">
      {/* Modal de bienvenue */}
      <AnimatePresence>
        {showNameModal && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.3 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5, transition: { duration: 0.2 } }}
            className="absolute -top-16 left-1/2 transform -translate-x-1/2 z-50"
          >
            <div className="bg-black/80 backdrop-blur-sm border border-purple-500/20 px-6 py-3 rounded-xl shadow-xl">
              <p className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500 font-semibold">
                Ravi de vous rencontrer, {formData.name} ! 👋
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="w-full">
        <h1 className="mb-2 text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500">
          Contact ✌️
        </h1>
        <p className="mb-8 text-center text-gray-400">
          Envoyez-moi un message
        </p>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-20 
                           group-hover:opacity-40 transition duration-500"></div>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Votre nom"
              className="relative w-full px-4 py-3 bg-black/40 backdrop-blur-sm rounded-lg border border-purple-500/20 
                       text-white placeholder-gray-400 focus:outline-none focus:border-purple-500/40 transition-colors"
              required
            />
          </div>

          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-20 
                           group-hover:opacity-40 transition duration-500"></div>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Votre email"
              className="relative w-full px-4 py-3 bg-black/40 backdrop-blur-sm rounded-lg border border-purple-500/20 
                       text-white placeholder-gray-400 focus:outline-none focus:border-purple-500/40 transition-colors"
              required
            />
          </div>

          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-20 
                           group-hover:opacity-40 transition duration-500"></div>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Votre message"
              rows={4}
              className="relative w-full px-4 py-3 bg-black/40 backdrop-blur-sm rounded-lg border border-purple-500/20 
                       text-white placeholder-gray-400 focus:outline-none focus:border-purple-500/40 transition-colors"
              required
            />
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="w-full px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg text-white font-semibold 
                     hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:-translate-y-0.5"
          >
            Envoyer 👍
          </motion.button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
