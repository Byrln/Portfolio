import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Баяржавхлан · Дижитал шийдэл",
  description: "Бизнесийн зорилгыг бодит дижитал шийдэл болгодог Монгол хөгжүүлэгч.",
  openGraph: {
    title: "Баяржавхлан · Дижитал шийдэл",
    description: "Вэбсайт, захиалга болон дотоод системийг бизнесийн зорилготой нь холбож бүтээнэ.",
    locale: "mn_MN",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="mn">
      <body>{children}</body>
    </html>
  );
}
