import type { Metadata } from 'next';
import Link from 'next/link';
import { getFeaturedTattoos } from '@/lib/sanity-queries';
import { urlFor } from '@/lib/sanity-client';
/** COMPONENTS */
import HeroSection from './components/HeroSection';

export const metadata: Metadata = {
  title: "DickSquid Tattoo Studio - Custom Tattoos in Kristiine Tallinn, Estonia",
  description: "Professional custom tattoo artist based in Tallinn. Tratitional, realism, geometric, blackwork, black & gray, Japanese, ..., all styles accepted with professional detail oriented mindset and skill set",
  keywords: "tattoo, tattoo artist, Tallinn tattoo, Estonia tattoo, custom tattoo, tattoo shop, tratitional tattoo, realism tattoo, professional tattoo, English speaking artist, Estonian speaking artist, creative custom tattoos, coverups, Roland Paabo, Rolts Paabo, Paabo, Bloody Mess Tattoo, Dicksquid tattoo",
  openGraph: {
    title: "DickSquid Tattoo Studio - Custom Tattoos in Tallinn",  
    description: "Professional custom renowned artist in Tallinn, known for exceptional craftmanship and color work.",
    url: "https://bmtattoo.vercel.app", /** @todo: production domain required */
    siteName: "DickSquid Tattoo Studio",
    images: [
      {
        url: "https://bmtattoo.vercel.app/og-image.jpg", /** @todo: logos and images of studio, brand */
        width: 1200,
        height: 630,
        alt: "DickSquid Tattoo Studio",
      }
    ],
    locale: "en_US", // EE?
    type: "website"
  },

  /** twitter?  @todo: will use twitter? */ 

  twitter: { 
    card: "summary_large_image",
    title: "DickSquid Tattoo Studio - Custom Tattoos in Tallinn",
    description: "Professional custom tattoo artist in Tallinn. Book your appointment today.",
    images: ["https://bmtattoo.vercel.app/og-image.jpg"]
  },
};


/**
 * 
 * @todo: openGraph image
 * **Required dimensions for og:image:**
- **Width: 1200px**
- **Height: 630px**
- **Aspect ratio: 1.91:1**
- **Format: JPG or PNG**
- **Max file size: ~8MB** (but keep it under 300KB for fast loading)
 */


/** OG Images Guide:
 * **Good OG images typically include:**
- Studio name/logo
- Maybe a tattoo sample or artist photo
- Clean, professional design
- High contrast (readable at small sizes)
- Not too much text

**Example layout ideas:**
```
┌─────────────────────────────┐
│                             │
│      BM TATTOO STUDIO       │
│                             │
│   [Tattoo image/artwork]    │
│                             │
│  Custom Tattoos • Tallinn   │
│                             │
└─────────────────────────────┘
 */

export const revalidate = 60; // Revalidate every 60 seconds


export default async function Home() {
  const featuredTattoos = await getFeaturedTattoos();
  return (
    <main>
      {/* Hero Section with Video Background */}
      <HeroSection />

      {/* Recent Work Section */}
      <section className="bg-zinc-950 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
            Recent Work
          </h2>
          
          {featuredTattoos.length === 0 ? (
            <div className="text-center text-gray-400">
              <p>No featured work yet. Add some tattoos in the Studio!</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {featuredTattoos.map((tattoo) => (
                <Link
                  key={tattoo._id}
                  href="/portfolio"
                  className="group relative aspect-square overflow-hidden rounded-lg bg-zinc-800"
                >
                  <img
                    src={urlFor(tattoo.image).width(800).height(800).url()}
                    alt={tattoo.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  {/* Permanent subtle dark overlay */}
                  <div className="absolute inset-0 bg-black bg-opacity-10 pointer-events-none" />
                  
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-transparent group-hover:bg-black group-hover:bg-opacity-60 transition-all duration-300 flex items-end p-4">
                    <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <h3 className="font-bold text-lg">{tattoo.title}</h3>
                      <p className="text-sm text-gray-300 capitalize">{tattoo.style}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}

          {/* View All Portfolio Button */}
          <div className="text-center mt-12">
            <Link
              href="/portfolio"
              className="inline-block border-2 border-red-700 text-red-700 hover:bg-red-700 hover:text-white px-8 py-3 rounded-lg font-medium transition"
            >
              View Full Portfolio
            </Link>
          </div>
        </div>
      </section>

      {/* About Preview Section (Optional) */}
      <section className="bg-zinc-900 py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Custom Tattoos by Professional Artists
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
            With years of experience and dedication to the craft, we bring your vision to life 
            with precision and artistic excellence.
          </p>
          <Link
            href="/about"
            className="inline-block bg-red-700 hover:bg-red-800 text-white px-8 py-3 rounded-lg font-medium transition"
          >
            Learn More About Us
          </Link>
        </div>
      </section>
    </main>
  );
}
