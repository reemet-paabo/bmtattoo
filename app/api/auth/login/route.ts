import { NextRequest, NextResponse } from "next/server";
import { verifyCredentials } from "@/lib/auth";
import { SignJWT } from 'jose';
import { cookies } from 'next/headers';

const JWT_SECRET = new TextEncoder().encode(
    /** @todo: JWT_SECRET before prod. */
    process.env.JWT_SECRET || 'secret-key-change-in-production'
);

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const { username, password } = body;

        // validate input
        if (!username || !password) {
            return NextResponse.json(
                { error: 'Username and password are required' },
                { status: 400 }
            );
        }

        // verify login credentials
        const isValid = await verifyCredentials(username, password);
        if (!isValid) {
            return NextResponse.json(
                { error: 'Invalid username or password' },
                { status: 401 }
            );
        }

        // Create JWT Token
        const token = await new SignJWT({ username })
            .setProtectedHeader({ alg: 'HS256' })
            .setIssuedAt()
            .setExpirationTime('24h')
            .sign(JWT_SECRET);

        // Set HTTP-only cookie

        (await cookies()).set('admin-token', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict',
            maxAge: 60 * 60 * 24, // 24 hours
            path: '/',
        })

        return NextResponse.json({
            success: true,
            message: 'Login successful'
        });

    } catch (error) {
        console.error('Login error:', error);

        return NextResponse.json(
            { error: 'An error occurred during login' },
            { status: 500 }
        )
    }
} 