// data/beauty-clinics.ts

export interface ClinicData {
    slug: string
    name: string
    logo: string
    hero: {
        title: string
        subtitle: string
    }
    services: Array<{
        id: number
        title: string
        
        description: string
        link: string
    }>
    contact: {
        address: string
        phone: string
        email: string
        mapEmbed?: string
    }
    footer: {
        copyright: string
        social: {
            facebook?: string
            instagram?: string
            tiktok?: string
            twitter?: string
        }
        privacyPolicy?: string
    }
    colors?: {
        primary: string
        secondary: string
        background: string
        text: string
    }
}

export const beautyClinicsData: ClinicData[] = [
    {
        slug: "neda-jalili",
        name: "کلینیک ندا جلیلی",
        logo: "ندا جلیلی",
        hero: {
            title: "زیبایی در آمیخته با علم",
            subtitle: "مراقبت‌های شخصی‌سازی شده برای سفر منحصر‌به‌فرد زیبایی شما - تنها نمایندگی برند آلمانی دکتر شرامک در شمال غرب - مدرس رسمی فمی و حرفه ای کشور",
        },
        services: [
            {
                id: 1,
                title: "بوتاکس و جوانسازی",
                description: "با کاهش خطوط ظریف و چین‌وچروک‌ها، چهره‌ای شاداب‌تر و جوان‌تر داشته باش؛ بدون اینکه حالت طبیعی و احساسات چهره‌ات از بین برود.",
                link: "/services/botox"
            },
            {
                id: 2,
                title: "فیلر و فرم‌دهی چهره",
                description: "با استفاده از فیلرهای باکیفیت، حجم ازدست‌رفته را بازگردان و فرم صورت، لب‌ها و گونه‌ها را با ظرافت و تناسب بیشتری بهبود بده.",
                link: "/services/fillers"
            },
            {
                id: 3,
                title: "لیزر موهای زائد",
                description: "با تکنولوژی پیشرفته لیزر، پوستی صاف‌تر و لطیف‌تر را تجربه کن. روشی سریع، ایمن و مؤثر برای کاهش موهای زائد و داشتن پوستی یکدست‌تر.",
                link: "/services/laser"
            },
            {
                id: 4,
                title: "فیشال و مراقبت تخصصی پوست",
                description: "پوستت شایسته‌ی مراقبتی فراتر از یک روتین معمولی است. فیشال‌های تخصصی ما با توجه به نیاز پوستت، برای پاکسازی عمیق، آبرسانی، شفافیت و طراوت بیشتر طراحی می‌شوند.",
                link: "/services/facials"
            }
        ],
        contact: {
            address: "تبریز- ولیعصر ",
            phone: "09144798339",
            email: "info@nedajalili.com",
            mapEmbed: "https://www.google.com/maps/embed?pb=..."
        },
        footer: {
            copyright: "© ۱۴۰۵ کلینیک اورااسکین. تمامی حقوق محفوظ است.",
            social: {
                facebook: "https://facebook.com/auraskin",
                instagram: "https://instagram.com/auraskin",
                tiktok: "https://tiktok.com/@auraskin"
            },
        },
    },
    {
        slug: "clinic-alma",
        name: "کلینیک تخصصی آلما",
        logo: "کلینیک تخصصی آلما",
        hero: {
            title: "زیبایی در آمیخته با علم",
            subtitle: "کلینیک تخصصی پوست - مو - زیبایی - لیزر ، مراقبت‌های شخصی‌سازی شده برای سفر منحصر‌به‌فرد زیبایی شما - ",
        },
        services: [
            {
                id: 1,
                title: "بوتاکس و جوانسازی",
                description: "با کاهش خطوط ظریف و چین‌وچروک‌ها، چهره‌ای شاداب‌تر و جوان‌تر داشته باش؛ بدون اینکه حالت طبیعی و احساسات چهره‌ات از بین برود.",
                link: "/services/botox"
            },
            {
                id: 2,
                title: "فیلر و فرم‌دهی چهره",
                description: "با استفاده از فیلرهای باکیفیت، حجم ازدست‌رفته را بازگردان و فرم صورت، لب‌ها و گونه‌ها را با ظرافت و تناسب بیشتری بهبود بده.",
                link: "/services/fillers"
            },
            {
                id: 3,
                title: "لیزر موهای زائد",
                description: "با تکنولوژی پیشرفته لیزر، پوستی صاف‌تر و لطیف‌تر را تجربه کن. روشی سریع، ایمن و مؤثر برای کاهش موهای زائد و داشتن پوستی یکدست‌تر.",
                link: "/services/laser"
            },
            {
                id: 4,
                title: "فیشال و مراقبت تخصصی پوست",
                description: "پوستت شایسته‌ی مراقبتی فراتر از یک روتین معمولی است. فیشال‌های تخصصی ما با توجه به نیاز پوستت، برای پاکسازی عمیق، آبرسانی، شفافیت و طراوت بیشتر طراحی می‌شوند.",
                link: "/services/facials"
            }
        ],
        contact: {
            address: "تبریز، ولیعصر، توانیر شمال، جنب پارک نظامی، کلینیک زیبایی آلما",
            phone: "09397710845",
            email: "info@nedajalili.com",
            mapEmbed: "https://www.google.com/maps/embed?pb=..."
        },
        footer: {
            copyright: "© ۱۴۰۵ کلینیک اورااسکین. تمامی حقوق محفوظ است.",
            social: {
                facebook: "https://facebook.com/auraskin",
                instagram: "https://instagram.com/auraskin",
                tiktok: "https://tiktok.com/@auraskin"
            },
        },
    },
]

// توابع کمکی برای دریافت اطلاعات کلینیک‌ها
export const getClinicBySlug = (slug: string): ClinicData | undefined => {
    return beautyClinicsData.find(clinic => clinic.slug === slug)
}

export const getAllClinicSlugs = (): string[] => {
    return beautyClinicsData.map(clinic => clinic.slug)
}

export const getAllClinicNames = (): string[] => {
    return beautyClinicsData.map(clinic => clinic.name)
}