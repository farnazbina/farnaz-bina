import type { Metadata } from "next";
import { Funnel_Sans, Funnel_Display } from "next/font/google";
import "./globals.css";
import { FloatingContact } from "@/components/FloatingContact";

const funnelSans = Funnel_Sans({
  variable: "--font-funnel-sans",
  subsets: ["latin"],
});

const funnelDisplay = Funnel_Display({
  variable: "--font-funnel-display",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Farnaz Bina — Frontend Developer",
  description:
    "Frontend developer specializing in React, Next.js, Vue.js and modern UI development. Explore my projects, skills, and experience.",
  metadataBase: new URL("https://farnaz-bina.vercel.app"),

  other: {
    "script:ld+json": JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Farnaz Bina",
      jobTitle: "Frontend Developer",
      url: "https://farnaz-bina.vercel.app",
      sameAs: [
        "https://github.com/farnazbina",
        "https://www.linkedin.com/in/farnazbina",
        "https://www.instagram.com/farnazbina",
        "https://x.com/farnaz_bina"
      ],
      knowsAbout: [
        "React",
        "Next.js",
        "Vue.js",
        "Nuxt.js",
        "JavaScript",
        "TypeScript",
        "Frontend Development"
      ]
    })
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
    title: "Farnaz Bina — Frontend Developer",
    description:
      "Explore my frontend projects, skills, and experience.",
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
    title: "Farnaz Bina — Frontend Developer",
    description: "Explore my frontend projects, skills, and experience.",
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
        {children}
        <FloatingContact />
      </body>
    </html>
  );
}
