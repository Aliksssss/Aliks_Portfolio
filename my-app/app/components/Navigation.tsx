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
      y: -20
    },
    visible: (index: number) => ({
      opacity: 1,
      y: 48 * (index + 1),
      transition: {
        delay: index * 0.1,
        duration: 0.4,
        ease: "easeOut"
      }
    })
  };

  return (
    <>
      {isRouting && <Transition />}
      <div className="fixed top-6 right-6 md:top-8 md:right-8 z-50 cursor-pointer">
        <motion.button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="flex relative z-10 justify-center items-center w-10 h-10 bg-[#FF6984] rounded-full shadow-lg transition-all duration-300 hover:bg-[#FF6984]/80 border border-[#FF6984]/30 cursor-pointer"
          whileHover={{ scale: 1.1 }}
          onMouseEnter={() => setHoveredButton("menu")}
          onMouseLeave={() => setHoveredButton(null)}
        >
          <motion.div
            animate={{ rotate: isMenuOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <IoMenu className="w-5 h-5 text-white" />
          </motion.div>
        </motion.button>

        <AnimatePresence>
          {isMenuOpen && (
            <div className="absolute left-0 top-full mt-2">
              {NavLinks.map((nav, index) => (
                <motion.div
                  key={nav.name}
                  custom={index}
                  initial="hidden"
                  animate="visible"
                  exit={{ opacity: 0, y: -20 }}
                  variants={menuVariants}
                  className="absolute top-0 left-0"
                  style={{
                    zIndex: NavLinks.length - index
                  }}
                >
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="relative"
                    onMouseEnter={() => setHoveredButton(nav.name)}
                    onMouseLeave={() => setHoveredButton(null)}
                  >
                    <Link
                      href={nav.path}
                      className={`flex relative z-10 justify-center items-center w-10 h-10 rounded-full shadow-lg backdrop-blur-sm border transition-all duration-300 cursor-pointer ${
                        path === nav.path 
                          ? 'bg-[#FF6984] border-[#FF6984]/50' 
                          : 'bg-black/50 border-white/10 hover:bg-[#FF6984]/70 hover:border-[#FF6984]/30'
                      }`}
                      onClick={() => {
                        setIsMenuOpen(false);
                        setisRouting(true);
                      }}
                    >
                      <nav.icon className="w-4 h-4 text-white" />
                    </Link>
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
