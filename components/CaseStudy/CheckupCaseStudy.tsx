import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/data/projects";
import { siteUrl } from "@/lib/site";
import { Nav } from "@/components/portfolio/Nav";
import { Footer } from "@/components/portfolio/Sections";
import AnimatedPreview from "./AnimatedPreview";
import EngineeringPractice from "./EngineeringPractice";

const screenshots = [
  { src: "/images/checkup/booking.png", title: "01 / Appointment booking", alt: "Checkup Salamat appointment booking interface with available dates, time slots and multi-patient booking", caption: "Available dates and time slots, with support for booking more than one patient." },
  { src: "/images/checkup/booking2.png", title: "02 / Payment summary", alt: "Checkup Salamat checkout showing appointment details, deposit, discount and final payment amount", caption: "A clear breakdown of appointments, deposits, discounts and the amount due." },
  { src: "/images/checkup/doctor-calendar.png", title: "03 / Doctor scheduling", alt: "Checkup Salamat clinic dashboard with a weekly doctor appointment calendar and branch selector", caption: "A weekly calendar brings branch selection, working hours and appointments together." },
  { src: "/images/checkup/responsivee.png", title: "04 / Responsive healthcare website", alt: "Checkup Salamat responsive website displayed on desktop, tablet and mobile", caption: "A consistent visual language across desktop, tablet and mobile screens." },
];

export default function CheckupCaseStudy({ project }: { project: Project }) {
  const { content } = project;
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Checkup Salamat: Healthcare Appointment Platform — Frontend Case Study",
    description: project.body,
    author: { "@type": "Person", name: "Farnaz Bina", url: siteUrl },
    mainEntityOfPage: `${siteUrl}/projects/${project.slug}`,
    image: screenshots.map(({ src }) => `${siteUrl}${src}`),
    about: ["Healthcare appointment booking", "Clinic management", "Vue.js frontend development", "Nuxt.js", "TypeScript"],
  };
  return (
    <>
      <Nav />
      <main className="mx-auto max-w-6xl px-6 pb-16 pt-32 sm:px-10">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />
        <header>
          <Link href="/#work" className="text-xs uppercase tracking-[0.16em] text-muted-foreground hover:text-accent">← Back to projects</Link>
          <p className="mt-10 text-xs uppercase tracking-[0.18em] text-[#b29a63]">Healthcare · Frontend case study</p>
          <h1 className="display mt-4 text-4xl leading-[1.05] tracking-tight sm:text-6xl">Checkup Salamat<span className="mt-3 block text-2xl font-normal text-muted-foreground sm:text-4xl">Online appointment booking & clinic management.</span></h1>
          <p className="mt-6 max-w-3xl text-base leading-8 text-muted-foreground">{content.introduction}</p>
          <div className="my-8 flex flex-wrap items-center gap-3">
            {["Vue 3", "Nuxt.js", "TypeScript", "Pinia"].map((tag) => <span key={tag} className="rounded-full border border-border px-4 py-2 text-xs">{tag}</span>)}
            <a href={project.demo} target="_blank" rel="noreferrer" className="rounded-full bg-foreground px-5 py-2 text-sm text-background">Visit live website ↗</a>
          </div>
          <figure className="overflow-hidden rounded-2xl bg-surface">
            <Image src="/images/checkup/responsivee.png" alt="Checkup Salamat healthcare booking platform on desktop, tablet and mobile devices" width={940} height={788} priority sizes="(max-width: 1152px) 100vw, 1072px" className="max-h-[640px] w-full object-contain" />
          </figure>
        </header>

        <section aria-labelledby="role-heading" className="my-14 grid gap-8 border-y border-border py-8 md:grid-cols-[1fr_2fr]">
          <div><p className="text-xs uppercase tracking-widest text-[#b29a63]">My contribution</p><h2 id="role-heading" className="display mt-3 text-3xl">{content.role?.title}</h2></div>
          <div><p className="leading-7 text-muted-foreground">{content.role?.description}</p><ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-6">{content.responsibilities?.map((item) => <li key={item}>{item}</li>)}</ul></div>
        </section>

        <EngineeringPractice delivery={content.delivery} />

        <section aria-labelledby="features-heading">
          <h2 id="features-heading" className="display text-3xl sm:text-4xl">One platform. Connected workflows.</h2>
          <div className="my-8 grid gap-4 md:grid-cols-3">{content.features?.map((feature, index) => <article key={feature.title} className="rounded-2xl border border-border bg-surface p-6"><span className="text-xs text-[#b29a63]">0{index + 1}</span><h3 className="mt-5 text-lg font-semibold">{feature.title}</h3><p className="mt-3 text-sm leading-7 text-muted-foreground">{feature.description}</p></article>)}</div>
          <div className="grid gap-6 md:grid-cols-2">
            <AnimatedPreview poster="/images/checkup/booking.png" animation="/images/checkup/booking-preview.gif" alt="Screenshot sequence showing appointment selection and the payment summary" />
            <AnimatedPreview poster="/images/checkup/responsivee.png" animation="/images/checkup/platform-preview.gif" alt="Screenshot sequence showing responsive device layouts and the clinic appointment calendar" />
          </div>
        </section>

        <section aria-labelledby="screens-heading" className="mt-14">
          <h2 id="screens-heading" className="display text-3xl sm:text-4xl">A closer look at the experience.</h2>
          <div className="mt-8 grid gap-8 md:grid-cols-2">{screenshots.map((shot) => <figure key={shot.src}>
            <a href={shot.src} target="_blank" rel="noreferrer" aria-label={`${shot.title}: open full-size screenshot`} className="relative block aspect-[4/3] overflow-hidden rounded-xl border border-border bg-white focus-visible:outline-2 focus-visible:outline-accent"><Image src={shot.src} alt={shot.alt} fill sizes="(max-width: 768px) 100vw, 536px" className="object-contain" /></a>
            <figcaption className="mt-4"><h3 className="text-sm font-semibold">{shot.title}</h3><p className="mt-2 text-sm leading-6 text-muted-foreground">{shot.caption}</p></figcaption>
          </figure>)}</div>
        </section>

        <section aria-labelledby="engineering-heading" className="mt-14 border-t border-border pt-10">
          <h2 id="engineering-heading" className="display text-3xl sm:text-4xl">Engineering behind the experience.</h2>
          <div className="mt-8 grid gap-8 md:grid-cols-2">{content.challenges.map((challenge) => <div key={challenge.title}><h3 className="text-lg font-semibold">{challenge.title}</h3><p className="mt-3 text-sm leading-7 text-muted-foreground">{challenge.description}</p></div>)}</div>
          <dl className="mt-8 grid gap-4 rounded-2xl bg-surface p-6 sm:grid-cols-2">{Object.entries(content.techStack).map(([label, value]) => <div key={label}><dt className="text-xs uppercase tracking-wider text-muted-foreground">{label}</dt><dd className="mt-2 text-sm">{value}</dd></div>)}</dl>
        </section>

        <section aria-labelledby="outcome-heading" className="mt-12 rounded-2xl border border-border p-6 sm:p-10">
          <h2 id="outcome-heading" className="display text-3xl">Built for everyday clinic operations.</h2>
          <ul className="mt-5 list-disc space-y-3 pl-5 text-sm leading-7 text-muted-foreground">{content.results.map((result) => <li key={result}>{result}</li>)}</ul>
          <Link href="/#contact" className="mt-8 inline-block border-b border-[#b29a63] pb-2 text-sm">Have a platform to build? Let’s talk ↗</Link>
        </section>
      </main>
      <Footer />
    </>
  );
}
