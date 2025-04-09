"use client";

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { EMAILJS_CONFIG } from '@/constants/emailjs';

const ContactForm = () => {
  const form = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    to_name: 'Aliks', // Nom du destinataire
    name: '',
    email: '',
    message: ''
  });
  const [showNameModal, setShowNameModal] = useState(false);
  const [nameEntered, setNameEntered] = useState(false);

  useEffect(() => {
    emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));

    if (name === 'name') {
      if (value.trim() !== '' && !showNameModal) {
        setShowNameModal(true);
        setTimeout(() => setShowNameModal(false), 3000);
      }
      setNameEntered(value.trim() !== '');
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!form.current) return;

    emailjs.sendForm(
      EMAILJS_CONFIG.SERVICE_ID,
      EMAILJS_CONFIG.TEMPLATE_ID,
      form.current,
      EMAILJS_CONFIG.PUBLIC_KEY
    )
    .then((result) => {
      console.log('Email envoyé avec succès:', result.text);
      setFormData({
        to_name: 'Aliks',
        name: '',
        email: '',
        message: ''
      });
    })
    .catch((error) => {
      console.error('Erreur lors de l\'envoi:', error.text);
    });
  };

  return (
    <div className="relative">
      <AnimatePresence>
        {showNameModal && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.3 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5, transition: { duration: 0.2 } }}
            className="absolute -top-24 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-[300px]"
          >
            <div className="bg-black/90 backdrop-blur-sm border border-primary/30 px-4 py-2 rounded-xl shadow-xl w-full text-center">
              <p className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/70 font-semibold text-base whitespace-normal">
                Ravi de vous rencontrer, {formData.name} ! 👋
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="w-full">
        <h1 className="mb-2 text-xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-primary/80 to-primary">
          Contact ✌️
        </h1>
        <p className="mb-6 text-sm text-center text-gray-400">
          Envoyez-moi un message
        </p>
        
        <form ref={form} onSubmit={handleSubmit} className="space-y-4">
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/60 to-primary rounded-lg blur opacity-10 
                           group-hover:opacity-30 transition duration-500"></div>
            <div className="relative">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Votre nom"
                className="relative w-full px-4 py-3 bg-black/40 backdrop-blur-sm rounded-lg border border-white/10 
                         text-sm text-white placeholder-gray-400 focus:outline-none focus:border-primary/40 transition-colors"
                required
              />
              <AnimatePresence>
                {nameEntered && (
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 flex items-center"
                  >
                    <div className="bg-primary/20 backdrop-blur-sm rounded-full px-2 py-1">
                      <span className="text-xs text-white whitespace-nowrap">Ravi de vous rencontrer! 👋</span>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/60 to-primary rounded-lg blur opacity-10 
                           group-hover:opacity-30 transition duration-500"></div>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Votre email"
              className="relative w-full px-4 py-3 bg-black/40 backdrop-blur-sm rounded-lg border border-white/10 
                       text-sm text-white placeholder-gray-400 focus:outline-none focus:border-primary/40 transition-colors"
              required
            />
          </div>

          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/60 to-primary rounded-lg blur opacity-10 
                           group-hover:opacity-30 transition duration-500"></div>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Votre message"
              rows={6}
              className="relative w-full px-4 py-3 bg-black/40 backdrop-blur-sm rounded-lg border border-white/10 
                       text-sm text-white placeholder-gray-400 focus:outline-none focus:border-primary/40 transition-colors"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full px-4 py-2 text-sm text-white bg-gradient-to-r from-primary/80 to-primary rounded-lg 
                     hover:from-primary/90 hover:to-primary focus:outline-none focus:ring-2 focus:ring-primary/50 
                     focus:ring-opacity-50 transition-all duration-300 backdrop-blur-sm"
          >
            Envoyer
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
