"use client";

import { useEffect, useRef } from "react";
import { ArrowUpRight, Braces, Layers3, Sparkles, Gauge, Users, PenTool } from "lucide-react";
import styles from "./Skills.module.css";

const skillGroups = [
  {
    number: "01", title: "Frontend engineering", icon: Braces,
    subtitle: "Strong fundamentals and modern application frameworks.",
    skills: ["HTML5", "CSS3", "JavaScript (ES6+)", "TypeScript", "React", "Next.js", "Vue.js", "Nuxt.js"],
  },
  {
    number: "02", title: "Interface & motion", icon: Sparkles,
    subtitle: "Responsive, accessible interfaces with thoughtful movement.",
    skills: ["Tailwind CSS", "Responsive Design", "Accessibility (WCAG)", "Design Systems", "GSAP", "CSS Animations"],
  },
  {
    number: "03", title: "Application architecture", icon: Layers3,
    subtitle: "Reusable components and reliable data flows.",
    skills: ["REST APIs", "State Management", "Zustand", "React Query", "React Hook Form", "Zod", "Authentication"],
  },
  {
    number: "04", title: "Quality & performance", icon: Gauge,
    subtitle: "Maintainable code and fast, dependable experiences.",
    skills: ["Performance Optimization", "Core Web Vitals", "Clean Code", "Testing & Debugging", "Browser DevTools", "SEO Fundamentals", "Cross-browser Compatibility"],
  },
  {
    number: "05", title: "Teamwork & delivery", icon: Users,
    subtitle: "Clear collaboration from planning to code review.",
    skills: ["Scrum / Agile", "Jira / ClickUp", "Git / GitHub", "Code Review", "Technical Communication", "CI/CD Fundamentals"],
  },
  {
    number: "06", title: "Design & user experience", icon: PenTool,
    subtitle: "Bringing design intent into everyday interactions.",
    skills: ["Figma", "UX Principles", "Usability", "Design Handoff", "Interaction Design", "Visual Hierarchy"],
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
          <p className={styles.eyebrow}><span aria-hidden="true">✦</span> Skills & expertise</p>
          <h2 id="skills-heading" className={styles.heading}>The skills behind<br /><span>every build.</span></h2>
        </div>
        <p className={styles.intro}>From frontend fundamentals to performance, user experience, and team delivery ? the tools and practices I bring to a project.</p>
      </header>

      <div className={styles.stack} data-skill-reveal>
        <p className={styles.stackLabel}>Core stack</p>
        <ul className={styles.stackList} aria-label="Core technologies">
          {["React", "Next.js", "Vue.js", "Nuxt.js", "TypeScript"].map((skill) => <li key={skill}>{skill}</li>)}
        </ul>
      </div>

      <div className={styles.layout}>
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
