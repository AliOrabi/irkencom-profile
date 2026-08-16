import type { Metadata } from "next";
import { Space_Grotesk, Inter, Tajawal, Geist } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import LanguageProvider from "@/components/providers/LanguageProvider";
import CookieConsent from "@/components/ui/CookieConsent";
import FloatingCTA from "@/components/ui/FloatingCTA";
import { CSPostHogProvider } from "@/components/providers/PostHogProvider";
import { Analytics } from "@vercel/analytics/react";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-en-heading",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const inter = Inter({
  variable: "--font-en-body",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const tajawal = Tajawal({
  variable: "--font-ar",
  subsets: ["arabic"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://irken.com.eg"),
  title: "Irken Solutions | Unlocking Urban Potential",
  description: "Asset-Light digital infrastructure for real estate developers and municipalities in Egypt. PropTech, Smart Parking, and Access Control solutions.",
  openGraph: {
    title: "Irken Solutions | Asset-Light Digital Infrastructure",
    description: "Transforming Egypt's real estate and municipalities with cutting-edge PropTech and Smart Parking solutions.",
    url: "https://irken.com.eg",
    siteName: "Irken Solutions",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "ar_EG",
    alternateLocale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Irken Solutions",
    description: "Asset-Light digital infrastructure for real estate developers in Egypt.",
    images: ["/opengraph-image.png"],
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Irken Solutions",
  url: "https://irken.com.eg",
  logo: "https://irken.com.eg/logo.png",
  description: "Asset-Light digital infrastructure for real estate developers and municipalities in Egypt.",
  address: {
    "@type": "PostalAddress",
    addressCountry: "EG",
  },
  sameAs: [
    "https://linkedin.com/company/irken-solutions",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" className={cn(spaceGrotesk.variable, inter.variable, tajawal.variable, "font-sans", geist.variable)} suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="font-arabic">
        <CSPostHogProvider>
          <LanguageProvider>
            <Header />
            <main>{children}</main>
            <Footer />
            <CookieConsent />
            <FloatingCTA />
          </LanguageProvider>
          <Analytics />
        </CSPostHogProvider>
      </body>
    </html>
  );
}
