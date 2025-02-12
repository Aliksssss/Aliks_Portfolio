'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const MatrixBackground = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.3 }}
      transition={{ duration: 1 }}
      className="fixed inset-0 z-0"
    >
      <Image
        src="/Matrix.png"
        alt="Matrix Background"
        fill
        className="object-cover"
        quality={100}
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50" />
    </motion.div>
  );
};

export default MatrixBackground;
