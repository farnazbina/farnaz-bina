'use client'
import { Check, Clock, Mail, MapPin, Phone } from "lucide-react";
import { useState, type FormEvent } from "react";

type Props = {
    address: string
    phone: string
    email: string
}

export default function BeautyContact({ address, phone, email }: Props) {
    const [sent, setSent] = useState(false);

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setSent(true);
    };

    const inputClasses =
        "w-full rounded-xl border border-input bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/70 outline-none transition-all duration-300 focus:border-primary focus:ring-2 focus:ring-primary/20";

    return (
        <section id="contact" className="scroll-mt-20 bg-beauty-blush py-20 lg:py-28">
            <div className="mx-auto max-w-7xl px-5 sm:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    <p className="text-xs font-medium uppercase tracking-[0.3em] text-primary">
                        تماس با ما
                    </p>
                    <h2 className="mt-4 text-4xl font-medium tracking-tight text-beauty-foreground sm:text-5xl">
                        شروع مسیر زیبایی تو از همین‌جا
                    </h2>
                    <p className="mt-4 font-light leading-relaxed text-muted-foreground">
                        برای رسیدن به نتیجه‌ای که واقعاً با چهره و خواسته‌های تو هماهنگ باشد، اولین قدم یک مشاوره تخصصی است.
                    </p>
                </div>

                <div className="mt-14 grid gap-10 lg:grid-cols-2">
                    <div className="rounded-[2rem] border border-border bg-card p-7 shadow-lift sm:p-10">
                        {sent ? (
                            <div className="flex h-full min-h-80 flex-col items-center justify-center text-center">
                                <span className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-beauty-primary-foreground shadow-glow">
                                    <Check className="h-7 w-7" />
                                </span>
                                <h3 className="mt-6 text-3xl font-semibold text-beauty-foreground">
                                    Message received
                                </h3>
                                <p className="mt-3 max-w-sm text-sm font-light leading-relaxed text-muted-foreground">
                                    Thank you for reaching out. A member of the AuraSkin care team will
                                    contact you shortly to arrange your free consultation.
                                </p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-5">
                                <div className="grid gap-5 sm:grid-cols-2">
                                    <div>
                                        <label
                                            htmlFor="name"
                                            className="mb-1.5 block text-xs font-medium uppercase tracking-[0.15em] text-muted-foreground"
                                        >
                                            نام و نام خانوادگی
                                        </label>
                                        <input
                                            id="name"
                                            name="name"
                                            type="text"
                                            required
                                            placeholder="نام و نام خانوادگی"
                                            className={inputClasses}
                                        />
                                    </div>
                                    <div>
                                        <label
                                            htmlFor="phone"
                                            className="mb-1.5 block text-xs font-medium uppercase tracking-[0.15em] text-muted-foreground"
                                        >
                                            شماره تماس
                                        </label>
                                        <input
                                            id="phone"
                                            name="phone"
                                            type="tel"
                                            placeholder="+98 914 000 0000"
                                            className={inputClasses}
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label
                                        htmlFor="message"
                                        className="mb-1.5 block text-xs font-medium uppercase tracking-[0.15em] text-muted-foreground"
                                    >
                                        پیام
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        required
                                        rows={5}
                                        placeholder="متن پیام خود را بنویسید..."
                                        className={`${inputClasses} resize-none`}
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className="w-full rounded-full bg-primary px-7 py-3.5 text-sm font-medium text-primary-foreground shadow-glow transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary/90"
                                >
                                    ارسال پیام
                                </button>
                            </form>
                        )}
                    </div>

                    <div className="flex flex-col gap-6">
                        <ul className="grid gap-4 sm:grid-cols-2">
                            <li className="flex items-start gap-4 rounded-2xl border border-border bg-card p-5">
                                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-beauty-primary" />
                                <div className="min-w-0">
                                    <p className="text-sm font-semibold text-beauty-foreground">آدرس ما</p>
                                    <p className="mt-1 text-sm font-light text-muted-foreground">
                                        {address}
                                    </p>
                                </div>
                            </li>
                            <li className="flex items-start gap-4 rounded-2xl border border-border bg-card p-5">
                                <Phone className="mt-0.5 h-5 w-5 shrink-0 text-beauty-primary" />
                                <div className="min-w-0">
                                    <p className="text-sm font-semibold text-beauty-foreground">شماره تلفن</p>
                                    <a
                                        href="tel:+13105550142"
                                        className="mt-1 block text-sm font-light text-muted-foreground transition-colors hover:text-beauty-primary"
                                    >
                                        {phone}
                                    </a>
                                </div>
                            </li>
                            <li className="flex items-start gap-4 rounded-2xl border border-border bg-card p-5">
                                <Mail className="mt-0.5 h-5 w-5 shrink-0 text-beauty-primary" />
                                <div className="min-w-0">
                                    <p className="text-sm font-semibold text-beauty-foreground">ایمیل</p>
                                    <a
                                        href={`mailto:${email}`}
                                        className="mt-1 block truncate text-sm font-light text-muted-foreground transition-colors hover:text-beauty-primary"
                                    >
                                        {email}
                                    </a>
                                </div>
                            </li>
                            <li className="flex items-start gap-4 rounded-2xl border border-border bg-card p-5">
                                <Clock className="mt-0.5 h-5 w-5 shrink-0 text-beauty-primary" />
                                <div className="min-w-0">
                                    <p className="text-sm font-semibold text-beauty-foreground">ساعت کاری</p>
                                    <p className="mt-1 text-sm font-light text-muted-foreground">
                                        شنبه - چهارشنبه · 9:00 – 19:00
                                    </p>
                                </div>
                            </li>
                        </ul>

                        <a
                            href="https://maps.google.com/?q=128+Rosewater+Lane,+Beverly+Hills,+CA"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-map-texture group relative flex min-h-56 flex-1 items-center justify-center overflow-hidden rounded-[2rem] border border-border transition-shadow duration-300 hover:shadow-soft"
                            aria-label="Open AuraSkin Clinic location in Google Maps"
                        >
                            <span className="flex flex-col items-center gap-3 rounded-2xl bg-card/90 px-8 py-6 shadow-lift backdrop-blur-sm transition-transform duration-300 group-hover:-translate-y-1">
                                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-glow">
                                    <MapPin className="h-5 w-5" />
                                </span>
                                <span className="text-sm font-medium text-beauty-foreground">
                                    مشاهده روی نقشه
                                </span>
                            </span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}