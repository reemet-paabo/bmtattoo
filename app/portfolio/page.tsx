import type { Metadata } from 'next';
import PortfolioGrid from '../components/PortfolioGrid';
import { getTattoos } from '@/lib/sanity-queries';
import { urlFor } from '@/lib/sanity-client';

export const metadata: Metadata = {
  title: "Portfolio | BM Tattoo Studio - Created Works Gallery",
  description: "Browse the porftolio of custom created tattoos in all sizes and styles",
  openGraph: {
    title: "Portfolio | BM Tattoo Studio",
    description: "Browse portfolio of custom tattoos and artistic designs",
    url: "https://bmtattoo.vercel.app/portfolio" /** @todo: production domain  */
  }
}

export const revalidate = 60; // revalidates every 60 seconds


export default async function PortfolioPage() {
 const sanityTattoos = await getTattoos();

  const tattoos = sanityTattoos.map((tattoo) => ({
    id: tattoo._id,
    title: tattoo.title,
    style: tattoo.style,
    image: urlFor(tattoo.image).width(800).height(800).url(),
    description: tattoo.description || '',
  }))

  return (
    <main className="container mx-auto px-4 py-12 md:py-20">
      <div className="mb-12">
        <h3 className="text-zinc-50 text-3xl md:text-4xl font-bold mb-4">Portfolio</h3>
        <p className="text-zinc-300 text-lg">
          Browse the collection of custom tattoo work
        </p>
      </div>
      {tattoos.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">No tattoos added yet.</p>
        </div>
      ) : (
        <PortfolioGrid tattoos={tattoos} />
      )}
    </main>
  );
}