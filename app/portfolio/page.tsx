import PortfolioGrid from '../components/PortfolioGrid'

export default function PortfolioPage() {
  // Dummy/Placeholder Data. Will come from CMS later 
  const tattoos = [
    {
      id: 1,
      title: "Dragon Sleeve",
      style: "Traditional",
      image: "https://images.unsplash.com/photo-1534367610401-9f5ed68180aa?w=800&h=800&fit=crop",
      description: "Full sleeve dragon design with traditional Japanese elements"
    },
    {
      id: 2,
      title: "Geometric Lion",
      style: "Geometric",
      image: "https://images.unsplash.com/photo-1568515045052-f9a854d70bfd?w=800&h=800&fit=crop",
      description: "Geometric lion portrait with sacred geometry patterns"
    },
    {
      id: 3,
      title: "Rose Shoulder",
      style: "Realism",
      image: "https://images.unsplash.com/photo-1543244128-30d70d41e2a9?w=800&h=800&fit=crop",
      description: "Realistic rose with water droplets on shoulder"
    },
    {
      id: 4,
      title: "Tribal Arm Band",
      style: "Blackwork",
      image: "https://images.unsplash.com/photo-1598371839696-5c5bb00bdc28?w=800&h=800&fit=crop",
      description: "Bold tribal patterns wrapping around upper arm"
    },
    {
      id: 5,
      title: "Watercolor Bird",
      style: "Color",
      image: "https://images.unsplash.com/photo-1479767574301-a01c78234a0c?w=800&h=800&fit=crop",
      description: "Vibrant watercolor hummingbird with splash effects"
    },
    {
      id: 6,
      title: "Mandala Back",
      style: "Geometric",
      image: "https://images.unsplash.com/photo-1651650564658-560547484ad8?w=800&h=800&fit=crop",
      description: "Large mandala design centered on upper back"
    },
  ]
  return (
    <main className="container mx-auto px-4 py-12 md:py-20">
      <div className="mb-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Portfolio</h1>
        <p className="text-gray-600 text-lg">
          Browse my collection of custom tattoo work
        </p>
      </div>

      <PortfolioGrid tattoos={tattoos} />
    </main>
  );
}