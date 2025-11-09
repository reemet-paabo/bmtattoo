export default function AboutPage() {
  return (
    <main className="container mx-auto px-4 py-12 md:py-20">
      {/**Hero Section */}
      <div className="max-w-4xl mx-auto mb-16">
        <h1 className="text-3xl md:text-4xl font-bold mb-6">About the Artist</h1>
          {/**Artist Profile */}
          <div className="flex flex-col md:flex-row gap-8 items-start mb-12">
          <div className="w-full md:w-1/3">
            <div className="aspect-square bg-gray-300 rounded-lg overflow-hidden">
              <img 
                src="https://plus.unsplash.com/premium_vector-1721131162397-943dc390c744?w=600&auto=format&fit=crop&q=80"
                alt="Artist portrait"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          {/** Bio */}
          <div className="w-full md:w-2/3">
            <h2 className="text-2xl font-bold mb-4">Roland "Rolts" Paabo</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              With over 20 years of experience in the tattoo industry 
              [...]

              All styes like realism, color, black & gray, japanese, oldschool etc are accepted and worked on with 
              care 
              [...]

              Individual drawings that match the clients idea and style are highly valued and respected
              [...]  
            </p>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Roland's journey into tattoo began ( YEAR ). [ ... What motivated you and the cool story text here ...]
            </p>
            <p className="text-gray-700 leading-relaxed">
              Based in Kristiine, Tallinn, Estonia, Roland welcomes new appointments, be it your first tattoo and looking
              for professional advice or just adding something extra to your collection.

              Not sure what to get, yet like to add a small one to your collection? Get a random tattoo ( still drawn by Roland ) from
              the "Gumball Machine" for just [PRICE]$
            </p>
          </div>
      </div>
      </div>
      {/* Specialties Section */}
      <div className="max-w-4xl mx-auto mb-16">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Specialties</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gray-100 p-6 rounded-lg">
            <h3 className="font-bold text-xl mb-3">Traditional</h3>
            <p className="text-gray-700">
              Bold lines, vibrant colors, and classic designs that stand the test of time.
            </p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg">
            <h3 className="font-bold text-xl mb-3">Realism</h3>
            <p className="text-gray-700">
              Lifelike portraits and detailed imagery that captures every nuance.
            </p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg">
            <h3 className="font-bold text-xl mb-3">Geometric</h3>
            <p className="text-gray-700">
              Precise patterns and sacred geometry for modern, striking tattoos.
            </p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg">
            <h3 className="font-bold text-xl mb-3">Blackwork</h3>
            <p className="text-gray-700">
              Bold, solid black designs with powerful visual impact.
            </p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg">
            <h3 className="font-bold text-xl mb-3">Color Work</h3>
            <p className="text-gray-700">
              Vibrant, eye-catching designs with expert color blending.
            </p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg">
            <h3 className="font-bold text-xl mb-3">Custom Designs</h3>
            <p className="text-gray-700">
              Collaborative process to create something uniquely yours.
            </p>
          </div>
        </div>
      </div>
       {/* Experience Timeline */}
      <div className="max-w-4xl mx-auto mb-16">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Experience</h2>
        <div className="space-y-6">
          <div className="border-l-4 border-zinc-900 pl-6 py-2">
            <div className="font-bold text-lg">Professional Tattoo Artist</div>
            <div className="text-gray-600 mb-2">[Year] - Present</div>
            <p className="text-gray-700">
              Operating BM Tattoo Studio in Tallinn, creating custom tattoos and building 
              lasting relationships with clients.
            </p>
          </div>
        </div>
      </div>

      {/* Studio Info */}
      <div className="max-w-4xl mx-auto bg-zinc-900 text-white p-8 md:p-12 rounded-lg">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">The Studio</h2>
        <p className="text-gray-300 mb-6 leading-relaxed">
          BM Tattoo Studio is a clean, professional space designed for your comfort and safety. 
          We follow strict sterilization protocols and use only the highest quality inks and 
          equipment. Whether you're here for a small piece or a full session, you can expect 
          a welcoming atmosphere and exceptional artistry.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-300">
          <div>
            <h3 className="font-bold mb-2">📍 Location</h3>
            <p>123 Tattoo Street, Tallinn, Estonia</p>
          </div>
          <div>
            <h3 className="font-bold mb-2">🕒 Hours</h3>
            <p>Mon-Fri: 12:00-20:00<br />Sat: 11:00-18:00<br />Sun: Closed</p>
          </div>
          <div>
            <h3 className="font-bold mb-2">📞 Phone</h3>
            <p>+372 1234 5678</p>
          </div>
          <div>
            <h3 className="font-bold mb-2">✉️ Email</h3>
            <p>info@bmtattoo.ee</p>
          </div>
        </div>
      </div>
    </main>
  );
}