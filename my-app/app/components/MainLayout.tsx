"use client";

import React, { useEffect, useState } from 'react';
import MatrixRain from "@/components/MatrixRain";
import Navbar from "./Navbar";
import Navigation from "./Navigation";

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  const [isHidden, setIsHidden] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsHidden(true);
    } else {
      setIsHidden(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <div className={`fixed inset-0 z-0 ${isHidden ? 'hidden' : ''}`}> 
        <MatrixRain className="" />
      </div>
      <div className="relative z-10 h-screen">
        <Navbar />
        <div className="h-screen overflow-y-auto">
          {children}
        </div>
        <Navigation />
      </div>
    </>
  );
};

export default MainLayout;
