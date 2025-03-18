'use client';

import Link from "next/link";
import { motion } from 'framer-motion';
import AnimatedTitle from './components/AnimatedTitle';

export default function Home() {
  return (
    <main className="flex overflow-hidden absolute inset-0 justify-center items-center">
      <div className="flex relative justify-center items-center w-full h-full">
        <div className="relative z-[30] px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <AnimatedTitle text="Alisack V" />
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mb-8 text-lg font-bold text-gray-300 md:text-xl"
            >
              Webmaster Freelance
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <Link 
                href="/About"
                className="inline-block px-6 py-3 text-l font-medium text-white bg-purple-600 rounded-full transition-all duration-300 hover:bg-purple-700 hover:scale-105"
              >
                En savoir plus..
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
