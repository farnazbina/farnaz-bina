import type { Metadata } from 'next'
import { Experience } from "@/components/portfolio/Experience";
import { Hero } from "@/components/portfolio/Hero";
import { Nav } from "@/components/portfolio/Nav";
import { Projects } from "@/components/portfolio/Projects";
import { Skills } from "@/components/portfolio/Skills";
import { About, Contact, Footer, Services } from "@/components/portfolio/Sections";

export const metadata: Metadata = {
  title: "Farnaz Bina — Frontend Engineer Portfolio",
  description:
    "Farnaz Bina — Frontend Engineer with 5 years experience in React, Next.js and Vue.js. Building healthcare, fintech and SaaS applications for global teams.",
  alternates: {
    canonical: "https://farnaz-bina.vercel.app",
  },
};

export default function Home() {
  return (
    <div className="relative">
      <Nav />
      <main>
        <Hero ready={true} /> 
        <Projects />
        <Skills />
        <Experience />
        <About />
        <Services />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
