'use client'
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { useState } from "react";

const TESTIMONIALS = [
  {
    name: "خانم بینا",
    initials: "ب",
    treatment: "فیشال و مراقبت تخصصی پوست",
    quote:
      "«از همان لحظه‌ای که وارد کلینیک شدم، حس کردم اینجا با جاهای دیگر فرق دارد. با دقت به حرف‌ها و خواسته‌هایم گوش دادند و هیچ‌چیز عجولانه نبود. نتیجه هم دقیقاً همان چیزی شد که می‌خواستم؛ طبیعی، ظریف و شاداب.»",
  },
];

export default function BeautyTestimonials() {
    const [index, setIndex] = useState(0);
    const count = TESTIMONIALS.length;
    const go = (dir: number) => setIndex((i) => (i + dir + count) % count);

    return (
        <section id="testimonials" className="scroll-mt-20 py-20 lg:py-28">
            <div className="mx-auto max-w-7xl px-5 sm:px-8">
                <div className="mx-auto max-w-3xl text-center">
                    <p className="text-sm font-medium uppercase tracking-[0.3em] text-beauty-primary">
                        نظرات مشتریان
                    </p>
                    <h2 className="mt-4 text-4xl font-medium tracking-tight text-beauty-foreground sm:text-5xl">
                        تجربه‌ای که مراجعان ما از آن می‌گویند
                    </h2>
                </div>

                <div className="relative mx-auto mt-14 max-w-5xl">
                    <div className="overflow-hidden">
                        <div
                            className="flex transition-transform duration-500 ease-out"
                            style={{ transform: `translateX(-${index * 100}%)` }}
                        >
                            {TESTIMONIALS.map((t) => (
                                <figure
                                    key={t.name}
                                    className="w-full shrink-0 px-1"
                                    aria-hidden={TESTIMONIALS[index] !== t}
                                >
                                    <div className="rounded-[2rem] border border-border bg-card p-8 text-center shadow-lift sm:p-12">
                                        <div
                                            className="flex justify-center gap-1 text-gold"
                                            aria-label="Rated 5 out of 5 stars"
                                        >
                                            {Array.from({ length: 5 }).map((_, i) => (
                                                <Star key={i} className="h-5 w-5 fill-current" />
                                            ))}
                                        </div>
                                        <blockquote className="mt-6 text-lg font-medium leading-relaxed text-beauty-foreground sm:text-xl">
                                            “{t.quote}”
                                        </blockquote>
                                        <figcaption className="mt-8 flex items-center justify-center gap-4">
                                            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-primary font-display text-lg font-semibold text-primary-foreground">
                                                {t.initials}
                                            </span>
                                            <span className="text-right">
                                                <span className="block text-sm font-semibold text-beauty-foreground">
                                                    {t.name}
                                                </span>
                                                <span className="block text-xs uppercase tracking-[0.15em] text-muted-foreground">
                                                    {t.treatment}
                                                </span>
                                            </span>
                                        </figcaption>
                                    </div>
                                </figure>
                            ))}
                        </div>
                    </div>

                    <div className="mt-8 flex items-center justify-center gap-5">
                        <button
                            type="button"
                            onClick={() => go(-1)}
                            aria-label="Next testimonial"
                            className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card text-foreground transition-all duration-300 hover:border-primary hover:bg-primary hover:text-primary-foreground"
                        >
                            <ChevronRight className="h-5 w-5" />
                        </button>
                        <div className="flex gap-2">
                            {TESTIMONIALS.map((t, i) => (
                                <button
                                    key={t.name}
                                    type="button"
                                    onClick={() => setIndex(i)}
                                    aria-label={`Go to testimonial ${i + 1}`}
                                    className={`h-2.5 rounded-full transition-all duration-300 ${i === index ? "w-7 bg-primary" : "w-2.5 bg-border hover:bg-primary/40"
                                        }`}
                                />
                            ))}
                        </div>
                        <button
                            type="button"
                            onClick={() => go(1)}
                            aria-label="Previous testimonial"
                            className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card text-foreground transition-all duration-300 hover:border-primary hover:bg-primary hover:text-primary-foreground"
                        >
                            <ChevronLeft className="h-5 w-5" />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}