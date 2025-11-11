import { cookies } from 'next/headers';
import { jwtVerify } from 'jose';

/** @todo: tsConfig paths */
import LogoutButton from '@/app/components/LogoutButton';

/** @todo: JWT_SECRET for PROD */

const JWT_SECRET = new TextEncoder().encode(
  process.env.JWT_SECRET || 'secret-key-change-in-production'
);

async function getUsername() {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get('admin-token')?.value;

    if (!token) return null;

    const { payload } = await jwtVerify(token, JWT_SECRET);

    return payload.username as string;
  } catch (error) {
    console.error('Error getting username:', error);
    return null;
  }
}

export default async function AdminDashboardPage() {
  const username = await getUsername();

  return (
    <div className="min-h-screen bg-gray-100">
      {/** Header */}
      <header className="bg-white shadow">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-900">Admin Dashboard</h1>
          <LogoutButton />
        </div>
      </header>
      {/** Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/** Welcome Card */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            Welcome back, {username}!👋
          </h2>
          <p className="text-gray-600">
            Manage your studio's website from this dashboard.
          </p>
        </div>
        {/** Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium">Portfolio Items</p>
                <p className="text-3xl font-bold text-gray-900 mt-1">6</p> {/*** @todo: hardcoded a placeholder */}
              </div>
              <div className="bg-blue-100 rounded-full p-3">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm font-medium">Contact Messages</p>
                <p className="text-3xl font-bold text-gray-900 mt-1">0</p> {/** @todo: hardcoded placeholder */}
              </div>
              <div className="bg-green-100 rounded-full p-3">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm font-medium">Site views</p>
                <p className="text-3xl font-bold text-gray-900 mt-1">--</p> {/** @todo: hardcoded placeholder */}
              </div>
              <div className="bg-purple-100 rounded-full p-3">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
            </div>
          </div>

          { /** Managment Sections */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/** Portfolio Sections */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center mb-4">
                <svg className="w-6 h-6 text-zinc-900 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <h3 className="text-xl font-bold text-gray-900">Portfolio</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Manage your portfolio images and descriptions.
              </p>
              <button className="w-full big-zinc-900 text-white py-2 rounded-lg hover:bg-zinc-800 transition">
                Manage Portolio
              </button>
            </div>
            {/** Content Managment */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center mb-4">
                <svg className="w-6 h-6 text-zinc-900 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
                <h3 className="text-xl font-bold text-gray-900" >
                  Content
                </h3>
              </div>
              <p className="text-gray-600 mb-4">
                Edit about page, contact information, and studio hours
              </p>

              <button className="w-full bg-zinc-900 text-white py-2 rounded-lg hover:bg-zinc-800 transition">
                Edit Content
              </button>
            </div>

            {/** Messages */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center mb-4">
                <svg className="w-6 h-6 text-zinc-900 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <h3 className="text-xl font-bold text-gray-900">Messages</h3>
              </div>
              <p className="text-gray-600 mb-4">
                View contact form submissions from potential clients.
              </p>
              <button className="w-full bg-zinc-900 text-white py-2 rounded-lg hover:bg-zinc-800 transition">
                View Messages
              </button>
            </div>

            {/**Settings */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center mb-4">
                <svg className="w-6 h-6 text-zinc-900 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <h3 className="text-xl font-bold text-fray-900">Settings</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Update password, notification preferances, and more.
              </p>
              <button className="w-full bg-zinc-900 text-white py-2 rounded-lg hover:bg-zinc-800 transition">
                Manage Settings
              </button>
            </div>
          </div>
          {/** Quick Links */}
          <div className="mt-8 bg-zinc-900 text-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <a href="/" target="_blank" className="text-center p-4 bg-zinc-800 rounded-lg hover:bg-zinc-700 transition">
                <span className="block text-2xl mb-2">🏠</span>
                <span className="text-sm">View Site</span>
              </a>
              <a href="/portfolio" target="_blank" className="text-center p-4 bg-zinc-800 rounded-lg hover:bg-zinc-700 transition">
                <span className="block text-2xl mb-2">🎨</span>
                <span className="text-sm">Portfolio</span>
              </a>
              <a href="/about" target="_blank" className="text-center p-4 bg-zinc-800 rounded-lg hover:bg-zinc-700 transition">
                <span className="block text-2xl mb-2">👤</span>
                <span className="text-sm">About</span>
              </a>
              <a href="/contact" target="_blank" className="text-center p-4 bg-zinc-800 rounded-lg hover:bg-zinc-700 transition">
                <span className="block text-2xl mb-2">📧</span>
                <span className="text-sm">Contact</span>
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
