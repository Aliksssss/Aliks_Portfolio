'use client';

import { motion } from 'framer-motion';

interface GradientBackgroundProps {
  className?: string;
}

const GradientBackground = ({ className = '' }: GradientBackgroundProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className={`fixed inset-0 z-0 ${className}`}
      style={{
        background: '#F6EBD4',
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: -1
      }}
    />
  );
};

export default GradientBackground;
