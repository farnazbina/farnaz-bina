import type { Metadata } from "next";
import { Projects } from "@/components/portfolio/Projects";

export const metadata: Metadata = {
  title: "Projects — Farnaz Bina",
  description:
    "Explore selected frontend projects by Farnaz Bina, including healthcare, SaaS, and web platform experiences.",
  alternates: {
    canonical: "https://farnaz-bina.vercel.app/projects",
  },
};

export default function ProjectsPage() {
  return (
    <div className="pt-30">
      <Projects showAll />
    </div>
  );
}
