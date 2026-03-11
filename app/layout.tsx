"use client";

import "./globals.css";
import Link from "next/link";
import { useState } from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Sports Analytics", href: "/sports-analytics" },
    { label: "Mobile Projects", href: "/mobile-projects" },
    { label: "Computer Vision", href: "/computer-vision" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <html lang="en" className="bg-[#07111b]">
      <body className="min-h-screen bg-[#07111b] text-white">
        <header className="sticky top-0 z-50 border-b border-white/10 bg-[#07111b]/80 backdrop-blur-xl">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
            <Link
              href="/"
              className="text-sm font-semibold uppercase tracking-[0.25em] text-white/90"
            >
              Melih Siskular
            </Link>

            {/* Desktop nav */}
            <nav className="hidden items-center gap-6 text-sm md:flex">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-slate-300 transition hover:text-white"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* Mobile menu button */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="rounded-xl border border-white/10 px-3 py-2 text-sm text-slate-300 md:hidden"
            >
              Menu
            </button>
          </div>

          {/* Mobile dropdown */}
          {menuOpen && (
            <div className="border-t border-white/10 px-6 py-4 md:hidden">
              <div className="flex flex-col gap-4">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className="text-slate-300 transition hover:text-white"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </header>

        {children}
      </body>
    </html>
  );
}