import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"], display: "swap" });

const siteUrl = "https://currentmarketlab.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Current Market — The Brand Intelligence Lab",
    template: "%s · Current Market"
  },
  description:
    "Current Market is a research-driven creative lab helping technology brands align strategy, narrative, and design from Deurne, NL.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    title: "Current Market — The Brand Intelligence Lab",
    description:
      "Current Market partners with technology brands to craft strategy, narrative, and design that perform.",
    siteName: "Current Market",
    images: [
      {
        url: `${siteUrl}/og?title=Current%20Market`,
        width: 1200,
        height: 630,
        alt: "Current Market — The Brand Intelligence Lab"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Current Market — The Brand Intelligence Lab",
    description:
      "Where creativity meets intelligence. Strategy, narrative, and design for technology leaders.",
    images: [`${siteUrl}/og?title=Current%20Market`]
  },
  alternates: {
    canonical: siteUrl
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} relative flex min-h-screen flex-col bg-background`}>
        <TooltipProvider delayDuration={200}>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </TooltipProvider>
        <Toaster />
      </body>
    </html>
  );
}
