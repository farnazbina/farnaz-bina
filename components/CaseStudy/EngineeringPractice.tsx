import type { Project } from "@/data/projects";

export default function EngineeringPractice({ delivery }: { delivery: Project["content"]["delivery"] }) {
  if (!delivery) return null;

  return (
    <section aria-labelledby="practice-heading" className="mb-14">
      <p className="text-xs uppercase tracking-[0.16em] text-[#b29a63]">How I work</p>
      <h2 id="practice-heading" className="display mt-3 text-3xl sm:text-4xl">{delivery.title}</h2>
      <div className="mt-8 grid gap-x-10 gap-y-8 md:grid-cols-2">
        {delivery.items.map((item) => (
          <article key={item.title} className="border-t border-border pt-5">
            <h3 className="text-lg font-semibold">{item.title}</h3>
            <p className="mt-3 text-sm leading-7 text-muted-foreground">{item.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
