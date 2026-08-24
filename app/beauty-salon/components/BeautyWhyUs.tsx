import Image from "next/image";
import { Award, Microscope, HeartHandshake } from 'lucide-react'

const VALUE_PROPS = [
    {
        icon: Award,
        title: "تیم متخصص و باتجربه",
        description:
            "تمام خدمات تحت نظر پزشکان و متخصصان باتجربه انجام می‌شود تا هر درمان با دانش پزشکی، دقت بالا و توجه به جزئیات همراه باشد.",
    },
    {
        icon: Microscope,
        title: "تکنولوژی و روش‌های نوین",
        description:
            "از تجهیزات پیشرفته و روش‌های به‌روز و مورد تأیید پزشکی استفاده می‌کنیم تا در کنار حفظ ایمنی، بهترین نتیجه ممکن را برای پوست و چهره‌ات به ارمغان بیاوریم.",
    },
    {
        icon: HeartHandshake,
        title: "برنامه درمانی اختصاصی",
        description:
            "هیچ دو چهره‌ای شبیه هم نیستند. به همین دلیل، قبل از هر درمان شرایط پوست، فرم چهره و اهداف زیبایی تو را بررسی می‌کنیم و برنامه‌ای متناسب با نیازهایت پیشنهاد می‌دهیم.",
    },
];

export default function BeautyWhyUs() {
    return (
        <section id="why-us" className="scroll-mt-20 bg-beauty-blush py-20 lg:py-28">
            <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-2">
                <div>
                    <p className="text-sm font-medium uppercase tracking-[0.3em] text-beauty-primary">
                        چرا ما را انتخاب کنید؟
                    </p>
                    <h2 className="mt-4  text-4xl font-medium tracking-tight text-beauty-foreground sm:text-5xl">
                        زیبایی با دقت، مراقبت و اعتماد
                    </h2>
                    <p className="mt-4 font-light leading-relaxed text-muted-foreground">
                        ما باور داریم یک تجربه زیبایی خوب فقط به نتیجه نهایی محدود نمی‌شود. از اولین مشاوره تا آخرین مرحله درمان، تلاش می‌کنیم محیطی آرام، حرفه‌ای و قابل اعتماد برایت فراهم کنیم.
                    </p>

                    <ul className="mt-10 space-y-7">
                        {VALUE_PROPS.map((prop) => (
                            <li key={prop.title} className="flex gap-5">
                                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-card text-beauty-primary shadow-lift">
                                    <prop.icon className="h-5 w-5" />
                                </div>
                                <div className="min-w-0">
                                    <h3 className=" text-xl font-semibold text-beauty-foreground">
                                        {prop.title}
                                    </h3>
                                    <p className="mt-1.5 text-sm font-light leading-relaxed text-muted-foreground">
                                        {prop.description}
                                    </p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="relative">
                    <div
                        className="absolute -right-6 -top-6 h-40 w-40 rounded-full border border-primary/25"
                        aria-hidden="true"
                    />
                    <div
                        className="absolute -bottom-8 -left-8 h-56 w-56 rounded-full bg-beauty-secondary/70"
                        aria-hidden="true"
                    />
                    <div className="relative overflow-hidden rounded-[2.5rem] shadow-soft ring-1 ring-primary/15">
                        <Image
                            src='/images/beauty-clinic/clinic-interior.jpg'
                            alt="Serene AuraSkin treatment room with cream interiors and rose-gold accents"
                            width={1024}
                            height={1024}
                            loading="lazy"
                            className="aspect-square w-full object-cover transition-transform duration-700 hover:scale-105"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}