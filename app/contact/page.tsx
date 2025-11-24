
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Contact | DickSquid Tattoo Studio - Book Your Appoinment Today",
  description: "Contact DickSquid Tattoo Studio in Tallinn to book your custom tattoo appointment. Located at 123 StreetName. Call +372 1234 5678 or fill out the contact form.",
  openGraph: {
    title: "Contact | DickSquid Tattoo Studio",
    description: "Get in touch and book your appointment.",
    url: "https://bmtattoo.vercel.app/contact"

  }
}

/**
 *  @todo: api route for inbox
 * Placeholder Component.
 * Later steps: Convert to Client Component
 * Handle form submission when API route exists
 * Error handling
 * Select option for [type of appointment] 
 * Image upload/send? (restrictions needed)
 */
export default function ContactPage() {
  return (
    <main className="bg-zinc-950 min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-white">Get in Touch</h1>
            <div className="w-24 h-1 bg-red-700 mx-auto mb-6" />
            <p className="text-zinc-300 text-lg">
              Interested in getting a tattoo? Fill out the form below and we'll get back to you soon.
            </p>
          </div>

          <form className="space-y-6 bg-zinc-900 p-8 rounded-lg border border-zinc-800">
            {/* Name Field */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2 text-zinc-300">
                Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg text-white placeholder-zinc-500 focus:ring-2 focus:ring-red-700 focus:border-transparent outline-none transition"
                placeholder="Your name"
              />
            </div>

            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2 text-zinc-300">
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg text-white placeholder-zinc-500 focus:ring-2 focus:ring-red-700 focus:border-transparent outline-none transition"
                placeholder="your.email@example.com"
              />
            </div>

            {/* Phone Field */}
            <div>
              <label htmlFor="phone" className="block text-sm font-medium mb-2 text-zinc-300">
                Phone
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg text-white placeholder-zinc-500 focus:ring-2 focus:ring-red-700 focus:border-transparent outline-none transition"
                placeholder="+372 1234 5678"
              />
            </div>

            {/* Tattoo Style Select */}
            <div>
              <label htmlFor="style" className="block text-sm font-medium mb-2 text-zinc-300">
                Preferred Style
              </label>
              <select
                id="style"
                name="style"
                className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg text-white focus:ring-2 focus:ring-red-700 focus:border-transparent outline-none transition"
              >
                <option value="">Select a style</option>
                <option value="traditional">Traditional</option>
                <option value="realism">Realism</option>
                <option value="blackwork">Blackwork</option>
                <option value="color">Color</option>
                <option value="geometric">Geometric</option>
                <option value="biomechanical">Biomechanical</option>
                <option value="other">Other</option>
              </select>
            </div>

            {/* Message Field */}
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2 text-zinc-300">
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={6}
                className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg text-white placeholder-zinc-500 focus:ring-2 focus:ring-red-700 focus:border-transparent outline-none transition resize-none"
                placeholder="Tell us about your tattoo idea, preferred size, placement, etc."
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-red-700 hover:bg-red-800 text-white px-8 py-4 rounded-lg font-medium text-lg transition-all duration-300 transform hover:scale-105"
            >
              Send Message
            </button>
          </form>

          {/* Contact Info Below Form */}
          <div className="mt-12 pt-8 border-t border-zinc-800">
            <h2 className="text-xl font-bold mb-6 text-white text-center">Other Ways to Reach Me</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-zinc-300">
              <div className="bg-zinc-900 p-4 rounded-lg border border-zinc-800">
                <p className="font-medium text-white mb-1">📞 Phone</p>
                <p>+372 1234 5678</p>
              </div>
              <div className="bg-zinc-900 p-4 rounded-lg border border-zinc-800">
                <p className="font-medium text-white mb-1">✉️ Email</p>
                <p>info@bmtattoo.ee</p>
              </div>
              <div className="bg-zinc-900 p-4 rounded-lg border border-zinc-800">
                <p className="font-medium text-white mb-1">📍 Address</p>
                <p>123 Tattoo Street, Tallinn</p>
              </div>
              <div className="bg-zinc-900 p-4 rounded-lg border border-zinc-800">
                <p className="font-medium text-white mb-1">🕒 Hours</p>
                <p>Mon-Fri: 12:00-20:00<br />Sat: 11:00-18:00</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}