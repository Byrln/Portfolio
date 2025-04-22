"use client";

import { Card } from "@/components/Card";
import { SectionHeader } from "@/components/SectionHeader";
import BookImage from "@/assets/images/psychology_of_money.png";
import Image from "next/image";
import JavascriptIcon from "@/assets/icons/js.svg";
import HtmlIcon from "@/assets/icons/html5.svg";
import CssIcon from "@/assets/icons/css3.svg";
import ReactIcon from "@/assets/icons/react.svg";
import GithubIcon from "@/assets/icons/github.svg";
import PrismaIcon from "@/assets/icons/prism.svg";
import ShadcnIcon from "@/assets/icons/shadcn-ui_dark.svg";
import TailwindcssIcon from "@/assets/icons/tailwind-css-svgrepo-com.svg";
import PostgresqlIcon from "@/assets/icons/pg.svg";
import ForgotImg from "@/assets/images/ye.gif";
import { CardHeader } from "@/components/CardHeader";
import { IconItems } from "@/components/IconItems";
import { motion } from "framer-motion";
import { useRef } from "react";

const toolboxItems = [
  {
    title: "Javascript",
    iconType: JavascriptIcon,
  },
  {
    title: "HTML5",
    iconType: HtmlIcon,
  },
  {
    title: "CSS3",
    iconType: CssIcon,
  },
  {
    title: "Tailwindcss",
    iconType: TailwindcssIcon,
  },
  {
    title: "Shadcn UI",
    iconType: ShadcnIcon,
  },
  {
    title: "React",
    iconType: ReactIcon,
  },
  {
    title: "Github",
    iconType: GithubIcon,
  },
  {
    title: "Prisma",
    iconType: PrismaIcon,
  },
  {
    title: "Postgresql",
    iconType: PostgresqlIcon,
  },
];

const hobbies = [
  {
    title: "Reading",
    emoji: "📖",
    left: "10%",
    top: "5%",
  },
  {
    title: "Gaming",
    emoji: "🎮",
    left: "50%",
    top: "20%",
  },
  {
    title: "Music",
    emoji: "🎵",
    left: "10%",
    top: "35%",
  },
  {
    title: "Painting",
    emoji: "🎨",
    left: "50%",
    top: "50%",
  },
];

export const AboutSection = () => {
  const constraintRef = useRef(null);
  return (
    <div className="py-20 lg:py-28" id="about">
      <div className="container">
        <SectionHeader
          eyebrow="Миний тухай"
          title="Yo! I’m Byrln 👋"
          description="Намайг Баяржавхлан гэдэг — IO Institute-д 1 жилийн Software инженер
                    хөгжүүлэгчийн хөтөлбөр үзэж байгаа."
        />
        <div className="mt-20 flex flex-col gap-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
            <Card className="h-[320px] md:col-span-2 lg:col-span-1">
              <CardHeader
                title="Current read"
                description="The Psychology of Money・Morgan Housel"
              />
              <div className="w-44 mx-auto mt-2 md:mt-0 transform transition-transform duration-700 group-hover:-translate-y-4">
                <Image src={BookImage} alt="Book Cover" className="" />
              </div>
            </Card>
            <Card className="h-[320px] md:col-span-3 lg:col-span-2">
              <CardHeader
                title="Tool kits"
                description="Миний Ажлын хэрэгслүүдээр хэрхэн гайхалтай дижитал шийдлүүд бүтээж байгааг сонирхоорой."
                className=""
              />
              <IconItems
                items={toolboxItems}
                className=""
                itemsWrapperClassName="animate-move-left [animation-duration:30s]"
              />
              <IconItems
                items={toolboxItems}
                className="mt-6"
                itemsWrapperClassName="animate-move-right [animation-duration:15s]"
              />
            </Card>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            <Card className="h-[320px] flex flex-col md:col-span-3 lg:col-span-2">
              <CardHeader
                title="My Persona"
                description="Кодоос гадна юу сонирхдог, ямар зүйлсэд дуртайг минь мэдмээр байна уу?"
                className="px-6 pt-6"
              />
              <div className="relative flex-1" ref={constraintRef}>
                {hobbies.map((hobby) => (
                  <motion.div
                    key={hobby.title}
                    className="inline-flex items-center gap-3 px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5 absolute"
                    style={{
                      left: hobby.left,
                      top: hobby.top,
                    }}
                    drag
                    dragConstraints={constraintRef}
                  >
                    <span className="font-medium text-gray-950">
                      {hobby.title}
                    </span>
                    <span>{hobby.emoji}</span>
                  </motion.div>
                ))}
              </div>
            </Card>
            <Card className="h-[320px] p-0 relative md:col-span-2 lg:col-span-3">
              <CardHeader
                title="Fun fact"
                description="Tailwind-ийн нэрийг бүхэлд нь цээжлэх гэж байгаад хуучин найз охиноо мартсан."
                className="px-6"
              />
              <div className="w-72 px-8 mt-2 md:mt-0">
                <Image src={ForgotImg} alt="Yes, i forgot" className="" />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};
