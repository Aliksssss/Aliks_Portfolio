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
        background: 'linear-gradient(135deg, #121212 0%, #121212 50%, #FF6984 100%)',
      }}
    />
  );
};

export default GradientBackground;
