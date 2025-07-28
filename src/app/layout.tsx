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
    default: "K Rajtilak's Portfolio",
    template: "%s | K Rajtilak",
  },

  description: "K Rajtilak – Cybersecurity student exploring Web Dev and IoT with curiosity and code.",
  applicationName: "K Rajtilak Portfolio",
  generator: "Next.js",
  referrer: "origin-when-cross-origin",
  keywords: ["K Rajtilak","Rajtilak2020","Portfolio","Full Stack Developer","IoT Developer","Cybersecurity","Web Developer","Cybersecurity Student","K Rajtilak Projects","Personal Website","Next.js Developer","Open Source","ESP32","GitHub Portfolio","Tech Portfolio","IoT Projects","Security Projects","Tailwind Developer"],
  authors: [
    {
      name: "K Rajtilak",
      url: "https://github.com/rajtilak-2020",
    },
  ],

  creator: "K Rajtilak",
  publisher: "K Rajtilak",
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },

  openGraph: {
    title: "K Rajtilak's Portfolio",
    description: "K Rajtilak – Cybersecurity student exploring Web Dev and IoT with curiosity and code.",
    url: DATA.url,
    siteName: "K Rajtilak's Portfolio",
    images: [
      {
        url: "https://krajtilak.vercel.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "K Rajtilak – Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "K Rajtilak's Portfolio",
    description: "Cybersecurity student with passion for Web Dev & IoT – building for tomorrow.",
    creator: "@2020rajtilak",
    images: ["https://krajtilak.vercel.app/og-image.png"],
  },

icons: {
  icon: [
    { url: "/favicons/favicon.svg", type: "image/svg+xml" },
    { url: "/favicons/favicon-16x16.png", type: "image/png", sizes: "16x16" },
    { url: "/favicons/favicon-32x32.png", type: "image/png", sizes: "32x32" },
    { url: "/favicons/favicon-96x96.png", type: "image/png", sizes: "96x96" },
    { url: "/favicons/favicon-128.png", type: "image/png", sizes: "128x128" },
    { url: "/favicons/favicon-196x196.png", type: "image/png", sizes: "196x196" },
    { url: "/favicons/android-chrome-512x512.png", type: "image/png", sizes: "512x512" },
    { url: "/favicon.ico", type: "image/x-icon" }
  ],
  shortcut: [
    { url: "/favicons/favicon-16x16.png" }
  ],
  apple: [
    { url: "/favicons/apple-touch-icon-57x57.png", sizes: "57x57" },
    { url: "/favicons/apple-touch-icon-60x60.png", sizes: "60x60" },
    { url: "/favicons/apple-touch-icon-72x72.png", sizes: "72x72" },
    { url: "/favicons/apple-touch-icon-76x76.png", sizes: "76x76" },
    { url: "/favicons/apple-touch-icon-114x114.png", sizes: "114x114" },
    { url: "/favicons/apple-touch-icon-120x120.png", sizes: "120x120" },
    { url: "/favicons/apple-touch-icon-144x144.png", sizes: "144x144" },
    { url: "/favicons/apple-touch-icon-152x152.png", sizes: "152x152" }
  ],
  other: [
    {
      rel: "apple-touch-icon-precomposed",
      url: "/favicons/apple-touch-icon-152x152.png",
      sizes: "152x152"
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "192x192",
      url: "/favicons/android-chrome-192x192.png"
    },
    {
      rel: "msapplication-TileImage",
      url: "/favicons/mstile-144x144.png"
    },
    {
      rel: "msapplication-square70x70logo",
      url: "/favicons/mstile-70x70.png"
    },
    {
      rel: "msapplication-square150x150logo",
      url: "/favicons/mstile-150x150.png"
    },
    {
      rel: "msapplication-wide310x150logo",
      url: "/favicons/mstile-310x150.png"
    },
    {
      rel: "msapplication-square310x310logo",
      url: "/favicons/mstile-310x310.png"
    },
    {
        rel: "manifest",
        url: "/favicons/manifest.json",
    },
  ]
},
  manifest: "/favicons/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "K Rajtilak's Portfolio",
  },
  category: "technology",
  classification: "Portfolio Website",

  verification: {
    google: "cHz5zhEWQ9YHN99CF9o5D2MLqaYjVlyIVpfd6iahz68",
    yandex: "b9845d39c41c7887",
    me: ["mailto:rajtilak1062020@gmail.com"],
    other: {"facebook-domain-verification": "2w6954q16u00v8vpp20i4gl16evusn",
    },
  },
  other: {
    "msapplication-TileColor": "#ffffff",
    "msapplication-TileImage": "/favicons/mstile-144x144.png",
    "msapplication-config": "/favicons/browserconfig.xml",
    "theme-color": "#ffffff",
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
          "min-h-screen bg-background font-sans antialiased py-12 sm:py-24",
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