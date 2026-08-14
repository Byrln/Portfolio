import type { CSSProperties } from "react";

const skills = [
  { name: "Next.js", rotation: "-1deg" },
  { name: "TypeScript", rotation: "1deg" },
  { name: "UI / UX", rotation: "-1deg" },
  { name: "PostgreSQL", rotation: "1deg" },
];

export default function About() {
  return (
    <section className="about" id="about" data-od-id="about-section">
      <div className="container">
        <div className="section-intro">
          <span className="eyebrow">01 / Миний тухай</span>
        </div>
        <div className="about-grid">
          <figure
            className="polaroid left avatar"
            data-od-id="about-portrait"
          >
            <img src="/assets/avatar-byrln.png" alt="Byrln-ийн дүрслэл" />
            <small>Ulaanbaatar, MN</small>
          </figure>
          <div className="about-copy">
            <h2 className="hand" data-od-id="about-heading">
              Юу байна?
            </h2>
            <p>
              Намайг Баяржавхлан гэдэг. Би санааг цэгцтэй, хэрэглэхэд эвтэйхэн
              дижитал бүтээгдэхүүн болгох дуртай. Жижиг деталь, гэнэтийн
              нөхцөлүүд, бодитоор ажилладаг шийдэлд анхаардаг.
            </p>
            <div className="skills" aria-label="Ур чадвар">
              {skills.map((skill) => (
                <span
                  className="skill"
                  key={skill.name}
                  style={{ "--r": skill.rotation } as CSSProperties}
                >
                  {skill.name}
                </span>
              ))}
            </div>
          </div>
          <figure className="polaroid right" data-od-id="about-workspace">
            <img
              src="/assets/project-khunnu.png"
              alt="Khunnu Hotel төслийн дэлгэц"
            />
            <small>selected work / 2026</small>
          </figure>
        </div>
      </div>
    </section>
  );
}
