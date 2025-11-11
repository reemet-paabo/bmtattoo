'use client';

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLoginPage() {
    const router = useRouter();

    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        setIsLoading(true);

        try {
            const response = await fetch('/api/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();
            if (response.ok) {
                // Login successful --> redirecting to admin dashboard.

                router.push('/admin/dashboard');
                router.refresh();
            } else {
                // Login failed. Show error.

                setError(data.error || 'Login failed!');
            }
        } catch (error) {
            console.error('Login error:', error);
            setError('An error occured. Please try again.')
        } finally {
            setIsLoading(false);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <div className="min-h-screen bg-zinc-900 flex items-center justify-center px-4">
            <div className="max-w-md w-full">
                { /**Header */}

                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold text-white mb-2">Admin Access</h1>
                    <p className="text-gray-400">BM Tattoo Studio</p>
                </div>

                {/** Login Card */}

                <div className="bg-zinc-800 rounded-lg shadow-xl p-8">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        {/** Error Message */}
                        {error && (
                            <div className="bg-red-600 bg-opacity-10 border border-red-500 text-gray-300 px-4 font-light py-3 rounded-lg text-sm">
                                {error}
                            </div>
                        )}

                        {/** Username field */}
                        <div>
                            <label htmlFor="username" className="block text-sm font-medium text-gray-300 mb-2">
                                Username
                            </label>
                            <input 
                                type="text"
                                id="username"
                                name="username"
                                value={formData.username}
                                onChange={handleChange}
                                required
                                autoComplete="username"
                                className="w-full px-4 py-4 bg-zinc-700 border border-zinc-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-white focus:border-transperent outline-none transition"
                                placeholder="Enter username"
                            />
                        </div>
                        {/** Password field */}
                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-2">
                                Password
                            </label>
                            <input 
                                type="password"
                                id="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                required
                                autoComplete="curreent-password"
                                className="w-full px-4 py-3 bg-zinc-700 border border-zinc-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-white focus:border-transparent outline-none transition"
                                placeholder="Enter password"
                            />
                        </div>

                        {/** Submit Button */}
                        <button
                            type="submit"
                            disabled={isLoading}
                            className="w-full bg-white text-zinc-900 py-3 rounded-lg font-medium hover:bg-gray-100 transition disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {isLoading ? 'Logging in...' : 'Log In'}
                        </button>
                    </form>

                    {/** Footer  */}
                    <div className="mt-6 text-center">
                        <button
                            onClick={() => router.push('/')}
                            className="text-gray-400 hover:text-white transition text-sm"
                        >
                            ← Back to site
                        </button>
                    </div>
                </div>

                {/** Secutrity note */}
                <p className="text-center text-gray-500 text-xs mt-6">
                        🔒 Authorized access only
                </p>
            </div>

        </div>
    )

}