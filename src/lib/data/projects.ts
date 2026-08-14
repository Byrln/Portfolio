export type ProjectStatus = "live" | "upcoming";

export type Project = {
  slug: string;
  title: string;
  sector: string;
  status: ProjectStatus;
  summary: string;
  businessNeed: string;
  solution: string;
  features: string[];
  role: string;
  technologies: string[];
  images: string[];
  liveUrl?: string;
};

export const projects: Project[] = [
  {
    slug: "asuri.mn",
    title: "asuri.mn",
    sector: "Худалдаа / Каталог",
    status: "live",
    summary:
      "Зочлох үйлчилгээний бүтээгдэхүүнийг ангилал, хайлт, холбоо барих урсгалтайгаар танилцуулсан каталог.",
    businessNeed:
      "Бизнесийн санал, бүтээгдэхүүний ангиллыг ойлгомжтой хүргэж, сонирхсон хэрэглэгчийг шууд холбоо барихад хөтлөх.",
    solution:
      "Бүтээгдэхүүн хайх, ангиллаар үзэх, дэлгэрэнгүй мэдээлэлтэй танилцах, бизнесийн холбоо барих урсгалыг нэг цэгт төвлөрүүлсэн.",
    features: ["Бүтээгдэхүүний каталог", "Ангиллын навигаци", "Хайлтын туршлага", "Бизнесийн холбоо"],
    role: "Бүтээгдэхүүний бүтэц, интерфэйс, хөгжүүлэлт",
    technologies: ["Next.js", "TypeScript", "UI/UX", "SEO"],
    images: ["/projects/asuri.png"],
    liveUrl: "https://asuri.mn",
  },
  {
    slug: "mongolnomadic.com",
    title: "Mongol Nomadic",
    sector: "Аялал / Зочлох үйлчилгээ",
    status: "live",
    summary:
      "Монголын жуулчны баазын байр, хөтөлбөр, үйлчилгээ, захиалгын аяллыг нэг дор холбосон вэб туршлага.",
    businessNeed:
      "Гадаад, дотоодын аялагчдад байрлах сонголт, соёлын хөтөлбөр, үйлчилгээний үнэ цэнийг ойлгомжтой үзүүлж захиалгад хүргэх.",
    solution:
      "Accommodation, program, facilities, horse tour болон бусад үйлчилгээг CMS-ээр шинэчилж болох контентын бүтэцтэйгээр холбосон.",
    features: ["Байрлах хэсэг", "Хөтөлбөр ба үйлчилгээ", "CMS", "Захиалгын аялал"],
    role: "Бүрэн стек хөгжүүлэлт, контентын архитектур",
    technologies: ["Next.js", "TypeScript", "Prisma", "PostgreSQL"],
    images: ["/projects/mongolnomadic.png", "/projects/mongolnomadic-logo.png"],
    liveUrl: "https://mongolnomadic.com",
  },
  {
    slug: "maikhantolgoi.com",
    title: "Maikhan Tolgoi",
    sector: "Аялал / Зочлох үйлчилгээ",
    status: "live",
    summary:
      "Жуулчны баазын байр, тав тух, үйлчилгээ, блог болон захиалгын шийдвэрийг нэг урсгалд багтаасан сайт.",
    businessNeed:
      "Баазын онцлог, байрлах орчин, үйлчилгээг богино хугацаанд ойлгуулаад аялагчийг захиалга хийхэд итгэлтэй болгох.",
    solution:
      "Accommodation, amenities, services, blog болон booking CTA-г нэг визуал системд холбосон responsive танилцуулга сайт.",
    features: ["Байрлах мэдээлэл", "Amenities", "Үйлчилгээ", "Блог ба захиалга"],
    role: "Контент бүтэц, responsive интерфэйс, хөгжүүлэлт",
    technologies: ["Next.js", "TypeScript", "Responsive UI", "SEO"],
    images: ["/projects/maikhantolgoi.png"],
    liveUrl: "https://maikhantolgoi.com",
  },
  {
    slug: "isgholdings.mn",
    title: "ISG Holdings",
    sector: "Уул уурхай / Дэд бүтэц",
    status: "live",
    summary:
      "Уул уурхай, барилга, цахилгаан, автоматжуулалт, харилцаа холбоо, ICT шийдлүүдийг capability-гаар нь тодорхойлсон байгууллагын сайт.",
    businessNeed:
      "Олон чиглэлийн инженерийн чадавх, туршлага, түншлэл, төслийн түүхийг бизнесийн шийдвэр гаргагчид хурдан ойлгох.",
    solution:
      "Services, capability, timeline, partners болон холбоо барих мэдээллийг итгэл төрүүлэхүйц байгууллагын контентын бүтэцтэйгээр эмхэлсэн.",
    features: ["Capability", "Цахилгаан ба automation", "ICT ба communications", "Төслийн түүх ба partners"],
    role: "Байгууллагын контентын бүтэц, интерфэйс, хөгжүүлэлт",
    technologies: ["Next.js", "TypeScript", "Responsive UI", "Accessibility"],
    images: ["https://www.isgholdings.mn/_next/image?url=%2Fassets%2Fhero.png&w=1920&q=75"],
    liveUrl: "https://isgholdings.mn",
  },
  {
    slug: "toms",
    title: "TOMS",
    sector: "Аялал жуулчлалын технологи",
    status: "upcoming",
    summary:
      "Монголын аяллын компаниудад зориулсан аялал, гаралт, захиалга, төлбөр, харилцагчийн нэгдсэн систем. Удахгүй.",
    businessNeed:
      "Аяллын компаниудын өдөр тутмын аялал, захиалга, төлбөр, харилцагчийн мэдээллийг нэг ажлын урсгалд төвлөрүүлэх.",
    solution:
      "Олон tenant-тэй аяллын үйл ажиллагааны платформын бүтээн байгуулалт үргэлжилж байна.",
    features: ["Аяллын гаралт", "Захиалга", "Төлбөр", "Харилцагчийн нэгдсэн мэдээлэл"],
    role: "Бүтээгдэхүүний хөгжүүлэлт",
    technologies: ["Next.js", "TypeScript", "PostgreSQL"],
    images: ["/projects/toms.png"],
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
