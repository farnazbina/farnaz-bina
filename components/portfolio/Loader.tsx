'use client'
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

export function Loader({ onComplete }: { onComplete: () => void }) {
  const root = useRef<HTMLDivElement | null>(null);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const obj = { v: 0 };
    const tl = gsap.timeline();

    tl.to(obj, {
      v: 100,
      duration: 2.1,
      ease: "power2.inOut",
      onUpdate: () => setCount(Math.round(obj.v)),
    })
      .to(".loader-word", { yPercent: -110, duration: 0.6, ease: "power3.inOut", stagger: 0.05 }, "-=0.2")
      .to(".loader-bar", { scaleX: 1, duration: 0.5, ease: "power2.inOut" }, "<")
      .to(root.current, {
        yPercent: -100,
        duration: 0.9,
        ease: "expo.inOut",
        onComplete,
      });

    return () => {
      tl.kill();
    };
  }, [onComplete]);

  return (
    <div
      ref={root}
      className="fixed inset-0 z-[100] flex flex-col justify-between bg-background px-6 py-8 sm:px-10 sm:py-10"
    >
      <div className="overflow-hidden">
        <p className="loader-word eyebrow">Portfolio — 2026</p>
      </div>

      <div className="flex items-end justify-between gap-6">
        <div className="overflow-hidden">
          <h2 className="loader-word display text-[16vw] leading-[0.8] sm:text-[11vw]">
            {String(count).padStart(3, "0")}
            <span className="text-accent">%</span>
          </h2>
        </div>
        <div className="hidden overflow-hidden pb-3 sm:block">
          <p className="loader-word max-w-[16rem] text-sm text-muted-foreground">
            Crafting interfaces with restraint, motion and a lot of attention to detail.
          </p>
        </div>
      </div>

      <div className="h-px w-full bg-border">
        <div
          className="loader-bar h-px origin-left bg-accent"
          style={{ transform: `scaleX(${count / 100})` }}
        />
      </div>
    </div>
  );
}
