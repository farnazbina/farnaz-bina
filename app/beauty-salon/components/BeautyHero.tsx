import { Sparkles, ArrowRight, Star, Award, ArrowLeft } from 'lucide-react'
import Image from 'next/image';

type Props = {
    title: string
    subtitle: string
}

export default function BeautyHero({ title, subtitle }: Props) {
    return (
        <section id="top" className="bg-hero-glow overflow-hidden pt-18">
            <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 pb-20 pt-14 sm:px-8 lg:grid-cols-2 lg:gap-8 lg:pb-28 lg:pt-20">
                <div className="max-w-xl">
                    <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/25 bg-card/70 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.25em] text-primary backdrop-blur-sm">
                        <Sparkles className="h-3.5 w-3.5" />
                        Luxury Aesthetic Clinic
                    </p>
                    <h1 className="text-4xl font-semibold leading-[1.05] tracking-tight text-foreground sm:text-6xl lg:text-5xl">
                        زیبایی تو، با ظرافتی که طبیعی به نظر می‌رسد
                    </h1>
                    <p className="mt-6 text-lg font-light leading-relaxed text-muted-foreground">
                        در کلینیک ما، زیبایی یعنی حفظ اصالت چهره و ایجاد تغییراتی ظریف، متناسب و ماندگار. با استفاده از روش‌های نوین پزشکی و برنامه درمانی اختصاصی، همراهت هستیم تا بهترین نسخه‌ی خودت را تجربه کنی.
                    </p>
                    <div className="mt-9 flex flex-wrap items-center gap-5">
                        <a
                            href="#contact"
                            className="group inline-flex items-center gap-2 rounded-full bg-beauty-primary px-7 py-3.5 text-sm font-medium text-primary-foreground shadow-glow transition-all duration-300 hover:-translate-y-0.5 hover:bg-beauty-primary/90"
                        >
                            مشاوره تخصصی زیبایی
                            <ArrowLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" />
                        </a>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <span className="flex text-gold" aria-hidden="true">
                                {Array.from({ length: 4.7 }).map((_, i) => (
                                    <Star key={i} className="h-4 w-4 fill-current" />
                                ))}
                            </span>
                            <span>4.7 · 400+ مشتری راضی</span>
                        </div>
                    </div>
                </div>

                <div className="relative mx-auto w-full max-w-md lg:max-w-none">
                    <div
                        className="absolute -inset-4 -z-10 rounded-[3rem] bg-gradient-to-tr from-secondary via-accent to-blush"
                        aria-hidden="true"
                    />
                    <div className="overflow-hidden rounded-[2.5rem] shadow-soft ring-1 ring-primary/15">
                        <Image
                            src='/images/beauty-clinic/hero-model.jpg'
                            alt="Woman with luminous, healthy skin after an AuraSkin treatment"
                            width={1024}
                            height={1280}
                            className="aspect-[4/5] w-full object-cover"
                        />
                    </div>
                    <div className="absolute -bottom-6 -left-4 rounded-2xl border border-border bg-card/95 px-5 py-4 shadow-lift backdrop-blur-sm sm:-left-8">
                        <p className="text-3xl font-semibold text-beauty-primary">12+</p>
                        <p className="text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
                            سال سابقه
                        </p>
                    </div>
                    {/* <div className="absolute -right-3 top-8 hidden rounded-2xl border border-border bg-card/95 px-5 py-4 shadow-lift backdrop-blur-sm sm:-right-6 sm:block">
                        <p className="flex items-center gap-2 text-sm font-medium text-foreground">
                            <Award className="h-4 w-4 text-primary" />
                            Board-Certified Team
                        </p>
                    </div> */}
                </div>
            </div>
        </section>
    );
}