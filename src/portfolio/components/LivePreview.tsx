"use client";

import { useEffect, useState } from "react";

type LivePreviewProps = {
  url: string;
  title: string;
  image: string;
  alt: string;
};

export default function LivePreview({ url, title, image, alt }: LivePreviewProps) {
  const [status, setStatus] = useState<"loading" | "loaded" | "failed">("loading");

  useEffect(() => {
    const timeout = window.setTimeout(() => {
      setStatus((current) => current === "loading" ? "failed" : current);
    }, 5000);
    return () => window.clearTimeout(timeout);
  }, []);

  return <>
    <div className="case-live-frame">
      <iframe
        src={url}
        title={`${title} live website`}
        loading="lazy"
        onLoad={() => setStatus("loaded")}
        onError={() => setStatus("failed")}
      />
    </div>
    {status === "failed" && <>
      <p className="case-live-note">Энэ сайт iframe-г хаасан тул төслийн танилцуулга зургийг харуулж байна.</p>
      <figure className="case-image-fallback"><img src={image} alt={alt} /></figure>
    </>}
  </>;
}
