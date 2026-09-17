import { Nav } from "@/components/portfolio/Nav";
import { Footer } from "@/components/portfolio/Sections";

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return (
    <div id="top" className="min-h-screen">
      <a href="#blog-content" className="sr-only fixed left-6 top-24 z-50 rounded-lg bg-background p-3 text-foreground focus:not-sr-only">
        Skip to content
      </a>
      <Nav />
      {children}
      <Footer />
    </div>
  );
}
