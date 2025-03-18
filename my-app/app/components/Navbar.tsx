"use client";

import { Socials } from "@/constants";
import React, { useState, useEffect } from "react";
import Image from "next/image";

const Navbar = () => {
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const newOpacity = Math.max(0.4, 1 - scrollPosition / 500);
      setOpacity(newOpacity);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-0 z-40 w-full h-[100px] bg-transparent flex justify-between items-center px-10 md:px-20">
      <div className="flex flex-row gap-3 items-center">
        <div className="relative" style={{ opacity: opacity, transition: 'opacity 0.3s ease-in-out' }}>
          <Image
            src="/Logo.jpg"
            alt="logo"
            width={40}
            height={40}
            className="object-contain w-full h-full rounded-full"
          />
        </div>
        <h1 className="text-white text-[18px] font-semibold">
          Aliks{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500">
            {" "}
            Dev{" "}
          </span>
        </h1>
      </div>

      <div className="flex flex-row gap-5 mb-2">
        {Socials.map((social) => (
          <a 
            key={social.name}
            href={social.link || "#"} 
            target="_blank" 
            rel="noopener noreferrer"
            className="transition-transform hover:scale-125 duration-300 hover:bg-purple-700"
          >
            <Image
              src={social.src}
              alt={social.name}
              width={20}
              height={20}
            />
          </a>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
