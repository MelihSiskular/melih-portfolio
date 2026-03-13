import "./globals.css";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";


export const metadata: Metadata = {
  title: "Melih Siskular | Software Developer & Sports Analytics",
  description:
    "Portfolio of Melih Siskular, a Computer Engineering student building iOS apps, sports analytics projects, data science and computer vision solutions.",
  keywords: [
    "Melih Siskular",
    "iOS Developer",
    "SwiftUI",
    "Sports Analytics",
    "Football Data Analysis",
    "Computer Vision",
    "Python Data Science",
  ],
  authors: [{ name: "Melih Siskular" }],
  creator: "Melih Siskular",
  metadataBase: new URL("https://melihsiskular.com"),
  openGraph: {
    title: "Melih Siskular Portfolio",
    description:
      "Projects in iOS development, sports analytics, data science and computer vision.",
    url: "https://melihsiskular.com",
    siteName: "Melih Siskular Portfolio",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-[#07111b]">
      <body className="min-h-screen bg-[#07111b] text-white">
        <Navbar />
        {children}
      </body>
    </html>
  );
}