'use client';

import { useState } from 'react';
// import Image from 'next/image';
import Lightbox from './Lightbox';

interface Tattoo {
    id: string;
    title: string;
    style: string;
    image: string;
    description: string;
}

interface PortfolioGridProps {
    tattoos: Tattoo[];
}

export default function PortfolioGrid({ tattoos }: PortfolioGridProps) {
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

    const openLightbox = (index: number) => {
        setSelectedIndex(index);
    }

    const closeLightbox = () => {
        setSelectedIndex(null)
    }

    const goToNext = () => {
        if (selectedIndex !== null && selectedIndex < tattoos.length - 1) {
            setSelectedIndex(selectedIndex + 1);
        }
    }

    const goToPrev = () => {
        if (selectedIndex !== null && selectedIndex > 0) {
            setSelectedIndex(selectedIndex - 1)
        }
    }

    return (
        <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {tattoos.map((tattoo, index) => (
                    <div
                        key={tattoo.id}
                        onClick={() => openLightbox(index)}
                        className="group cursor-pointer relative aspect-square overflow-hidden rounded-lg bg-zinc-900 border border-zinc-800 hover:border-red-700 transition-all duration-300"
                    >
                        {/* Image */}
                        <img
                            src={tattoo.image}
                            alt={tattoo.title}
                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                        />

                        {/* Very subtle permanent overlay */}
                        <div className="absolute inset-0 bg-black opacity-20 pointer-events-none" />

                        {/* Hover overlay */}
                        <div className="absolute inset-0 bg-transparent group-hover:bg-black group-hover:bg-opacity-70 transition-all duration-300 flex items-end p-6">
                            <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <h3 className="font-bold text-xl mb-1">{tattoo.title}</h3>
                                <p className="text-sm text-zinc-300 capitalize">{tattoo.style}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            {/** Lightbox */}
            {selectedIndex !== null && (
                <Lightbox
                    tattoo={tattoos[selectedIndex]}
                    onClose={closeLightbox}
                    onNext={goToNext}
                    onPrev={goToPrev}
                    hasNext={selectedIndex < tattoos.length - 1}
                    hasPrev={selectedIndex > 0}
                />
            )}
        </>
    )

}
/** 
 * @todo: api route and image storage
 * 
 * For real images
 * <Image
    src={tattoo.image}
    alt={tattoo.title}
    fill
    className="object-cover transition-transform duration-300 group-hover:scale-110"
    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
/>

//next.config.ts
const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'your-cdn.com',
      },
    ],
  },
};
 */