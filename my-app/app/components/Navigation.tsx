"use client";

import { NavLinks } from "@/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import Transition from "./Transition";
import { IoMenu } from "react-icons/io5";
import { motion, AnimatePresence } from "framer-motion";

const Navigation = () => {
  const [isRouting, setisRouting] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const path = usePathname();
  const [prevPath, setPrevPath] = useState("/");
  const [hoveredButton, setHoveredButton] = useState<string | null>(null);

  useEffect(() => {
    if (prevPath !== path) {
      setisRouting(true);
      setIsMenuOpen(false);
    }
  }, [path, prevPath]);

  useEffect(() => {
    if (isRouting) {
      setPrevPath(path);
      const timeout = setTimeout(() => {
        setisRouting(false);
      }, 1200);

      return () => clearTimeout(timeout);
    }
  }, [isRouting]);

  const menuVariants = {
    hidden: { 
      opacity: 0,
      y: 20
    },
    visible: (index: number) => ({
      opacity: 1,
      y: -62 * (index + 1),
      transition: {
        delay: index * 0.1,
        duration: 0.5,
        ease: [0.43, 0.13, 0.23, 0.96]
      }
    })
  };

  const pulseAnimation = {
    initial: { scale: 1 },
    animate: {
      scale: [1, 1.1, 1],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const hoverAnimation = {
    scale: 1.15,
    transition: {
      duration: 0.2
    }
  };

  return (
    <>
      {isRouting && <Transition />}
      <div className="fixed bottom-5 left-14 z-50">
        <motion.button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="flex relative z-10 justify-center items-center w-14 h-14 bg-purple-800 rounded-full border shadow-lg transition-colors duration-300 hover:bg-purple-700 border-white/50 pulse-effect"
          initial="initial"
          animate="animate"
          variants={pulseAnimation}
          whileHover={hoverAnimation}
          onMouseEnter={() => setHoveredButton("menu")}
          onMouseLeave={() => setHoveredButton(null)}
        >
          <motion.div
            animate={{ rotate: isMenuOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <IoMenu className="w-7 h-7 text-white" />
          </motion.div>
          {hoveredButton === "menu" && (
            <div className="absolute inset-0 rounded-full animate-pulse-ring"></div>
          )}
        </motion.button>

        <style jsx global>{`
          @keyframes pulse-ring {
            0% {
              transform: scale(1);
              opacity: 0.5;
              box-shadow: 0 0 0 0 rgba(147, 51, 234, 0.7);
            }
            70% {
              transform: scale(1.1);
              opacity: 0.3;
              box-shadow: 0 0 0 15px rgba(147, 51, 234, 0);
            }
            100% {
              transform: scale(1);
              opacity: 0.5;
              box-shadow: 0 0 0 0 rgba(147, 51, 234, 0);
            }
          }

          .animate-pulse-ring {
            animation: pulse-ring 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
            border: 2px solid rgba(147, 51, 234, 0.5);
          }
        `}</style>

        <AnimatePresence>
          {isMenuOpen && (
            <div className="absolute left-0 bottom-full mb-2">
              {NavLinks.map((nav, index) => (
                <motion.div
                  key={nav.name}
                  custom={index}
                  initial="hidden"
                  animate="visible"
                  exit={{ opacity: 0, y: 20 }}
                  variants={menuVariants}
                  className="absolute bottom-0 left-0"
                  style={{
                    zIndex: NavLinks.length - index
                  }}
                >
                  <motion.div
                    initial="initial"
                    animate="animate"
                    variants={pulseAnimation}
                    whileHover={hoverAnimation}
                    className="relative"
                    onMouseEnter={() => setHoveredButton(nav.name)}
                    onMouseLeave={() => setHoveredButton(null)}
                  >
                    <Link
                      href={nav.path}
                      className={`flex relative z-10 justify-center items-center w-14 h-14 rounded-full shadow-lg bg-opacity-20 backdrop-blur-sm border border-white/10 transition-all duration-300 hover:scale-110 hover:border-purple-500/50 ${
                        path === nav.path ? 'bg-purple-600/80' : 'bg-black/50 hover:bg-purple-600/50'
                      }`}
                      onClick={() => {
                        setIsMenuOpen(false);
                        setisRouting(true);
                      }}
                    >
                      <nav.icon className="w-6 h-6 text-white" />
                    </Link>
                    {hoveredButton === nav.name && (
                      <div className="absolute inset-0 rounded-full animate-pulse-ring"></div>
                    )}
                  </motion.div>
                </motion.div>
              ))}
            </div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default Navigation;
