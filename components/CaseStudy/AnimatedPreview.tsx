"use client";

import Image from "next/image";
import { useState } from "react";

export default function AnimatedPreview({ poster, animation, alt }: { poster: string; animation: string; alt: string }) {
  const [playing, setPlaying] = useState(false);
  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-surface">
      <div className="relative aspect-[1100/780] bg-[#f7f5f1]">
        <Image src={playing ? animation : poster} alt={alt} fill sizes="(max-width: 768px) 100vw, 560px" className="object-contain" unoptimized={playing} />
      </div>
      <div className="flex items-center justify-between gap-4 border-t border-border px-4 py-3 text-xs">
        <span className="text-muted-foreground">Animated screenshot preview</span>
        <button type="button" onClick={() => setPlaying(!playing)} aria-pressed={playing} className="rounded-full border border-border px-4 py-2 font-medium focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent">
          {playing ? "Stop preview" : "Play preview"}
        </button>
      </div>
    </div>
  );
}
