'use client'

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { NAV_LINKS } from "./data";

export function Nav() {
  const [open, setOpen] = useState(false);
  const overlay = useRef<HTMLDivElement | null>(null);
  const header = useRef<HTMLElement | null>(null);

  useEffect(() => {
    // if (!ready || !header.current) return;
    gsap.from(header.current.children, {
      y: -20,
      opacity: 0,
      duration: 0.9,
      ease: "power3.out",
      stagger: 0.12,
      delay: 0.1,
    });
  },);

  useEffect(() => {
    const el = overlay.current;
    if (!el) return undefined;
    const links = el.querySelectorAll("[data-menu-link]");
    const meta = el.querySelectorAll("[data-menu-meta]");

    if (open) {
      const tl = gsap.timeline();
      tl.set(el, { pointerEvents: "auto" })
        .to(el, { clipPath: "inset(0% 0% 0% 0%)", duration: 0.8, ease: "expo.inOut" })
        .from(links, { yPercent: 110, duration: 0.7, ease: "expo.out", stagger: 0.06 }, "-=0.35")
        .from(meta, { opacity: 0, y: 12, duration: 0.5, stagger: 0.08 }, "-=0.3");
      return () => {
        tl.kill();
      };
    }
    gsap.to(el, {
      clipPath: "inset(0% 0% 100% 0%)",
      duration: 0.6,
      ease: "expo.inOut",
      onComplete: () => gsap.set(el, { pointerEvents: "none" }),
    });
    return undefined;
  }, [open]);

  return (
    <>
      <header
        ref={header}
        className="fixed inset-x-0 top-0 z-50 flex items-center justify-between px-6 py-5 mix-blend-difference sm:px-10"
      >
        <a href="#top" className="display text-2xl text-[oklch(1_0_0)] mt-3 sm:mt-0">
          Farnaz Bina
        </a>
        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="link-underline text-sm text-[oklch(1_0_0)]/80 transition-colors hover:text-[oklch(1_0_0)]"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <button
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          className="flex items-center gap-3 text-sm text-[oklch(1_0_0)] md:hidden"
        >
          <span className="flex h-4 w-6 flex-col justify-between">
            <span
              className="block h-px w-full bg-[oklch(1_0_0)] transition-transform duration-300"
              style={{ transform: open ? "translateY(7.5px) rotate(45deg)" : undefined }}
            />
            <span
              className="block h-px w-full bg-[oklch(1_0_0)] transition-opacity duration-300"
              style={{ opacity: open ? 0 : 1 }}
            />
            <span
              className="block h-px w-full bg-[oklch(1_0_0)] transition-transform duration-300"
              style={{ transform: open ? "translateY(-7.5px) rotate(-45deg)" : undefined }}
            />
          </span>
        </button>
      </header>

      <div
        ref={overlay}
        style={{ clipPath: "inset(0% 0% 100% 0%)", pointerEvents: "none" }}
        className="fixed inset-0 z-40 flex flex-col justify-between bg-foreground px-6 pb-10 pt-28 text-background sm:px-10"
      >
        <nav className="flex flex-col gap-2">
          {NAV_LINKS.map((l) => (
            <span key={l.href} className="overflow-hidden py-1">
              <a
                data-menu-link
                href={l.href}
                onClick={() => setOpen(false)}
                className="display block text-[13vw] leading-[1] transition-colors hover:text-accent"
              >
                {l.label}
              </a>
            </span>
          ))}
        </nav>
        <div className="space-y-3 border-t border-background/20 pt-6 text-sm">
          <p data-menu-meta className="text-background/60">farnazbina.dev@gmail.com</p>
          {/* <p data-menu-meta className="text-background/60">Lisbon, Portugal — available for work</p> */}
        </div>
      </div>
    </>
  );
}
