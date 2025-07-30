import ContactSection from "@/components/ContactSection";
import { InfoButton } from "@/components/info-button";
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { ResumeCard } from "@/components/resume-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import LightRays from '@/components/ui/LightRays';
import { DATA } from "@/data/resume";
import { Metadata } from 'next';
import Markdown from "react-markdown";

const BLUR_FADE_DELAY = 0.04;

export const metadata: Metadata = {
  metadataBase: new URL(DATA.url),
  title: {
    default: "K Rajtilak's Portfolio",
    template: "%s | K Rajtilak",
  },
  alternates: {
    canonical: "https://krajtilak.vercel.app"
  },

  description: "K Rajtilak – Cybersecurity student exploring Web Dev and IoT with curiosity and code.",
  applicationName: "K Rajtilak's Portfolio",
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

export default function Page() {
  return (
    <main className="flex flex-col min-h-[100dvh] space-y-1 relative">
      <div className="fixed inset-0 pointer-events-none z-0">
        <LightRays
          raysOrigin="top-right"
          raysColor="#ffffff"
          raysSpeed={0.4}
          lightSpread={1.2}
          rayLength={8}
          pulsating={true}
          fadeDistance={5}
          saturation={1}
          followMouse={false}
          mouseInfluence={0.15}
          noiseAmount={0.1}
          distortion={0}
          className="w-full h-full"
        />
      </div>
      
      <div className="relative z-10">
        <section id="hero">
          <div className="w-full space-y-8 px-4 md:px-6 lg:px-8">
            <div className="gap-2 flex justify-between">
              <div className="flex-col flex flex-1 space-y-1.5">
                <BlurFadeText
                  delay={BLUR_FADE_DELAY}
                  className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"
                  yOffset={8}
                  text={`Hi, I'm K Rajtilak`}
                />
                <BlurFadeText
                  className="md:text-xl"
                  delay={BLUR_FADE_DELAY}
                  text={DATA.description}
                />
              </div>
              <BlurFade delay={BLUR_FADE_DELAY}>
                <Avatar className="size-28 border">
                  <AvatarImage alt={DATA.name} src={DATA.avatarUrl} />
                  <AvatarFallback>{DATA.initials}</AvatarFallback>
                </Avatar>
              </BlurFade>
            </div>
            <div className="flex flex-wrap gap-1 items-left justify-left">
            <BlurFade delay={BLUR_FADE_DELAY}><InfoButton className="mt-4" /></BlurFade>
            </div>
          </div>
        </section>
        <section id="about" className="px-4 md:px-6 lg:px-8">
          <BlurFade delay={BLUR_FADE_DELAY * 3}>
          <hr className="my-10 border-black-100" />
            <h2 className="text-xl font-bold">About Me</h2>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 4}>
            <Markdown className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
              {DATA.summary}
            </Markdown>
          </BlurFade>
        </section>
        <section id="work" className="px-4 md:px-6 lg:px-8">
          <div className="flex min-h-0 flex-col gap-y-3">
            <BlurFade delay={BLUR_FADE_DELAY * 5}>
              <h2 className="text-xl font-bold">Work Experience</h2>
            </BlurFade>
            {DATA.work.map((work, id) => (
              <BlurFade
                key={work.company}
                delay={BLUR_FADE_DELAY * 6 + id * 0.05}
              >
                <ResumeCard
                  key={work.company}
                  logoUrl={work.logoUrl}
                  altText={work.company}
                  title={work.company}
                  subtitle={work.title}
                  href={work.href}
                  badges={work.badges}
                  period={`${work.start} - ${work.end ?? "Present"}`}
                  description={work.description}
                />
              </BlurFade>
            ))}
          </div>
        </section>
        <section id="education" className="px-4 md:px-6 lg:px-8 mt-6">
          <div className="flex min-h-0 flex-col gap-y-3">
            <BlurFade delay={BLUR_FADE_DELAY * 7}>
              <h2 className="text-xl font-bold">Education</h2>
            </BlurFade>
            {DATA.education.map((education, id) => (
              <BlurFade
                key={education.institute}
                delay={BLUR_FADE_DELAY * 8 + id * 0.05}
              >
                <ResumeCard
                  key={education.institute}
                  href={education.href}
                  logoUrl={education.logoUrl}
                  altText={education.institute}
                  title={education.institute}
                  subtitle={education.degree}
                  period={`${education.start} - ${education.end}`}
                  description={education.description}
                />
              </BlurFade>
            ))}
          </div>
        </section>

        <section id="skills" className="px-4 md:px-6 lg:px-8 py-10">
  <div className="flex flex-col gap-10 md:flex-row md:gap-12 items-center md:items-start">
    <div className="w-full md:flex-1">
      <BlurFade delay={BLUR_FADE_DELAY * 9}>
        <h2 className="text-2xl font-bold mb-4">Skills</h2>
        <p className="text-muted-foreground mb-6">
          A mix of what I enjoy and what I excel at — from development to design and tech tinkering.
        </p>
      </BlurFade>
      <div className="flex flex-wrap gap-2">
        {DATA.skills.map((skill, id) => (
          <BlurFade key={skill} delay={BLUR_FADE_DELAY * 10 + id * 0.05}>
            <Badge>{skill}</Badge>
          </BlurFade>
        ))}
      </div>
    </div>
    <BlurFade delay={BLUR_FADE_DELAY * 11}>
      <div className="w-full md:flex-1 flex justify-center">
        <div className="w-full max-w-md sm:max-w-lg bg-background/80 rounded-xl shadow-md p-2">
          <div className="aspect-auto w-full">
            <img
              src="https://raw.githubusercontent.com/rajtilak-2020/rajtilak-2020/main/profile-3d-contrib/profile-night-green.svg"
              alt="GitHub Contributions"
              className="w-full h-full object-contain rounded-xl"
            />
          </div>
        </div>
      </div>
    </BlurFade>
  </div>
</section>

        <section id="contact">
          <div className="grid items-center justify-center gap-4 px-4 text-center md:px-6 w-full py-12">
            <BlurFade delay={BLUR_FADE_DELAY * 16}>
              <div className="space-y-3">
                <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                  Contact
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl"> Get in Touch </h2>
                <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Want to connect? Just shoot me a {" "}
                  <span className="text-green-500 hover:italic">message with a direct question or topic</span>{" "}
                  and I&apos;ll respond whenever I can. You can also{" "}
                <span className="text-red-500 hover:italic">schedule a meeting directly</span> from
                <a href="https://cal.com/k-rajtilak" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:italic"> here</a>.
                </p>
            </div>
            <ContactSection />
          </BlurFade>
        </div>
      </section>
      </div>
    </main>
  );
}