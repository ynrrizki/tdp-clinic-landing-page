import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Klinik Sehat | Layanan Medis ke Rumah",
    template: "%s | Klinik Sehat",
  },
  description:
    "Klinik Sehat menyediakan layanan kesehatan profesional langsung ke rumah Anda tanpa antre dan tanpa repot.",
  keywords: [
    "klinik sehat",
    "home care",
    "layanan medis rumah",
    "kesehatan lansia",
    "dokter panggilan",
  ],
  // authors: [{ name: "Klinik Sehat", url: process.env.DOMAIN }],
  authors: [
    {
      name: "Klinik Sehat",
      url: "https://tdp-clinic-landing-page.vercel.app",
    },
  ],
  creator: "Klinik Sehat",
  openGraph: {
    type: "website",
    locale: "id_ID",
    // url: process.env.DOMAIN,
    url: "https://tdp-clinic-landing-page.vercel.app",
    siteName: "Klinik Sehat",
    title: "Klinik Sehat | Layanan Medis ke Rumah",
    description:
      "Layanan kesehatan tanpa antre, tanpa repot. Tim medis profesional datang ke rumah Anda.",
    images: [
      {
        // url: process.env.DOMAIN + "/og-cover.png",
        url: "https://tdp-clinic-landing-page.vercel.app/" + "og-cover.png",
        width: 1200,
        height: 630,
        alt: "Klinik Sehat Hero Image",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Klinik Sehat | Layanan Medis ke Rumah",
    description:
      "Dapatkan layanan kesehatan terpercaya langsung dari rumah Anda.",
    // images: [process.env.DOMAIN + "/og-cover.png"],
    images: ["https://tdp-clinic-landing-page.vercel.app" + "/og-cover.png"],
    creator: "@kliniksehat",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
