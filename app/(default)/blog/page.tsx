import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { formatBlogDate, getBlogPosts, readingTime } from "@/data/blog";

const title = "Blog — Farnaz Bina";
const description = "Notes on frontend development, thoughtful interfaces, and building for the web by Farnaz Bina.";

export const metadata: Metadata = {
  title, description,
  alternates: { canonical: "/blog" },
  openGraph: { title, description, url: "/blog", type: "website", images: [] },
  twitter: { card: "summary", title, description, images: [] },
};

export default function BlogPage() {
  const posts = getBlogPosts();
  return (
    <main id="blog-content" className="mx-auto max-w-7xl px-6 pb-24 pt-36 sm:px-10 sm:pb-32 sm:pt-44">
      <header className="grid gap-8 border-b border-border pb-12 md:grid-cols-[1.2fr_1fr] md:items-end sm:pb-16">
        <div>
          <p className="eyebrow">The journal</p>
          <h1 className="display mt-5 text-[clamp(3.5rem,10vw,8rem)]">Notes from<br />the <span className="text-accent">build.</span></h1>
        </div>
        <div className="md:pb-2">
          <p className="max-w-md text-base leading-relaxed text-muted-foreground">Thoughts on frontend development, thoughtful interfaces, and the small details that make the web feel better.</p>
          <p className="eyebrow mt-6">{posts.length} {posts.length === 1 ? "article" : "articles"} &middot; By Farnaz Bina</p>
        </div>
      </header>
      <div className="mt-12 grid gap-x-10 gap-y-16 md:grid-cols-2 sm:mt-16">
        {posts.map((post) => (
          <article key={post.slug} className="min-w-0 border-b border-border pb-10">
            <Link href={`/blog/${post.slug}`} className="group block rounded-2xl focus-visible:outline-2 focus-visible:outline-offset-8 focus-visible:outline-accent">
              {post.coverImage ? (
                <div className="relative aspect-4/3 overflow-hidden rounded-2xl bg-surface">
                  <Image src={post.coverImage.src} alt={post.coverImage.alt} fill sizes="(max-width: 767px) 100vw, 50vw" className="object-cover object-top transition-transform duration-700 motion-safe:group-hover:scale-105" />
                </div>
              ) : (
                <div aria-hidden="true" className="flex aspect-4/3 flex-col justify-between rounded-2xl border border-border bg-surface p-8 sm:p-10">
                  <span className="eyebrow">{post.category}</span>
                  <span className="display max-w-sm text-[clamp(2rem,4vw,3.5rem)] leading-[1.08]">A little thought.<br /><span className="text-accent">A better build.</span></span>
                  <span className="text-sm text-muted-foreground">Notes by Farnaz Bina</span>
                </div>
              )}
              <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-muted-foreground">
                <span className="uppercase tracking-widest text-accent">{post.category}</span>
                <time dateTime={post.publishedAt}>{formatBlogDate(post.publishedAt)}</time>
                <span>{readingTime(post)} min read</span>
              </div>
              <h2 className="display mt-4 text-3xl leading-[1.12] transition-colors group-hover:text-accent sm:text-4xl [overflow-wrap:anywhere]">{post.title}</h2>
              <p className="mt-4 max-w-xl text-sm leading-7 text-muted-foreground">{post.excerpt}</p>
              <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-accent">Read article <ArrowUpRight size={16} aria-hidden="true" /></span>
            </Link>
          </article>
        ))}
      </div>
      {posts.length === 0 && <p className="py-16 text-muted-foreground">New notes are on the way. Check back soon.</p>}
    </main>
  );
}
