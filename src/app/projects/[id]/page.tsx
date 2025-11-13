// app/projects/[id]/page.tsx
import fs from "fs";
import path from "path";
import LivePreview from "@/components/LivePreview";
import { mnShortDescriptions, mnLongDescriptions } from "@/lib/data/projectDescriptions";

type Params = {
  params: { id: string };
};

async function fetchSEO(url: string) {
  try {
    const res = await fetch(url, { next: { revalidate: 3600 } });
    const html = await res.text();
    const getMeta = (name: string, prop?: string) => {
      const regex = prop
        ? new RegExp(
            `<meta[^>]*property=["']${prop}["'][^>]*content=["']([^"']+)["']`,
            "i"
          )
        : new RegExp(
            `<meta[^>]*name=["']${name}["'][^>]*content=["']([^"']+)["']`,
            "i"
          );
      const match = html.match(regex);
      return match?.[1] ?? "";
    };
    const titleMatch = html.match(/<title>([^<]+)<\/title>/i);
    return {
      title: titleMatch?.[1] ?? "",
      description:
        getMeta("description") || getMeta("og:description", "og:description"),
    };
  } catch {
    return { title: "", description: "" };
  }
}

export default async function ProjectPage({ params }: Params) {
  const domain = params.id;
  const domainLower = domain.toLowerCase();
  const liveUrl = `https://${domain}`;
  const previewImage = `/projects/${domain}.png`;

  // Try to read optional metadata from public/projects/<id>.json
  const metaPath = path.join(
    process.cwd(),
    "public",
    "projects",
    `${domain}.json`
  );
  let meta: {
    title?: string;
    description?: string;
    longDescription?: string;
    accentColor?: string;
    company?: string;
    year?: string;
    technologies?: string[];
    shortDescription?: string;
    role?: "frontend" | "fullstack";
  } = {};
  try {
    if (fs.existsSync(metaPath)) {
      const raw = fs.readFileSync(metaPath, "utf-8");
      meta = JSON.parse(raw);
    }
  } catch {
    meta = {};
  }

  const accentColor = meta.accentColor ?? "#14b8a6"; // teal-500
  const seo = await fetchSEO(liveUrl);

  // Per-domain detailed Mongolian content (overridable by meta/*.json)
  const domainContent: Record<
    string,
    {
      title?: string;
      role: "frontend" | "fullstack";
      short: string;
      long: string;
    }
  > = {
    "vip76.mn": {
      title: "Vip76.mn — UI/Front‑end шинэчлэл",
      role: "frontend",
      short:
        "Улсын Их Хурлын гишүүдийн мэдээллийг харах хэрэглэгчийн интерфэйсийг сайжруулж, хурд ба хэрэглэхэд ээлтэй байдлыг онцлов.",
      long:
        "Next.js + Tailwind CSS дээр үндэслэн дахин ашиглагдахуйц компонентын систем, динамик ачаалалт (lazy load), холбогдох кэшлэлт, SEO тэгшитгэлийг хэрэгжүүлэв. Lighthouse шалгалтаар гүйцэтгэл ба accessibility‑г сайжруулж, UI/UX‑ийн micro‑interaction болон хариу үйлдлийг нарийн тааруулсан. Доорх шууд урсгалаар (iframe) үзнэ үү; iframe‑ийг хориглосон тохиолдолд 'Төслийг шууд үзэх' гэдгээр шинэ таб дээр нээгээрэй.",
    },
    "khunnuhotel.com": {
      title: "Khunnu Hotel — Бүрэн стек захиалгын урсгал",
      role: "fullstack",
      short:
        "Зочид буудлын өрөөний захиалга, контентын удирдлага, SEO‑г нэгтгэсэн бүрэн стек шийдэл.",
      long:
        "SSR/SSG‑тэй нэгдсэн архитектур дээр захиалгын урсгалыг боловсруулж, өгөгдлийн сангийн загварчлал, контентын удирдлагын хэсэг, имэйл мэдэгдэл, кэшлэлт ба аюулгүй байдлын тохиргоог хэрэгжүүлэв. Front‑end талд реактив UI, accessibility ба олон төхөөрөмжид нийцэлт хангаж ажиллав.",
    },
    "satori.mn": {
      title: "Satori.mn — Контент платформын архитектур",
      role: "fullstack",
      short:
        "Контентын ангилал, хайлт, хурдан үзүүлэх горимтой платформыг бүрэн стекээр хөгжүүлэв.",
      long:
        "API давхарга, өгөгдлийн загварчлал, динамик кэшлэлт, SSR рэндэрлэлтээр контентыг хурдан хүргэхийг зорив. UI талд категорийн навигаци, хайлт, responsive grid, Markdown/OG зургийн дэмжлэгийг нэмэв.",
    },
    "tosaclinic.com": {
      title: "TOSA Clinic — Онлайн цаг авалт ба мэдээллийн урсгал",
      role: "fullstack",
      short:
        "Эмнэлгийн үйлчилгээний мэдээлэл, онлайн цаг авалтын урсгалыг аюулгүй байдлаар шийдлээ.",
      long:
        "Form‑ын баталгаажуулалт, сервер талын хамгаалалт, өгөгдөл хадгалах давхарга, имэйл/мэдэгдлийн интеграц зэрэг back‑end хэрэгцээг хангаж, front‑end дээр UX‑ийг ойлгомжтой, хурдтай тэмдэглэлтэй болгосон.",
    },
    "worldarmliftingfederation.com": {
      title: "World Armlifting Federation — Олон хэлтэй эвентийн сайт",
      role: "fullstack",
      short:
        "Олон хэл дээрх контент, эвентийн хуудсууд, SEO ба гүйцэтгэлийг хослуулсан бүрэн стек шийдэл.",
      long:
        "Олон хэлний контентын менежмент, OG/мета тэгшитгэл, эвентийн цагийн хуваарь, дүрэм журам, медиа галерейг SSR‑тэй уялдуулж хөгжүүлэв. Front‑end дээр accessibility ба хурдны оптимизацийг чухалчилсан.",
    },
  };

  const content = domainContent[domainLower];
  const role: "frontend" | "fullstack" =
    meta.role ?? content?.role ?? (domainLower === "vip76.mn" ? "frontend" : "fullstack");
  const heroTitle = meta.title ?? content?.title ?? seo.title ?? domain;
  const shortDescription =
    mnShortDescriptions[domainLower] ?? meta.shortDescription ?? content?.short ??
    (role === "frontend"
      ? "Энэ төсөл дээр би зөвхөн UI/Front‑end хөгжүүлэлт хийсэн. Next.js, Tailwind CSS, TypeScript ашиглан хурдтай, хэрэглэгчдэд ээлтэй интерфэйс бүтээв."
      : "Энэ төсөл дээр би бүрэн стек (Full‑stack) хөгжүүлэлт хийсэн. Front‑end: Next.js, Tailwind CSS, TypeScript; Back‑end: PostgreSQL ба холболтын давхарга. Гүйцэтгэл, SEO, байршуулалтыг нэгдсэн байдлаар шийдсэн.");
  const longDescription =
    mnLongDescriptions[domainLower] ?? meta.longDescription ?? content?.long ??
    (role === "frontend"
      ? "UI/UX-г сайжруулж, хурдан ачаалдаг, хариу үйлдэл сайтай интерфэйс бүтээсэн. Кодын чанар, дахин ашиглалт, компонентын загварыг тэргүүнд тавьсан. Доор шууд урсгал (iframe) үзнэ үү. Хэрэв сайт iframe хориглосон бол 'Төслийг шууд үзэх' товчоор шинэ таб дээр нээгээрэй."
      : "API, өгөгдлийн сангийн загварчлал, SSR/SSG, кэшлэлт, аюулгүй байдал зэрэг Back‑end талын хэрэгцээг хангаж, Front‑end‑ийг UX-д төвлөрсөн байдлаар хөгжүүлсэн. Доор шууд урсгал (iframe) үзнэ үү. Хэрэв сайт iframe хориглосон бол 'Төслийг шууд үзэх' товчоор шинэ таб дээр нээгээрэй.");

  const blockedEmbedDomains = new Set(["satori.mn", "khunnuhotel.com", "www.khunnuhotel.com"]);

  return (
    <div className="min-h-screen bg-gray-900">
      <div className="relative overflow-hidden">
        {/* Hero Section with Gradient Overlay */}
        <div
          className="relative h-[40vh] flex items-end"
          style={{ backgroundColor: accentColor + "10" }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent" />
          <div className="container relative pb-12 z-10">
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-gray-300">
                <span>{meta.company ?? domain}</span>
                <span>•</span>
                <span>{meta.year ?? ""}</span>
              </div>
              <h1 className="text-5xl font-bold text-white">
                {heroTitle}
              </h1>
            </div>
          </div>
        </div>

        {/* Main Content - Single column, full-width preview */}
        <div className="container py-12 space-y-10">
          <LivePreview liveUrl={liveUrl} title={`Preview of ${domain}`} />

          {blockedEmbedDomains.has(domainLower) && (
            <div className="mt-4 p-4 rounded-lg border border-yellow-500/40 bg-yellow-500/10 text-yellow-200">
              <p>
                Энэ сайт iframe дотроос харагдахыг хориглосон тул энд шууд урсгал
                үзүүлж боломжгүй. "Шинэ таб дээр нээх" товчоор сайт руу шууд
                орж үзнэ үү.
              </p>
            </div>
          )}

          <div className="prose prose-invert max-w-none">
            <h2 className="text-2xl font-semibold">Миний оролцоо</h2>
            <p className="text-xl text-gray-300 leading-relaxed">
              {shortDescription}
            </p>
            <p className="text-gray-400 mt-4 whitespace-pre-line">
              {longDescription}
            </p>
          </div>

          <div className="p-6 rounded-xl bg-gray-800/50 backdrop-blur-sm space-y-4">
            <h2 className="text-xl font-semibold text-white">
              Ашигласан технологи
            </h2>
            <div className="flex flex-wrap gap-2">
              {(meta.technologies && meta.technologies.length > 0
                ? meta.technologies
                : ["Next.js", "Tailwind CSS", "TypeScript", "PostgreSQL"]
              ).map((tech: string, index: number) => (
                <span
                  key={index}
                  className="px-3 py-1 rounded-full text-sm font-medium bg-gray-700 text-gray-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full px-6 py-3 text-center rounded-xl bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-white font-medium transition-all duration-300"
          >
            Шинэ таб дээр нээх
          </a>
        </div>
      </div>
    </div>
  );
}
