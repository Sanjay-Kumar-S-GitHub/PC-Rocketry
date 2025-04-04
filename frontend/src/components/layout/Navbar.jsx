'use client'

import Link from "next/link";
import SlideIn from "../slidein/SlideIn";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isTabletOrMobile, setIsTabletOrMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsTabletOrMobile(window.innerWidth < 1024);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex flex-row justify-between items-center h-25 px-4 md:px-8 pt-2 bg-transparent absolute text-white text-xl w-full max-w-full">
      <div className="flex items-center gap-4 md:gap-7">
        <SlideIn direction="right" delay={100}>
          <Link href="/"><img src="/pc-logo.png" className="h-16 w-16 md:h-20 md:w-20" /></Link>
        </SlideIn>
        <SlideIn direction="right" delay={100}>
          <a href="https://www.svnit.ac.in/" target="_blank"><img src="/svnit.png" className="h-16 w-16 md:h-20 md:w-20" /></a>
        </SlideIn>
      </div>

      {!isTabletOrMobile && (
        <div className="flex-grow flex justify-center">
          <SlideIn direction="down" delay={100}>
            <div className="flex flex-row items-center gap-7 lg:gap-14 pr-25 text-2xl">
              <NavLink href="/">HOME</NavLink>
              <NavLink href="/about">ABOUT</NavLink>
              <NavLink href="/blog">BLOG</NavLink>
              <NavLink href="/missions">MISSIONS</NavLink>
              <NavLink href="/contactus">CONTACT US</NavLink>
            </div>
          </SlideIn>
        </div>
      )}

      {isTabletOrMobile && (
        <button
          className="focus:outline-none z-50"
          onClick={toggleMenu}
        >
          <div className="w-8 space-y-2">
            <span
              className={`block h-0.5 w-8 bg-white transition-all duration-300 ${
                isOpen ? "rotate-45 translate-y-1.5" : ""
              }`}
            ></span>
            <span
              className={`block h-0.5 w-8 bg-white transition-all duration-300 ${
                isOpen ? "opacity-0" : "opacity-100"
              }`}
            ></span>
            <span
              className={`block h-0.5 w-8 bg-white transition-all duration-300 ${
                isOpen ? "-rotate-45 -translate-y-1.5" : ""
              }`}
            ></span>
          </div>
        </button>
      )}

      {isOpen && isTabletOrMobile && (
        <div className="fixed inset-0 z-40">
          <SlideIn direction="down" delay={100}>
            <div className="bg-gray-500 bg-opacity-90 flex flex-col items-center justify-center space-y-4 md:space-y-6 text-2xl md:text-4xl h-100 md:h-120">
              <NavLink href="/" mobile onClick={toggleMenu}>HOME</NavLink>
              <NavLink href="/about" mobile onClick={toggleMenu}>ABOUT</NavLink>
              <NavLink href="/blog" mobile onClick={toggleMenu}>BLOG</NavLink>
              <NavLink href="/missions" mobile onClick={toggleMenu}>MISSIONS</NavLink>
              <NavLink href="/contactus" mobile onClick={toggleMenu}>CONTACT US</NavLink>
            </div>
          </SlideIn>
        </div>
      )}
    </div>
  );
}

function NavLink({ href, children, mobile = false, onClick }) {
  return (
    <Link
      href={href}
      className={`hover:underline hover:underline-offset-5 hover:decoration-2 ${
        mobile ? "block py-3" : ""
      }`}
      onClick={onClick}
    >
      {children}
    </Link>
  );
}