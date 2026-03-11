import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-serif",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Sertoria — Inteligencia Artificial Empresarial",
    template: "%s | Sertoria",
  },
  description: "Asesoramiento estratégico en IA. Analítica avanzada, optimización de rendimiento e implantación de inteligencia artificial a escala empresarial.",
  keywords: ["IA empresarial", "inteligencia artificial", "consultoría IA", "analítica", "transformación digital", "machine learning", "automatización"],
  authors: [{ name: "Sertoria" }],
  creator: "Sertoria",
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://sertoria.com",
    siteName: "Sertoria",
    title: "Sertoria — Inteligencia Artificial Empresarial",
    description: "Transformamos organizaciones mediante inteligencia artificial. Analítica, optimización y estrategia.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sertoria — Inteligencia Artificial Empresarial",
    description: "Transformamos organizaciones mediante inteligencia artificial.",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${cormorant.variable} ${inter.variable}`}>
      <body 
        className="min-h-screen flex flex-col"
        style={{ backgroundColor: '#0a0a0a', color: '#fafafa' }}
      >
        <Navigation />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
