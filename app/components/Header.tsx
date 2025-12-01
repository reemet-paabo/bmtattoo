'use client';

import { useState } from 'react';
import Link from 'next/link';
import MobileMenu from './MobileMenu';

import { Alumni_Sans_SC } from 'next/font/google';

const AlumniSans = Alumni_Sans_SC({
  weight: '500',
  subsets: ['latin']
})



export default function Header() {
   // const [isOpen, setIsOpen] = useState(false);

    // const toggleMenu = () => setIsOpen(!isOpen);
    // const closeMenu = () => setIsOpen(false);

    /**  BM Tattoo | Home | Portfolio | About | Contact */
    return(
        <header className="absolute top-0 left-0 right-0 z-50 bg-transparent">
            <nav className="container mx-auto px-4 py-6">
              <div className={`${AlumniSans.className} flex items-center justify-between`}>
                {/** Logo Here? */}
                <Link 
                    href="/" 
                    className="text-2xl sm:text-9xl md:text-5xl font-bold z-50 text-white"
                    // onClick={closeMenu}    
                >
                   DickSquid
                </Link>

                {/** Desktop Navigation - Hidden on mobile */}
                <ul className="text-4xl hidden md:flex gap-8">
                  <li>
                    <Link href="/" className="hover:text-gray-100 transition">
                      HOME
                    </Link>
                  </li>
                  <li>
                    <Link  href="/portfolio" className="hover:text-gray-100 transition">
                      PORTFOLIO
                    </Link>
                  </li>
                  <li>
                    <Link href="/about" className="hover:text-gray-100 transition">
                      ABOUT
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact" className="hover:text-gray-100 transition">
                      CONTACT
                    </Link>
                  </li>
                </ul>
              {/** Mobile Menu Component */}
              <MobileMenu 
                //isOpen={isOpen} 
                //toggleMenu={toggleMenu} 
                //closeMenu={closeMenu}
                />
              </div>
              
            </nav>
          </header>
    )
}