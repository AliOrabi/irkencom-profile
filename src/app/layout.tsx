import type { Metadata } from "next";
import { Space_Grotesk, Inter, Tajawal, Geist } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import LanguageProvider from "@/components/providers/LanguageProvider";
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
  title: "Irken Solutions | Unlocking Urban Potential",
  description: "Asset-Light digital infrastructure for real estate developers and municipalities in Egypt.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="ltr" className={cn(spaceGrotesk.variable, inter.variable, tajawal.variable, "font-sans", geist.variable)} suppressHydrationWarning>
      <body className="font-english">
        <LanguageProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
