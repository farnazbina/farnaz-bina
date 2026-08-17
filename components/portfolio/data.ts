import project1 from "@/assets/projects/chechup_salamat.webp";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";

export const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "Contact", href: "#contact" },
];

export const STATS = [
  { value: "5+", label: "Years of experience" },
  { value: "20+", label: "Successful projects" },
  { value: "98%", label: "Client retention rate" },
  { value: "50k+", label: "Users reached" },
];

export const SERVICES = [
  {
    n: "01",
    title: "Web Engineering",
    body: "Production-grade React and TypeScript applications built for speed, accessibility and long-term maintainability.",
  },
  {
    n: "02",
    title: "Interaction Design",
    body: "Motion systems with GSAP and Lenis that make interfaces feel physical, intentional and alive.",
  },
  {
    n: "03",
    title: "Design Systems",
    body: "Token-driven component libraries that keep a product visually coherent as the team scales.",
  },
  {
    n: "04",
    title: "Performance",
    body: "Audits and refactors that cut load times, stabilise layout and lock rendering at a steady 60fps.",
  },
];

export const PROJECTS = [
  {
    title: "Saas Project Management Dashboard",
    year: "2026",
    tag: "SaaS Dashboard",
    body: "A comprehensive project management dashboard for a SaaS platform, featuring real-time collaboration tools, task tracking, and analytics to enhance team productivity and project visibility.",
    image: '/projects/saas_dashboard.png',
    demo: "",
    github: "",
  },
  {
    title: "Maison Atelier",
    year: "2025",
    tag: "Commerce",
    body: "Headless storefront for a slow-fashion label. Custom checkout, editorial product pages and a 98 Lighthouse score.",
    image: project2,
    demo: "https://example.com",
    github: "https://github.com",
  },
  {
    title: "Northsignal",
    year: "2024",
    tag: "Data platform",
    body: "Observability tooling for ML pipelines: streaming charts, anomaly alerts and a keyboard-first command layer.",
    image: project3,
    demo: "https://example.com",
    github: "https://github.com",
  },
  {
    title: "Forma Studio",
    year: "2024",
    tag: "Creative site",
    body: "An award-listed studio site built on scroll choreography, WebGL-lite transitions and a strict typographic grid.",
    image: project4,
    demo: "https://example.com",
    github: "https://github.com",
  },
];

export const TESTIMONIALS = [
  {
    quote:
      "He shipped in six weeks what our previous agency scoped for six months — and it looked better than the mockups.",
    name: "Elena Duarte",
    role: "Head of Product, Ledgerline",
  },
  {
    quote:
      "The motion work is unreasonably good. Everything feels considered without ever getting in the way of the task.",
    name: "Marcus Hall",
    role: "Founder, Forma Studio",
  },
  {
    quote:
      "Rare combination: genuinely strong engineering instincts and an actual eye for craft. We rehired him twice.",
    name: "Priya Raman",
    role: "CTO, Northsignal",
  },
];

export const SKILLS = [
  "React",
  "Next.js",
  "TypeScript",
  "JavaScript (ES6+)",
  "Tailwind CSS",
  "Responsive Design",
  "Accessibility (A11y)",
  "Design Systems",
  "CSS Animations",
  "Authentication (JWT/OAuth)",
  "Performance Optimization"
];

export const EXPERIENCES = [
  {
    period: "Sep 2025 - Aug 2026",
    role: "Frontend Engineer",
    company: "Amniyat Parast Co",
    link: "",
    location: "",
    body: "Engineered a fully responsive, high-performance website from scratch using Next.js and TypeScript, delivering seamless user experiences across all devices with Tailwind CSS. Built dynamic, type-safe forms with React Hook Form and Zod for robust validation, ensuring clean data submission and enhanced user experience. Implemented state management using Zustand, efficiently handling complex application state across multiple components and improving data consistency.",
    stack: ["React.js", "Next.js", "Tailwind CSS", "Rest API", "ApexCharts"],
  },
  {
    period: "Jul 2024 - Jan 2026",
    role: "Frontend Engineer",
    company: "Checkup Salamat",
    link: "https://checkupsalamat.com/",
    location: "",
    body: "Architected a comprehensive health appointment platform for a leading Iranian hospital, delivering role-based dashboards (Admin, Doctor, Receptionist, and Patient) with a dynamic physician calendar and an integrated online payment system that supports multi-person bookings. I also built real-time statistical and financial reporting modules for operational insights, and enforced a cohesive, reusable design system that ensured clean, maintainable code—resulting in a 98 Lighthouse performance score.",
    stack: ["Vue.js", "Nuxt.js", "Tailwind CSS", "Rest API", "ApexCharts"],
  },
  {
    period: "Dec 2024 - Mar 2025",
    role: "Frontend Developer",
    company: "ArvinTav Co",
    link: "https://www.linkedin.com/company/arvin-tav/posts/?feedView=all",
    location: "",
    body: "Engineered a high-end financial services website for a distinguished client, delivering a visually captivating UI enriched with sophisticated light-based effects, dynamic motion, and creative micro-interactions that elevate the brand's digital presence.",
    stack: ["React", "Design Systems", "WebSockets", "Testing"],
  },
  {
    period: "Oct 2023 — Jul 2024",
    role: "Frontend Developer",
    company: "Doctor Online Plus",
    link: "https://www.linkedin.com/company/doctor-online-plus/posts/?feedView=all",
    location: "",
    body: "Designed and built the complete frontend of a modern online appointment scheduling platform from scratch, implementing role-specific dashboards for Admin, Doctors/Specialists, Patients, and Receptionists with robust RBAC to ensure secure, customized user access and workflows.",
    stack: ["TypeScript", "D3", "Node.js"],
  },
  {
    period: "Jan 2022 — Sep 2023",
    role: "Frontend Developer",
    link: "https://bit24.cash/",
    company: "Bit24.cash",
    location: "",
    body: "Collaborated within a 9-person engineering team on a digital currency exchange platform, leveraging Git and pull requests to ensure seamless code integration under technical leadership. I architected and delivered multiple internal panels—including warehouse management, DevOps data systems, analytics, and a super admin dashboard unifying users, transactions, and orders—to drive operational efficiency and comprehensive platform oversight.",
    stack: ["JavaScript", "GSAP", "Headless CMS"],
  },
  {
    period: "Jan 2022 — Sep 2023",
    role: "Frontend Developer",
    link: "https://www.linkedin.com/company/rominatech/posts/?feedView=all",
    company: "Romina Tech",
    location: "",
    body: "Designed and developed international websites featuring advanced scroll animations and interactive effects using GSAP and SmoothScroll technologies to deliver engaging, high-end user experiences across global audiences.",
    stack: ["JavaScript", "GSAP", "Headless CMS"],
  },
];