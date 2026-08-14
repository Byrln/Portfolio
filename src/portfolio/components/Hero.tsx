export default function Hero() {
  return (
    <section className="hero" id="home" data-od-id="hero-section">
      <div className="container hero-layout">
        <div className="hero-copy">
          <div className="hero-meta">
            <p className="hero-kicker hand">намайг</p>
            <span className="hero-index">01 / INTRO</span>
          </div>
          <div className="hero-labels" aria-hidden="true">
            <span className="label-tape">код бүтээнэ</span>
            <span className="label-tape highlight">детальд дуртай</span>
          </div>
          <h1 data-od-id="hero-name"><span>БАЯР</span><span>ЖАВХЛАН</span></h1>
          <div className="hero-rule" aria-hidden="true" />
          <p className="hero-statement" data-od-id="hero-headline">
            Би хэрэглэхэд эвтэйхэн, ойлгомжтой веб туршлага бүтээдэг.
          </p>
          <div className="hero-actions">
            <a className="primary-cta" href="mailto:contact.byrln@gmail.com" data-od-id="hero-contact-cta">
              Холбогдох <span aria-hidden="true">↗</span>
            </a>
            <span className="hero-scroll">доош гүйлгэх ↓</span>
          </div>
        </div>
        <div className="hero-portrait-wrap">
          <span className="portrait-note hand">энэ бол би</span>
          <figure className="hero-portrait">
            <div className="portrait-topline"><span>БАЯРЖАВХЛАН / 2026</span><span>001</span></div>
            <img src="/assets/avatar-byrln.png" alt="Баяржавхлангийн хөрөг" />
            <figcaption><span>Web developer</span><span>Ulaanbaatar, MN</span></figcaption>
          </figure>
          <div className="portrait-stamp" aria-hidden="true">OPEN<br />FOR<br />WORK</div>
        </div>
      </div>
      <div className="hero-footer container">
        <span>SOFTWARE / INTERFACE / DETAIL</span>
        <span className="status"><i aria-hidden="true" /> Шинэ төсөлд нээлттэй</span>
      </div>
    </section>
  );
}
