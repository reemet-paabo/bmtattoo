export default function ColorsTestPage() {
  return (
    <div className="min-h-screen bg-zinc-950 p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        
        {/* Option 1: Classic */}
        <div className="space-y-4">
          <h2 className="text-white text-2xl font-bold">Option 1: Classic Blood Red</h2>
          <div className="grid grid-cols-4 gap-4">
            <div className="bg-red-600 h-20 rounded flex items-center justify-center text-white">Red 600</div>
            <div className="bg-red-500 h-20 rounded flex items-center justify-center text-white">Red 500</div>
            <div className="bg-zinc-950 h-20 rounded flex items-center justify-center text-white">Zinc 950</div>
            <div className="bg-zinc-900 h-20 rounded flex items-center justify-center text-white">Zinc 900</div>
          </div>
          <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg transition">
            Example Button
          </button>
        </div>

        {/* Option 2: Crimson */}
        <div className="space-y-4">
          <h2 className="text-white text-2xl font-bold">Option 2: Dark Crimson</h2>
          <div className="grid grid-cols-4 gap-4">
            <div className="bg-red-700 h-20 rounded flex items-center justify-center text-white">Red 700</div>
            <div className="bg-red-600 h-20 rounded flex items-center justify-center text-white">Red 600</div>
            <div className="bg-zinc-950 h-20 rounded flex items-center justify-center text-white">Zinc 950</div>
            <div className="bg-zinc-900 h-20 rounded flex items-center justify-center text-white">Zinc 900</div>
          </div>
          <button className="bg-red-700 hover:bg-red-800 text-white px-6 py-3 rounded-lg transition">
            Example Button
          </button>
        </div>

        {/* Option 3: Fire */}
        <div className="space-y-4">
          <h2 className="text-white text-2xl font-bold">Option 3: Fire Red</h2>
          <div className="grid grid-cols-4 gap-4">
            <div className="bg-red-500 h-20 rounded flex items-center justify-center text-white">Red 500</div>
            <div className="bg-red-400 h-20 rounded flex items-center justify-center text-white">Red 400</div>
            <div className="bg-black h-20 rounded flex items-center justify-center text-white">Black</div>
            <div className="bg-zinc-900 h-20 rounded flex items-center justify-center text-white">Zinc 900</div>
          </div>
          <button className="bg-red-500 hover:bg-red-400 text-white px-6 py-3 rounded-lg shadow-lg shadow-red-500/50 transition">
            Example Button
          </button>
        </div>

      </div>
    </div>
  );
}