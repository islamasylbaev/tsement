import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PopupWidget } from "@/components/PopupWidget";
import ScrollToTop from "@/components/ScrollToTop";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ЖБИ изделия в Астане | Цемент-Снаб НС",
  description: "Сваи, ФБС блоки, плиты перекрытия в Астане",
  openGraph: {
    title: "ЖБИ изделия в Астане",
    description: "Производство и продажа ЖБИ",
    url: "https://tsementsnab.kz",
    siteName: "Цемент-Снаб НС",
    locale: "ru_KZ",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
                                     children,
                                   }: {
  children: React.ReactNode;
}) {
  return (
      <html lang="ru">
      <body className={inter.className}>

      {/* SEO schema */}
      <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Цемент-Снаб НС",
              url: "https://tsementsnab.kz",
              logo: "https://tsementsnab.kz/logo.png",
              description:
                  "Производство и продажа ЖБИ изделий в Астане: сваи, ФБС блоки, плиты перекрытия.",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Астана",
                addressCountry: "KZ",
              },
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+77089117554",
                contactType: "customer service",
              },
            }),
          }}
      />
      <Navbar />
      <main>
        {children}
      </main>
      <Footer />
      <PopupWidget />
      <ScrollToTop />
      </body>
      </html>
  );
}