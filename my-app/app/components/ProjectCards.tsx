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
      className="w-[400px] h-[280px] rounded-xl cursor-pointer perspective-1000 group"
    >
      <motion.div
        className="relative w-full h-full flip-card-inner preserve-3d"
        initial={false}
        animate={{ rotateX: isFlip ? -180 : 0 }}
        transition={{ duration: 0.2, animationDirection: "normal" }}
        onAnimationComplete={() => setIsAnimate(false)}
        onAnimationStart={() => setIsAnimate(true)}
      >
        {/* Front of card */}
        <div className="overflow-hidden absolute w-full h-full rounded-xl backface-hidden flip-card-front group">
          <div className="absolute inset-0 z-10 bg-linear-to-r from-purple-900/10 to-purple-600/10" />
          <div className="absolute inset-0 z-20 rounded-xl border-4 border-purple-600 transition-colors duration-300 group-hover:border-white/70" />
          <Image
            src={image}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover"
            loading="lazy"
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4dHRsdHR4dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR3/2wBDAR4SEhsdHR8dHR8dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR3/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
            quality={75}
          />
          <div className="flex absolute inset-0 z-30 flex-col justify-end p-6">
            <h2 className="mb-2 text-2xl font-bold text-white drop-shadow-lg">
              {title}
            </h2>
          </div>
        </div>

        {/* Back of card */}
        <div className="overflow-hidden absolute w-full h-full rounded-xl backface-hidden flip-card-back bg-[#120E26] group" style={{ transform: 'rotateX(180deg)' }}>
          <div className="absolute inset-0 bg-black/50" />
          <div className="absolute inset-0 rounded-xl border-4 border-purple-600 transition-colors duration-300 group-hover:border-white/70" />
          <div className="flex relative flex-col justify-between p-6 h-full">
            <div>
              <h2 className="mb-4 text-2xl font-bold text-white">{title}</h2>
              <p className="leading-relaxed text-white">{text}</p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectCards;
