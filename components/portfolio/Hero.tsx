'use client'
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { SKILLS } from "./data";
import Image from "next/image";

const HEADLINE = ["Farnaz", "Bina"];

export function Hero({ ready }: { ready: boolean }) {
  const root = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!ready || !root.current) return;
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.15 });
      tl.from("[data-char]", {
        yPercent: 115,
        duration: 1.1,
        ease: "expo.out",
        stagger: 0.022,
      })
        .from("[data-hero-fade]", { y: 20, opacity: 0, duration: 0.9, ease: "power3.out", stagger: 0.12 }, "-=0.7");
    }, root);
    return () => ctx.revert();
  }, [ready]);

  return (
    <section
      id="top"
      ref={root}
      className="relative flex min-h-0 flex-col justify-start overflow-hidden px-4 py-6 pt-20 sm:min-h-svh sm:justify-between sm:px-6 sm:pb-10 sm:pt-32 md:px-10 lg:px-16"

    >
      <div className="container mx-auto">
        <div
          aria-hidden
          data-parallax="18"
          className="pointer-events-none absolute -right-40 top-1/4 h-[34rem] w-[34rem] rounded-full bg-accent/15 blur-[120px]"
        />

        <div className="hero-svg absolute right-[4%] top-[9%] sm:right-[6%] sm:top-[8%] md:right-[10%] lg:top-[13%] z-10">
          <Image
            src='/images/22_hero-img.webp'
            width={180}  // Match w-45 (45 * 4px = 180px)
            height={225} // Maintain aspect ratio (180 * 1.25 = 225)
            alt="Hero_svg"
            loading="eager"
            className="w-45 h-auto sm:w-50 md:w-75 lg:w-100"
          />
        </div>

        <div className="flex flex-col w-full mt-8 sm:mt-0 sm:absolute sm:bottom-[4%] sm:left-0 sm:right-0 sm:mx-auto px-0 sm:px-6 md:px-10 2xl:px-20 relative z-20">
          <div className="blured-card"></div>

          <p className="mt-20 sm:mt-0 text-text/80 max-w-full sm:max-w-[70%] md:max-w-[50%] lg:max-w-[30%] text-sm sm:text-base md:text-[20px] 2xl:text-[26px] font-semibold">
            Pixel-perfect creative projects, brought to life through hundreds of design-to-code transformations.
          </p>

          <h1
            className="mt-5 sm:mt-0 display shrink-0 2xl:mt-10 flex flex-wrap sm:flex-nowrap items-center gap-x-4 sm:gap-x-10 md:gap-x-20 text-[12vw] sm:text-[11vw] md:text-[13vw] lg:text-[10vw] 2xl:text-[8.5vw]"
            style={{ lineHeight: 1.05 }}
          >
            {HEADLINE.map((line, li) => (
              <span key={li} className="block overflow-hidden">
                <span className="block pb-[0.04em] flex gap-x-1 sm:gap-x-2 md:gap-x-3">
                  {line.split("").map((ch, i) => (
                    <span key={i} data-char className="inline-block whitespace-pre text-[11vw] sm:text-[12vw] md:text-[14vw] lg:text-[13vw] 2xl:text-[240px] font-black relative z-20">
                      {ch}
                    </span>
                  ))}
                </span>
              </span>
            ))}
          </h1>

          <div className="flex mt-2 sm:mt-4 md:mt-0 grid gap-4 sm:gap-6 md:gap-8 grid-cols-1 sm:grid-cols-[1fr_auto] items-center relative z-20">

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

            <div data-hero-fade className="flex flex-wrap items-center gap-3 sm:gap-4 mt-6 sm:mt-0 mb-10 sm:mb-0">
              <a
                href="#work"
                className="group inline-flex items-center gap-2 sm:gap-3 rounded-full bg-foreground px-5 py-3 sm:px-6 sm:py-3.5 md:px-7 md:py-4 text-xs sm:text-sm font-medium text-background transition-all duration-300 hover:bg-accent hover:text-accent-foreground"
              >
                View selected work
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </a>
              <a
                href="#contact"
                className="link-underline text-xs sm:text-sm font-medium"
              >
                Start a project
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}