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
    url: "https://dicksquid.bmtattoo.com",
    siteName: "DickSquid Tattoo Studio",
    images: [
      {
        url: "https://dicksquid.bmtattoo.com",
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
    images: ["https://dicksquid.bmtattoo.com/logo.png"]
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

/** @todo Home Page. Logo Matching with background( centre ). Link Under. Then Booking. Scroll down > Artist Info */
export default async function Home() {
  const sanityTattoos = await getFeaturedTattoos();
  const featuredTattoos = sanityTattoos.map((tattoo) => ({
    _id: tattoo._id,
    title: tattoo.title,
    style: tattoo.style,
    image: urlFor(tattoo.image).width(800).height(800).url(),
  }));

 return (
    <main>
      {/* Hero Section with Integrated Carousel */}
      <HeroSection featuredTattoos={featuredTattoos} />

      {/* About Preview Section */}
      <section className="bg-zinc-900 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Custom Tattoos by Professional Artists
            </h2>
            <div className="w-24 h-1 bg-red-700 mx-auto mb-8" />
            <p className="text-lg text-zinc-300 mb-10 leading-relaxed">
              With years of experience and dedication to the craft, we bring your vision to life 
              with precision and artistic excellence.
            </p>
            <Link
              href="/about"
              className="inline-block bg-red-700 hover:bg-red-800 text-white px-10 py-4 rounded-lg font-medium text-lg transition-all duration-300 transform hover:scale-105"
            >
              Learn More About Us
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
