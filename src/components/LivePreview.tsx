"use client";

import { useRef } from "react";

interface LivePreviewProps {
  liveUrl: string;
  title: string;
}

export default function LivePreview({ liveUrl, title }: LivePreviewProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);

  const handleFullscreen = () => {
    const el = containerRef.current;
    if (!el) return;
    // Request fullscreen on the container for broad browser support
    const anyEl = el as any;
    if (el.requestFullscreen) el.requestFullscreen();
    else if (anyEl.webkitRequestFullscreen) anyEl.webkitRequestFullscreen();
    else if (anyEl.msRequestFullscreen) anyEl.msRequestFullscreen();
  };

  return (
    <div ref={containerRef} className="rounded-xl overflow-hidden border border-gray-800 bg-gray-800/30 w-full">
      <div className="bg-gray-900/80 text-gray-300 text-sm px-3 py-2 flex items-center justify-between">
        <span>{liveUrl}</span>
        <div className="flex items-center gap-3">
          <button
            onClick={handleFullscreen}
            className="px-3 py-1 rounded-md bg-gray-700 hover:bg-gray-600 text-gray-100"
            title="Бүтэн дэлгэц"
          >
            Бүтэн дэлгэц
          </button>
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal-400 hover:text-teal-300"
          >
            Шинэ таб дээр нээх
          </a>
        </div>
      </div>
      <div className="aspect-[16/9] bg-black w-full">
        <iframe src={liveUrl} className="w-full h-full" title={title} allowFullScreen />
      </div>
    </div>
  );
}