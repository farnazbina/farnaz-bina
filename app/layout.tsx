import type { Metadata } from "next";
import { Funnel_Sans, Funnel_Display } from "next/font/google";
import "./globals.css";
import { FloatingContact } from "@/components/FloatingContact";
import { Nav } from "@/components/portfolio/Nav";
import { Footer } from "@/components/portfolio/Sections";

const funnelSans = Funnel_Sans({
  variable: "--font-funnel-sans",
  subsets: ["latin"],
});

const funnelDisplay = Funnel_Display({
  variable: "--font-funnel-display",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Farnaz Bina — Frontend Engineer (React, Next.js, TypeScript)",
  description:
    "Frontend Engineer with 5 years of experience in React, Next.js and TypeScript. Building dashboards, booking platforms and SaaS products for remote teams.",
  metadataBase: new URL("https://farnaz-bina.vercel.app"),

  other: {
    "script:ld+json": JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Farnaz Bina",
      jobTitle: "Farnaz Bina — Frontend Engineer (React, Next.js, TypeScript)",
      url: "https://farnaz-bina.vercel.app",
      sameAs: [
        "https://github.com/farnazbina",
        "https://www.linkedin.com/in/farnaz-bina/",
        "https://www.instagram.com/farnazbina/",
        "https://x.com/farnaz_bina",
      ],
      knowsAbout: [
        "React",
        "Next.js",
        "Vue.js",
        "Nuxt.js",
        "JavaScript",
        "TypeScript",
        "Frontend Development",
      ],
    }),
  },
  keywords: [
    "Frontend Developer",
    "React",
    "Next.js",
    "Vue.js",
    "Nuxt.js",
    "JavaScript",
    "TypeScript",
    "UI Developer",
    "Web Developer Portfolio",
  ],

  openGraph: {
    title: "Farnaz Bina — Frontend Engineer (React, Next.js, TypeScript)",
    description: "Frontend Engineer with 5 years of experience in React, Next.js and TypeScript. Building dashboards, booking platforms and SaaS products for remote teams.",
    url: "https://farnaz-bina.vercel.app",
    siteName: "Farnaz Bina Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Farnaz Bina — Frontend Engineer (React, Next.js, TypeScript)",
    description: "Frontend Engineer with 5 years of experience in React, Next.js and TypeScript. Building dashboards, booking platforms and SaaS products for remote teams.",
    images: ["/og-image.jpg"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
    },
  },

  alternates: {
    canonical: "https://farnaz-bina.vercel.app",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${funnelSans.variable} ${funnelDisplay.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Nav />
        {children}
        <Footer />
        <FloatingContact />
      </body>
    </html>
  );
}
