'use client'
import { SERVICES, STATS, TESTIMONIALS } from "./data";
import { MouseEvent } from "react";
import gsap from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
gsap.registerPlugin(ScrollToPlugin);

const socials = [{
  title: "GitHub",
  link: "https://github.com/farnazbina"
},
{
  title: "LinkedIn",
  link: "https://www.linkedin.com/in/farnazbina/"
},
{
  title: "Instagram",
  link: "https://instagram.com/farnazbina"
},
{
  title: "X",
  link: "https://twitter.com/farnazbina"
}];

export function Stats() {
  return (
    <section className="border-y border-border bg-surface px-6 py-16 sm:px-10 sm:py-20 mt-20 sm:mt-32 lg:mt-40">
      <div className="grid grid-cols-2 gap-x-8 gap-y-12 lg:grid-cols-4" data-reveal data-reveal-stagger>
        {STATS.map((s) => (
          <div key={s.label}>
            <p className="display text-6xl sm:text-7xl">{s.value}</p>
            <p className="mt-3 text-sm text-muted-foreground">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export function About() {
  return (
    <section id="about" className="px-6 py-24 sm:px-10 sm:py-32">
      <div className="grid gap-14 lg:grid-cols-2 lg:items-center lg:gap-24">
        <div className="relative overflow-hidden rounded-2xl bg-surface h-[700px]" data-reveal>
          <img
            src="/images/setup.jpeg"
            alt="Portrait of Farnaz Bina"
            loading="lazy"
            width={1024}
            height={700}
            data-parallax="8"
            className="h-full w-full object-cover"
          />
        </div>
        <div>
          <p className="eyebrow" data-reveal>
            02 — About me
          </p>
          <h2 className="display mt-5 text-[11vw] leading-[0.92] sm:text-[7vw] lg:text-[4.4vw]" data-reveal>
            Engineering with a designer&rsquo;s eye
          </h2>
          <div className="mt-8 space-y-5 text-base leading-relaxed text-muted-foreground" data-reveal data-reveal-stagger>
            <p>
              I&rsquo;m Farnaz Bina, a frontend developer with 5 years of professional experience, including 3 years building production-grade apps with Vue.js. Now specializing in Next.js and React to create fast, SEO-friendly, and user-centric web applications. I bring hands-on experience with Server Components, App Router, TypeScript, and performance optimization (Core Web Vitals).
My focus is on writing clean, maintainable code that helps startups and agencies ship features faster—without getting blocked by technical debt or UI bugs.
            </p>
          </div>
          <dl className="mt-10 grid grid-cols-2 gap-6 border-t border-border pt-8 text-sm" data-reveal data-reveal-stagger>
            {/* <div>
              <dt className="text-muted-foreground">Based in</dt>
              <dd className="mt-1 font-medium">Lisbon, Portugal</dd>
            </div> */}
            <div>
              <dt className="text-muted-foreground">Focus</dt>
              <dd className="mt-1 font-medium">React · Next.js · TypeScript · Motion</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}

export function Services() {
  return (
    <section id="services" className="border-t border-border px-6 py-24 sm:px-10 sm:py-32">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <div>
          <p className="eyebrow" data-reveal>
            03 — What I do
          </p>
          <h2 className="display mt-5 text-[12vw] leading-[0.92] sm:text-[7vw] lg:text-[4.8vw]" data-reveal>
            Services
          </h2>
        </div>
        <p className="max-w-sm text-sm leading-relaxed text-muted-foreground" data-reveal>
          Four things I do well, usually in combination — from first prototype to a maintained,
          measured production release.
        </p>
      </div>

      <div className="mt-16 flex items-stretch gap-px overflow-hidden rounded-2xl border border-border bg-border">
        {SERVICES.map((s) => (
          <div
            key={s.n}
            className=" bg-background p-8 transition-colors duration-500 hover:bg-surface sm:p-12"
          >
            <p className="text-xs tracking-[0.2em] text-accent">{s.n}</p>
            <h3 className="display mt-6 text-3xl sm:text-4xl">{s.title}</h3>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">{s.body}</p>
            <span className="mt-8 inline-block text-sm text-muted-foreground transition-transform duration-500 group-hover:translate-x-1 group-hover:text-accent">
              →
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

export function Testimonials() {
  return (
    <section
      id="testimonials"
      className="border-y border-border bg-surface px-6 py-24 sm:px-10 sm:py-32"
    >
      <p className="eyebrow" data-reveal>
        05 — Kind words
      </p>
      <div className="mt-14 grid gap-12 lg:grid-cols-3">
        {TESTIMONIALS.map((t) => (
          <figure key={t.name} data-reveal className="flex flex-col justify-between">
            <blockquote className="display text-2xl leading-[1.2] sm:text-3xl">
              &ldquo;{t.quote}&rdquo;
            </blockquote>
            <figcaption className="mt-8 border-t border-border pt-5 text-sm">
              <span className="font-medium">{t.name}</span>
              <span className="block text-muted-foreground">{t.role}</span>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

export function Contact() {
  return (
    <section id="contact" className="px-6 py-24 sm:px-10 sm:py-32">
      <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">

        {/* LEFT COLUMN — Intro (unchanged) */}
        <div>
          <p className="eyebrow" data-reveal>
            06 — Contact
          </p>
          <h2
            className="display mt-5 text-[13vw] leading-[0.9] sm:text-[8vw] lg:text-[5.2vw]"
            data-reveal
          >
            Let&rsquo;s build
            <br />
            something good
          </h2>
          <p
            className="mt-8 max-w-sm text-sm leading-relaxed text-muted-foreground"
            data-reveal
          >
            Currently taking on projects for Q3. Tell me a little about what you&rsquo;re
            making and I&rsquo;ll get back to you within two days.
          </p>
        </div>

        {/* RIGHT COLUMN — Contact Info (replaces the form) */}
        <div
          className="flex flex-col justify-center space-y-8 rounded-4xl border border-border p-8 shadow-soft"
          data-reveal
        >
          {/* Email */}
          <div>
            <p className="eyebrow">Direct email</p>
            <a
              href="mailto:farnazbina.dev@gmail.com"
              className="font-display text-2xl transition-colors hover:text-accent sm:text-3xl"
            >
              farnazbina.dev@gmail.com
            </a>
          </div>

          {/* Divider */}
          <div className="h-px w-full bg-border" />

          {/* Social Links */}
          <div>
            <p className="eyebrow">Find me on</p>
            <div className="mt-3 flex flex-wrap gap-6 text-sm">
              {socials.map((s) => (
                <a
                  key={s.title}
                  href={s.link}
                  target="_blank"
                  rel="noreferrer"
                  className="link-underline"
                >
                  {s.title}
                </a>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export function Footer () {
  const handleScrollToTop = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    gsap.to(window, {
      duration: 1.2,
      scrollTo: { y: 0, autoKill: true },
      ease: "power3.inOut",
    });
  };

  return (
    <footer className="border-t border-border px-6 py-10 sm:px-10">
      <div className="flex flex-wrap items-center justify-between gap-4 text-xs text-muted-foreground">
        <p>© {new Date().getFullYear()} Farnaz Bina. All rights reserved.</p>
        <a href="#top" onClick={handleScrollToTop} className="link-underline">
          Back to top ↑
        </a>
      </div>
    </footer>
  );
};
