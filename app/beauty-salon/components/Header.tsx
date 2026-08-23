'use client'
import { useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";
import { LuMenu } from "react-icons/lu";

const NAV_LINKS = [
    { label: "خدمات ما", href: "#services" },
    { label: "چرا ما؟", href: "#why-us" },
    { label: "نظرات مشتریان", href: "#testimonials" },
    { label: "تماس با ما", href: "#contact" },
];

export default function BeautyHeaer({ name }: { name: string }) {
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 12);
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <header
            className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled
                ? "border-b border-border bg-background/85 shadow-lift backdrop-blur-md"
                : "bg-transparent"
                }`}
        >
            <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-5 sm:px-8">
                <a href="#top" className="flex items-baseline gap-1.5">
                    <span className="text-2xl font-semibold tracking-wide text-foreground">
                        {name}
                    </span>
                </a>

                <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
                    {NAV_LINKS.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className="text-sm font-medium tracking-wide text-muted-foreground transition-colors hover:text-primary"
                        >
                            {link.label}
                        </a>
                    ))}
                    <a
                        href="#contact"
                        className="rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground shadow-glow transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary/90"
                    >
                        رزرو نوبت
                    </a>
                </nav>

                <button
                    type="button"
                    onClick={() => setOpen((v) => !v)}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full text-foreground transition-colors hover:bg-accent md:hidden"
                    aria-label={open ? "Close menu" : "Open menu"}
                    aria-expanded={open}
                >
                    {open ? <IoClose className="h-5 w-5" /> : <LuMenu className="h-5 w-5" />}
                </button>
            </div>

            {open && (
                <nav
                    className="border-t border-border bg-background/95 px-5 pb-6 pt-3 backdrop-blur-md md:hidden"
                    aria-label="Mobile"
                >
                    <div className="flex flex-col gap-1">
                        {NAV_LINKS.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                onClick={() => setOpen(false)}
                                className="rounded-lg px-3 py-3 text-base font-medium text-foreground transition-colors hover:bg-accent"
                            >
                                {link.label}
                            </a>
                        ))}
                        <a
                            href="#contact"
                            onClick={() => setOpen(false)}
                            className="mt-3 rounded-full bg-primary px-5 py-3 text-center text-sm font-medium text-primary-foreground shadow-glow"
                        >
                            رزرو نوبت
                        </a>
                    </div>
                </nav>
            )}
        </header>
    );
}