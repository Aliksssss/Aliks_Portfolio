"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import './ProjectCards.css';

interface Props {
  image: string;
  title: string;
  text: string;
  className: string;
}

const ProjectCards = ({ image, title, text, className }: Props) => {
  const [isFlip, setIsFlip] = useState(false);
  const [isAnimate, setIsAnimate] = useState(false);

  return (
    <div
      onMouseEnter={() => !isAnimate && setIsFlip(true)}
      onMouseLeave={() => !isAnimate && setIsFlip(false)}
      className="w-[400px] h-[280px] rounded-2xl cursor-pointer perspective-1000 group shadow-lg shadow-primary/10 hover:shadow-xl hover:shadow-primary/20 transition-shadow duration-500"
    >
      <motion.div
        className="relative w-full h-full flip-card-inner preserve-3d"
        initial={false}
        animate={{ rotateX: isFlip ? -180 : 0 }}
        transition={{ 
          duration: 0.5, 
          ease: [0.23, 1, 0.32, 1], // Cubic bezier for smooth animation
          animationDirection: "normal" 
        }}
        onAnimationComplete={() => setIsAnimate(false)}
        onAnimationStart={() => setIsAnimate(true)}
      >
        {/* Front of card */}
        <div className="overflow-hidden absolute w-full h-full rounded-2xl backface-hidden flip-card-front group">
          {/* Gradient overlay */}
          <div className="absolute inset-0 z-10 bg-gradient-to-b from-transparent via-black/20 to-black/70" />
          
          {/* Subtle border glow */}
          <div className="absolute inset-0 z-20 rounded-2xl border border-primary/30 transition-all duration-500 group-hover:border-primary/60 group-hover:glow-effect" />
          
          {/* Project image */}
          <Image
            src={image}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4dHRsdHR4dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR3/2wBDAR4SEhsdHR8dHR8dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR3/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
            quality={80}
          />
          
          {/* Title overlay with modern design */}
          <div className="flex absolute inset-0 z-30 flex-col justify-end p-6">
            <div className="transform transition-transform duration-300 group-hover:translate-y-[-5px]">
              <h2 className="mb-2 text-2xl font-bold text-white drop-shadow-lg">
                {title}
              </h2>
              <div className="w-16 h-1 bg-primary rounded-full opacity-80 transition-all duration-300 group-hover:w-24 group-hover:opacity-100"></div>
            </div>
          </div>
        </div>

        {/* Back of card */}
        <div className="overflow-hidden absolute w-full h-full rounded-2xl backface-hidden flip-card-back bg-gradient-to-br from-[#1A1535] to-[#0A0718] group" style={{ transform: 'rotateX(180deg)' }}>
          {/* Subtle pattern overlay */}
          <div className="absolute inset-0 bg-black/30 backdrop-blur-[2px]" />
          
          {/* Subtle border glow */}
          <div className="absolute inset-0 rounded-2xl border border-primary/40 transition-all duration-500 group-hover:border-primary/70 group-hover:glow-effect" />
          
          {/* Content with improved layout */}
          <div className="flex relative flex-col justify-between p-8 h-full">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 rounded-full bg-primary"></div>
                <h2 className="text-2xl font-bold text-white">{title}</h2>
              </div>
              <p className="leading-relaxed text-white/90 text-sm">{text}</p>
            </div>
            
            {/* Visual element at the bottom */}
            <div className="w-full flex justify-end">
              <div className="w-24 h-1 bg-primary/50 rounded-full"></div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectCards;
