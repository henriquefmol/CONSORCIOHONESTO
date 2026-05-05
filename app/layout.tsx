import type { Metadata, Viewport } from "next";
import { Fraunces } from "next/font/google";
import { GeistSans } from "geist/font/sans";
import "./globals.css";
import { config } from "@/lib/config";

// Display/headlines — serif moderno com contraste alto e variantes opticais
const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  axes: ["opsz", "SOFT"],
});

export const metadata: Metadata = {
  title: config.meta.title,
  description: config.meta.description,
  metadataBase: new URL(config.meta.url),
  keywords: [
    "consórcio Banco do Brasil",
    "consórcio BB",
    "simulação consórcio",
    "carta de crédito",
    "consórcio sem juros",
    "consórcio imóvel",
    "consórcio carro",
  ],
  authors: [{ name: config.representative.name }],
  openGraph: {
    title: config.meta.title,
    description: config.meta.description,
    url: config.meta.url,
    siteName: config.representative.name,
    locale: "pt_BR",
    type: "website",
    images: [{ url: config.meta.ogImage, width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: config.meta.title,
    description: config.meta.description,
    images: [config.meta.ogImage],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0f1a",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="pt-BR"
      className={`${GeistSans.variable} ${fraunces.variable}`}
    >
      <body className="font-sans">
        {/* TODO: Meta Pixel — script base de page view */}
        {children}
      </body>
    </html>
  );
}
