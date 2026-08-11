'use client'
import { useEffect } from "react";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

let registered = false;
export function registerGsap() {
  if (!registered && typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
    registered = true;
  }
}

export function useSmoothScroll(enabled: boolean) {
  useEffect(() => {
    if (!enabled) return;
    registerGsap();

    const lenis = new Lenis({
      duration: 1.15,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    lenis.on("scroll", ScrollTrigger.update);

    const raf = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(raf);
    gsap.ticker.lagSmoothing(0);

    const anchorHandler = (e: MouseEvent) => {
      const el = (e.target as HTMLElement)?.closest?.("a[href^='#']");
      if (!el) return;
      const id = el.getAttribute("href");
      if (!id || id === "#") return;
      const target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      lenis.scrollTo(target as HTMLElement, { offset: 0 });
    };
    document.addEventListener("click", anchorHandler);

    ScrollTrigger.refresh();

    return () => {
      document.removeEventListener("click", anchorHandler);
      gsap.ticker.remove(raf);
      lenis.destroy();
    };
  }, [enabled]);
}
