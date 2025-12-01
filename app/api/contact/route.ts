import { NextRequest, NextResponse } from "next/server";
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const { name, email, phone, style, message } = body;

        // validate required fields
        if (!name || !email || !message) {
            return NextResponse.json(
                { error: 'Name, email, and message are required' },
                { status: 400 }
            );
        }

        // Send email via Resend
        const data = await resend.emails.send({
            from: 'Contact Form <info@bmtattoo.com>',
            to: 'info@bmtattoo.com',
            replyTo: email,
            subject: `New Contact Form: ${name}`,
            html: `
                <h2>New Contact Form Submission</h2>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ''}
                ${style ? `<p><strong>Preferred Style:</strong> ${style}</p>` : ''}
                <p><strong>Message:</strong></p>
                <p>${message}</p>
            `,
        });
        
        return NextResponse.json({ success: true, data })
    } catch (error) {
        console.error('Contact form error', error);
        return NextResponse.json(
            { error: 'Failed to send message. Please Try again.'},
            { status: 500 }
        );
    }
}