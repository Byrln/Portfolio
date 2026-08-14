/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { ArrowUpRight, FacebookLogo, Phone } from "@phosphor-icons/react/dist/ssr";

export const HeroSection = () => {
  return (
    <section className="hero-section" id="home">
      <div className="page-shell hero-shell">
        <div className="hero-copy">
          <p className="eyebrow">Бизнесийн түнш · Дижитал шийдэл</p>
          <h1>
            Бизнесийн зорилгыг <em>бодит</em> дижитал шийдэл болгоно.
          </h1>
          <p className="hero-lede">
            Вэбсайт, захиалга болон дотоод системийг бизнесийн зорилготой нь холбож,
            ойлгомжтой хэрэглээтэй бүтэн бүтээгдэхүүн болгон хөгжүүлдэг.
          </p>

          <div className="hero-actions">
            <a className="button button--primary" href="tel:+97699644096">
              <Phone size={18} weight="bold" />
              +976 9964 4096
            </a>
            <a
              className="button button--secondary"
              href="https://www.facebook.com/byrlnnn"
              target="_blank"
              rel="noreferrer"
            >
              <FacebookLogo size={18} weight="fill" />
              Facebook
            </a>
          </div>

          <Link href="#projects" className="hero-scroll-link">
            Хийсэн ажлуудыг үзэх <ArrowUpRight size={16} weight="bold" />
          </Link>
        </div>

        <div className="hero-visual" aria-label="Хийсэн төслүүдийн жишээ зургууд">
          <div className="hero-visual__line" />
          <div className="hero-card hero-card--back">
            <img src="/projects/asuri.png" alt="asuri.mn-ийн бүтээгдэхүүний каталог" />
            <span>asuri.mn · каталог</span>
          </div>
          <div className="hero-card hero-card--middle">
            <img src="/projects/mongolnomadic.png" alt="Mongol Nomadic жуулчны бааз" />
            <span>mongolnomadic.com · booking</span>
          </div>
          <div className="hero-card hero-card--front">
            <img src="/projects/maikhantolgoi.png" alt="Maikhan Tolgoi tourist camp" />
            <span>maikhantolgoi.com · hospitality</span>
          </div>
          <div className="hero-stamp">Бүтэн бүтээгдэхүүн<br />нэг зорилгын төлөө</div>
        </div>
      </div>
    </section>
  );
};
