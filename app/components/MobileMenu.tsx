'use client';

import { useState } from 'react';
import Link from 'next/link';

interface MobileMenuProps {
    isOpen: boolean;
    toggleMenu: () => void;
    closeMenu: () => void;
}

export default function MobileMenu({ isOpen, toggleMenu, closeMenu }: MobileMenuProps) {
    return (
        <>
        {/** Burger Button - Only visible on mobile */}

        <button
            onClick={toggleMenu}
            className="md:hidden flex flex-col gap-1.5 z-50"
            aria-label="Toggle menu"
        >
         <span className={`block w-6 h-0.5 bg-white transition-transform ${isOpen ? 'rotate-45 translate-y-2' : ''}`}/>   
         <span className={`block w-6 h-0.5 bg-white transition-opacity ${isOpen ? 'opacity-0' : ''}`}/>   
         <span className={`block w-6 h-0.5 bg-white transition-transform ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}/>   
        </button>

        {/** Mobile Menu Overlay */}

        {isOpen && (
            <div
                className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
                onClick={closeMenu}
            />
        )}

        {/** Mobile Menu Sidebar */}
        <div 
            className={`fixed top-0 right-0 h-full w-64 bg-zinc-900 z-50 transform transition-transform duration-300 md:hidden ${
                isOpen ? 'translate-x-0' : 'translate-x-full'
            }`}
        >
            <nav className="flex flex-col gap-6 p-8 mt-16">
                <Link 
                    href="/"
                    onClick={closeMenu}
                    className="text-white text-xl hover:text-gray-300 transition"
                >
                    Home
                </Link>
                <Link 
                    href="/portfolio"
                    onClick={closeMenu}
                    className="text-white text-xl hover:text-gray-300 transition"
                >
                    Portfolio
                </Link>
                <Link
                    href="/about"
                    onClick={closeMenu}
                    className="text-white text-xl hover:text-gray-300 transition"
                >
                    About
                </Link>
                <Link
                    href="/contact"
                    onClick={closeMenu}
                    className="text-white text-xl hover:text-gray-300 transition"
                >
                    Contact
                </Link>
            </nav>
        </div>
            
        </>
    )
}