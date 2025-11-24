'use client';

import { useEffect } from 'react';

interface Tattoo {
    id: string;
    title: string;
    style: string;
    image: string;
    description: string;
}

interface LightboxProps {
    tattoo: Tattoo;
    onClose: () => void;
    onNext: () => void;
    onPrev: () => void;
    hasNext: boolean;
    hasPrev: boolean;
}

export default function Lightbox({ tattoo, onClose, onNext, onPrev, hasNext, hasPrev }: LightboxProps) {

    // Keyboad navigation Listener
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
            if (e.key === 'ArrowRight' && hasNext) onNext();
            if (e.key === 'ArrowLeft' && hasPrev) onPrev();
        };

        window.addEventListener('keydown', handleKeyDown);

        // prevent body scroll when lightbox isOpen
        document.body.style.overflow = 'hidden';

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
            document.body.style.overflow = 'unset';
        };
    }, [onClose, onNext, onPrev, hasNext, hasPrev]);

    return (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4">
            {/**Close button */}
            <button
                onClick={onClose}
                className="absolute top-4 right-4 text-white hover:text-red-500 transition z-50"
                aria-label="Close lightbox"
            >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>

            {/* Previous button */}
            {hasPrev && (
                <button
                    onClick={onPrev}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-red-500 transition z-50"
                    aria-label="Previous image"
                >
                    <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                </button>
            )}
            {/* Next button */}
            {hasNext && (
                <button
                    onClick={onNext}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-red-500 transition z-50"
                    aria-label="Next image"
                >
                    <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </button>
            )}
            {/** Main content area - click to close */}
            <div
                onClick={onClose}
                className="w-full h-full flex items-center justify-center"
            >
                {/** ImageContainer - stop propagation so clicking image doesn't close */}
                <div
                    onClick={(e) => e.stopPropagation()}
                    className="max-w-6xl max-h-[90vh] flex flex-col md:flex-row gap-6 bg-zinc-900 rounded-lg overflow-hidden"
                >
                    {/** Image */}
                    <div className="flex-shrink-0 md:w-2/3 bg-black flex items-center justify-center p-4">
                        <img
                            src={tattoo.image}
                            alt={tattoo.title}
                            className="max-w-full max-h-[70vh] md:max-h-[90vh] object-contain"
                        />
                    </div>

                    {/** Info panel */}
                    <div className="p-6 md:w-1/3 flex flex-col justify-center text-white">
                        <h2 className="text-2xl md:text-3xl font-bold mb-2">{tattoo.title}</h2>
                        <p className="text-red-700 font-medium mb-4 capitalize">Style: {tattoo.style}</p>
                        {tattoo.description && (
                            <p className="text-zinc-300 leading-relaxed">{tattoo.description}</p>

                        )}

                    </div>
                </div>

            </div>
        </div>
    )
}