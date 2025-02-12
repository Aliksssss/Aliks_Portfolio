"use client";
import React from "react";

const ContactForm = () => {
  return (
    <div className="w-full">
      <h1 className="mb-2 text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500">
        Contact
      </h1>
      <p className="mb-8 text-center text-gray-400">
        Envoyez-moi un message
      </p>
      
      <form className="space-y-6">
        <div>
          <input
            type="text"
            placeholder="Votre nom"
            className="w-full bg-[#0E0E10]/50 border border-purple-500/20 rounded-lg px-4 py-3 text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all duration-300"
          />
        </div>
        
        <div>
          <input
            type="email"
            placeholder="Votre email"
            className="w-full bg-[#0E0E10]/50 border border-purple-500/20 rounded-lg px-4 py-3 text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all duration-300"
          />
        </div>
        
        <div>
          <textarea
            placeholder="Votre message"
            rows={5}
            className="w-full bg-[#0E0E10]/50 border border-purple-500/20 rounded-lg px-4 py-3 text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all duration-300 resize-none"
          />
        </div>
        
        <button
          type="submit"
          className="px-6 py-4 w-full font-semibold text-white bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 rounded-lg shadow-lg transition-all duration-300 hover:opacity-90"
        >
          Envoyer le message
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
