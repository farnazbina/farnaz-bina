"use client";

import { useEffect, useRef } from "react";
import { ArrowUpRight, Braces, Layers3, Sparkles } from "lucide-react";
import styles from "./Skills.module.css";

const skillGroups = [
  {
    number: "01",
    title: "The foundation",
    subtitle: "Scalable applications. Thoughtful architecture.",
    icon: Braces,
    skills: ["React", "Next.js", "Vue.js", "Nuxt.js", "TypeScript", "JavaScript"],
  },
  {
    number: "02",
    title: "The experience",
    subtitle: "Interfaces that look right and feel even better.",
    icon: Sparkles,
    skills: ["Tailwind CSS", "GSAP", "CSS Animations", "Responsive Design", "Accessibility", "Design Systems"],
  },
  {
    number: "03",
    title: "The details",
    subtitle: "Everything that makes a product ready for real life.",
    icon: Layers3,
    skills: ["REST APIs", "Zustand", "React Hook Form", "Zod", "Authentication", "Performance", "Git"],
  },
];

export function Skills() {
  const rootRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root || !window.IntersectionObserver) return;
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const animations: Animation[] = [];
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        if (!motion.matches) {
          animations.push(entry.target.animate(
            [{ opacity: 0, transform: "translateY(24px)" }, { opacity: 1, transform: "translateY(0)" }],
            { duration: 700, easing: "cubic-bezier(0.22, 1, 0.36, 1)" },
          ));
        }
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.12 });
    root.querySelectorAll("[data-skill-reveal]").forEach((element) => observer.observe(element));
    const stopMotion = () => {
      if (motion.matches) animations.forEach((animation) => animation.cancel());
    };
    motion.addEventListener("change", stopMotion);
    return () => {
      observer.disconnect();
      animations.forEach((animation) => animation.cancel());
      motion.removeEventListener("change", stopMotion);
    };
  }, []);

  return (
    <section id="skills" ref={rootRef} className={styles.section} aria-labelledby="skills-heading">
      <header className={styles.header} data-skill-reveal>
        <div>
          <p className={styles.eyebrow}><span aria-hidden="true">✦</span> Behind the build</p>
          <h2 id="skills-heading" className={styles.heading}>Technical mind.<br /><span>Creative instinct.</span></h2>
        </div>
        <p className={styles.intro}>The tools are only the beginning. I bring them together to build interfaces that feel effortless, from the first interaction to the smallest detail.</p>
      </header>

      <div className={styles.layout}>
        <div className={styles.feature} data-skill-reveal>
          <div className={styles.featureTop}><span>My creative toolkit</span><ArrowUpRight size={20} aria-hidden="true" /></div>
          <div className={styles.orbit} aria-hidden="true">
            <div className={styles.ringOuter} />
            <div className={styles.ringInner} />
            <span className={styles.axis} />
            <div className={styles.core}><Braces strokeWidth={1} /><span>built with care</span></div>
            <span className={`${styles.orbitTag} ${styles.react}`}>React <span>↗</span></span>
            <span className={`${styles.orbitTag} ${styles.typescript}`}>TypeScript</span>
            <span className={`${styles.orbitTag} ${styles.next}`}>Next.js</span>
            <span className={`${styles.orbitTag} ${styles.vue}`}>Vue / Nuxt</span>
            <span className={styles.star}>✦</span>
          </div>
          <div className={styles.featureBottom}>
            <p>Where logic<br />meets <em>feeling.</em></p>
            <span>ENGINEERING × DESIGN</span>
          </div>
        </div>

        <div className={styles.groups}>
          {skillGroups.map(({ number, title, subtitle, icon: Icon, skills }) => (
            <article key={number} className={styles.group} data-skill-reveal>
              <div className={styles.groupTop}>
                <span className={styles.number}>{number} /</span>
                <Icon size={21} strokeWidth={1.3} aria-hidden="true" />
              </div>
              <h3>{title}</h3>
              <p>{subtitle}</p>
              <ul className={styles.tags} aria-label={`${title} skills`}>
                {skills.map((skill) => <li key={skill}>{skill}</li>)}
              </ul>
            </article>
          ))}
        </div>
      </div>

      <footer className={styles.footer}>
        <p><span aria-hidden="true">✦</span> Always curious. Always refining the craft.</p>
        <a href="#contact">Let’s build something <ArrowUpRight size={16} aria-hidden="true" /></a>
      </footer>
    </section>
  );
}
