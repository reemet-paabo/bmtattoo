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
                    className="text-white text-3xl font-light tracking-wider hover:text-gray-300 transition transform hover:scale-110"
                >
                    HOME
                </Link>
                <Link 
                    href="/portfolio"
                    onClick={closeMenu}
                    className="text-white text-3xl font-light tracking-wider hover:text-gray-300 transition transform hover:scale-110"
                >
                    PORTFOLIO
                </Link>
                <Link
                    href="/about"
                    onClick={closeMenu}
                    className="text-white text-3xl font-light tracking-wider hover:text-gray-300 transition transform hover:scale-110"
                >
                    ABOUT
                </Link>
                <Link
                    href="/contact"
                    onClick={closeMenu}
                    className="text-white text-3xl font-light tracking-wider hover:text-gray-300 transition transform hover:scale-110"
                >
                    CONTACT
                </Link>
            </nav>
        </div>
            
        </>
    )
}