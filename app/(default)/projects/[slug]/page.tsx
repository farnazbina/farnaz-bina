import { saasImages } from "@/lib/saas-images";
// app/projects/[slug]/page.tsx
import { notFound } from "next/navigation";
import Image from "next/image";
import type { Metadata } from "next";
import CheckupCaseStudy from "@/components/CaseStudy/CheckupCaseStudy";
import SaasCaseStudy from "@/components/CaseStudy/SaasCaseStudy";
import { getProjectBySlug, projects } from "@/data/projects";
import Gallery from "@/components/CaseStudy/Gallery";
import ContentSection from "@/components/CaseStudy/ContentSection";

// تولید مسیرهای استاتیک
export async function generateStaticParams() {
    return projects.map((project) => ({
        slug: project.slug,
    }));
}

// توجه: params را به‌صورت Promise دریافت می‌کنیم
interface PageProps {
    params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = await params;
    const project = getProjectBySlug(slug);
    if (!project) notFound();
    const isCheckup = slug === "checkup_salamt";
    const isSaas = slug === "saas_dashboard";
    const title = isCheckup ? "Checkup Salamat: Vue & Nuxt Case Study | Farnaz Bina" : isSaas ? "SaaS Dashboard: React & Next.js Case Study | Farnaz Bina" : `${project.title} | Farnaz Bina`;
    const description = isCheckup
        ? "A Vue 3, Nuxt.js and TypeScript healthcare platform: online appointment booking, doctor scheduling and clinic dashboards. Frontend case study by Farnaz Bina."
        : isSaas ? "Self-made React and Next.js dashboard: Kanban tasks, analytics and reusable TypeScript components. Explore Farnaz Bina?s TypeScript frontend case study." : project.body;
    const url = `/projects/${project.slug}`;
    const images = [{ url: isCheckup ? "/images/checkup/responsivee.png" : isSaas ? saasImages.overview_png : project.coverImage, alt: project.title }];
    return {
        title, description,
        alternates: { canonical: url },
        openGraph: { title, description, url, type: "article", images },
        twitter: { card: "summary_large_image", title, description, images },
    };
}

export default async function ProjectPage({ params }: PageProps) {
    // await کردن params
    const { slug } = await params;

    const project = getProjectBySlug(slug);

    if (!project) {
        notFound();
    }

    if (project.slug === "checkup_salamt") return <CheckupCaseStudy project={project} />;

    if (project.slug === "saas_dashboard") return <SaasCaseStudy project={project} />;

    const { title, createdDate, coverImage, content, gallery, subtitle } = project;

    return (
        <>
        <main className="max-w-5xl mx-auto px-4 py-8 sm:px-6 lg:px-8 mt-20">
            {/* هدر: عنوان، تاریخ، تصویر کاور */}
            <header className="mb-10">
                <h1 className="text-4xl font-extrabold tracking-tight">{title}</h1>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                    Created:{" "}
                    {new Date(createdDate).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                    })}
                </p>
                <div className="relative w-full h-64 md:h-172 mt-4 rounded-xl overflow-hidden shadow-lg">
                    <Image
                        src={coverImage}
                        alt={title}
                        fill
                        className="object-cover h-full w-full object-top"
                        priority
                    />
                </div>
            </header>

            <h2 className="text-xl font-semibold tracking-tight">{subtitle}</h2>
            {/* محتوای اصلی */}
            <article className="prose prose-lg dark:prose-invert max-w-none">
                <ContentSection title="Overview">
                    <p>{content.introduction}</p>
                </ContentSection>

                <ContentSection title="My Role">
                    <h3>{content.role?.title}</h3>
                    <p>{content.role?.description}</p>
                </ContentSection>
                <ContentSection title="Key Responsibilities">
                    <ul>
                        {content.responsibilities?.map((res, i) => (
                            <li key={i} className="mb-1">. {res}</li>
                        ))}
                    </ul>
                </ContentSection>
                <ContentSection title="Key Features">
                    <ul>
                        {content.keyfeatures?.map((feat, i) => (
                            <div key={i} className="flex flex-col border-b border-solid border-border mb-5 pb-5">
                                <span className="text-lg font-semibold mb-3">{feat.title}</span>
                                <span className="text-md mb-3">{feat.subtitle}</span>
                                {feat.description && <span className="text-md mb-1">- {feat.description}</span>}
                                {feat.list && feat.list.length > 0 && <ul>
                                    {feat.list.map((i, index) => (
                                        <li key={index} className="text-md mb-1 ">. {i}</li>
                                    ))}
                                </ul>}
                                {feat.note && <p className="text-md mt-3">{feat.note}</p>}
                            </div>
                        ))}
                    </ul>
                </ContentSection>

                {/* <ContentSection title="Key Features">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {content.features.map((feature, i) => (
                            <div key={i} className="border rounded-lg p-4 shadow-sm">
                                <h3 className="text-lg font-semibold">{feature.title}</h3>
                                <p className="text-gray-600 dark:text-gray-400">
                                    {feature.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </ContentSection> */}

                <ContentSection title="Technical Challenges">
                    <div className="space-y-4">
                        {content.challenges.map((challenge, i) => (
                            <div key={i} className="">
                                <h3 className="text-lg font-semibold">{challenge.title}</h3>
                                <p className="text-gray-600 dark:text-gray-400">
                                    {challenge.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </ContentSection>

                <ContentSection title="Tech Stack">
                    <dl className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4">
                        {Object.entries(content.techStack).map(([key, value]) => (
                            <div key={key} className="flex justify-between border-b py-1">
                                <dt className="font-medium">{key}</dt>
                                <dd className="text-gray-600 dark:text-gray-400">{value}</dd>
                            </div>
                        ))}
                    </dl>
                </ContentSection>


                <ContentSection title="Result">
                    <ul>
                        {content.results.map((result, i) => (
                            <li key={i}>{result}</li>
                        ))}
                    </ul>
                </ContentSection>
            </article>

            {/* گالری تصاویر */}
            {gallery && gallery.length > 0 && <Gallery images={gallery} coverImage={coverImage} />}
        </main>
        </>
    );
}