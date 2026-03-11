import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "Melih Siskular",
  description: "Personal portfolio website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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

            <nav className="items-center gap-6 text-sm md:flex">
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
          </div>
        </header>

        {children}
      </body>
    </html>
  );
}