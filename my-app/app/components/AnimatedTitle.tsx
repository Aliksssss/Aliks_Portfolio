'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const laoCharacters: { [key: string]: string } = {
  'A': 'ອ', 'B': 'ບ', 'C': 'ຈ', 'D': 'ດ', 'E': 'ເ',
  'F': 'ຟ', 'G': 'ກ', 'H': 'ຫ', 'I': 'ິ', 'J': 'ຈ',
  'K': 'ຄ', 'L': 'ລ', 'M': 'ມ', 'N': 'ນ', 'O': 'ໂ',
  'P': 'ພ', 'Q': 'ຄ', 'R': 'ຣ', 'S': 'ສ', 'T': 'ຕ',
  'U': 'ຸ', 'V': 'ວ', 'W': 'ຢ', 'X': 'ຊ', 'Y': 'ຍ',
  'Z': 'ຂ'
};

interface AnimatedTitleProps {
  text: string;
}

const AnimatedTitle: React.FC<AnimatedTitleProps> = ({ text }) => {
  const [characters, setCharacters] = useState<{ char: string; isLao: boolean }[]>(
    text.split('').map(char => ({ char, isLao: false }))
  );

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCharacters(prev => {
        return prev.map((char, i) => ({
          char: char.isLao ? text[i] : laoCharacters[text[i].toUpperCase()] || text[i],
          isLao: !char.isLao
        }));
      });
    }, 3000);

    return () => clearInterval(intervalId);
  }, [text]);

  return (
    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8">
      {characters.map((charObj, index) => (
        <motion.span
          key={`${index}-${charObj.isLao}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.3,
            delay: index * 0.1,
            type: "spring",
            stiffness: 100,
            damping: 10
          }}
          className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 transition-colors duration-300"
        >
          <AnimatePresence mode="wait">
            <motion.span
              key={charObj.char}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.5 }}
              transition={{ duration: 0.3 }}
              className="inline-block"
            >
              {charObj.char === ' ' ? '\u00A0' : charObj.char}
            </motion.span>
          </AnimatePresence>
        </motion.span>
      ))}
    </h1>
  );
};

export default AnimatedTitle;
