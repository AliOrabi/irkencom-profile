import type { Metadata } from "next";
import "../globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import LanguageProvider from "@/components/providers/LanguageProvider";
import CookieConsent from "@/components/ui/CookieConsent";
import FloatingCTA from "@/components/ui/FloatingCTA";
import { CSPostHogProvider } from "@/components/providers/PostHogProvider";
import { Analytics } from "@vercel/analytics/react";
import EmotionRegistry from "@/components/providers/EmotionRegistry";
import MuiProvider from "@/components/providers/MuiProvider";

export const metadata: Metadata = {
  metadataBase: new URL("https://irken.com.eg"),
  title: "إركن | Irken Solutions — شبكة حجز مواقف وساحات انتظار السيارات في مصر",
  description:
    "اركن عربيتك بسهولة أو أدرج جراجك وساحة الانتظار على شبكة إركن الرقمية. احجز ركنة مسبقاً، تخلّص من عشوائية السايس، وحوّل مواقف السيارات إلى عوائد مضمونة في القاهرة ومصر.",
  keywords: [
    "اركن",
    "إركن",
    "اركن فين",
    "ركنة",
    "ركنه",
    "باركينج",
    "Parkin",
    "Parking",
    "جراج",
    "جراجات",
    "موقف",
    "مواقف سيارات",
    "ساحات انتظار",
    "ساحة انتظار",
    "سايس",
    "السايس",
    "بديل السايس",
    "حجز ركنة",
    "حجز جراج",
    "إدارة ساحات الانتظار",
    "irken",
    "Irken",
    "Irken Solutions",
    "irken.eg",
    "parking in Cairo",
    "parking Egypt",
  ],
  alternates: {
    canonical: "https://irken.com.eg",
    languages: {
      "ar": "https://irken.com.eg/ar",
      "en": "https://irken.com.eg/en",
    },
  },
  icons: {
    icon: "/Favicon.png",
    shortcut: "/Favicon.png",
    apple: "/Favicon.png",
  },
  openGraph: {
    title: "إركن | Irken Solutions — شبكة حجز مواقف السيارات وساحات الانتظار في مصر",
    description:
      "اركن في أمان واحجز ركنتك أونلاين. انضم لشبكة إركن لإدارة ساحات الانتظار والجراجات بدون أجهزة أو مصاريف تأسيس.",
    url: "https://irken.com.eg",
    siteName: "إركن | Irken Solutions",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Irken Solutions — Egypt's Digital Parking Reservation Network",
      },
    ],
    locale: "ar_EG",
    alternateLocale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "إركن | Irken Solutions — شبكة حجز مواقف السيارات في مصر",
    description: "احجز ركنتك أو أدرج ساحة الانتظار والجراج على شبكة إركن الرقمية.",
    images: ["/opengraph-image.png"],
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://irken.com.eg/#organization",
      name: "Irken Solutions",
      alternateName: [
        "إركن",
        "اركن",
        "شركة إركن",
        "شبكة إركن",
        "تطبيق إركن",
        "اركن سوليوشنز",
        "Irken",
        "irken",
        "Irken Solutions",
        "irken.eg",
      ],
      url: "https://irken.com.eg",
      logo: "https://irken.com.eg/irken-logo-dark.svg",
      description:
        "شبكة حجز مواقف وساحات انتظار السيارات الرقمية في مصر — منصة إركن لربط الجراجات والساحات بالسائقين.",
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+201222200479",
        contactType: "customer service",
        areaServed: "EG",
        availableLanguage: ["Arabic", "English"],
      },
      address: {
        "@type": "PostalAddress",
        addressLocality: "Cairo",
        addressCountry: "EG",
      },
      sameAs: [
        "https://irken.eg",
        "https://linkedin.com/company/irken-solutions",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://irken.com.eg/#website",
      url: "https://irken.com.eg",
      name: "إركن | Irken Solutions",
      alternateName: ["اركن", "Irken Parking", "شبكة إركن"],
      publisher: {
        "@id": "https://irken.com.eg/#organization",
      },
      inLanguage: ["ar-EG", "en-US"],
      potentialAction: {
        "@type": "SearchAction",
        target: "https://irken.eg/?q={search_term_string}",
        "query-input": "required name=search_term_string",
      },
    },
  ],
};

export function generateStaticParams() {
  return [{ locale: 'ar' }, { locale: 'en' }];
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  return (
    <html lang={locale} dir={locale === 'ar' ? 'rtl' : 'ltr'} className="font-sans" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
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
