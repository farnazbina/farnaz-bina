"use client";

import { useLayoutEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { projects } from "@/data/projects";
import { registerGsap } from "./useSmoothScroll";
import styles from "./Projects.module.css";

export function Projects() {
  const sectionRef = useRef<HTMLElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLSpanElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const viewport = viewportRef.current;
    const track = trackRef.current;
    if (!section || !viewport || !track) return;
    registerGsap();
    const media = gsap.matchMedia();
    media.add("(prefers-reduced-motion: no-preference)", () => {
      const distance = () => Math.max(0, track.scrollWidth - viewport.clientWidth);
      if (!distance()) return;
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: () => "+=" + distance(),
          pin: true,
          scrub: 0.65,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });
      timeline.to(track, { x: () => -distance(), ease: "none" }, 0)
        .fromTo(progressRef.current, { scaleX: 0 }, { scaleX: 1, ease: "none" }, 0);

      // Keep offscreen project links accessible during keyboard navigation.
      const handleFocus = (event: FocusEvent) => {
        const card = (event.target as HTMLElement).closest<HTMLElement>("[data-project-card]");
        const trigger = timeline.scrollTrigger;
        if (!card || !trigger || !distance()) return;
        viewport.scrollLeft = 0;
        const offset = Math.min(distance(), Math.max(0, card.offsetLeft - track.offsetLeft));
        trigger.scroll(trigger.start + (offset / distance()) * (trigger.end - trigger.start));
        ScrollTrigger.update();
        timeline.progress(trigger.progress);
      };
      track.addEventListener("focusin", handleFocus);
      return () => track.removeEventListener("focusin", handleFocus);
    });
    let disposed = false;
    document.fonts.ready.then(() => {
      if (!disposed) ScrollTrigger.refresh();
    });
    return () => {
      disposed = true;
      media.revert();
    };
  }, []);

  return (
    <section id="work" ref={sectionRef} className={styles.section} aria-labelledby="projects-heading">
      {/* <header className={styles.header}>
        <p className={styles.eyebrow}><span aria-hidden="true">•</span> Projects</p>
        <div>
          <h2 id="projects-heading" className={styles.heading}>
            Creative <span>projects that<br />define</span> my work.
          </h2>
          <p className={styles.intro}>
            A selection of digital experiences, from thoughtful websites to
            ambitious platforms. Built with care, made to be used.
          </p>
        </div>
      </header> */}
      <header className={styles.header} data-skill-reveal>
        <div>
          <p className={styles.eyebrow}><span aria-hidden="true">✦</span> Projects</p>
          <h2 id="skills-heading" className={styles.heading}>Creative <span>projects that<br />define</span> my work.</h2>
        </div>
        <p className={styles.intro}>
            A selection of digital experiences, from thoughtful websites to
            ambitious platforms. Built with care, made to be used.</p>
      </header>
      <div ref={viewportRef} className={styles.viewport}>
        <div ref={trackRef} className={styles.track}>
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
      <div className={styles.footer} aria-hidden="true">
        <span>Scroll to explore</span>
        <div className={styles.progress}><span ref={progressRef} /></div>
        <span>{String(projects.length).padStart(2, "0")} projects</span>
      </div>
    </section>
  );
}
