import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from 'next/link';
import { ReactNode } from 'react';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Myntra Clone",
  description: "A full stack Myntra clone built with Next.js and TypeScript",
};

function Navbar() {
  return (
    <nav className="bg-gray-900 shadow p-4 flex gap-6 items-center sticky top-0 z-20">
      <Link href="/" className="font-bold text-pink-400 text-2xl tracking-tight">Myntra</Link>
      <Link href="/cart" className="text-white hover:text-pink-400">Cart</Link>
      <Link href="/login" className="text-white hover:text-pink-400 ml-auto">Login</Link>
    </nav>
  );
}

function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-100 text-center py-6 mt-16">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center px-4">
        <div className="mb-2 md:mb-0">&copy; {new Date().getFullYear()} Myntra Clone. All rights reserved.</div>
        <div className="flex gap-4 text-sm">
          <Link href="/" className="text-white hover:text-pink-400">Home</Link>
          <Link href="/cart" className="text-white hover:text-pink-400">Cart</Link>
          <Link href="/login" className="text-white hover:text-pink-400">Login</Link>
        </div>
      </div>
    </footer>
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-50 min-h-screen flex flex-col`}>
        <Navbar />
        <div className="flex-1 flex flex-col">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
