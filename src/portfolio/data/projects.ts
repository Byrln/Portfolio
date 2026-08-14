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
      "Бүтээгдэхүүний каталог, хайлт, төлбөр, контентын удирдлагыг нэг цэгт зангидсан онлайн худалдааны туршлага.",
    url: "https://satori.mn",
    image: "/assets/project-satori.png",
    alt: "Satori.mn онлайн худалдааны төслийн дэлгэц",
  },
  {
    id: "khunnu",
    number: "PROJECT 02",
    title: "Khunnu Hotel",
    category: "hospitality",
    discipline: "Hospitality / Booking",
    summary:
      "Өрөөний мэдээлэл, үйлчилгээ, онлайн захиалга, CMS удирдлагатай зочид буудлын албан ёсны сайт.",
    url: "https://khunnuhotel.com",
    image: "/assets/project-khunnu.png",
    alt: "Khunnu Hotel төслийн дэлгэц",
    featured: true,
  },
  {
    id: "tosa",
    number: "PROJECT 03",
    title: "Tosa Clinic",
    category: "health",
    discipline: "Healthcare / Web",
    summary:
      "Үйлчилгээ, эмч нарын мэдээлэл, цаг авах урсгалыг ойлгомжтой нэгтгэсэн эмнэлгийн платформ.",
    url: "https://tosaclinic.com",
    image: "/assets/project-tosa.png",
    alt: "Tosa Clinic төслийн дэлгэц",
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
  },
  {
    id: "mongolnomadic",
    number: "PROJECT 06",
    title: "Mongol Nomadic",
    category: "hospitality",
    discipline: "Travel / Hospitality",
    summary:
      "Байрлах орчин, соёлын хөтөлбөр, үйлчилгээ, захиалгын аяллыг нэг дор холбосон аялал жуулчлалын вэб туршлага.",
    url: "https://mongolnomadic.com",
    image: "/projects/mongolnomadic.png",
    alt: "Mongol Nomadic жуулчны баазын вэбсайт",
    featured: true,
  },
  {
    id: "maikhantolgoi",
    number: "PROJECT 07",
    title: "Maikhan Tolgoi",
    category: "hospitality",
    discipline: "Hospitality / Booking",
    summary:
      "Жуулчны баазын байр, тав тух, үйлчилгээ, блог болон захиалгын шийдвэрийг нэг урсгалд багтаасан танилцуулга сайт.",
    url: "https://maikhantolgoi.com",
    image: "/projects/maikhantolgoi.png",
    alt: "Maikhan Tolgoi жуулчны баазын вэбсайт",
  },
  {
    id: "isgholdings",
    number: "PROJECT 08",
    title: "ISG Holdings",
    category: "infrastructure",
    discipline: "Corporate / Infrastructure",
    summary:
      "Уул уурхай, барилга, цахилгаан, автоматжуулалт, харилцаа холбоо, ICT шийдлүүдийг capability-гаар нь тодорхойлсон байгууллагын сайт.",
    url: "https://isgholdings.mn",
    image: "https://www.isgholdings.mn/_next/image?url=%2Fassets%2Fhero.png&w=1920&q=75",
    alt: "ISG Holdings байгууллагын вэбсайт",
  },
  {
    id: "asuri",
    number: "PROJECT 09",
    title: "asuri.mn",
    category: "commerce",
    discipline: "Commerce / Catalog",
    summary:
      "Зочлох үйлчилгээний бүтээгдэхүүнийг ангилал, хайлт, холбоо барих урсгалтайгаар танилцуулсан каталог.",
    url: "https://asuri.mn",
    image: "/projects/asuri.png",
    alt: "asuri.mn бүтээгдэхүүний каталог",
  },
  {
    id: "toms",
    number: "PROJECT 10",
    title: "TOMS",
    category: "product",
    discipline: "Travel / Product",
    summary:
      "Аяллын компаниудын аялал, гаралт, захиалга, төлбөр, харилцагчийн мэдээллийг нэг ажлын урсгалд төвлөрүүлэх бүтээгдэхүүн.",
    url: "#contact",
    image: "/projects/toms.png",
    alt: "TOMS аяллын технологийн бүтээгдэхүүн",
  },
];
