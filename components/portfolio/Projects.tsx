"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { projects } from "@/data/projects";
import { registerGsap } from "./useSmoothScroll";
import styles from "./Projects.module.css";

export function Projects() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    registerGsap();

    const ctx = gsap.context(() => {
      const cards = section.querySelectorAll<HTMLElement>("[data-project-card]");
      cards.forEach((card) => {
        gsap.from(card, {
          y: 48,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: { trigger: card, start: "top 88%", once: true },
        });
      });
    }, section);

    ScrollTrigger.refresh();
    return () => ctx.revert();
  }, []);

  return (
    <section id="work" ref={sectionRef} className={styles.section} aria-labelledby="projects-heading">
      <header className={styles.header}>
        <div>
          <p className={styles.eyebrow}><span aria-hidden="true">✦</span> Projects</p>
          <h2 id="projects-heading" className={styles.heading}>Creative <span>projects that<br />define</span> my work.</h2>
        </div>
        <p className={styles.intro}>
            A selection of digital experiences, from thoughtful websites to
            ambitious platforms. Built with care, made to be used.</p>
      </header>
      <div className={styles.viewport}>
        <div className="relative grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-10 px-4 md:px-30">
          {projects.map((project, index) => (
            <article key={project.slug} className={styles.card} data-project-card>
              <Link href={"/projects/" + project.slug} className={styles.imageLink} aria-label={"View " + project.title}>
                <Image
                  src={project.coverImage}
                  alt={project.title}
                  fill
                  sizes="(min-width: 1600px) 600px, (min-width: 900px) 38vw, (min-width: 600px) 62vw, 84vw"
                  className={styles.image}
                />
                <div className={styles.tags}>
                  {project.tag.split(/\s*[|/]\s*/).map((tag) => <span key={tag}>{tag}</span>)}
                </div>
                <span className={styles.number}>{String(index + 1).padStart(2, "0")}</span>
                <span className={styles.open} aria-hidden="true">↗</span>
              </Link>
              <div className={styles.details}>
                <h3><Link href={"/projects/" + project.slug}>{project.title.split(" | ")[0]}</Link></h3>
                <p className={styles.description}>{project.body}</p>
                <div className={styles.links}>
                  <span>{project.year}</span>
                  <Link href={"/projects/" + project.slug}>See project ↗</Link>
                  <a href={project.demo} target="_blank" rel="noreferrer">Live demo ↗</a>
                  {project.github && <a href={project.github} target="_blank" rel="noreferrer">GitHub ↗</a>}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
