import type { Metadata } from 'next'
import { Experience } from "@/components/portfolio/Experience";
import { Hero } from "@/components/portfolio/Hero";
import { Nav } from "@/components/portfolio/Nav";
import { Projects } from "@/components/portfolio/Projects";
import { Skills } from "@/components/portfolio/Skills";
import { About, Contact, Footer, Services, Stats, Testimonials } from "@/components/portfolio/Sections";
import { useReveal } from "@/components/portfolio/useReveal";
import { useSmoothScroll } from "@/components/portfolio/useSmoothScroll";

export const metadata: Metadata = {
  title: "Farnaz Bina — Frontend Developer Portfolio",
  description:
    "Welcome to my portfolio. I build modern, fast, and beautiful web experiences using React, Next.js, Vue.js and TypeScript.",
  alternates: {
    canonical: "https://farnaz-bina.vercel.app",
  },
};

export default function Home() {

  // useSmoothScroll(true);
  // const revealRef = useReveal<HTMLDivElement>(true);
  return (
    <div className="relative">
      {/* {!loaded && <Loader onComplete={onComplete} />} */}
      <Nav />
      <main>
        <Hero ready={true} /> {/* 👈 conditionally render */}
        <Projects />
        <Skills />
        {/* <Stats /> */}
        <Experience />
        <About />
        <Services />
        {/* <Testimonials /> */}
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
