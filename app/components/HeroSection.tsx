import Link from 'next/link';

export default function HeroSection() {
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
                <div className="absolute inset-0 bg-black/60" />
            </div>

            {/** Content */}
            <div className="relative z-10 w-full px-4 py-20">
                <div className="max-w-4xl mx-auto text-center">
                    {/** LOGO or NAME */}
                    <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-4 tracking-wider">
                        DICKSQUID TATTOO
                    </h1>

                    { /** TAGLINE */}
                    <p className="text-xl md:text-2xl text-white/90 mb-8 font-light tracking-wide">
                        Custom Tattoos  •  Tallinn, Estonia
                    </p>

                    {/** Divider */}
                    <div className="w-40 h-1 bg-red-700 mb-8 mx-auto" />
                    {/** Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/portfolio"
                            className="bg-red-700 hover:bg-red-800 text-white px-8 py-3 sm:py-4 rounded-lg font-medium text-base sm:text-lg transition transform hover:scale-105"
                        >
                            View Portfolio
                        </Link>
                        <Link
                            href="/contact"
                            className="border-2 border-white text-white hover:bg-white hover:text-black px-8 py-3 sm:py-4 rounded-lg font-medium text-base sm:text-lg transition"
                        >
                            BOOKING
                        </Link>
                    </div>
                </div>
            </div>


            {/** Scroll. MAYBE @todo: remember, maybe remove */}
            <div className="absolute bottom-22 left-1/2 -translate-x-1/2 animate-bounce z-10">
                <svg
                    className="w-8 h-8 text-white/70"
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