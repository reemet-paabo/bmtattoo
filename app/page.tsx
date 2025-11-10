import type { Metadata } from 'next';
import Link from 'next/link';

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

export default function Home() {
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
            { /** placeholder for recent tattoos */}

            {[1,2,3].map((i) => (
              <div key={i} className="bg-gray-300 aspect-square rounded-lg">
                {/** Images will go here */}
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
