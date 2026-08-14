import Link from "next/link";

export default function NotFound() {
  return (
    <main className="case-study-page">
      <div className="page-shell" style={{ minHeight: "60vh", display: "grid", placeItems: "center", textAlign: "center" }}>
        <div>
          <p className="eyebrow">404 · Олдсонгүй</p>
          <h1 style={{ fontFamily: "var(--font-display), Georgia, serif", fontSize: "clamp(64px, 12vw, 150px)", lineHeight: ".8", margin: 0 }}>Энэ хуудас алга.</h1>
          <Link href="/#home" className="button button--primary" style={{ marginTop: 34 }}>Нүүр хуудас руу буцах</Link>
        </div>
      </div>
    </main>
  );
}
