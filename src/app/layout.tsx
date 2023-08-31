import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'By All Means',
    description: 'Front-end Test Assignment',
    authors: { name: 'kanardai.dev@gmail.com' },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}
