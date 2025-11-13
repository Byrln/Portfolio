"use client"
import grainImage from "@/assets/images/grain.jpg";
import { ContactDialog } from "@/components/ContactDialog";

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
              <h2 className="font-serif text-2xl md:text-3xl">
                Хамтдаа гайхалтай зүйлийг бүтээе!
              </h2>
              <p className="text-sm md:text-base mt-2">
                Шинэ төсөл эхлүүлэхэд бэлэн үү? Холбогдоод таны санааг хэрхэн
                бодит болгох талаар ярилцъя.
              </p>
            </div>
            <div>
              <ContactDialog initialSubject="Төсөл санал" source="contact-section" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
