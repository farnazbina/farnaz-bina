import { FaFacebook, FaInstagram } from "react-icons/fa6";

function TikTokIcon({ className }: { className?: string }) {
    return (
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
            <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
        </svg>
    );
}

const NAV_LINKS = [
    { label: "خدمات ما", href: "#services" },
    { label: "چرا ما؟", href: "#why-us" },
    { label: "نظرات مشتریان", href: "#testimonials" },
    { label: "تماس با ما", href: "#contact" },
];

export default function BeautyFooter({ name }: { name: string }) {
    return (
        <footer className="bg-charcoal text-charcoal-foreground w-full">
            <div className="mx-auto flex w-full flex-col items-center gap-8 px-5 py-14 sm:px-8">
                <a href="#top" className="flex items-baseline gap-1.5">
                    <span className="font-display text-3xl font-semibold tracking-wide">
                        {name}
                    </span>
                </a>

                <nav className="flex flex-wrap justify-center gap-x-8 gap-y-3" aria-label="Footer">
                    {NAV_LINKS.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className="text-sm text-beauty-charcoal-foreground/70 transition-colors hover:text-gold"
                        >
                            {link.label}
                        </a>
                    ))}
                </nav>

                <div className="flex items-center gap-4">
                    <a
                        href="https://facebook.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="AuraSkin on Facebook"
                        className="flex h-10 w-10 items-center justify-center rounded-full border border-charcoal-foreground/20 text-charcoal-foreground/80 transition-all duration-300 hover:border-gold hover:bg-gold hover:text-gold-foreground"
                    >
                        <FaFacebook className="h-4.5 w-4.5" />
                    </a>
                    <a
                        href="https://instagram.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="AuraSkin on Instagram"
                        className="flex h-10 w-10 items-center justify-center rounded-full border border-charcoal-foreground/20 text-charcoal-foreground/80 transition-all duration-300 hover:border-gold hover:bg-gold hover:text-gold-foreground"
                    >
                        <FaInstagram className="h-4.5 w-4.5" />
                    </a>
                    <a
                        href="https://tiktok.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="AuraSkin on TikTok"
                        className="flex h-10 w-10 items-center justify-center rounded-full border border-charcoal-foreground/20 text-charcoal-foreground/80 transition-all duration-300 hover:border-gold hover:bg-gold hover:text-gold-foreground"
                    >
                        <TikTokIcon className="h-4 w-4" />
                    </a>
                </div>

                <p className="border-t border-charcoal-foreground/15 pt-8 text-center text-xs tracking-wide text-charcoal-foreground/60">
                     تمام حقوق این وبسایت متعلق به {name} می باشد. © 2026
                </p>
            </div>
        </footer>
    );
}