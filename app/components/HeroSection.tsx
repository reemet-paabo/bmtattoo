'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

interface Tattoo {
    _id: string;
    title: string;
    style: string;
    image: string;
}

interface HeroSectionProps {
    featuredTattoos: Tattoo[];
}


export default function HeroSection({ featuredTattoos }: HeroSectionProps) {
    const [currentIndex, setCurrentIndex] = useState(0);


    // Auto-scroll caruousel
    useEffect(() => {
        if (featuredTattoos.length === 0) return;

        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % featuredTattoos.length);
        }, 3000);

        return () => clearInterval(interval);
    }, [featuredTattoos.length]);

    const getPrevIndex = () => {
        return currentIndex === 0 ? featuredTattoos.length - 1 : currentIndex - 1;
    };

    const getNextIndex = () => {
        return (currentIndex + 1) % featuredTattoos.length;
    }

    return (
        <section className="relative min-h-screen w-full overflow-hidden flex items-center justify-center">
            {/** Video Background */}
            <div className="absolute inset-0 z-0">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="min-w-full min-h-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 object-cover"
                    style={{ width: '100vw', height: '100vh' }}
                >
                    {/** Placeholder video. @todo: replace with actual later */}
                    <source
                        src="https://cdn.pixabay.com/video/2023/03/05/153299-804933560_large.mp4"
                        type="video/mp4"
                    />
                    {/** Fallback if browser does not support video */}
                    Your browser does not support the video tag. For Best experience use Chrome or Firefox.
                </video>

                {/** Dark overlay */}
                <div className="absolute inset-0 bg-black/70" />
            </div>

            {/* Content */}
            <div className="relative z-10 w-full px-4 py-20">
                <div className="max-w-6xl mx-auto">
                    {/* Top Section - Logo and Tagline */}
                    <div className="text-center mb-12">
                        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-4 tracking-wider">
                            DickSquid TATTOO
                        </h1>

                        <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-8 font-light tracking-wide">
                            Custom Tattoos • Tallinn, Estonia
                        </p>

                        <div className="w-24 h-1 bg-red-700 mb-10 mx-auto" />
                    </div>

                    {/* Call to Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center mb-22">
                        <Link
                            href="/portfolio"
                            className="bg-red-700 hover:bg-red-800 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-medium text-base sm:text-lg transition transform hover:scale-105"
                        >
                            View Portfolio
                        </Link>
                        <Link
                            href="/contact"
                            className="border-2 border-white text-white hover:bg-white hover:text-black px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-medium text-base sm:text-lg transition"
                        >
                            Book Appointment
                        </Link>
                    </div>

                    {/* Featured Work Carousel */}
                    {featuredTattoos.length > 0 && (
                        <div className="relative h-38 sm:h-80 md:h-96 mb-16">
                            <div className="flex items-center justify-center h-full gap-4 px-4">
                                {/* Previous Image (Faded) */}
                                {featuredTattoos.length > 1 && (
                                    <div className="hidden sm:block w-48 md:w-64 h-48 md:h-64 opacity-40 transition-all duration-500">
                                        <img
                                            src={featuredTattoos[getPrevIndex()].image}
                                            alt={featuredTattoos[getPrevIndex()].title}
                                            className="w-full h-full object-cover rounded-lg"
                                        />
                                    </div>
                                )}

                                {/* Current Image (Focused) */}
                                <div className="w-64 sm:w-72 md:w-96 h-64 sm:h-72 md:h-96 opacity-90 transition-all duration-500 transform scale-100 shadow-2xl">
                                    <Link href="/portfolio" className="block w-full h-full">
                                        <img
                                            src={featuredTattoos[currentIndex].image}
                                            alt={featuredTattoos[currentIndex].title}
                                            className="w-full h-full object-cover rounded-lg border-2 border-red-700"
                                        />
                                    </Link>
                                </div>

                                {/* Next Image (Faded) */}
                                {featuredTattoos.length > 1 && (
                                    <div className="hidden sm:block w-48 md:w-64 h-48 md:h-64 opacity-40 transition-all duration-500">
                                        <img
                                            src={featuredTattoos[getNextIndex()].image}
                                            alt={featuredTattoos[getNextIndex()].title}
                                            className="w-full h-full object-cover rounded-lg"
                                        />
                                    </div>
                                )}
                            </div>

                            {/* Carousel Indicators */}
                            <div className="relative top-10 items-center justify-center left-1/2 -translate-x-1/2 flex gap-2">
                                {featuredTattoos.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setCurrentIndex(index)}
                                        className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentIndex
                                                ? 'bg-red-700 w-8'
                                                : 'bg-white/50 hover:bg-white/80'
                                            }`}
                                        aria-label={`Go to slide ${index + 1}`}
                                    />
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce z-10">
                <svg
                    className="w-6 h-6 text-white/70"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 14l-7 7m0 0l-7-7m7 7V3"
                    />
                </svg>
            </div>
        </section>
    )
}