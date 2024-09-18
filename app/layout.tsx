import type { Metadata } from 'next';
import { Quicksand } from 'next/font/google';
import Room from './Room';
import './globals.css';

const quickSand = Quicksand({
  subsets: ['latin'],
  variable: '--font-quicksand',
  weight: ['400', '600', '700'],
});

export const metadata: Metadata = {
  title: 'PixelFlow',
  description:
    'Next generation minimalist design and wire-framing app, using Fabric.js and Liveblocks for real-time collaboration.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${quickSand.className} bg-primary-grey-200`}>
        <Room>{children}</Room>
      </body>
    </html>
  );
}
