import Link from 'next/link';

export default function NotFound() {
    return (
        <main className="bg-zinc-950 min-h-screen flex items-center justify-center px-4">
      <div className="text-center max-w-2xl">
        {/* 404 Number */}
        <h1 className="text-9xl font-bold text-red-700 mb-4">404</h1>
        
        {/* Message */}
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Page Not Found
        </h2>
        <p className="text-lg text-zinc-300 mb-8">
          Sorry, the page you're looking for doesn't exist or has been moved.
        </p>

        {/* Divider */}
        <div className="w-24 h-1 bg-red-700 mx-auto mb-8" />

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="bg-red-700 hover:bg-red-800 text-white px-8 py-3 rounded-lg font-medium transition"
          >
            Go Home
          </Link>
          <Link
            href="/portfolio"
            className="border-2 border-red-700 text-red-700 hover:bg-red-700 hover:text-white px-8 py-3 rounded-lg font-medium transition"
          >
            View Portfolio
          </Link>
        </div>

        {/* Helpful Links */}
        <div className="mt-12 pt-8 border-t border-zinc-800">
          <p className="text-zinc-400 mb-4">Looking for something?</p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <Link href="/about" className="text-red-700 hover:text-red-600 transition">
              About Us
            </Link>
            <span className="text-zinc-700">•</span>
            <Link href="/contact" className="text-red-700 hover:text-red-600 transition">
              Contact
            </Link>
            <span className="text-zinc-700">•</span>
            <Link href="/admin/login" className="text-red-700 hover:text-red-600 transition">
              Admin Login
            </Link>
          </div>
        </div>
      </div>
    </main>
    );
}