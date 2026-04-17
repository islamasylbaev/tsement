import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PopupWidget }  from "@/components/PopupWidget";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
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
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
    <body className={inter.className}>
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
    <ThemeProvider attribute="class">
      <Navbar/>
      <div>{children}</div>
      <Footer/>
      <PopupWidget/>
    </ThemeProvider>
    </body>
    </html>
  );
}
