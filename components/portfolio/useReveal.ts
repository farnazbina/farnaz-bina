'use client'
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { registerGsap } from "./useSmoothScroll";

export function useReveal<T extends HTMLElement>(enabled: boolean) {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    if (!enabled || !ref.current) return;
    registerGsap();

    const ctx = gsap.context((self) => {
      const items = self.selector?.("[data-reveal]") as HTMLElement[];
      items?.forEach((item) => {
        const stagger = item.hasAttribute("data-reveal-stagger");
        const targets = stagger ? Array.from(item.children) : [item];
        gsap.from(targets, {
          y: 34,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
          stagger: stagger ? 0.09 : 0,
          scrollTrigger: {
            trigger: item,
            start: "top 88%",
            once: true,
          },
        });
      });

      const parallax = self.selector?.("[data-parallax]") as HTMLElement[];
      parallax?.forEach((item) => {
        const amount = Number(item.dataset["parallax"] || 12);
        gsap.to(item, {
          yPercent: amount,
          ease: "none",
          scrollTrigger: {
            trigger: item,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });
      });
    }, ref);

    ScrollTrigger.refresh();
    return () => ctx.revert();
  }, [enabled]);

  return ref;
}
