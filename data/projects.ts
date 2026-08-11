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
  // می‌توانید پروژه‌های دیگر را هم اضافه کنید
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}