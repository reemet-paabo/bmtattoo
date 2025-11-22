'use client';

import { useState } from 'react';
import Link from 'next/link';
import MobileMenu from './MobileMenu';

export default function Header() {
   // const [isOpen, setIsOpen] = useState(false);

    // const toggleMenu = () => setIsOpen(!isOpen);
    // const closeMenu = () => setIsOpen(false);

    return(
        <header className="bg-zinc-900 text-white">
            <nav className="container mx-auto px-4 py-6">
              <div className="flex items-center justify-between">
                {/** Logo Here? */}
                <Link 
                    href="/" 
                    className="text-2xl font-bold z-50"
                    // onClick={closeMenu}    
                >
                  BM Tattoo
                </Link>

                {/** Desktop Navigation - Hidden on mobile */}
                <ul className="hidden md:flex gap-8">
                  <li>
                    <Link href="/" className="hover:text-gray-300 transition">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link  href="/portfolio" className="hover:text-gray-300 transition">
                      Portfolio
                    </Link>
                  </li>
                  <li>
                    <Link href="/about" className="hover:text-gray-300 transition">
                      About
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact" className="hover:text-gray-300 transition">
                      Contact
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