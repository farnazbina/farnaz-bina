// app/projects/[slug]/page.tsx
import { notFound } from "next/navigation";
import Image from "next/image";
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

export default async function ProjectPage({ params }: PageProps) {
    // await کردن params
    const { slug } = await params;

    const project = getProjectBySlug(slug);

    if (!project) {
        notFound();
    }

    const { title, createdDate, coverImage, content, gallery } = project;

    return (
        <main className="max-w-5xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
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
                <div className="relative w-full h-64 md:h-112 mt-4 rounded-xl overflow-hidden shadow-lg">
                    <Image
                        src={coverImage}
                        alt={title}
                        fill
                        className="object-cover h-full w-full object-top"
                        priority
                        objectFit="cover"
                    />
                </div>
            </header>

            {/* محتوای اصلی */}
            <article className="prose prose-lg dark:prose-invert max-w-none">
                <ContentSection title="Introduction">
                    <p>{content.introduction}</p>
                </ContentSection>

                <ContentSection title="Goals">
                    <ul>
                        {content.goals.map((goal, i) => (
                            <li key={i}>{goal}</li>
                        ))}
                    </ul>
                </ContentSection>

                <ContentSection title="Key Features">
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

                <ContentSection title="Challenges & Solutions">
                    <div className="space-y-4">
                        {content.challenges.map((challenge, i) => (
                            <div key={i} className="border-l-4 border-blue-500 pl-4">
                                <h3 className="text-lg font-semibold">{challenge.title}</h3>
                                <p className="text-gray-600 dark:text-gray-400">
                                    {challenge.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </ContentSection>

                <ContentSection title="Results">
                    <ul>
                        {content.results.map((result, i) => (
                            <li key={i}>{result}</li>
                        ))}
                    </ul>
                </ContentSection>

                <ContentSection title="Conclusion">
                    <p>{content.conclusion}</p>
                </ContentSection>
            </article>

            {/* گالری تصاویر */}
            {gallery && gallery.length > 0 && <Gallery images={gallery} coverImage={coverImage} />}
        </main>
    );
}