import { saasImages } from "@/lib/saas-images";
export type BlogBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string }
  | { type: "list"; items: string[]; ordered?: boolean }
  | { type: "quote"; text: string; attribution?: string }
  | { type: "code"; code: string; language?: string };

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  publishedAt: string;
  updatedAt?: string;
  category: string;
  tags: string[];
  coverImage?: { src: string; alt: string };
  content: BlogBlock[];
}

// Starter articles: edit or replace these entries to publish your own writing.
// Use unique URL-safe slugs and ISO dates (YYYY-MM-DD). Images live in public/.
// Omit coverImage entirely for a text-only article. Rebuild to publish changes.
export const blogPosts: BlogPost[] = [
  {
    slug: "designing-interfaces-that-breathe",
    title: "Designing interfaces that breathe",
    excerpt: "A few intentional decisions about spacing, hierarchy, and detail can make a busy interface feel effortless.",
    publishedAt: "2026-09-10",
    category: "Design & development",
    tags: ["UI design", "Frontend", "Design systems"],
    coverImage: {
      src: saasImages.overview_png,
      alt: "Dashboard interface with an overview of projects and activity",
    },
    content: [
      { type: "paragraph", text: "A useful interface gives each piece of information room to be understood. Before adding decoration, I like to look at the structure: what should someone notice first, what belongs together, and what can wait until later?" },
      { type: "heading", text: "Start with a clear hierarchy" },
      { type: "paragraph", text: "Give each screen one clear starting point. A strong heading, a short explanation, and a recognizable primary action help people orient themselves. Secondary details can use quieter typography without becoming difficult to read." },
      { type: "list", items: ["Group related information with consistent spacing.", "Use a small set of text sizes with distinct roles.", "Reserve the accent color for actions and meaningful emphasis.", "Remove visual elements that compete with the main task."] },
      { type: "heading", text: "Let spacing do some of the work" },
      { type: "paragraph", text: "Not every group needs a card, shadow, or border. Sometimes a little more space is enough to separate sections. A simple spacing scale also makes decisions easier when the same interface grows across multiple screens." },
      { type: "quote", text: "Every detail should help someone understand where they are or what they can do next." },
      { type: "heading", text: "Carry the idea across screen sizes" },
      { type: "paragraph", text: "On a narrow screen, the hierarchy matters even more. Let columns stack in a sensible order, allow labels to wrap, and keep the most useful information close to its action. A responsive layout should preserve the intent of the design as the available space changes." },
    ],
  },
  {
    slug: "a-small-checklist-for-responsive-layouts",
    title: "A small checklist for responsive layouts",
    excerpt: "From flexible grids to long headings: the details I look for when a layout needs to work beyond the perfect screenshot.",
    publishedAt: "2026-09-03",
    category: "Frontend notes",
    tags: ["CSS", "Responsive design", "Accessibility"],
    content: [
      { type: "paragraph", text: "A layout is only as flexible as the content it can handle. Short placeholder text and a single desktop screenshot rarely reveal the awkward cases. I prefer to bring those cases into the process early." },
      { type: "heading", text: "Test the content, not just the viewport" },
      { type: "list", ordered: true, items: ["Try a heading that wraps onto several lines.", "Check cards with and without images.", "Use longer labels and descriptions.", "Increase the browser zoom and navigate with a keyboard.", "Check intermediate widths as well as phone and desktop sizes."] },
      { type: "heading", text: "Give the grid permission to shrink" },
      { type: "paragraph", text: "Flexible columns and a minimum width of zero help content stay within its container. Code snippets and other wide content can scroll inside their own region while the rest of the page remains readable." },
      { type: "code", language: "css", code: ".article-layout {\n  display: grid;\n  gap: 2rem;\n  grid-template-columns: minmax(0, 1fr);\n}\n\n.article-content {\n  min-width: 0;\n  overflow-wrap: anywhere;\n}" },
      { type: "heading", text: "Keep reading comfortable" },
      { type: "paragraph", text: "Full-width paragraphs can become tiring on a large display. Constrain the reading column, give lines enough breathing room, and let headings scale gradually. Small adjustments here often do more than a complicated arrangement of breakpoints." },
    ],
  },
];

export function getBlogPosts() {
  return [...blogPosts].sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));
}

export function getBlogPost(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}

export function readingTime(post: BlogPost) {
  const words = post.content.map((block) =>
    block.type === "list" ? block.items.join(" ") : block.type === "code" ? block.code : block.text,
  ).join(" ").trim().split(/\s+/).length;
  return Math.max(1, Math.ceil(words / 200));
}

export function formatBlogDate(date: string) {
  return new Intl.DateTimeFormat("en-US", {
    month: "long", day: "numeric", year: "numeric", timeZone: "UTC",
  }).format(new Date(date));
}
