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
  title: "Merangintech - Jasa Pembuatan Website Profesional",
  description: "Jasa Pembuatan Website Profesional untuk Bisnis Anda. Kami mengerjakan pembuatan website secara professional dengan waktu pengerjaan website relatif cepat.",
  metadataBase: new URL("https://www.merangintech.net"),
  keywords: ["Jasa Pembuatan Website", "Website Semarang", "Web Developer", "Merangintech", "Jasa Web Profesional"],
  authors: [{ name: "Merangintech" }],
  openGraph: {
    title: "Merangintech - Jasa Pembuatan Website Profesional",
    description: "Jasa Pembuatan Website Profesional untuk Bisnis Anda. Bangun citra terbaik bisnis bersama kami.",
    url: "https://www.merangintech.net",
    siteName: "Merangintech",
    locale: "id_ID",
    type: "website",
  },
  icons: {
    icon: "/img/favicon.png",
  },
  robots: {
    index: true,
    follow: true,
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground bg-grid-pattern min-h-screen`}
      >
        {children}
      </body>
    </html>
  );
}
