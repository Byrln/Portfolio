import { CheckCircle, Code, Compass, Lightning, Stack } from "@phosphor-icons/react/dist/ssr";

const values = [
  {
    icon: Compass,
    title: "Зорилгоос эхэлнэ",
    text: "Бизнесийн хэрэгцээ, хэрэглэгчийн замнал, хэмжигдэх үр дүнг эхлээд ойлгоно.",
  },
  {
    icon: Stack,
    title: "Бүтэн системээр",
    text: "Зөвхөн гоё дэлгэц биш — контент, өгөгдөл, захиалга, админ урсгалыг хамтад нь бодно.",
  },
  {
    icon: Lightning,
    title: "Хэрэглээнд бэлэн",
    text: "Хурдан, responsive, засварлахад ойлгомжтой бүтээгдэхүүн болгон хүлээлгэн өгнө.",
  },
  {
    icon: Code,
    title: "Тодорхой харилцаа",
    text: "Явц, шийдвэр, дараагийн алхмыг бизнесийн хэлээр ил тод байлгана.",
  },
];

export const AboutSection = () => {
  return (
    <section className="about-section" id="about">
      <div className="page-shell">
        <div className="section-intro section-intro--split">
          <div>
            <p className="eyebrow">Миний тухай</p>
            <h2>Таны талд сууж боддог хөгжүүлэгч.</h2>
          </div>
          <div className="about-copy">
            <p>
              Намайг <strong>Баяржавхлан</strong> гэдэг. Би бизнесийн санааг зөвхөн нэг
              хуудас сайт биш, өдөр тутам ашиглагддаг дижитал бүтээгдэхүүн болгоход
              тусалдаг.
            </p>
            <p>
              Вэб, захиалга, CMS болон дотоод системийн ажлыг нэг зураглалд харж,
              багтай чинь ойлгомжтой хамтран ажиллахыг чухалчилдаг.
            </p>
            <div className="about-proof">
              <CheckCircle size={18} weight="fill" />
              <span>Асуудлыг ойлгоно · шийдлийг бүтээнэ · хариуцлагатай хүлээлгэн өгнө</span>
            </div>
          </div>
        </div>

        <div className="value-grid" aria-label="Ажлын зарчим">
          {values.map(({ icon: Icon, title, text }) => (
            <article className="value-item" key={title}>
              <Icon size={24} weight="duotone" />
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
