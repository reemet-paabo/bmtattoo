/**
 * 
 * Placeholder with no functionality.
 * Later steps: Convert to Client Component
 * Handle form submission when API route exists
 * Error handling
 * Select option for [type of appointment] 
 * Image upload/send? (restrictions needed)
 */

export default function ContactPage() {
  return (
    <main className="container mx-auto px-4 py-12 md:py-20">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Get in Touch</h1>
        <p className="text-gray-600 mb-8">
          Interested in getting a tattoo? Fill out the form below and I'll get back to you in short notice.
        </p>

        <form className="space-y-6">
          {/** Name Field */}

          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-2">
              Name *
            </label>
            <input 
              type="text" 
              id="name" 
              name="name" 
              required 
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-zinc-900 focus:border-transparent outline-none transition"
              placeholder="Your Name" 
            />
          </div>
          {/** Email field */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2">
              Email *
              </label>
            <input 
              type="text" 
              id="email" 
              name="email" 
              required 
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-zinc-900 focus:border-transparent outline-none transition"
              placeholder="john.doe@email.com"/>
          </div>
          {/** Phone field */}
          <div>
            <label htmlFor="phone" className="block text-sm font-medium mb-2">
              Phone
            </label>
            <input 
              type="tel" 
              id="phone" 
              name="phone" 
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-zinc-900 focus:border-transparent outline-none transition"
              placeholder="+372 1234 5678"/>
          </div>
          {/** Something about what kind of tattoo request? Cover-up, Re-ink,New small, sleeve etc..? before message */}
           <div>
            <label htmlFor="option" className="block text-sm font-medium mb-2">
              Selection
            </label>
            <select
              id="option"
              name="option"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-zinc-900 focus:border-transparent outline-none transition"
            >
              <option value="">Select a option</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">Other</option>
            </select>
          </div>

          { /** Message field */}

          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-2">
              Message *
            </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-zinc-900 focus:border-transparent otline-none transition resize-none"
                  placeholder="Tell us about your tattoo idea, preferred size, placement, etc."
                />
          </div>

          {/** Submit formBtn */}
          <button
            type="submit"
            className="w-full bg-zinc-900 text-white px-8 py-4 rounded-lg hover:bg-zinc-800 transition font-medium text-lg"
          >
            Send Message
          </button>
        </form>

        {/** Contact Info */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <h2 className="text-xl font-bold mb-4">Other ways to get in touch</h2>
          <div className="space-y-2 text-gray-600">
            <p>📞 <strong>Phone:</strong> +372 1234 5678</p>
            <p>✉️ <strong>Email:</strong> info@bmtattoo.ee</p>
            <p>📍 <strong>Address:</strong> 123 Tattoo Street, Tallinn</p>
            <p>🕒 <strong>Hours:</strong> Mon-Fri: 12:00-20:00, Sat: 11:00-18:00</p>
          </div>

        </div>
      </div>
    </main>
  );
}