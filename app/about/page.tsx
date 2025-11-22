import type { Metadata } from 'next';
import { getAboutPage } from '@/lib/sanity-queries';
import { urlFor } from '@/lib/sanity-client';
import PortableText from '../components/PortableText';

export const metadata: Metadata = {
  title: "About | BM Tattoo Studio - Meet the Artist",
  description: "Learn about Roland \"Rolts\" Paabo, renowned artist in Tallinn with over 20 years of experience. Creative imagination brought to life through a precise and steady hand",
  openGraph: {
    title: "About | BM Tattoo Studio",
    description: "Learn about the artist and the studio in Tallinn",
    url: "https://bmtattoo.vercel.app/about"
  }
};

export const revalidate = 60;

export default async function AboutPage() {
  const about = await getAboutPage();
  if (!about) {
    return (
      <main className="container mx-auto px-4 py-12 md:py-20">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">About</h1>
        <p className="text-gray-600">Content coming soon...</p>
      </main>
    );
  }
  return (
    <main className="container mx-auto px-4 py-12 md:py-20">
      {/**Hero Section */}
      <div className="max-w-4xl mx-auto mb-16">
        <h1 className="text-3xl md:text-4xl font-bold mb-6">About the Artist</h1>
        {/**Artist Profile */}
        <div className="flex flex-col md:flex-row gap-8 items-start mb-12">
          {/** Profile Image */}
          <div className="w-full md:w-1/3">
            <div className="aspect-square rounded-lg overflow-hidden">
              <img
                src={urlFor(about.profileImage).width(600).height(600).url()}
                alt={about.artistName}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          {/** Bio */}
          <div className="w-full md:w-2/3">
            <h2 className="text-2xl font-bold mb-4">{about.artistName}</h2>
            <p className="text-gray-600 mb-4">
              {about.yearsExperience} {about.yearsExperience === 1 ? 'year' : 'years'} of experience
            </p>
            <div className="text-gray-700">
              <PortableText value={about.bio} />
            </div>
          </div>
        </div>
      </div>
      {/** @todo Continue from here!/ */}
      {/* Specialties Section */} {/** @todo use predefined table like in experience timeline */}
      {about.specialties && about.specialties.length > 0 && (
        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Specialties</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {about.specialties.map((specialty, index) => (
              <div key={index} className="bg-gray-100 p-6 rounded-lg">
                <h3 className="font-bold text-xl mb-3">{specialty.title}</h3>
                {specialty.description && (
                  <p className="text-gray-700">{specialty.description}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Experience Timeline */} {/** @todo: Set starting year. Calculate experience form there. */}
     {about.experience && about.experience.length > 0 && (
      <div className="max-w-4xl mx-auto mb-16">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Experience</h2>
        <div className="space-y-6">
          {about.experience.map((exp, index) => (
            <div key={index} className="border-l-4 border-zinc-900 pl-6 py-2">
              <div className="font-bold text-lg">{exp.title}</div>
              <div className="text-gray-600 mb-2">
                {exp.startYear} - {exp.endYear || 'Present'}
              </div>
              {exp.description && (
                <p className="text-gray-700">{exp.description}</p>
              )}
            </div>
          ))}
        </div>
      </div>
     )}

      {/* Studio Info */} {/** @todo add cool studio background here */}
      {about.studioDescription && (
        <div className="max-w-4xl mx-auto bg-zinc-900 text-white p-8 md:p-12 rounded-lg">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">The Studio</h2>
          <p className="text-gray-300 leading-relaxed">{about.studioDescription}</p>
        </div>
      )}
    </main>
  );
}