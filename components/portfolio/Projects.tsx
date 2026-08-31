// components/Projects.tsx
import Image from "next/image";
import { projects } from "@/data/projects";
import Link from "next/link";
import { SKILLS } from "./data";

export function Projects() {
  return (
    <section id="work" className="px-6 pt-24 sm:px-10 sm:pt-32">
      <div className="flex flex-col gap-12 lg:flex-row lg:gap-16">
        {/* Sticky left column */}
        <div className="lg:w-[34%] lg:shrink-0">
          <div className="lg:sticky lg:top-24">
            <p className="eyebrow" data-reveal>
              04 — Portfolio
            </p>
            <h2
              className="display mt-5 text-[13vw] leading-[0.9] sm:text-[8vw] lg:text-[5.4vw]"
              data-reveal
            >
              Selected
              <br />
              Projects
            </h2>
            <p
              className="mt-6 max-w-sm text-sm leading-relaxed text-muted-foreground"
              data-reveal
            >
              A short selection of recent work. Each project shipped to production and is still
              maintained or in active use today.
            </p>
            <div data-hero-fade className="mt-6 sm:mt-4 flex flex-wrap gap-x-1.5 sm:gap-x-2 gap-y-2 sm:gap-y-3 md:max-w-4/5 2xl:max-w-3/4">
              {SKILLS.map((s) => (
                <div
                  key={s}
                  className="rounded-full border border-[#161616] bg-surface/60 px-3 sm:px-4 h-6 sm:h-7 md:h-7 2xl:h-9 flex items-center text-[10px] sm:text-[12px] md:text-[12px] 2xl:text-[16px] font-medium text-text transition-colors duration-300 hover:border-accent hover:text-accent"
                >
                  {s}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scrollable right column */}
        <div className="flex flex-1 flex-col gap-16 sm:gap-24">
          {projects.map((p) => (
            <article key={p.title} className="group" data-reveal>
              <div className="relative aspect-4/3 overflow-hidden rounded-2xl bg-surface">
                <Image
                  src={p.coverImage}
                  alt={`${p.title} — ${p.tag}`}
                  loading="lazy"
                  width={1280}
                  height={960}
                  className="h-full w-full scale-105 object-top object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-100"
                />
              </div>

              <div className="mt-6 flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
                <h3 className="display text-3xl sm:text-4xl">{p.title}</h3>
                <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                  {p.tag} · {p.year}
                </p>
              </div>
              <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground">
                {p.body}
              </p>
              <div className="mt-6 flex gap-6">
                <Link
                  href={`/projects/${p.slug}`}
                  className="link-underline text-sm font-medium text-accent"
                >
                  See project
                </Link>
                <a
                  href={p.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="link-underline text-sm font-medium text-accent"
                >
                  Live demo
                </a>
                {p.github &&
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noreferrer"
                    className="link-underline text-sm font-medium"
                  >
                    GitHub
                  </a>}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}