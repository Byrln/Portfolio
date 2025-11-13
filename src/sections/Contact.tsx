"use client";
import grainImage from "@/assets/images/grain.jpg";
import { ContactDialog } from "@/components/ContactDialog";
import { GradientButton } from "@/components/ui/gradient-button";
import { ArrowUpRightIcon } from "lucide-react";
import { Manrope } from "next/font/google";

const manrope = Manrope({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "600", "700"],
});

export const ContactSection = () => {
  return (
    <div className="py-16 pt-12 lg:py-24 lg:pt-20" id="contact">
      <div className="container">
        <div className="bg-gradient-to-r from-emerald-300 to-sky-400 text-gray-900 py-8 px-10 rounded-3xl text-center md:text-left relative overflow-hidden z-0">
          <div
            className="absolute inset-0 opacity-5 -z-10"
            style={{ backgroundImage: `url(${grainImage.src})` }}
          ></div>
          <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center">
            <div className="">
              <h2
                className={`font-serif text-2xl md:text-3xl ${manrope.className}`}
              >
                Хамтдаа гайхалтай зүйлийг бүтээе!
              </h2>
              <p className={`text-sm md:text-base mt-2 ${manrope.className}`}>
                Шинэ төсөл эхлүүлэхэд бэлэн үү? Холбогдоод таны санааг хэрхэн
                бодит болгох талаар ярилцъя.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <a href="/deal" className="">
                <GradientButton
                  variant="variant"
                  className="text-white bg-gray-900 inline-flex items-center px-6 h-12 rounded-xl gap-2 w-max"
                >
                  <span className="font-semibold">Холбоо барих</span>
                  <ArrowUpRightIcon className="size-5" />
                </GradientButton>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
