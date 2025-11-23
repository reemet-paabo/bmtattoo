'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

// interface MobileMenuProps {
//     isOpen: boolean;
//     toggleMenu: () => void;
//     closeMenu: () => void;
// }

export default function MobileMenu(/*{ isOpen, toggleMenu, closeMenu } : MobileMenuProps*/) {
    const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

    useEffect(() => {
        if(isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => {
            document.body.style.overflow = 'unset';
        }
    }, [isOpen])

  const linkClassName = `
    relative text-white text-2xl font-light tracking-wider 
    hover:text-red-500 transition py-4 px-8
    before:content-[''] before:absolute before:bottom-0 before:left-0 
    before:w-4 before:h-4 before:border-l-2 before:border-b-2 before:border-red-700
    after:content-[''] after:absolute after:bottom-0 after:right-0 
    after:w-4 after:h-4 after:border-r-2 after:border-b-2 after:border-red-700
  `;

    return (
        <>
        {/** Burger Button - Only visible on mobile */}

        <button
            onClick={toggleMenu}
            className="md:hidden flex flex-col gap-1.5 z-50 relative"
            aria-label="Toggle menu"
        >
         <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
            isOpen ? 'rotate-45 translate-y-2' : ''
          }`}/>   
         <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
            isOpen ? 'opacity-0' : ''
          }`}/>   
         <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
            isOpen ? '-rotate-45 -translate-y-2' : ''
          }`}/>   
        </button>

        {/** Mobile Menu Overlay */}
        <div 
            className={`fixed inset-0 bg-black/80 backdrop-blur-sm z-40 md:hidden transition-opacity duration-300 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        >
            <nav className="flex flex-col items-center justify-center h-full gap-6">
                <Link 
                    href="/"
                    onClick={closeMenu}
                    className="corner-brackets relative text-white text-2xl font-light tracking-wider hover:text-red-500 transition"
                >
                    HOME
                </Link>
                <Link 
                    href="/portfolio"
                    onClick={closeMenu}
                    className="corner-brackets relative text-white text-2xl font-light tracking-wider hover:text-red-500 transition"
                >
                    PORTFOLIO
                </Link>
                <Link
                    href="/about"
                    onClick={closeMenu}
                    className="corner-brackets relative text-white text-2xl font-light tracking-wider hover:text-red-500 transition"
                >
                    ABOUT
                </Link>
                <Link
                    href="/contact"
                    onClick={closeMenu}
                    className="corner-brackets relative text-white text-2xl font-light tracking-wider hover:text-red-500 transition"
                >
                    CONTACT
                </Link>
            </nav>
        </div>
            
        </>
    )
}