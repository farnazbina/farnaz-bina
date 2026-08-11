'use client'
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { registerGsap } from "./useSmoothScroll";
import { EXPERIENCES } from "./data";

export function Experience() {
    const root = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (!root.current) return;
        registerGsap();

        const ctx = gsap.context((self) => {
            const line = self.selector?.("[data-exp-line]")?.[0] as HTMLElement | undefined;
            if (line) {
                gsap.fromTo(
                    line,
                    { scaleY: 0 },
                    {
                        scaleY: 1,
                        ease: "none",
                        transformOrigin: "top center",
                        scrollTrigger: { trigger: root.current, start: "top 70%", end: "bottom 80%", scrub: true },
                    },
                );
            }

            const rows = (self.selector?.("[data-exp-row]") as HTMLElement[]) ?? [];
            rows.forEach((row) => {
                gsap.from(row, {
                    y: 48,
                    opacity: 0,
                    duration: 1,
                    ease: "power3.out",
                    scrollTrigger: { trigger: row, start: "top 88%", once: true },
                });
                const dot = row.querySelector("[data-exp-dot]");
                if (dot) {
                    gsap.from(dot, {
                        scale: 0,
                        duration: 0.6,
                        ease: "back.out(2)",
                        scrollTrigger: { trigger: row, start: "top 88%", once: true },
                    });
                }
            });
        }, root);

        ScrollTrigger.refresh();
        return () => ctx.revert();
    }, []);

    return (
        <section
            id="experience"
            ref={root}
            className="border-t border-border px-6 py-24 sm:px-10 sm:py-32"
        >
            <div className="flex flex-wrap items-end justify-between gap-6">
                <div>
                    <p className="eyebrow" data-reveal>
                        03 — Experience
                    </p>
                    <h2 className="display mt-5 text-[12vw] leading-[0.92] sm:text-[7vw] lg:text-[4.8vw]" data-reveal>
                        Where I&rsquo;ve worked
                    </h2>
                </div>
                <p className="max-w-sm text-sm leading-relaxed text-muted-foreground" data-reveal>
                    Nine years across fintech, agencies and product teams — building interfaces that stay
                    fast and legible as they grow.
                </p>
            </div>

            <div className="relative mt-16 pl-8 sm:pl-14">
                <span
                    aria-hidden
                    className="absolute left-[3px] top-2 h-full w-px origin-top bg-border sm:left-[7px]"
                    data-exp-line
                />
                <ol className="space-y-14">
                    {EXPERIENCES.map((e) => (
                        <li key={e.company + e.period} data-exp-row className="relative">
                            <span
                                aria-hidden
                                data-exp-dot
                                className="absolute -left-8 top-2 h-[9px] w-[9px] rounded-full bg-accent sm:-left-14 sm:h-[15px] sm:w-[15px]"
                            />
                            <div className="grid gap-4 md:grid-cols-[10rem_1fr] md:gap-10">
                                <p className="eyebrow pt-1">{e.period}</p>
                                <div>
                                    <h3 className="display text-3xl sm:text-4xl">{e.company}</h3>
                                    <p className="mt-2 text-sm text-muted-foreground">
                                        {e.role}
                                    </p>
                                    <p className="mt-4 max-w-[80%] text-sm leading-relaxed text-muted-foreground">
                                        {e.body}
                                    </p>
                                    <ul className="mt-5 flex flex-wrap gap-2">
                                        {e.stack.map((s) => (
                                            <li
                                                key={s}
                                                className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground"
                                            >
                                                {s}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </li>
                    ))}
                </ol>
            </div>
        </section>
    );
}
