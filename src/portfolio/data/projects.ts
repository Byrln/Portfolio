export type ProjectCategory =
  | "all"
  | "commerce"
  | "hospitality"
  | "health"
  | "community"
  | "media"
  | "infrastructure"
  | "product";

export interface Project {
  id: string;
  number: string;
  title: string;
  category: Exclude<ProjectCategory, "all">;
  discipline: string;
  summary: string;
  url: string;
  image: string;
  alt: string;
  featured?: boolean;
  context: string;
  contribution: string;
  approach: string[];
  stack: string[];
}

export interface ProjectFilter {
  value: ProjectCategory;
  label: string;
}

export const projectFilters: ProjectFilter[] = [
  { value: "all", label: "Бүгд" },
  { value: "commerce", label: "Худалдаа" },
  { value: "hospitality", label: "Зочлох үйлчилгээ" },
  { value: "health", label: "Эрүүл мэнд" },
  { value: "infrastructure", label: "Дэд бүтэц" },
  { value: "product", label: "Бүтээгдэхүүн" },
  { value: "media", label: "Медиа" },
];

export const projects: Project[] = [
  {
    id: "satori",
    number: "PROJECT 01",
    title: "Satori.mn",
    category: "commerce",
    discipline: "E-commerce / Full stack",
    summary:
      "Бүтээгдэхүүнээ хайж олоод, сонгоод, төлбөрөө хийх хүртэлх бүх алхмыг нэг дор ойлгомжтой болгосон онлайн дэлгүүр.",
    url: "https://satori.mn",
    image: "/assets/project-satori.png",
    alt: "Satori.mn онлайн худалдааны төслийн дэлгэц",
    context: "Хэрэглэгч бүтээгдэхүүнээ хурдан олж, эргэлзэлгүйгээр худалдан авалтаа дуусгах хэрэгтэй байсан.",
    contribution: "Full-stack хөгжүүлэлт, интерфэйсийн бүтэц, каталог болон төлбөрийн урсгал.",
    approach: ["Каталог, хайлт, шүүлтийг нэг ойлгомжтой урсгал болгосон", "Хуудсыг хурдан ачаалахын тулд SSR болон кэшлэлтийг ашигласан", "Контент удирдах болон SEO бүтцийг цэгцэлсэн"],
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL"],
  },
  {
    id: "khunnu",
    number: "PROJECT 02",
    title: "Khunnu Hotel",
    category: "hospitality",
    discipline: "Hospitality / Booking",
    summary:
      "Өрөө, үйлчилгээ, байршлаа танилцуулж, зочдоо шууд захиалга хийхэд хүргэдэг зочид буудлын сайт.",
    url: "https://khunnuhotel.com",
    image: "/assets/project-khunnu.png",
    alt: "Khunnu Hotel төслийн дэлгэц",
    featured: true,
    context: "Зочин өрөө, үйлчилгээ, байршлын мэдээллийг нэг дороос ойлгоод, захиалга руу төвөггүй шилждэг байх нь гол зорилго байсан.",
    contribution: "Бүрэн стек архитектур, өрөөний мэдээллийн бүтэц, захиалгын урсгал, CMS.",
    approach: ["Өрөө сонгох ба захиалах алхмыг богиносгосон", "SSR/SSG рэндэрлэлт, кэшлэлтийг төлөвлөсөн", "Имэйл мэдэгдэл ба удирдлагын урсгалыг холбосон"],
    stack: ["Next.js", "TypeScript", "PostgreSQL", "Email integration"],
  },
  {
    id: "tosa",
    number: "PROJECT 03",
    title: "Tosa Clinic",
    category: "health",
    discipline: "Healthcare / Web",
    summary:
      "Үйлчилгээ, эмчийн мэдээлэл, цаг захиалгыг нэг дороос ойлгомжтой хүргэдэг эмнэлгийн сайт.",
    url: "https://tosaclinic.com",
    image: "/assets/project-tosa.png",
    alt: "Tosa Clinic төслийн дэлгэц",
    context: "Хүн өөрт хэрэгтэй үйлчилгээгээ хурдан олж, тохирох эмчээс цаг авахад нь итгэл төрүүлэхүйц энгийн урсгал хэрэгтэй байсан.",
    contribution: "UX бүтэц, responsive UI, формын баталгаажуулалт, сервер талын хамгаалалт.",
    approach: ["Үйлчилгээ ба эмчийн мэдээллийг эрэмбэлсэн", "Цаг авах формыг богино, тодорхой болгосон", "Мэдэгдэл болон админ удирдлагыг уялдуулсан"],
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL"],
  },
  {
    id: "walf",
    number: "PROJECT 04",
    title: "World Arm Lifting",
    category: "community",
    discipline: "Sports / Portal",
    summary:
      "Тэмцээн, дүрэм, оноо, мэдээ, гишүүнчлэлийг нэгтгэсэн олон улсын холбооны портал.",
    url: "https://worldarmliftingfederation.com",
    image: "/assets/project-walf.png",
    alt: "World Arm Lifting Federation төслийн дэлгэц",
    context: "Тэмцээн, дүрэм, оноо, мэдээ, гишүүнчлэлийн олон төрлийн мэдээллийг олон улсын хэрэглэгчдэд хүргэх портал.",
    contribution: "Контентын архитектур, олон хэл, эвентийн модуль, сервер талын рэндэрлэлт.",
    approach: ["Олон хэлтэй контентын бүтэц байгуулсан", "Тэмцээн ба онооны мэдээллийг тусгай модуль болгосон", "Медиа, мета мэдээлэл, accessibility-г сайжруулсан"],
    stack: ["Next.js", "TypeScript", "CMS", "SSR"],
  },
  {
    id: "vip76",
    number: "PROJECT 05",
    title: "Vip76.mn",
    category: "media",
    discipline: "Media / Front-end",
    summary:
      "Мэдээллийг хурдан унших, чиглүүлэхэд зориулсан дахин ашиглагдах компонент, responsive интерфэйсийн шинэчлэл.",
    url: "https://vip76.mn",
    image: "/assets/project-vip76.png",
    alt: "Vip76.mn төслийн дэлгэц",
    context: "Өдөр тутмын олон мэдээг хурдан уншуулахын зэрэгцээ дахин ашиглагдахуйц front-end систем бий болгох төсөл.",
    contribution: "UI болон front-end хөгжүүлэлт, компонентын систем, responsive зан төлөв.",
    approach: ["Мэдээний карт, жагсаалтыг дахин ашиглагдах компонент болгосон", "Lazy-load болон гүйцэтгэлийн оновчлол хийсэн", "SEO, accessibility, жижиг дэлгэцийн хэрэглээг сайжруулсан"],
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Component system"],
  },
];

export const getProject = (id: string) => projects.find((project) => project.id === id);
