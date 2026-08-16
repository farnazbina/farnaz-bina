// data/projects.ts

export interface Project {
  // فیلدهای مورد نیاز برای صفحه کیس استادی
  slug: string;
  title: string;
  createdDate: string;
  coverImage: string;
  content: {
    introduction: string;
    goals: string[];
    features: { title: string; description: string }[];
    techStack: Record<string, string>;
    challenges: { title: string; description: string }[];
    results: string[];
    conclusion: string;
  };
  gallery: string[];

  // فیلدهای مورد نیاز برای صفحه هوم (Projects)
  tag: string;
  year: string;
  body: string;
  demo: string;
  github: string;
}

export const projects: Project[] = [
  {
    slug: "saas_dashboard",
    title: "SaaS Dashboard",
    tag: "React / Next.js",
    year: "2026",
    coverImage: "/images/saas_dashboard/saas_dashboard.png",
    body: "A unified project management dashboard with task tracking, analytics, and timeline view.",
    demo: "https://demo.com",
    github: "https://github.com/yourusername/saas-dashboard",
    createdDate: "2026-01-15",
    content: {
      introduction:
        "This dashboard was built to unify project tracking, task management, client handling, transactions, and analytics into one seamless interface. Teams no longer need to switch between multiple tools.",
      goals: [
        "Unify all project-related data in a single dashboard.",
        "Reduce time wasted on context-switching.",
        "Provide clear visibility through real-time analytics charts.",
        "Enable efficient timeline planning with Gantt view.",
      ],
      features: [
        {
          title: "Project & Task Management",
          description:
            "Create, edit, and delete projects. Kanban board with drag-and-drop for tasks (Todo, In Progress, In Review, Blocked, Done).",
        },
        {
          title: "Client & Transaction Tracking",
          description:
            "Manage client profiles, link them to projects, and track financial transactions with payment status.",
        },
        {
          title: "Analytics & Charts",
          description:
            "Visualize task status distribution, project progress, and team performance with interactive Recharts.",
        },
        {
          title: "Timeline & Gantt View",
          description:
            "Project timeline with a custom Gantt chart to identify overlaps and plan resources effectively.",
        },
      ],
      techStack: {
        Framework: "Next.js 14 (App Router)",
        Language: "TypeScript",
        Styling: "Tailwind CSS + Shadcn/ui",
        "State Management": "Zustand + React Context",
        Charts: "Recharts",
        "Drag & Drop": "@dnd-kit/core",
        Forms: "React Hook Form + Zod",
        Icons: "Lucide React",
      },
      challenges: [
        {
          title: "Complex State Management",
          description:
            "Handling interrelated data (projects, tasks, clients, transactions) required a normalized state. Used Zustand for global state and Context for local UI state.",
        },
        {
          title: "Smooth Drag & Drop",
          description:
            "Implemented drag-and-drop with @dnd-kit to move tasks between columns without lag, with optimistic UI updates.",
        },
        {
          title: "Responsive Design",
          description:
            "Used Tailwind's grid and flex utilities to build a fully responsive layout that adapts to mobile, tablet, and desktop.",
        },
      ],
      results: [
        "Saves an estimated 2+ hours per week per team member.",
        "Eliminates the need for 4 separate tools.",
        "Provides real-time visibility into blocked tasks and bottlenecks.",
        "Positive feedback from test users on UI/UX.",
      ],
      conclusion:
        "This project taught me how to build a complex, data-driven dashboard with a clean UX. The modular architecture allows for easy addition of new features like real API integration and authentication.",
    },
    gallery: [
      "/images/saas_dashboard/saas_dashboard.png",
      "/images/saas_dashboard/overview.png",
      "/images/saas_dashboard/projects.png",
      "/images/saas_dashboard/tasks.png",
      "/images/saas_dashboard/clients.png",
      "/images/saas_dashboard/setting.png",
      "/images/saas_dashboard/invoices.png",
      "/images/saas_dashboard/teams.png",
    ],
  },
  {
    slug: "interior_design_studio",
    title: "Interior Design Studio",
    tag: "React / Next.js / GSAP",
    year: "2026",
    coverImage: "/projects/interior_design.png",
    body: "A premium interior design studio website with immersive GSAP animations, multi-language support, and creative UX for a German client.",
    demo: "https://interior-design-six-snowy.vercel.app/",
    github: "",
    createdDate: "2026-07-10",
    content: {
      introduction:
        "A sophisticated interior design portfolio website crafted for a German design studio. The project focuses on delivering an immersive visual experience through smooth GSAP animations, creative typography, and intuitive navigation. The multilingual interface (German/English) ensures accessibility for both local and international clients.",
      goals: [
        "Create a premium brand presence with cinematic animations.",
        "Showcase design projects with immersive visual storytelling.",
        "Implement seamless multi-language support (DE/EN).",
        "Deliver a fully responsive experience across all devices.",
        "Optimize for performance while maintaining visual richness.",
      ],
      features: [
        {
          title: "Immersive GSAP Animations",
          description:
            "Scroll-triggered animations, parallax effects, smooth transitions, and micro-interactions that elevate the user experience and reflect the studio's attention to detail.",
        },
        {
          title: "Multi-Language Support",
          description:
            "Full German and English localization using next-i18next, with language switcher and translated content for all pages including portfolio, services, and about.",
        },
        {
          title: "Creative UX Design",
          description:
            "Carefully crafted user journey with visual hierarchy, elegant typography, and intuitive navigation that guides visitors through the studio's work and philosophy.",
        },
        {
          title: "Dynamic Portfolio Gallery",
          description:
            "Filterable project grid with lightbox previews, project detail pages, and smooth image loading optimized for visual storytelling.",
        },
        {
          title: "Contact & Inquiry System",
          description:
            "Elegant contact form with validation, integrated with email service for client inquiries and project consultations.",
        },
      ],
      techStack: {
        Framework: "Next.js 14 (App Router)",
        Language: "TypeScript",
        Styling: "Tailwind CSS + Framer Motion",
        Animations: "GSAP (ScrollTrigger, Timeline, TextPlugin)",
        "Multi-Language": "next-i18next / i18next",
        Forms: "React Hook Form + Zod",
        Icons: "Lucide React",
        Images: "Next.js Image Optimization",
      },
      challenges: [
        {
          title: "Complex Animation Orchestration",
          description:
            "Coordinating multiple GSAP timelines with scroll triggers required careful planning to avoid performance issues and ensure smooth animations across different devices and browsers.",
        },
        {
          title: "Multi-Language Content Management",
          description:
            "Managing translated content for both German and English while maintaining consistent formatting and handling language-specific layout changes (e.g., German text length variations).",
        },
        {
          title: "Performance Optimization",
          description:
            "Balancing rich animations with fast load times using lazy loading, code splitting, optimized images, and conditional animation loading based on device capabilities.",
        },
        {
          title: "Responsive Animation Adaptation",
          description:
            "Adapting complex scroll animations and visual effects to work seamlessly on mobile devices with reduced motion preferences and touch interactions.",
        },
      ],
      results: [
        "Increased client engagement with 40% longer session duration.",
        "Successfully launched in German and English markets.",
        "Received positive feedback on visual storytelling and brand presentation.",
        "Improved conversion rate for design consultations.",
        "Established a strong digital presence for the studio in the German market.",
      ],
      conclusion:
        "This project demonstrated how combining creative design with technical excellence can create a truly immersive brand experience. The GSAP animations brought the studio's design philosophy to life, while the multi-language support opened doors to international clients. The modular architecture ensures easy updates for new projects and content.",
    },
    gallery: [
      "/projects/interior_design.png",
    ],
  },
  // می‌توانید پروژه‌های دیگر را هم اضافه کنید
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}