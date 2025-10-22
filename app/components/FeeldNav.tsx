'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navItems = ["Home", "Features", "How it works", "About"];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={`
      fixed  top-0 left-0 right-0 w-full z-[9999]
      transition-all duration-500 ease-in-out
      ${scrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-sm py-4' 
        : 'bg-transparent py-6'
      }
    `}>
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        {/* Logo */}
        <div className="flex-shrink-0 z-[10000]">
          <Image
            src='/Qiimeetlogo2.png'
            width={140}
            height={45}
            alt='Qiimeet Logo'
            className="max-w-[140px] max-h-[45px] transition-all duration-300"
          />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8 text-white">
          {navItems.map((navItem, index) => {
            const href = navItem === "Home" ? "#home" 
                       : navItem === "Features" ? "#why"
                       : navItem === "How it works" ? "#how"
                       : "#love-section";
            
            return (
              <a 
                key={index}
                href={href}
                className={`
                  font-medium text-[0.95rem] transition-all duration-300
                  ${scrolled ? 'text-white' : 'text-white'}
                  hover:text-[#EC066A] relative
                  after:content-[''] after:absolute after:bottom-0 after:left-0 
                  after:w-0 after:h-[2px] after:bg-[#EC066A] 
                  after:transition-all after:duration-300
                  hover:after:w-full
                `}
              >
                {navItem}
              </a>
            );
          })}
          
          {/* Desktop Download Button */}
          <a 
            href="#ready" 
            className={`
              bg-[#EC066A] px-6 py-2.5 rounded-full text-white 
              transition-all duration-300 border-2 border-[#EC066A] 
              font-semibold text-[0.95rem] cursor-pointer inline-block
              hover:bg-transparent hover:text-[#EC066A]
              hover:scale-105 hover:shadow-lg
            `}
          >
            Download
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button 
          className="md:hidden cursor-pointer flex flex-col gap-1.5 z-[10000] relative w-6 h-6"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span className={`
            block w-full h-0.5 bg-[#121212] transition-all duration-300 origin-center
            ${isOpen ? 'rotate-45 translate-y-2' : ''}
          `}></span>
          <span className={`
            block w-full h-0.5 bg-[#121212] transition-all duration-300
            ${isOpen ? 'opacity-0 scale-0' : 'opacity-100 scale-100'}
          `}></span>
          <span className={`
            block w-full h-0.5 bg-[#121212] transition-all duration-300 origin-center
            ${isOpen ? '-rotate-45 -translate-y-2' : ''}
          `}></span>
        </button>

        {/* Mobile Menu Overlay */}
        <div 
          className={`
            fixed inset-0 bg-black/50 backdrop-blur-sm
            transition-opacity duration-300 md:hidden
            ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}
          `}
          onClick={() => setIsOpen(false)}
        />

        {/* Mobile Menu */}
        <div className={`
          fixed top-20 w-[90%] left-[5%] bg-white/95 backdrop-blur-lg rounded-2xl 
          shadow-[0_20px_60px_rgba(0,0,0,0.15)]
          flex flex-col items-center py-8 px-4
          transition-all duration-500 ease-out
          md:hidden
          ${isOpen 
            ? 'opacity-100 translate-y-0 visible' 
            : 'opacity-0 -translate-y-4 invisible'
          }
        `}>
          {navItems.map((navItem, index) => {
            const href = navItem === "Home" ? "#home" 
                       : navItem === "Features" ? "#why"
                       : navItem === "How it works" ? "#how"
                       : "#love-section";
            
            return (
              <a 
                key={index}
                href={href}
                className={`
                  text-[#121212] font-medium text-base my-3 
                  transition-all duration-300 hover:text-[#EC066A]
                  hover:translate-x-2
                  ${isOpen ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}
                `}
                style={{ transitionDelay: `${index * 50}ms` }}
                onClick={() => setIsOpen(false)}
              >
                {navItem}
              </a>
            );
          })}
          
          {/* Mobile Download Button */}
          <a 
            href="#ready"
            className="
              bg-[#EC066A] px-8 py-3 rounded-full text-white 
              font-semibold text-base mt-4
              transition-all duration-300
              hover:bg-[#d40560] hover:scale-105
            "
            onClick={() => setIsOpen(false)}
          >
            Download
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;