import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts, formatBlogDate, getBlogPost, readingTime } from "@/data/blog";
import { siteUrl } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return blogPosts.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getBlogPost((await params).slug);
  if (!post) notFound();
  const title = `${post.title} — Farnaz Bina`;
  const images = post.coverImage ? [{ url: post.coverImage.src, alt: post.coverImage.alt }] : [];
  return {
    title, description: post.excerpt, keywords: post.tags,
    authors: [{ name: "Farnaz Bina", url: siteUrl }],
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title, description: post.excerpt, type: "article", url: `/blog/${post.slug}`,
      publishedTime: post.publishedAt, modifiedTime: post.updatedAt ?? post.publishedAt,
      authors: ["Farnaz Bina"], tags: post.tags, images,
    },
    twitter: { card: post.coverImage ? "summary_large_image" : "summary", title, description: post.excerpt, images },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const post = getBlogPost((await params).slug);
  if (!post) notFound();
  const url = `${siteUrl}/blog/${post.slug}`;
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title, description: post.excerpt,
    datePublished: post.publishedAt, dateModified: post.updatedAt ?? post.publishedAt,
    author: { "@type": "Person", name: "Farnaz Bina", url: siteUrl },
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    url, keywords: post.tags.join(", "), inLanguage: "en",
    ...(post.coverImage ? { image: new URL(post.coverImage.src, siteUrl).href } : {}),
  };
  return (
    <main id="blog-content" className="mx-auto max-w-6xl px-6 pb-24 pt-32 sm:px-10 sm:pb-32 sm:pt-40">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }} />
      <nav aria-label="Breadcrumb" className="mb-10 flex flex-wrap gap-2 text-sm text-muted-foreground">
        <Link href="/" className="link-underline">Home</Link><span aria-hidden="true">/</span>
        <Link href="/blog" className="link-underline">Blog</Link><span aria-hidden="true">/</span>
        <span aria-current="page" className="text-foreground">{post.title}</span>
      </nav>
      <article className="min-w-0 [overflow-wrap:anywhere]">
        <header className="mx-auto max-w-3xl">
          <p className="eyebrow text-accent">{post.category}</p>
          <h1 className="display mt-5 text-[clamp(2.75rem,6vw,5.5rem)] leading-[1.03]">{post.title}</h1>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground sm:text-xl">{post.excerpt}</p>
          <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-border pt-5 text-sm text-muted-foreground">
            <span className="font-medium text-foreground">Farnaz Bina</span>
            <time dateTime={post.publishedAt}>{formatBlogDate(post.publishedAt)}</time>
            <span>{readingTime(post)} min read</span>
            {post.updatedAt && <span>Updated <time dateTime={post.updatedAt}>{formatBlogDate(post.updatedAt)}</time></span>}
          </div>
        </header>
        {post.coverImage && (
          <div className="relative mt-10 aspect-4/3 overflow-hidden rounded-2xl bg-surface sm:mt-12 sm:aspect-16/9">
            <Image src={post.coverImage.src} alt={post.coverImage.alt} fill priority sizes="(max-width: 1152px) 100vw, 1072px" className="object-cover object-top" />
          </div>
        )}
        <div className="mx-auto mt-12 max-w-3xl space-y-6 text-base leading-8 sm:mt-16 sm:text-lg sm:leading-9">
          {post.content.map((block, index) => {
            switch (block.type) {
              case "heading": return <h2 key={index} className="display pt-6 text-3xl leading-tight sm:text-4xl">{block.text}</h2>;
              case "paragraph": return <p key={index} className="text-muted-foreground">{block.text}</p>;
              case "list": {
                const List = block.ordered ? "ol" : "ul";
                return <List key={index} className={`${block.ordered ? "list-decimal" : "list-disc"} space-y-3 pl-6 text-muted-foreground marker:text-accent`}>{block.items.map((item, i) => <li key={i} className="pl-2">{item}</li>)}</List>;
              }
              case "quote": return <figure key={index} className="border-l-2 border-accent bg-surface p-6 sm:p-8"><blockquote className="display text-2xl leading-snug sm:text-3xl">{block.text}</blockquote>{block.attribution && <figcaption className="mt-4 text-sm text-muted-foreground">{block.attribution}</figcaption>}</figure>;
              case "code": return <div key={index} className="min-w-0 overflow-hidden rounded-2xl border border-border bg-surface">{block.language && <p className="border-b border-border px-5 py-2 text-xs uppercase tracking-widest text-muted-foreground">{block.language}</p>}<pre tabIndex={0} aria-label={`${block.language ?? "Code"} example`} className="overflow-x-auto p-5 text-sm leading-7 focus-visible:outline-accent"><code>{block.code}</code></pre></div>;
            }
          })}
        </div>
        <footer className="mx-auto mt-12 max-w-3xl border-t border-border pt-8">
          <ul aria-label="Article tags" className="flex flex-wrap gap-2">{post.tags.map((tag) => <li key={tag} className="rounded-full border border-border px-4 py-1 text-xs text-muted-foreground">{tag}</li>)}</ul>
          <Link href="/blog" className="link-underline mt-10 text-sm font-medium text-accent">← Back to all articles</Link>
        </footer>
      </article>
    </main>
  );
}
