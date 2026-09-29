import { saasImages } from "@/lib/saas-images";
// data/projects.ts

export interface Project {
  // فیلدهای مورد نیاز برای صفحه کیس استادی
  slug: string;
  title: string;
  subtitle: string;
  createdDate: string;
  coverImage: string;
  content: {
    introduction: string;
    delivery?: { title: string; items: { title: string; description: string }[] };
    features?: { title: string; description: string }[];
    techStack: Record<string, string>;
    challenges: { title: string; description: string }[];
    results: string[];
    conclusion?: string;
    role?: { title: string, description: string },
    responsibilities?: string[]
    keyfeatures?: { title: string, subtitle: string, description: string, list: string[], note: string }[]
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
    slug: "checkup_salamt",
    title: "Checkup Salamat | Healthcare appointment platform",
    subtitle: "Online Appointment & Clinic Management Platform",
    tag: "Vue.js | Nuxt.js | TypeScript",
    year: "2026",
    coverImage: "/images/checkup/landing2.png",
    body: "A production healthcare platform supporting appointment booking, role-based dashboards, and multiple user workflows.",
    demo: "https://checkupsalamat.com/",
    github: "",
    createdDate: "2026-08-31",
    content: {
      introduction: "Checkup Salamat is a healthcare appointment booking and clinic management platform for multiple branches in Iran. I built the frontend with Vue 3, Nuxt.js and TypeScript, connecting patient booking with the daily workflows of doctors, receptionists and administrators.",
      role: {
        title: "Frontend Engineer",
        description: "Owned frontend development and ongoing maintenance, working with designers and backend engineers to deliver responsive interfaces, API integrations and reusable components.",
      },
      responsibilities: [
        "Owned the frontend for patient booking and dashboards for doctors, receptionists, administrators and patients.",
        "Integrated backend APIs for appointment scheduling, deposits, discounts, invoices and operational analytics.",
        "Translated designs and business requirements into responsive Vue components, shared UI patterns and maintainable TypeScript code.",
        "Collaborated with backend engineers and designers throughout feature development and ongoing product maintenance.",
        "Contributed to documentation and developer onboarding, explaining the architecture, components and feature workflow.",
      ],
      delivery: {
        title: "Team collaboration and engineering ownership",
        items: [
          { title: "Cross-functional collaboration", description: "I worked closely with designers and backend engineers to turn clinic requirements into usable frontend workflows. This involved connecting interface decisions with API data and the different needs of patients, doctors, receptionists and administrators." },
          { title: "Clean code and reusable components", description: "I used a component-based architecture, TypeScript and centralized Pinia state to keep the frontend maintainable. Shared UI patterns reduced duplicated logic across dashboards and made changes easier to apply consistently as the product grew." },
          { title: "Feature-based delivery", description: "Development was organized into focused feature tasks and dedicated pull requests. This kept changes easier to review and track, while separating individual improvements from the wider scheduling, payment and dashboard workflows." },
          { title: "Documentation and knowledge sharing", description: "I contributed to project documentation and helped onboard developers to the architecture, component conventions and development workflow. My responsibility extended beyond shipping screens to maintaining a codebase other team members could understand and extend." },
        ],
      },
      features: [
        { title: "Online appointment booking", description: "Branch and doctor selection, available time slots, multi-person bookings and rescheduling in one guided flow." },
        { title: "Clinic operations", description: "Recurring and temporary doctor schedules, role-specific dashboards and appointment activity history." },
        { title: "Payments and insights", description: "Deposits, discounts, invoices and receipt verification, supported by ApexCharts analytics and patient feedback." },
      ],
      techStack: {
        Frontend: "Vue 3 / Nuxt.js / TypeScript",
        Styling: "Tailwind CSS",
        "State management": "Pinia",
        Analytics: "ApexCharts",
      },
      challenges: [
        { title: "Making complex scheduling understandable", description: "Appointment availability depended on the selected branch, doctor and schedule, including recurring hours and temporary changes. I translated these rules into a guided booking interface and calendar views so patients could choose a slot while staff managed more detailed scheduling workflows." },
        { title: "Keeping a growing product consistent", description: "Four user roles needed different screens without fragmenting the product. I combined reusable components, centralized state and consistent interface patterns, while making deposits, discounts and invoice states explicit in payment screens. This balanced role-specific requirements with a maintainable shared frontend." },
      ],
      results: [
        "Delivered a production platform connecting online booking with multi-branch clinic operations.",
        "Supported patients, doctors, receptionists and administrators through dedicated workflows.",
        "Created a reusable frontend foundation for ongoing features and maintenance.",
      ],
    },
    gallery: [
      "/images/checkup/booking.png",
      "/images/checkup/booking2.png",
      "/images/checkup/doctor-calendar.png",
      "/images/checkup/responsivee.png",
    ],
  },
  {
    slug: "saas_dashboard",
    title: "SaaS Dashboard",
    subtitle: "",
    tag: "React / Next.js",
    year: "2026",
    coverImage: saasImages.overview_png,
    body: "A self-made React and Next.js dashboard with Kanban tasks, project analytics, client records and invoices.",
    demo: "https://saas-dashboard-iota-eight.vercel.app/overview",
    github: "https://github.com/farnazbina/saas-dashboard",
    createdDate: "2026-01-15",
    content: {
      introduction: "A self-made, independently developed React and Next.js project management dashboard. I built this personal project to demonstrate frontend engineering across Kanban task management, analytics, client records and invoicing, using TypeScript and a reusable component architecture.",
      role: {
        title: "Independent Frontend Developer",
        description: "As the sole developer of this self-directed project, I owned the frontend implementation, component structure, application state and responsive layouts. It demonstrates my ability to take a product idea through implementation and deliver a working demo with source code available for review.",
      },
      responsibilities: [
        "Independently developed project, task, client and invoice screens within a consistent dashboard layout.",
        "Connected Kanban interactions and analytics with Zustand and React Context.",
        "Built reusable forms and interface components with Tailwind CSS and shadcn/ui.",
        "Used React Hook Form and Zod for structured form handling and validation.",
        "Organized the frontend for maintainability and future API integration, with a public demo and GitHub repository.",
      ],
      delivery: {
        title: "Independent ownership and code quality",
        items: [
          { title: "Self-made project, end-to-end ownership", description: "I built this dashboard independently as a personal portfolio project. I took responsibility for translating the product idea into connected screens, selecting the frontend tools and implementing the workflows. The project demonstrates initiative, self-directed learning and practical problem-solving." },
          { title: "Clean, maintainable React code", description: "I used reusable components, TypeScript and shared interface patterns to keep repeated dashboard behavior consistent. Separating shared application state from local UI state helped keep components focused and made the codebase easier to extend." },
          { title: "Forms and interaction design", description: "React Hook Form and Zod support form handling and validation, while dnd-kit supports task movement between Kanban columns. These choices let me focus on clear feedback, visible task status and consistent interactions across the dashboard." },
          { title: "Transparent scope and future development", description: "This is a frontend portfolio project with a working demo and public source code. API integration and authentication remain future extensions. It showcases independent engineering ownership; my experience collaborating with designers and backend teams is demonstrated separately in Checkup Salamat." },
        ],
      },
      features: [
        { title: "Projects and Kanban tasks", description: "Manage projects and move tasks between workflow stages with drag-and-drop. Priorities, due dates and progress stay visible on each card." },
        { title: "Analytics at a glance", description: "Recharts visualizations summarize project progress and task distribution, alongside an overview of recent clients." },
        { title: "Clients and invoices", description: "Keep client profiles, linked projects and invoice payment status in the same workspace." },
      ],
      techStack: {
        Framework: "React / Next.js App Router",
        Language: "TypeScript",
        Styling: "Tailwind CSS / shadcn/ui",
        "State management": "Zustand / React Context",
        Visualization: "Recharts",
        Interactions: "dnd-kit / React Hook Form / Zod",
      },
      challenges: [
        { title: "Keeping connected data consistent", description: "Projects, tasks and clients are related, so keeping their state in isolated screens would make updates difficult to follow. I used Zustand for shared application data and React Context for local interface state, creating a clearer separation between product data and presentation behavior." },
        { title: "Making dense interfaces easy to use", description: "A dashboard needs to show detail without making every screen overwhelming. I combined responsive grids, explicit status labels and reusable form patterns with drag-and-drop task updates. Recharts provided a visual summary of project progress alongside the more detailed task and client screens." },
      ],
      results: [
        "Brought project tracking, task management, client records and invoicing into a unified dashboard.",
        "Made project progress and task distribution visible through charts and a Kanban board.",
        "Established a modular frontend foundation for future API integration and authentication.",
      ],
    },
    gallery: [
      saasImages.overview_png,
      saasImages.projects_png,
      saasImages.tasks_png,
      saasImages.clients_png,
      saasImages.settings_png,
      saasImages.invoices_png,
      saasImages.teams_png,
    ],
  },
  {
    slug: "lumiere_e_commerce",
    title: "Lumiere E-commerce website",
    subtitle: "",
    tag: "React / Next.js",
    year: "2026",
    coverImage: '/projects/e-commerce/storefront.png',
    body: "A self-built e-commerce website with Next.js and TypeScript, featuring product browsing, shopping cart, checkout, authentication and order management.",
    demo: "https://saas-dashboard-iota-eight.vercel.app/overview",
    github: "https://github.com/farnazbina/saas-dashboard",
    createdDate: "2026-01-15",
    content: {
      introduction: `A modern, full-stack e-commerce website built with Next.js and TypeScript, designed to deliver a fast, scalable, and user-friendly online shopping experience. The project covers the core functionality of a production-ready online store, including product browsing, search and filtering, shopping cart, checkout flow, user authentication, and order management.

Built with a focus on performance, responsive design, SEO, and clean architecture, this project demonstrates my ability to build complex e-commerce interfaces and scalable web applications with modern React and Next.js technologies.
`,
      role: {
        title: "Independent Frontend Developer",
        description: "As the sole developer of this self-directed project, I handled the frontend architecture, e-commerce features, state management and responsive UI. The project demonstrates my ability to turn a product concept into a functional, production-style shopping experience.",
      },
      responsibilities: [
        "Independently designed and developed the e-commerce frontend using React and Next.js App Router.",
        "Implemented product search, category-based filtering, multi-product cart, and wishlist functionality.",
        "Built reusable and responsive UI components with Tailwind CSS and shadcn/ui.",
        "Implemented client-side state management and data fetching with Zustand and TanStack Query.",
        "Used React Hook Form and Zod for structured form handling and validation, with a focus on performance and maintainability.",
      ],
      delivery: {
        title: "Independent ownership and code quality",
        items: [
          { title: "Self-made project, end-to-end ownership", description: "I built this dashboard independently as a personal portfolio project. I took responsibility for translating the product idea into connected screens, selecting the frontend tools and implementing the workflows. The project demonstrates initiative, self-directed learning and practical problem-solving." },
          { title: "Clean, maintainable React code", description: "I used reusable components, TypeScript and shared interface patterns to keep repeated dashboard behavior consistent. Separating shared application state from local UI state helped keep components focused and made the codebase easier to extend." },
          { title: "Forms and interaction design", description: "React Hook Form and Zod support form handling and validation, while dnd-kit supports task movement between Kanban columns. These choices let me focus on clear feedback, visible task status and consistent interactions across the dashboard." },
          { title: "Transparent scope and future development", description: "This is a frontend portfolio project with a working demo and public source code. API integration and authentication remain future extensions. It showcases independent engineering ownership; my experience collaborating with designers and backend teams is demonstrated separately in Checkup Salamat." },
        ],
      },
      features: [
        { title: "Projects and Kanban tasks", description: "Manage projects and move tasks between workflow stages with drag-and-drop. Priorities, due dates and progress stay visible on each card." },
        { title: "Analytics at a glance", description: "Recharts visualizations summarize project progress and task distribution, alongside an overview of recent clients." },
        { title: "Clients and invoices", description: "Keep client profiles, linked projects and invoice payment status in the same workspace." },
      ],
      techStack: {
        Framework: "React / Next.js App Router",
        Language: "TypeScript",
        Styling: "Tailwind CSS / shadcn/ui",
        "State management": "Zustand / React Context",
        "Data fetching": "TanStack Query",
        Interactions: "React Hook Form / Zod",
      },
      challenges: [
        {
          title: "Multi-product shopping cart",
          description: "Select multiple products and add them to the shopping cart for a seamless checkout experience."
        },
        {
          title: "Wishlist and quick add",
          description: "Save favorite products for later and easily move them to the shopping cart when ready to purchase."
        },
        {
          title: "Search and product filtering",
          description: "Find products quickly with search and filter options across multiple categories."
        },
        {
          title: "Dark and light mode",
          description: "Switch between dark and light themes for a personalized and comfortable shopping experience."
        },
      ],
      results: [
        "Built a complete e-commerce shopping experience with product discovery, filtering, search, cart and wishlist functionality.",
        "Created a responsive and reusable frontend architecture with a consistent user experience across devices.",
        "Established a scalable foundation for future features such as authentication, payments and order management.",
      ],
    },
    gallery: [
      '/projects/e-commerce/product-details.png',
      '/projects/e-commerce/catalog.png',
      '/projects/e-commerce/catalog-dark.png',
      '/projects/e-commerce/account-overview.png',
      '/projects/e-commerce/cart-drawer.png',
    ],
  },
  {
    slug: "interior_design_studio",
    title: "Interior Design Studio",
    subtitle: "",
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