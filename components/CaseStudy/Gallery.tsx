// components/CaseStudy/Gallery.tsx
import Image from "next/image";

interface GalleryProps {
  images: string[];
  coverImage: string
}

export default function Gallery({ images, coverImage }: GalleryProps) {
  return (
    <section className="w-full my-12 flex flex-wrap justify-center">
      <h2 className="text-3xl font-bold mb-6 w-full">Project Gallery</h2>
      {images.length === 1 ? (
        // Show single cover image
        <div className="relative rounded-lg mx-auto transition-shadow w-full flex justify-center">
          <Image
            src={coverImage}
            alt="Project cover"
            width={600}
            height={2000}
            className="object-cover rounded-lg"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      ) : (
        // Show grid of images
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 w-full">
          {images.map((src, index) => (
            <div
              key={index}
              className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow"
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
      )}
    </section>
  );
}