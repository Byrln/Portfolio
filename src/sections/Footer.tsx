import Link from "next/link";
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";

export const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="page-shell site-footer__inner">
        <p>© {new Date().getFullYear()} Баяржавхлан · Улаанбаатар</p>
        <div className="site-footer__links">
          <a href="https://www.facebook.com/byrlnnn" target="_blank" rel="noreferrer">Facebook <ArrowUpRight size={14} /></a>
          <Link href="/deal">Deal form <ArrowUpRight size={14} /></Link>
          <Link href="/#home">Дээш буцах ↑</Link>
        </div>
      </div>
    </footer>
  );
};
