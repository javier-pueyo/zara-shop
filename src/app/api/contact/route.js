import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

export async function POST(request) {
    try {
        const { name, email, message, termsx } = await request.json();

        // Basic validation
        if (!name || !email || !message || !termsx) {
            return NextResponse.json(
                { message: 'Missing required fields' },
                { status: 400 }
            );
        }

        const transporter = nodemailer.createTransport({
            service: 'gmail', // Built-in transport for Gmail
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS, // App Password
            },
        });

        // Email content
        const mailOptions = {
            from: process.env.SMTP_USER, // Sender address (must be the same as auth user for Gmail)
            to: process.env.SMTP_USER, // You want to receive the email
            replyTo: email, // So you can reply to the user
            subject: `New Contact from Portfolio: ${name}`,
            text: `
Name: ${name}
Email: ${email}
Message:
${message}
            `,
            html: `
<h3>New Contact Form Submission</h3>
<p><strong>Name:</strong> ${name}</p>
<p><strong>Email:</strong> ${email}</p>
<p><strong>Message:</strong></p>
<p>${message.replace(/\n/g, '<br>')}</p>
            `,
        };

        await transporter.sendMail(mailOptions);

        return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });

    } catch (error) {
        console.error('Error sending email:', error);
        return NextResponse.json(
            { message: 'Failed to send email' },
            { status: 500 }
        );
    }
}
