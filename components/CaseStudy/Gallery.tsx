// components/CaseStudy/Gallery.tsx
"use client";

import Image from "next/image";
import { useState, useEffect  } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface GalleryProps {
  images: string[];
  coverImage: string;
}

export default function Gallery({ images, coverImage }: GalleryProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  // Combine coverImage with images array
  const allImages = [coverImage, ...images];

  const openModal = (src: string, index: number) => {
    setSelectedImage(src);
    setCurrentIndex(index);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  useEffect(() => {
    if (!selectedImage) {
      document.body.style.overflow = "";
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [selectedImage]);

  const navigateImage = (direction: "prev" | "next") => {
    if (direction === "prev") {
      setCurrentIndex((prev) => (prev === 0 ? allImages.length - 1 : prev - 1));
      setSelectedImage(allImages[currentIndex === 0 ? allImages.length - 1 : currentIndex - 1]);
    } else {
      setCurrentIndex((prev) => (prev === allImages.length - 1 ? 0 : prev + 1));
      setSelectedImage(allImages[currentIndex === allImages.length - 1 ? 0 : currentIndex + 1]);
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedImage) return;
      if (e.key === "Escape") closeModal();
      if (e.key === "ArrowRight") navigateImage("next");
      if (e.key === "ArrowLeft") navigateImage("prev");
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImage, currentIndex]);

  return (
    <>
      <section className="w-full my-12 flex flex-wrap justify-center">
        <h2 className="text-3xl font-bold mb-6 w-full">Project Gallery</h2>

        {images.length === 0 ? (
          // Show single cover image
          <div
            className="relative rounded-lg mx-auto transition-shadow w-full flex justify-center cursor-pointer hover:opacity-90 transition-opacity"
            onClick={() => openModal(coverImage, 0)}
          >
            <Image
              src={coverImage}
              alt="Project cover"
              width={600}
              height={2000}
              className="object-contain rounded-lg"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        ) : (
          // Show grid of images
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 w-full">
            {allImages.map((src, index) => (
              <div
                key={index}
                className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow cursor-pointer group"
                onClick={() => openModal(src, index)}
              >
                <Image
                  src={src}
                  alt={`Project ${index === 0 ? "cover" : `screenshot ${index}`}`}
                  fill
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                {/* Optional overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                  <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity text-sm font-medium bg-black/50 px-3 py-1 rounded-full">
                    🔍 Click to view
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          {/* Close button */}
          <button
            onClick={closeModal}
            className="absolute top-4 right-4 text-white/80 hover:text-white transition-colors z-10"
            aria-label="Close modal"
          >
            <X size={36} />
          </button>

          {/* Navigation buttons - only if more than 1 image */}
          {allImages.length > 1 && (
            <>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  navigateImage("prev");
                }}
                className="absolute left-4 text-white/80 hover:text-white transition-colors z-10 p-2 rounded-full bg-black/50 hover:bg-black/70"
                aria-label="Previous image"
              >
                <ChevronLeft size={40} />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  navigateImage("next");
                }}
                className="absolute right-4 text-white/80 hover:text-white transition-colors z-10 p-2 rounded-full bg-black/50 hover:bg-black/70"
                aria-label="Next image"
              >
                <ChevronRight size={40} />
              </button>

              {/* Image counter */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/60 text-sm bg-black/50 px-4 py-2 rounded-full">
                {currentIndex + 1} / {allImages.length}
              </div>
            </>
          )}

          {/* Image container */}
          <div
            className="relative w-full max-w-7xl h-full max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={selectedImage}
              alt="Project image"
              fill
              className="object-contain"
              sizes="100vw"
              priority
              quality={100}
            />
          </div>
        </div>
      )}
    </>
  );
}