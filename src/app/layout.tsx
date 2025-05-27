import Navbar from "@/components/navbar";
import { ThemeProvider } from "@/components/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { DATA } from "@/data/resume";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from '@vercel/speed-insights/next';

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL(DATA.url),
  title: {
    default: DATA.name,
    template: `%s | ${DATA.name}`,
  },
  description: DATA.description,
  keywords: [
    "K Rajtilak",
    "Rajtilak",
    "K Rajtilak Portfolio",
    "K Rajtilak Projects",
    "K Rajtilak Blogs",
    "K Rajtilak Resume",
    "K Rajtilak Contact",
    "K Rajtilak Instagram",
    "K Rajtilak Youtube",
    "K Rajtilak Email",
    "K Rajtilak LinkedIn",
    "K Rajtilak GitHub",
    "K Rajtilak Twitter",
    "K Rajtilak X",
    "K Rajtilak Reddit",
    "K Rajtilak HackerRank",
    "K Rajtilak2020",
    "Rajtilak2020",
    "Rajtilak Portfolio",
    "Rajtilak Projects",
    "Rajtilak Blogs",
    "Rajtilak Resume",
    "Rajtilak Contact",
    "Rajtilak Instagram",
    "Rajtilak Youtube",
    "Rajtilak Email",
    "Rajtilak LinkedIn",
    "Rajtilak GitHub",
    "Rajtilak Twitter",
    "Rajtilak X",
    "Rajtilak Reddit",
    "Rajtilak HackerRank",
  ],
  openGraph: {
    title: `${DATA.name}`,
    description: DATA.description,
    url: DATA.url,
    siteName: `${DATA.name}`,
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: `${DATA.name}`,
    card: "summary_large_image",
  },
  verification: {
    google: "",
    yandex: "",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased max-w-2xl mx-auto py-12 sm:py-24 px-6",
          fontSans.variable
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
  <TooltipProvider delayDuration={0}>
    {children}
    <Navbar />
  </TooltipProvider>
</ThemeProvider>

        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
