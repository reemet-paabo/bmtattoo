import type { Metadata } from 'next';
import PortfolioGrid from '../components/PortfolioGrid';
import { getTattoos } from '@/lib/sanity-queries';
import { urlFor } from '@/lib/sanity-client';

import { Alumni_Sans_SC } from 'next/font/google';
import { Suspense } from 'react';

const AlumniSans = Alumni_Sans_SC({
  weight: '500',
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: "Portfolio | DickSquid Tattoo Studio - Created Works Gallery",
  description: "Browse the porftolio of custom created tattoos in all sizes and styles",
  openGraph: {
    title: "Portfolio | DickSquid Tattoo Studio",
    description: "Browse portfolio of custom tattoos and artistic designs",
    url: "https://dicksquid.bmtattoo.com/portfolio",
  }
}

export const revalidate = 60; // revalidates every 60 seconds

function PortfolioLoading() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {[1, 2, 3, 4, 5, 6].map((i) => (
        <div key={i} className="aspect-square bg-zinc-800 rounded-lg animate-pulse"/>
      ))}
    </div>
  )
}

async function PortfolioContent() {
  const sanityTattoos = await getTattoos();

  const tattoos = sanityTattoos.map((tattoo) => ({
    id: tattoo._id,
    title: tattoo.title,
    style: tattoo.style,
    image: urlFor(tattoo.image).width(800).height(800).url(),
    description: tattoo.description || '',
  }));

  if (tattoos.length === 0) {
    return (
        <div className="text-center py-12">
          <p className="text-zinc-400 text-lg">No tattoos added yet.</p>
        </div>
    )
  }
 
  return <PortfolioGrid tattoos={tattoos} />
  
}

export default async function PortfolioPage() {
 

  return (
    <main className={`${AlumniSans.className} bg-zinc-950 min-h-screen pt-24 pb-16`}>
      <div className="container mx-auto px-4">
      <div className="mb-12 text-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-white">Portfolio</h1>
        <div className="w-24 h-1 bg-red-700 mx-auto mb-4" />
        <p className="text-zinc-300 text-4xl">
          Browse the collection of custom tattoo work
        </p>
      </div>
        <Suspense fallback={< PortfolioLoading />}>
          <PortfolioContent />
        </ Suspense>
      
      </div>
    </main>
  );
}