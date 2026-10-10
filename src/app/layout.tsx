import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
  weight: ["500", "600", "700"],
});

const siteUrl = "https://kazi-talents.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Kazi — Les talents africains, au bon endroit",
    template: "%s | Kazi",
  },
  description:
    "Kazi connecte les talents africains aux opportunités qui correspondent à leurs compétences.",
  keywords: [
    "talents africains",
    "recrutement",
    "compétences",
    "opportunités",
    "freelance",
    "Afrique",
  ],
  authors: [{ name: "Kazi" }],
  creator: "Kazi",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: siteUrl,
    siteName: "Kazi",
    title: "Kazi — Les talents africains, au bon endroit",
    description:
      "Kazi connecte les talents africains aux opportunités qui correspondent à leurs compétences.",
    images: [
      {
        url: "/images/logo/logo-Kazi.png",
        width: 1254,
        height: 1254,
        alt: "Kazi — Les talents africains, au bon endroit",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Kazi — Les talents africains, au bon endroit",
    description:
      "Kazi connecte les talents africains aux opportunités qui correspondent à leurs compétences.",
    images: ["/images/logo/logo-Kazi.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="fr"
      className={`${inter.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}