import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://thesoulstore.ca"),
  title: {
    default: "TheSoulStore | Modern Streetwear from Calgary",
    template: "%s | TheSoulStore",
  },
  description:
    "TheSoulStore is a modern streetwear label from Calgary, Canada. Join the waitlist for early access to Collection 001.",
  keywords: [
    "TheSoulStore",
    "Calgary streetwear",
    "Canadian streetwear",
    "modern streetwear",
    "oversized clothing",
    "Collection 001",
  ],
  openGraph: {
    title: "TheSoulStore | Wear Your Soul",
    description:
      "Modern streetwear designed in Calgary. Join the waitlist for early access to Collection 001.",
    siteName: "TheSoulStore",
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "TheSoulStore | Wear Your Soul",
    description:
      "Modern streetwear designed in Calgary. Collection 001 is currently in development.",
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
