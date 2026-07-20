import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "TheSoulStore | Premium T-Shirts & Streetwear",
    template: "%s | TheSoulStore",
  },
  description:
    "Shop premium oversized, graphic, vintage and essential T-shirts from TheSoulStore. Comfortable fits, bold designs and everyday style.",
  keywords: [
    "TheSoulStore",
    "T-shirt store",
    "oversized T-shirts",
    "graphic tees",
    "streetwear",
    "premium T-shirts",
    "vintage T-shirts",
    "online clothing store",
  ],
  openGraph: {
    title: "TheSoulStore",
    description:
      "Premium oversized, graphic and essential T-shirts made for comfort, confidence and everyday expression.",
    siteName: "TheSoulStore",
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "TheSoulStore",
    description:
      "Premium oversized, graphic and essential T-shirts made for everyday style.",
  },
  icons: {
    icon: "/icon.png",
    apple: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}