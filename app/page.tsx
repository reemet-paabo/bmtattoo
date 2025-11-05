export default function Home() {
  return (
    <main>
      <section className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-5xl font-bold mb-6">
            Welcome to BM(read dicksquid) Tattoo Studio
          </h1>
          <p>
            Tattoos, artistic and creative designs by [MINU VEND]
          </p>
          <div className="flex gap-4 justify-center">
            <a href="/portfolio"
            className="bg-gray-900 text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition"> 
              View Portfolio
            </a>
            <a href="/contact"
              className="border-2 border-gray-900 text-gray-900 px-8 py-3 rounded-lg hover:bg-gray-100 transition"
            >
              Contact for Appointment
            </a>
          </div>
        </div>

      </section>

      <section className="bg-gray-100 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Recent Work
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            { /** placeholder for recent tattoos */}

            {[1,2,3].map((i) => (
              <div key={i} className="bg-gray-300 aspect-square rounded-lg"></div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
