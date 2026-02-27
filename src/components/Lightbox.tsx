import { useEffect, useCallback, useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface Props {
  images: string[];
  initialIndex: number;
  onClose: () => void;
}

export default function Lightbox({ images, initialIndex, onClose }: Props) {
  const [index, setIndex] = useState(initialIndex);
  const [touchStart, setTouchStart] = useState<number | null>(null);

  const prev = useCallback(() => setIndex((i) => (i - 1 + images.length) % images.length), [images.length]);
  const next = useCallback(() => setIndex((i) => (i + 1) % images.length), [images.length]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    document.addEventListener("keydown", handler);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handler);
      document.body.style.overflow = "";
    };
  }, [onClose, prev, next]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[hsl(0_0%_0%/0.9)]" onClick={onClose}>
      <div className="relative flex h-full w-full items-center justify-center" onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose} className="absolute top-4 right-4 z-10 text-[hsl(0_0%_100%/0.8)] hover:text-[hsl(0_0%_100%)]" aria-label="Close">
          <X className="h-7 w-7" />
        </button>

        <button onClick={prev} className="absolute left-4 z-10 text-[hsl(0_0%_100%/0.8)] hover:text-[hsl(0_0%_100%)]" aria-label="Previous">
          <ChevronLeft className="h-8 w-8" />
        </button>

        <img
          src={images[index]}
          alt={`Gallery image ${index + 1}`}
          className="max-h-[85vh] max-w-[90vw] object-contain"
          onTouchStart={(e) => setTouchStart(e.touches[0].clientX)}
          onTouchEnd={(e) => {
            if (touchStart === null) return;
            const diff = e.changedTouches[0].clientX - touchStart;
            if (diff > 50) prev();
            if (diff < -50) next();
            setTouchStart(null);
          }}
        />

        <button onClick={next} className="absolute right-4 z-10 text-[hsl(0_0%_100%/0.8)] hover:text-[hsl(0_0%_100%)]" aria-label="Next">
          <ChevronRight className="h-8 w-8" />
        </button>

        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-sm text-[hsl(0_0%_100%/0.7)]">
          {index + 1} of {images.length}
        </div>
      </div>
    </div>
  );
}
