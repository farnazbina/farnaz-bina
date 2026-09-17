import type { MetadataRoute } from "next";
import { blogPosts } from "@/data/blog";
import { projects } from "@/data/projects";
import { siteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: siteUrl },
    { url: `${siteUrl}/blog` },
    ...projects.map((project) => ({ url: `${siteUrl}/projects/${project.slug}` })),
    ...blogPosts.map((post) => ({
      url: `${siteUrl}/blog/${post.slug}`,
      lastModified: post.updatedAt ?? post.publishedAt,
    })),
  ];
}
