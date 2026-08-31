import type { Metadata } from "next";
import { Space_Grotesk, Inter, Tajawal, Geist } from "next/font/google";
import "../globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import LanguageProvider from "@/components/providers/LanguageProvider";
import CookieConsent from "@/components/ui/CookieConsent";
import FloatingCTA from "@/components/ui/FloatingCTA";
import { CSPostHogProvider } from "@/components/providers/PostHogProvider";
import { Analytics } from "@vercel/analytics/react";
import { cn } from "@/lib/utils";
import EmotionRegistry from "@/components/providers/EmotionRegistry";
import MuiProvider from "@/components/providers/MuiProvider";

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
  title: "Irken Solutions — Egypt's Digital Parking Network",
  description:
    "Join Egypt's digital parking reservation network. List your garage or parking lot on irken.eg — zero setup fees, zero hardware, pre-paid advance reservations from real drivers.",
  openGraph: {
    title: "Irken Solutions — Egypt's Digital Parking Network",
    description:
      "List your parking facility on irken.eg. Zero risk, zero costs. Irken brings you pre-paid drivers already searching for parking near your location.",
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
    title: "Irken Solutions — Egypt's Digital Parking Network",
    description: "Zero risk. Zero costs. Join Egypt's parking reservation network.",
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

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  return (
    <html lang={locale} dir={locale === 'ar' ? 'rtl' : 'ltr'} className={cn(spaceGrotesk.variable, inter.variable, tajawal.variable, "font-sans", geist.variable)} suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body suppressHydrationWarning className={locale === 'ar' ? 'font-arabic' : 'font-english'}>
        <EmotionRegistry options={{ key: 'mui' }}>
          <MuiProvider>
            <CSPostHogProvider>
              <LanguageProvider initialLanguage={locale as 'ar' | 'en'}>
                <Header />
                {children}
                <Footer />
                <CookieConsent />
                <FloatingCTA />
              </LanguageProvider>
              <Analytics />
            </CSPostHogProvider>
          </MuiProvider>
        </EmotionRegistry>
      </body>
    </html>
  );
}
