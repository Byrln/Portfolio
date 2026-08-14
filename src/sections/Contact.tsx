"use client";

import Link from "next/link";
import { Check, Copy, EnvelopeSimple, FacebookLogo, Phone } from "@phosphor-icons/react";
import { useState } from "react";

export const ContactSection = () => {
  const [copied, setCopied] = useState(false);
  const email = "contact.byrln@gmail.com";

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  };

  return (
    <section className="contact-section" id="contact">
      <div className="page-shell contact-shell">
        <div>
          <p className="eyebrow">Шууд холбоо</p>
          <h2>Танд бодит болгох санаа байна уу?</h2>
          <p className="contact-lede">
            Санаагаа товч ярь. Би бизнесийн зорилгыг ойлгоод, дараагийн алхмыг хамт
            тодорхойлоход бэлэн.
          </p>
        </div>

        <div className="contact-actions">
          <a className="contact-action contact-action--primary" href="tel:+97699644096">
            <Phone size={22} weight="bold" />
            <span><small>Утас</small>+976 9964 4096</span>
          </a>
          <a className="contact-action" href="https://www.facebook.com/byrlnnn" target="_blank" rel="noreferrer">
            <FacebookLogo size={22} weight="fill" />
            <span><small>Facebook</small>Bayrjavkhlan</span>
          </a>
          <div className="contact-action contact-action--email">
            <EnvelopeSimple size={22} weight="bold" />
            <span><small>Имэйл</small>{email}</span>
            <button type="button" onClick={copyEmail} aria-label="Имэйл хуулах" title="Имэйл хуулах">
              {copied ? <Check size={18} weight="bold" /> : <Copy size={18} weight="bold" />}
            </button>
          </div>
          <Link className="contact-deal-link" href="/deal">
            Дэлгэрэнгүй ажил санал илгээх →
          </Link>
        </div>
      </div>
    </section>
  );
};
