import SmileMemoji from "@/assets/images/punch.png";
import { FloatingStickers } from "@/components/FloatingStickers";
import Image from "next/image";

export const Footer = () => {
  return (
    <div className="relative">
      <FloatingStickers />
    <footer className="relative -z-10 overflow-x-clip">
      <div className="absolute h-[400px] w-[1600px] bottom-0 left-1/2 -translate-x-1/2 bg-emerald-300/30 [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)] -z-10"></div>
      <div className="container">
        <div className="border-t border-white/15 py-6 text-sm flex flex-col items-center">
          <div className="text-white/40">&copy; 2025, Бүх эрх хуулиар хамгаалагдсан.</div>
          <div className="flex items-center gap-8">
            <span>Хөгжүүлэгч Хүндэт</span>
            <a href="/about" className="inline-flex items-center gap-1.5">
              <span className="uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-center bg-clip-text text-transparent">
                Byrln
              </span>
              <Image src={SmileMemoji} alt="Me" className="size-8" />
            </a>
          </div>
        </div>
      </div>
    </footer>
    </div>
  );
};
