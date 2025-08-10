import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ENSTP Study - Academic Resource Platform",
  description: "Comprehensive academic resource platform for École Nationale Supérieure des Travaux Publics students. Access course materials, exams, and study resources.",
  keywords: ["ENSTP", "Study", "Academic Resources", "Engineering", "Preparatory Cycle", "Course Materials"],
  authors: [{ name: "Cherif Tas" }],
  openGraph: {
    title: "ENSTP Study - Academic Resource Platform",
    description: "Comprehensive academic resource platform for ENSTP students",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ENSTP Study - Academic Resource Platform",
    description: "Comprehensive academic resource platform for ENSTP students",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground min-h-screen flex flex-col`}
      >
        <Navigation />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
