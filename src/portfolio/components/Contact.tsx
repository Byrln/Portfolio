import { useEffect, useRef, useState } from "react";

const email = "contact.byrln@gmail.com";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const resetTimer = useRef<number | undefined>(undefined);

  useEffect(
    () => () => {
      window.clearTimeout(resetTimer.current);
    },
    [],
  );

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
    } catch {
      // The visible email is still exposed when clipboard permission is denied.
    }

    setCopied(true);
    window.clearTimeout(resetTimer.current);
    resetTimer.current = window.setTimeout(() => setCopied(false), 2200);
  };

  return (
    <section className="contact" id="contact" data-od-id="contact-section">
      <div className="container">
        <p className="hand">дараагийн санааг хамтдаа бүтээе</p>
        <h2 data-od-id="contact-heading">Танд бодит болгох санаа байна уу?</h2>
        <div className="contact-actions">
          <a
            className="primary-cta"
            href={`mailto:${email}`}
            data-od-id="contact-email-cta"
          >
            Имэйл бичих
          </a>
          <button
            className="copy-btn"
            type="button"
            data-od-id="copy-email-button"
            onClick={copyEmail}
          >
            {copied ? "Хууллаа" : "Имэйл хуулах"}
          </button>
        </div>
        <p className="copy-note" aria-live="polite">
          {copied ? email : ""}
        </p>
      </div>
    </section>
  );
}
