import type { Metadata } from "next";

/**
 * UI Components CSR 
 * __root/app/components/ || ./components/
 */
import Header from "./components/Header";
import Footer from "./components/Footer";

/**
 * Global Stylesheet
 */
import "./globals.css";

export const metadata: Metadata = {
  title: "BM Tattoo Studio",
  description: "Actually DickSquid Tattoo",
  metadataBase: new URL('https://bmtattoo.vercel.app')
}

export default function RootLayout({ 
  children,
}: Readonly <{ children: React.ReactNode; }>) {
  // Structured data for local business
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "TattooShop",
    "name": "BM Tattoo Studio",
    "image": "https://bmtattoo.vercel.app/og-image.jpg" /** @todo: create and image */,
    "description": "Professional and Creative custom tattoo artist in Tallin, Estonia",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Koskla tn 16",
      "addressLocality": "Tallinn",
      "addressCountry": "EE"
    },
    "telephone": "+372 1234 5678", /** @todo remove phone nr everywhere */
    "email": "info@bmtattoo.com",
    "openingHours": ["Mo-Fr 12:00-20:00", "Sa 11:00-18:00"],
    "priceRange": "$$"

  }
  return (
    <html lang="en">
      <head>
        <script 
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData)}}
        />
      </head>
      <body className="antialiased flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">
          {children}
          </main>
          <Footer />
      </body>
    </html>
  )
}