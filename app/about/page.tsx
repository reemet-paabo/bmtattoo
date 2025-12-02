import type { Metadata } from 'next';
import { getAboutPage } from '@/lib/sanity-queries';
import { urlFor } from '@/lib/sanity-client';
import PortableText from '../components/PortableText';
import { specialtyDescriptions, specialtyTitles } from '@/lib/specialty-descriptions';

import { Alumni_Sans_SC } from 'next/font/google';

const AlumniSans = Alumni_Sans_SC({
  weight: '500',
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: "About | DickSquid Tattoo Studio - Meet the Artist",
  description: "Learn about Roland \"Rolts\" Paabo, renowned artist in Tallinn with over 20 years of experience. Creative imagination brought to life through a precise and steady hand",
  openGraph: {
    title: "About | DickSquid Tattoo Studio",
    description: "Learn about the artist and the studio in Tallinn",
    url: "https://dicksquid.bmtattoo.com/about"
  }
};

export const revalidate = 60;

export default async function AboutPage() {
  const about = await getAboutPage();

  if (!about) {
    return (
      <main className={`${AlumniSans.className} bg-zinc-950 min-h-screen pt-24`}>
        <div className="container mx-auto px-4 py-20">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-white">About</h1>
          <p className="text-zinc-400">Content coming soon. Please add content in the Studio!</p>
        </div>
      </main>
    );
  }

  const currentYear = new Date().getFullYear();
  const yearsOfExperience = currentYear - about.careerStartYear;

  return (
    <main className={`${AlumniSans.className} bg-zinc-950 pt-24 pb-16`}>
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-white">About the Artist</h1>
            <div className="w-24 h-1 bg-red-700 mx-auto" />
          </div>
          
          {/* Artist Profile */}
          <div className="flex flex-col md:flex-row gap-8 items-start mb-12">
            {/* Profile Image */}
            <div className="w-full md:w-1/3">
              <div className="aspect-square rounded-lg overflow-hidden border-2 border-zinc-800">
                <img
                  src={urlFor(about.profileImage).width(600).height(600).url()}
                  alt={about.artistName}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Bio */}
            <div className="w-full md:w-2/3 bg-zinc-900 rounded-lg p-6 md:p-8 border border-zinc-800">
              <h2 className="text-2xl md:text-3xl font-bold mb-3 text-white">{about.artistName}</h2>
              <p className="text-red-500 font-medium mb-6 text-lg">
                {yearsOfExperience} {yearsOfExperience === 1 ? 'year' : 'years'} of experience
                <span className="text-zinc-400 text-sm ml-2">
                  (Since {about.careerStartYear})
                </span>
              </p>
              <div className="text-zinc-300 prose prose-invert">
                <PortableText value={about.bio} />
              </div>
            </div>
          </div>
        </div>

        {/* Specialties Section */}
        {about.specialties && about.specialties.length > 0 && (
          <div className="max-w-5xl mx-auto mb-16">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Specialties</h2>
              <div className="w-24 h-1 bg-red-700 mx-auto" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {about.specialties.map((specialty) => (
                <div key={specialty} className="bg-zinc-900 p-6 rounded-lg border border-zinc-800 hover:border-red-700 transition-all duration-300">
                  <h3 className="font-bold text-xl mb-3 text-white">
                    {specialtyTitles[specialty] || specialty}
                  </h3>
                  <p className="text-zinc-300 leading-relaxed">
                    {specialtyDescriptions[specialty] || 'Expert craftsmanship in this style.'}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Experience Timeline */}
        {about.experience && about.experience.length > 0 && (
          <div className="max-w-4xl mx-auto mb-16">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Experience</h2>
              <div className="w-24 h-1 bg-red-700 mx-auto" />
            </div>
            <div className="space-y-6">
              {about.experience.map((exp, index) => (
                <div key={index} className="border-l-4 border-red-700 pl-6 py-3 bg-zinc-900/50 rounded-r-lg">
                  <div className="font-bold text-lg text-white">{exp.title}</div>
                  <div className="text-red-500 font-medium mb-2">
                    {exp.startYear} - {exp.endYear || 'Present'}
                  </div>
                  {exp.description && (
                    <p className="text-zinc-300 leading-relaxed">{exp.description}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Studio Info */}
        {about.studioDescription && (
          <div className="max-w-4xl mx-auto bg-zinc-900 border-2 border-red-700 p-8 md:p-12 rounded-lg">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">The Studio</h2>
            <p className="text-zinc-300 leading-relaxed text-lg">{about.studioDescription}</p>
          </div>
        )}
      </div>
    </main>
  );
}