import { cookies } from 'next/headers';
import { jwtVerify } from 'jose';
import { redirect } from 'next/navigation';
import Link from 'next/link';
import { getDashboardStats } from '@/lib/sanity-queries';
import { urlFor } from '@/lib/sanity-client';



/** @todo: tsConfig paths */
import LogoutButton from '@/app/components/LogoutButton';

/** @todo: JWT_SECRET for PROD */

const JWT_SECRET = new TextEncoder().encode(
  process.env.JWT_SECRET || 'secret-key-change-in-production'
);



export default async function AdminDashboardPage() {
  
  const cookieStore = await cookies();
  const token = cookieStore.get('admin-token')?.value;
  
  if (!token) {
    redirect('/admin/login')
  }
  let username = 'Admin';
  try {
    const verified = await jwtVerify(token, JWT_SECRET);
    username = (verified.payload.username as string) || 'Admin';
  } catch (error) {
    redirect('/admin/login');
  }
  
  // Fetch Dashboard stats.
  const stats = await getDashboardStats();

  return (
    <main className="bg-zinc-950 min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-white mb-2">Dashboard</h1>
            <p className="text-zinc-400">Welcome back, {username}</p>
          </div>
          <LogoutButton />
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {/* Total Tattoos */}
          <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-zinc-400 text-sm mb-1">Total Tattoos</p>
                <p className="text-3xl font-bold text-white">{stats.totalTattoos}</p>
              </div>
              <div className="w-12 h-12 bg-red-700/20 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-red-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Featured Tattoos */}
          <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-zinc-400 text-sm mb-1">Featured</p>
                <p className="text-3xl font-bold text-white">{stats.featuredTattoos}</p>
              </div>
              <div className="w-12 h-12 bg-red-700/20 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-red-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Quick Action */}
          <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-6">
            <p className="text-zinc-400 text-sm mb-3">Quick Actions</p>
            <Link
              href="/admin/studio"
              className="block bg-red-700 hover:bg-red-800 text-white text-center py-2 rounded-lg font-medium transition"
            >
              Open Studio
            </Link>
          </div>
        </div>

        {/* Recent Tattoos */}
        <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-6 mb-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold text-white">Recent Uploads</h2>
            <Link
              href="/admin/studio"
              className="text-red-700 hover:text-red-600 text-sm font-medium transition"
            >
              View All →
            </Link>
          </div>

          {stats.recentTattoos.length === 0 ? (
            <p className="text-zinc-400 text-center py-8">No tattoos uploaded yet. Add some in the Studio!</p>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
              {stats.recentTattoos.map((tattoo: any) => (
                <div key={tattoo._id} className="group relative aspect-square rounded-lg overflow-hidden bg-zinc-800">
                  <img
                    src={urlFor(tattoo.image).width(400).height(400).url()}
                    alt={tattoo.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-3">
                    <p className="text-white font-medium text-sm truncate">{tattoo.title}</p>
                    <p className="text-zinc-300 text-xs capitalize">{tattoo.style}</p>
                    {tattoo.featured && (
                      <span className="absolute top-2 right-2 bg-red-700 text-white text-xs px-2 py-1 rounded">
                        Featured
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Management Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Portfolio Management */}
          <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-red-700/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-red-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="text-white font-bold mb-2">Manage Portfolio</h3>
                <p className="text-zinc-400 text-sm mb-4">Upload new tattoos, edit existing work, and manage featured items.</p>
                <Link
                  href="/admin/studio"
                  className="text-red-700 hover:text-red-600 text-sm font-medium transition"
                >
                  Open Studio →
                </Link>
              </div>
            </div>
          </div>

          {/* Content Management */}
          <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-red-700/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-red-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="text-white font-bold mb-2">Edit Content</h3>
                <p className="text-zinc-400 text-sm mb-4">Update About page, studio information, hours, and contact details.</p>
                <Link
                  href="/admin/studio"
                  className="text-red-700 hover:text-red-600 text-sm font-medium transition"
                >
                  Manage Content →
                </Link>
              </div>
            </div>
          </div>

          {/* View Site */}
          <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-red-700/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-red-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="text-white font-bold mb-2">View Website</h3>
                <p className="text-zinc-400 text-sm mb-4">See how your site looks to visitors and check recent changes.</p>
                <Link
                  href="/"
                  target="_blank"
                  className="text-red-700 hover:text-red-600 text-sm font-medium transition"
                >
                  Open Site →
                </Link>
              </div>
            </div>
          </div>

          {/* Settings (Placeholder) */}
          <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-6 opacity-50">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-zinc-800 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-zinc-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="text-zinc-500 font-bold mb-2">Settings</h3>
                <p className="text-zinc-600 text-sm mb-4">Coming soon: Change password, email settings, and more.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
