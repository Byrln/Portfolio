export default function Hero() {
  return (
    <section className="hero" id="home" data-od-id="hero-section">
      <div className="container">
        <p className="hero-kicker hand">намайг</p>
        <div className="hero-labels" aria-hidden="true">
          <span className="label-tape">код бүтээнэ</span>
          <span className="label-tape highlight">детальд дуртай</span>
        </div>
        <div className="nameplate">
          <h1 data-od-id="hero-name">BYRLN</h1>
        </div>
        <div className="status">
          <span className="status-dot" aria-hidden="true" />
          Шинэ төсөлд нээлттэй
        </div>
        <p className="hero-statement" data-od-id="hero-headline">
          Би төвөггүй ажилладаг, ойлгомжтой вэб туршлага бүтээдэг{" "}
          <span className="target" aria-hidden="true" />
        </p>
        <a
          className="primary-cta"
          href="mailto:contact.byrln@gmail.com"
          data-od-id="hero-contact-cta"
        >
          <svg viewBox="0 0 20 20" aria-hidden="true">
            <path
              d="M3 5.5h14v9H3zM3.5 6l6.5 5 6.5-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
            />
          </svg>
          Холбогдох
        </a>
      </div>
      <div className="orbit-avatar one" aria-hidden="true">
        <img src="/assets/avatar.png" alt="" />
      </div>
      <div className="orbit-avatar two" aria-hidden="true">
        <img src="/assets/avatar.png" alt="" />
      </div>
      <svg
        className="scribble"
        viewBox="0 0 1000 80"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          d="M0 55 C180 3 315 67 500 34 S820 10 1000 58"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.2"
        />
        <path
          d="M0 62 C190 17 350 69 520 42 S840 20 1000 64"
          fill="none"
          stroke="currentColor"
          strokeWidth=".7"
        />
      </svg>
    </section>
  );
}
