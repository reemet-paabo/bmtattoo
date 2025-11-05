import type { Metadata } from "next";
import Link from "next/link";

import "./globals.css";

export const metadata: Metadata = {
  title: "Bloody Mess Tattoo Studio",
  description: "Actually Dick Squid Tattoo, get your facts straight."
}

export default function RootLayout({ 
  children,
}: Readonly <{ children: React.ReactNode; }>) {
  return (
    <html lang="en">
      <body className="antialiased">
          <header className="bg-black text-white">
            <nav className="container mx-auto px-4 py-6">
              <div className="flex items-center justify-between">
                <Link href="/" className="text-2xl font-bold">
                  BM Tattoo
                </Link>

                <ul className="flex gap-8">
                  <li>
                    <Link href="/" className="hover:text-gray-300 transition">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link  href="/portfolio" className="hover:text-gray-300 transition">
                      Portfoolio
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
              </div>
            </nav>
          </header>
          {children}
      </body>
    </html>
  )
}