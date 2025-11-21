"use client";
import grainImage from "@/assets/images/grain.jpg";
import { ContactDialog } from "@/components/ContactDialog";
import { GradientButton } from "@/components/ui/gradient-button";
import {
  ArrowUpRightIcon,
  Phone,
  Mail,
  Facebook,
  Copy,
  Check,
} from "lucide-react";
import { useState } from "react";
import { Manrope } from "next/font/google";

const manrope = Manrope({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "600", "700"],
});

export const ContactSection = () => {
  const phoneNumber = "+97699644096";
  const emailAddress = "contact.byrln@gmail.com";
  const facebookUrl = "https://www.facebook.com/byrlnnn";
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const copy = async (text: string, key: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedKey(key);
      setTimeout(() => setCopiedKey(null), 1500);
    } catch {}
  };
  return (
    <div className="py-16 pt-12 lg:py-24 lg:pt-20" id="contact">
      <div className="container">
        <div className="bg-gradient-to-r from-emerald-300 to-sky-400 text-gray-900 py-8 px-10 rounded-3xl text-center md:text-left relative overflow-hidden z-0">
          <div
            className="absolute inset-0 opacity-5 -z-10"
            style={{ backgroundImage: `url(${grainImage.src})` }}
          ></div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
            <div>
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
            <div className="flex flex-col items-center md:items-end gap-4">
              <div className="w-full max-w-md">
                <div className="rounded-2xl bg-white/20 text-gray-900 p-3 md:p-4 grid gap-3">
                  <div className="flex items-center justify-between">
                    <a
                      href={`tel:${phoneNumber}`}
                      aria-label="Утас руу залгах"
                      className="inline-flex items-center gap-2 font-medium hover:opacity-90"
                    >
                      <Phone className="w-4 h-4" /> 9964-4096
                    </a>
                    <button
                      aria-label="Утас хуулж авах"
                      className="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-white/30 hover:bg-white/40"
                      onClick={() => copy(phoneNumber, "phone")}
                    >
                      {copiedKey === "phone" ? (
                        <Check className="w-4 h-4" />
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                    </button>
                  </div>
                  <div className="flex items-center justify-between">
                    <a
                      href={`mailto:${emailAddress}`}
                      aria-label="Имэйл бичих"
                      className="inline-flex items-center gap-2 font-medium hover:opacity-90"
                    >
                      <Mail className="w-4 h-4" /> {emailAddress}
                    </a>
                    <button
                      aria-label="Имэйл хуулж авах"
                      className="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-white/30 hover:bg-white/40"
                      onClick={() => copy(emailAddress, "email")}
                    >
                      {copiedKey === "email" ? (
                        <Check className="w-4 h-4" />
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                    </button>
                  </div>
                  <div className="flex items-center justify-between">
                    <a
                      href={facebookUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Facebook хуудсанд очих"
                      className="inline-flex items-center gap-2 font-medium hover:opacity-90"
                    >
                      <Facebook className="w-4 h-4" /> Facebook
                    </a>
                  </div>
                </div>
              </div>
              <a href="/deal" className="w-full mx-auto">
                <GradientButton
                  variant="variant"
                  className="text-white bg-gray-900 inline-flex items-center px-14 md:px-32 h-12 rounded-xl gap-2 w-max"
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
