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
      introduction:
        `A scalable healthcare platform built for Samat Body Analysis & Checkup Clinic, enabling patients to book appointments online across multiple branches and with multiple doctors throughout Iran.
        The platform combined patient booking, doctor scheduling, payments, invoices, questionnaires, reviews, and operational analytics into a unified system for patients, doctors, receptionists, and administrators.`,
      role: {
        title: "Frontend Engineer",
        description: `I was responsible for the frontend development and ongoing maintenance of the platform.

        I worked closely with backend engineers and designers to transform business requirements and UI designs into a responsive, scalable, and maintainable product.`
      },
      responsibilities: [
        "Developed the complete frontend of the platform.",
        "Built dedicated dashboards for Administrators, Doctors, Patients, and Receptionists.",
        "Implemented the online appointment booking experience.",
        "Developed doctor scheduling and availability management.",
        "Built reusable and modular UI components.",
        "Implemented payment, deposit, discount, and invoice workflows.",
        "Developed analytics dashboards using interactive charts.",
        "Implemented patient questionnaires, surveys, ratings, and reviews.",
        "Integrated frontend features with backend APIs.",
        "Maintained and continuously improved the platform.",
        "Collaborated with backend engineers and designers throughout development.",
        "Onboarded new developers and helped them understand the project architecture and workflow.",
        "Contributed to documentation and design-system consistency.",
        "Worked with a feature-based task structure and dedicated pull requests.'",
      ],
      keyfeatures: [
        {
          title: "Multi-Branch Appointment Booking",
          subtitle: "The booking system was designed to support multiple clinic branches and doctors while allowing patients to find and book available appointments.",
          list: [
            "Select a branch",
            "Select a doctor",
            "View available appointment slots",
            "Find the next available appointment",
            "Book appointments for one or multiple people",
            "Reschedule appointments",
            "View appointment details and status"
          ],
          note: "",
          description: "Patients could:"
        },
        {
          title: "Doctor Scheduling",
          subtitle: "Doctors had dedicated scheduling tools for managing their availability.",
          list: [
            "Weekly working schedules",
            "Temporary schedules for specific date ranges",
            "Appointment calendars",
            "Availability management",
            "Appointment rescheduling"
          ],
          note: "This allowed the clinic to manage both recurring schedules and exceptional working hours.",
          description: "The system supported:"
        },
        {
          title: "Payment & Invoice Management",
          subtitle: "The payment workflow required more than a standard checkout process.",
          list: [],
          note: `Appointment → Deposit → Discount → Payment → Final Invoice

Patients could apply discount codes and pay their required deposit online.

The system also supported card-to-card payments, allowing users to submit their payment receipt for verification.

Administrators and receptionists could then review payment information and track the financial status of each appointment`,
          description: "The platform handled:"
        },
        {
          title: "Analytics Dashboards",
          subtitle: "Dedicated dashboards were developed for administrators and doctors to monitor clinic operations.",
          list: [
            "Financial performance",
            "Number of patients",
            "Number of appointments",
            "Branch performance",
            "Doctor activity",
            "Administrative activity",
          ],
          note: "Interactive charts and visualizations made large amounts of operational data easier to understand and monitor.",
          description: "The dashboards provided insights into:"
        },
        {
          title: "Questionnaires & Patient Feedback",
          subtitle: "The platform included a complete feedback workflow connected to appointments.",
          list: [],
          note: "Doctors and administrators could then review responses, ratings, and comments through their respective dashboards.",
          description: "Patients could complete questionnaires and surveys related to their appointments and rate their experience."
        },
        {
          title: "Appointment Activity History",
          subtitle: "Each appointment contained a detailed history of actions performed by staff members.",
          list: [
            "Appointment changes",
            "Schedule modifications",
            "Invoice information",
            "Payment receipts",
            "Staff activities related to the appointment"
          ],
          note: "Users with the appropriate permissions could view:",
          description: "Users with the appropriate permissions could view:"
        },
        {
          title: "Responsive Design",
          subtitle: "The platform was designed to work across different screen sizes and devices.",
          list: [],
          note: `Mobile · Tablet · Laptop · Large Desktop
            Special attention was given to complex interfaces such as appointment calendars, dashboards, tables, and administrative panels to ensure they remained usable on smaller screens.`,
          description: "The interfaces were optimized for:"
        },
        {
          title: "Design System & Reusability",
          subtitle: "A reusable component architecture and consistent design system were established across the platform. Common UI patterns were standardized and reused throughout different dashboards and features.",
          list: [
            "Reduce duplicated code",
            "Improve UI consistency",
            "Speed up feature development",
            "Simplify maintenance",
            "Make onboarding new developers easier"
          ],
          note: "",
          description: "This helped:"
        },
        {
          title: "Development Workflow",
          subtitle: "The project followed a structured feature-based development workflow.",
          list: [],
          note: `This made the development process easier to review, maintain, and track as the platform continued to evolve.

I also contributed to project documentation and helped onboard new developers by introducing them to the architecture, components, development workflow, and project conventions.`,
          description: "Features were divided into independent tasks and implemented through dedicated pull requests."
        }
      ],
      techStack: {
        Frontend: "Vue3, Nuxt.js, TypeScript",
        "UI & Styling": "Tailwind CSS",
        "State Management": "Pinia",
        "Data Visualization": "ApexCharts",
      },
      challenges: [
        {
          title: "1) Complex Scheduling Logic",
          description:
            `Supporting multiple branches, doctors, recurring schedules, temporary schedules, and simultaneous bookings made appointment availability one of the most complex parts of the platform.
              The frontend needed to present this complexity through a simple and understandable booking experience.`
        },
        {
          title: "2) Dynamic Financial Calculations",
          description:
            `Appointment payments could include deposits, discounts, and final invoice amounts.

The frontend had to accurately reflect different payment states and provide users with clear financial information throughout the booking process.`
        },
        {
          title: "3) Multiple Role-Based Dashboards",
          description:
            `The platform served four major user groups:

Patients · Doctors · Receptionists · Administrators

Each role required different workflows, permissions, data, and interfaces while maintaining a consistent design language across the product.`
        },
        {
          title: "4) Large Amounts of Operational Data",
          description: `Administrators and doctors needed to monitor large amounts of data related to appointments, patients, branches, doctors, staff, and financial activity.

The challenge was transforming this data into clear dashboards that allowed users to quickly understand the current state of the clinic.`
        },
        {
          title: "5) Maintainable Frontend Architecture",
          description: `As the platform grew, maintaining consistency and avoiding duplicated UI logic became increasingly important.

I used reusable components, centralized state management, consistent design patterns, and modular feature development to keep the frontend maintainable and scalable.`
        }
      ],
      results: [
        "The final product was a scalable healthcare platform that brought appointment booking, doctor scheduling, payments, invoices, patient feedback, and operational analytics into a single system.",
        "The platform enabled the clinic to manage complex multi-branch operations while providing patients with a simple online booking experience.",
        "From a frontend perspective, the reusable component architecture, design system, TypeScript-based development, and modular feature structure created a maintainable foundation for continuously adding new features and improving the product.",
      ]
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
    coverImage: "/images/saas_dashboard/saas_dashboard.png",
    body: "A unified project management dashboard with task tracking, analytics, and timeline view.",
    demo: "https://demo.com",
    github: "https://github.com/yourusername/saas-dashboard",
    createdDate: "2026-01-15",
    content: {
      introduction:
        "This dashboard was built to unify project tracking, task management, client handling, transactions, and analytics into one seamless interface. Teams no longer need to switch between multiple tools.",
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