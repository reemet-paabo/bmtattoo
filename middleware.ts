import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { jwtVerify } from "jose";

const JWT_SECRET = new TextEncoder().encode(
    /** @todo: JWT_SECRET before prod. */
    process.env.JWT_SECRET || 'secret-key-change-in-production'
);

export async function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;

    // Allow access to login page
    if (pathname === '/admin/login') {
        return NextResponse.next();
    }

    // Check for admin token
    const token = request.cookies.get('admin-token')?.value;

    // If no token, redirect to /admin/login
    if(!token) {
        const loginUrl = new URL('/admin/login', request.url);
        return NextResponse.redirect(loginUrl);
    }


    // Verify token
    try {
        await jwtVerify(token, JWT_SECRET);
        // Token Valid - allow access

        return NextResponse.next();
    } catch (error) {
        console.error('JWT verification failed:', error);
        // Invalid token will redirect to login
        const loginUrl = new URL('/admin/login', request.url);

        return NextResponse.redirect(loginUrl);
    }
}

// Configuration for which routes will use this middleware
export const config = {
    matcher: '/admin/:path*',
}

