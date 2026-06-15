import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// Configure the Google Fonts 'Inter' layout engine
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

// Configure viewport configuration
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

// Configure SEO metadata for the page
export const metadata: Metadata = {
  title: "Tayyari Simplified | UPSC Preparation, Simplified.",
  description: "Research-backed courses, revision systems, test series and strategies designed for the modern UPSC aspirant. Achieve clarity and target-focused results in your IAS prep.",
  keywords: ["UPSC", "IAS", "UPSC Preparation", "Civil Services", "Tayyari Simplified", "UPSC Strategy", "UPSC Test Series"],
  authors: [{ name: "Tayyari Simplified" }],
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <body className="font-sans antialiased text-brand-navy bg-white min-h-screen flex flex-col">
        {children}
      </body>
    </html>
  );
}
