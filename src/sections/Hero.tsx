import memojiImage from "@/assets/images/punch.png";
import Image from "next/image";
import ArrowUpRight from "@/assets/icons/arrow-up-right.svg";
import grainImage from "@/assets/images/grain.jpg";
import StarIcon from "@/assets/icons/star.svg";
import { HeroOrbit } from "@/components/HeroOrbit";
import SparkleIcon from "@/assets/icons/sparkle.svg";
import Link from "next/link";

export const HeroSection = () => {
  return (
    <div className="py-32 lg:py-32 md:py-48 relative z-10 overflow-x-clip">
      <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom, transparent,black_10%,black_70%,transparent)]">
        <div
          className="absolute inset-0 -z-30 opacity-5"
          style={{ backgroundImage: `url(${grainImage.src})` }}
        ></div>
        <div className="size-[620px] hero-ring"></div>
        <div className="size-[820px] hero-ring"></div>
        <div className="size-[1020px] hero-ring"></div>
        <div className="size-[1220px] hero-ring"></div>
        <HeroOrbit size={830} rotation={-130} shouldOrbit orbitDuration="23s">
          <StarIcon className="size-28 text-emerald-300" />
        </HeroOrbit>
        <HeroOrbit
          size={930}
          rotation={20}
          shouldOrbit
          orbitDuration="26s"
          shouldSpin
          spinDuration="10s"
        >
          <StarIcon className="size-28 text-emerald-300" />
        </HeroOrbit>
        <HeroOrbit size={440} rotation={140} shouldOrbit orbitDuration="20s">
          <StarIcon className="size-28 text-emerald-300" />
        </HeroOrbit>
        <HeroOrbit
          size={750}
          rotation={-150}
          shouldOrbit
          orbitDuration="15s"
          shouldSpin
          spinDuration="1s"
        >
          <StarIcon className="size-5 text-emerald-300" />
        </HeroOrbit>
        <HeroOrbit
          size={430}
          rotation={14}
          shouldOrbit
          orbitDuration="30s"
          shouldSpin
          spinDuration="20s"
        >
          <SparkleIcon className="size-28 text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit size={540} rotation={50} shouldOrbit orbitDuration="25s">
          <SparkleIcon className="size-5 text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit
          size={500}
          rotation={200}
          shouldOrbit
          orbitDuration="31s"
          shouldSpin
          spinDuration="20s"
        >
          <SparkleIcon className="size-10 text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit size={1000} rotation={120} shouldOrbit orbitDuration="31s">
          <SparkleIcon className="size-10 text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit size={700} rotation={-20} shouldOrbit orbitDuration="31s">
          <SparkleIcon className="size-10 text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit size={700} rotation={-200} shouldOrbit orbitDuration="31s">
          <SparkleIcon className="size-10 text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit size={880} rotation={164} shouldOrbit orbitDuration="35s">
          <SparkleIcon className="size-14 text-emerald-300/20" />
        </HeroOrbit>
      </div>
      <div className="container">
        <div className="flex flex-col items-center">
          <Image
            src={memojiImage}
            className="size-[100px]"
            alt="Person peeking from behind laptop"
          />
          <div className="bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex items-center gap-4 rounded-lg">
            <div className="bg-green-500 size-2.5 rounded-full relative">
              <div className="bg-green-500 absolute inset-0 rounded-full animate-ping-large"></div>
            </div>
            <div className="text-sm font-medium">
              Шинэ ажил эхлүүлэхэд бэлэн!
            </div>
          </div>
        </div>
        <div className="max-w-lg mx-auto">
          <h1 className="font-serif text-3xl md:text-5xl text-center mt-8">
            Тавтай морил!
            <br />
            Миний даруухан дижитал орон зайд
          </h1>
          <p className="mt-4 text-center text-white/60 md:text-lg">
            Би бие даасан хөгжүүлэгч. <br />
            UI/UX загварт нийцсэн, хэрэглэгчдэд ойлгомжтой, хялбар вэбсайт
            хөгжүүлэхийг зорьдог.
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center mt-8 gap-4">
          <Link href="#contact" className="z-10">
            <button className="inline-flex items-center gap-2 border border-white bg-white text-gray-900 px-6 h-12 rounded-xl hover:bg-white/90 cursor-pointer">
              <span>👋</span>
              <span className="font-semibold">Ажил хэрэг ярилцья!</span>
            </button>
          </Link>
          <Link href='#projects' className="z-10">
            <button className="inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl hover:bg-white/15 cursor-pointer">
              <span className="font-semibold">Миний хийсэн ажлууд</span>
              <ArrowUpRight className="size-4" />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
