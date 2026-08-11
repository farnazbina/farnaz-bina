// components/CaseStudy/ContentSection.tsx
interface ContentSectionProps {
  title: string;
  children: React.ReactNode;
}

export default function ContentSection({ title, children }: ContentSectionProps) {
  return (
    <section className="my-8">
      <h2 className="text-2xl font-semibold mb-3">{title}</h2>
      <div className="text-gray-700 dark:text-gray-300 leading-relaxed">
        {children}
      </div>
    </section>
  );
}