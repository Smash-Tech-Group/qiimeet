'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from "motion/react"

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navItems = ["Home", "Features", "How it works", "About"];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 80) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring" }}
      className={`fixed top-0 left-1/2 -translate-x-1/2 w-full py-6 z-[67] transition-all duration-500 ease-in-out ${scrolled ? "bg-black text-white" : "bg-transparent text-white"}`}
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">

      <div className="">
        <Link href={"/"}>

        
          <Image
            src='/Qiimeetlogo2.png'
            width={140}
            height={45}
            alt='Qiimeet Logo'
            className="max-w-[140px] max-h-[45px]"
          />
        </Link>
      </div>

      <div className="hidden md:flex gap-10 items-center">
        {navItems.map((navItem, index) => {
          const href = navItem === "Home" ? "/" 
                     : navItem === "Features" ? "/features"
                     : navItem === "How it works" ? "/how-it-works"
                     : "/about";
          
          return (
            <Link
              key={index}
              href={href}
              className="font-medium text-[0.95rem] transition-colors duration-200 hover:text-[#EC066A]"
            >
              {navItem}
            </Link>
          );
        })}
      </div>

      <div className="hidden md:block">
        <a 
          href="#ready" 
          className="bg-[#EC066A] px-8 py-3.5 rounded-lg text-white transition-all duration-200 border-2 border-[#EC066A] font-semibold text-base cursor-pointer inline-block hover:bg-[#d40560] hover:border-[#d40560] hover:-translate-y-0.5"
        >
          Download
        </a>
      </div>

      <button 
        className="md:hidden cursor-pointer flex flex-col gap-1.5 z-[10000]"
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
        <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
        <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
      </button>

      <div className={`
        fixed top-20 w-[90%] bg-white rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.1)] 
        flex flex-col items-center justify-evenly py-8 px-4
        transition-all duration-300 ease-in-out
        md:hidden
        ${isOpen ? 'left-[5%]' : 'left-[100%]'}
      `}>
        {navItems.map((navItem, index) => {
          const href = navItem === "Home" ? "/" 
                     : navItem === "Features" ? "/features"
                     : navItem === "How it works" ? "/how-it-works"
                     : "/about";
          
          return (
            <a 
              key={index}
              href={href}
              className="text-[#121212] font-medium text-[0.95rem] my-4 transition-colors duration-200 hover:text-[#EC066A]"
              onClick={() => setIsOpen(false)}
            >
              {navItem}
            </a>
          );
        })}
      </div>
      </div>
    </motion.nav>
  );
}

export default Navbar;