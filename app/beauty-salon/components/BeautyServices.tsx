import { Syringe, Sparkles, Zap, Flower2, ArrowRight, ArrowLeft } from 'lucide-react'

type Service = {
    id: number
    title: string
    description: string
    link: string
}

const icons = ["🌟", "🌿", "💫", "🔮"]

export default function BeautyServices({ services }: { services: Service[] }) {
    return (
        <section id="services" className="scroll-mt-20 py-20 lg:py-28">
            <div className="mx-auto max-w-7xl px-5 sm:px-8">
                <div className="mx-auto max-w-4xl text-center">
                    <p className="text-sm font-medium uppercase tracking-[0.3em] text-beauty-primary">
                        خدمات ما
                    </p>
                    <h2 className="mt-4 text-4xl font-medium tracking-tight text-beauty-foreground sm:text-5xl">
                        خدماتی متناسب با زیبایی منحصربه‌فرد تو
                    </h2>
                    <p className="mt-4 font-light leading-relaxed text-muted-foreground">
                        هر چهره داستان خودش را دارد. ما با بررسی دقیق ویژگی‌های پوست و چهره، مناسب‌ترین روش‌های زیبایی و جوانسازی را برای رسیدن به نتیجه‌ای طبیعی و هماهنگ پیشنهاد می‌کنیم.
                    </p>
                </div>

                <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {services.map((service, index) => (
                        <article
                            key={service.title}
                            className="group flex flex-col rounded-3xl border border-border bg-card p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/30 hover:shadow-soft"
                        >
                            <div className="mb-5 inline-flex h-13 w-13 items-center justify-center rounded-2xl bg-beauty-secondary text-beauty-primary transition-colors duration-300 group-hover:bg-beauty-primary group-hover:text-primary-foreground">
                                {icons[index]}
                            </div>
                            <h3 className="text-2xl font-semibold text-beauty-foreground">
                                {service.title}
                            </h3>
                            <p className="mt-3 flex-1 text-sm font-light leading-relaxed text-muted-foreground">
                                {service.description}
                            </p>
                            <a
                                href="#contact"
                                className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-beauty-primary transition-colors hover:text-beauty-primary/80"
                            >
                                اطلاعات بیشتر
                                <ArrowLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" />
                            </a>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}