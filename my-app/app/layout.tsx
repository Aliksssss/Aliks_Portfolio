import type { Metadata } from "next";
import { Inter } from 'next/font/google';
import { Noto_Sans_Lao } from 'next/font/google';
import "./globals.css";
import Navigation from "./components/Navigation";
import GradientBackground from "@/components/GradientBackground";

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const notoSansLao = Noto_Sans_Lao({
  weight: ['400', '700'],
  subsets: ['lao'],
  variable: '--font-noto-sans-lao',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Aliks Dev",
  description: "Bienvenue sur mon Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${notoSansLao.variable}`}>
      <head>
        <style>
          {`
            body {
              font-family: ${inter.variable}, ${notoSansLao.variable}, sans-serif;
            }
            ::-webkit-scrollbar {
              display: none;
            }
            * {
              -ms-overflow-style: none;
              scrollbar-width: none;
            }
          `}
        </style>
      </head>
      <body className="bg-[#121212] text-white overflow-hidden">
        <GradientBackground className="fixed inset-0 z-0" />
        <div className="relative z-20 h-screen overflow-y-auto">
          <Navigation />
          <main className="min-h-screen">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
