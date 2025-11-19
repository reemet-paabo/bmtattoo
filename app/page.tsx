import type { Metadata } from 'next';
import Link from 'next/link';
import { getFeaturedTattoos } from '@/lib/sanity-queries';
import { urlFor } from '@/lib/sanity-client';

export const metadata: Metadata = {
  title: "BM Tattoo Studio - Custom Tattoos in Kristiine Tallinn, Estonia",
  description: "Professional custom tattoo artist based in Tallinn. Tratitional, realism, geometric, blackwork, black & gray, Japanese, ..., all styles accepted with professional detail oriented mindset and skill set",
  keywords: "tattoo, tattoo artist, Tallinn tattoo, Estonia tattoo, custom tattoo, tattoo shop, tratitional tattoo, realism tattoo, professional tattoo, English speaking artist, Estonian speaking artist, creative custom tattoos, coverups, Roland Paabo, Rolts Paabo, Paabo, Bloody Mess Tattoo, Dicksquid tattoo",
  openGraph: {
    title: "BM Tattoo Studio - Custom Tattoos in Tallinn",  
    description: "Professional custom renowned artist in Tallinn, known for exceptional craftmanship and color work.",
    url: "https://bmtattoo.vercel.app", /** @todo: production domain required */
    siteName: "BM Tattoo Studio",
    images: [
      {
        url: "https://bmtattoo.vercel.app/og-image.jpg", /** @todo: logos and images of studio, brand */
        width: 1200,
        height: 630,
        alt: "BM Tattoo Studio",
      }
    ],
    locale: "en_US", // EE?
    type: "website"
  },

  /** twitter?  @todo: will use twitter? */ 

  twitter: { 
    card: "summary_large_image",
    title: "BM Tattoo Studio - Custom Tattoos in Tallinn",
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
      <section className="container mx-auto px-4 py-12 md:py-20">
        <div className="text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6">
            Welcome to BM(read DickSquid) Tattoo Studio
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-6 md:mb-8">
            Tattoos, artistic and creative designs by renown artist Roland "Rolts" Paabo
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/portfolio"
            className="bg-zinc-900 text-white px-8 py-3 rounded-lg hover:bg-zinc-700 transition text-center"> 
              View Portfolio
            </Link>
            <Link href="/contact"
              className="border-2 border-gray-900 text-gray-900 px-8 py-3 rounded-lg hover:bg-gray-100 transition text-center"
            >
              Contact for Appointment
            </Link>
          </div>
        </div>

      </section>
      {/** Recent Work Section */}
      <section className="bg-gray-100 py-12 md:py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12">
            Recent Work
          </h2>
          
          {featuredTattoos.length === 0 ? (
            <div className="text-center text-gray-500">
              <p>No featured work uploaded yet... Waiting for uploads!</p>
            </div>
          ): (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg-grid-cols-3 gap-4 md:gap-8">
              {featuredTattoos.map((tattoo) => (
                <Link 
                  key={tattoo._id}
                  href="/portfolio"
                  className="group relative aspect-square overflow-hidden rounded-lg bg-gray-300"
                  >
                    <img 
                      src={urlFor(tattoo.image).width(800).height(800).url()}
                      alt={tattoo.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    {/** Permanent subtle dark overlay */}
                    <div className="absolut inset-0 bg-black bg-opacity-10 pointer-events-none"/>

                    {/** Hover overlay */}
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
        </div>
      </section>
    </main>
  );
}
