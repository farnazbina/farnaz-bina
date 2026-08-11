// components/CaseStudy/Gallery.tsx
import Image from "next/image";

interface GalleryProps {
  images: string[];
}

export default function Gallery({ images }: GalleryProps) {
  return (
    <section className="w-full my-12">
      <h2 className="text-3xl font-bold mb-6">Project Gallery</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
        {images.map((src, index) => (
          <div
            key={index}
            className="relative aspect-video rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow"
          >
            <Image
              src={src}
              alt={`Project screenshot ${index + 1}`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        ))}
      </div>
    </section>
  );
}