// app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Team Headwind — Iditarod",
  description:
    "Støtt Team Headwind: møt hundene og menneskene, se raceteamet, og bidra via sponsorpakker og donasjoner.",
  themeColor: "#fffaf5",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="no">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-[#fffaf5] text-slate-900`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
