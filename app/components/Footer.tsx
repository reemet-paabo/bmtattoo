import Link from 'next/link';
import { getStudioInfo } from '@/lib/sanity-queries';
/**
 * @todo: googleapis/map integration. Correct hours and number & social links
 */
export default async function Footer() {
    const studioInfo = await getStudioInfo();

    // Fallback placeholder data if CMS not set.
    const defaultInfo = {
        studioName: 'DickSquid Tattoo',
        address: {
            street: 'Koskla tn 16',
            city: 'Tallinn',
        },
        phone: '+372 1234 5678',
        email: 'info@bmtattoo.ee',
        hours: [
            { days: 'Monday - Friday', hours: '12:00 - 20:00' },
            { days: 'Saturday', hours: '11:00 - 18:00' },
            { days: 'Sunday', hours: 'Closed' },
        ],
        socialMedia: {
            instagram: 'https://instagram.com',
            facebook: 'https://facebook.com',
        },
    }; 

    const info = studioInfo || defaultInfo;

    return (
        <footer className="bg-neutral-950 text-white">
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/** Contact Infot Section */} {/** @todo googlemap apis integration */}
                    <div>
                        <h3 className="text-xl font-bold mb-4">Contact</h3>
                        <ul className="space-y-2 text-gray-300">
                            {info.address && (
                                <li>📍{info.address.street}
                                    {info.address.city && `, ${info.address.city}`}
                                </li>

                            )}
                            { /** <li>📞 +372 1234 5678</li> */}
                            <li>✉️ {info.email}</li>
                        </ul>

                    </div>
                    {/** Hourse Section */}
                    <div>
                        <h3 className="text-xl font-bold mb-4">Studio Hours</h3>
                        <ul className="space-y-2 text-gray-300">
                            {info.hours && info.hours.length > 0 ? (
                                info.hours.map((scedule, index) => (
                                    <li key={index}>
                                        {scedule.days}: {scedule.hours}
                                    </li>
                                ))
                            ) : (
                                <> <li>Monday - Friday: 12:00 - 20:00</li>
                                    <li>Saturday: 11:00 - 18:00</li>
                                    <li>Sunday: Closed</li>
                                </>
                            )}
                        </ul>
                    </div>
                    {/** Quick Links & Social */}
                    <div>
                        <h3 className="text-xl font-bold mb-4">Follow Us</h3>
                        <div className="flex gap-4 mb-6">
                            {info.socialMedia?.instagram && (
                            <a
                                href={info.socialMedia?.instagram}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-gray-300 transition"
                                aria-label="Instagram"
                            >
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                </svg>
                            </a>
                            )}
                            {info.socialMedia?.facebook && (
                            <a
                                href="https://facebook.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-gray-300 transition"
                                aria-label="Fabebook"
                            >
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                </svg>
                            </a>
                            )}
                        </div>
                        <div className="space-y-2">
                            <Link href="/portfolio" className="block text-gray-300 hover:text-white transition">
                                Portfolio
                            </Link>
                            <Link href="/about" className="block text-gray-300 hover:text-white transition">
                                About
                            </Link>
                            <Link href="/contact" className="block text-gray-300 hover:text-white transition">
                                Book Appointment
                            </Link>
                        </div>
                    </div>
                </div>

                {/** Bottom Bar */}
                <div className="border-t border-zinc-800 mt-8 pt-8 text-center text-gray-400">
                    <p>&copy; {new Date().getFullYear()} {info.studioName || 'DickSquid Tattoo Studio'}.</p>
                </div>
            </div>
        </footer>
    )
}