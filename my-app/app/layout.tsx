import type { Metadata } from "next";
import { Inter } from 'next/font/google';
import { Noto_Sans_Lao } from 'next/font/google';
import "./globals.css";
import Navigation from "./components/Navigation";
import GradientBackground from "@/components/GradientBackground";
import dynamic from 'next/dynamic';

// Import dynamique des composants côté client pour éviter les erreurs d'hydratation
const ThemeToggle = dynamic(() => import('./components/ThemeToggle'), { 
  ssr: false 
});

const AccessibilityMenu = dynamic(() => import('./components/AccessibilityMenu'), {
  ssr: false
});

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
  title: "Aliks Dev | Portfolio de développeur web",
  description: "Portfolio de développeur web spécialisé en création de sites modernes, accessibles et performants",
  keywords: ["développeur web", "portfolio", "frontend", "react", "nextjs", "tailwind"],
  authors: [{ name: "Aliks" }],
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
  openGraph: {
    title: "Aliks Dev | Portfolio de développeur web",
    description: "Portfolio de développeur web spécialisé en création de sites modernes, accessibles et performants",
    type: "website",
    locale: "fr_FR",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={`${inter.variable} ${notoSansLao.variable}`}>
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
            
            /* Styles pour le mode contraste élevé */
            .high-contrast {
              --background: #000000;
              --foreground: #ffffff;
              --primary: #ffff00;
              --primary-light: #ffff00;
              --secondary: #000000;
              --card-bg: rgba(0, 0, 0, 0.9);
              --card-border: rgba(255, 255, 255, 0.5);
              --card-hover: rgba(255, 255, 0, 0.3);
              --text-primary: #ffffff;
              --text-secondary: rgba(255, 255, 255, 0.9);
              --text-tertiary: rgba(255, 255, 255, 0.8);
            }
            
            /* Styles pour les animations réduites */
            .reduced-motion * {
              transition: none !important;
              animation: none !important;
              transform: none !important;
            }
          `}
        </style>
        <meta name="theme-color" content="#030014" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className="bg-background text-foreground overflow-hidden">
        <GradientBackground className="fixed inset-0 z-0" />
        <div className="relative z-20 h-screen overflow-y-auto">
          <ThemeToggle />
          <AccessibilityMenu />
          <Navigation />
          <main className="min-h-screen">
            {children}
          </main>
          <footer className="py-6 px-4 text-center text-white/60 text-sm">
            <p> {new Date().getFullYear()} Aliks Dev. Tous droits réservés.</p>
          </footer>
        </div>
      </body>
    </html>
  );
}
