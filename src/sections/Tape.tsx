import StartIcon from "@/assets/icons/star.svg";
import { Fragment } from "react";

const words = [
  "Хурдтай бас хүчирхэг",
  "Хүн бүрт хүртээмжтэй",
  "Аюулгүй, найдвартай",
  "Хэрэглэгчтэй харилцахад амар",
  "Томсгож, өргөжүүлэхэд бэлэн",
  "Хэрэглэхэд энгийн, ойлгомжтой",
  "Бүх төрлийн төхөөрөмжид зохицох",
  "Санаа зоволгүй засварлах боломжтой",
  "Хайлтад амархан илэрдэг",
  "Гар дээр мэт эвтэйхэн",
  "Тасралтгүй ажиллах итгэлтэй",
];


export const TapeSection = () => {
  return (
    <div className="py-16 lg:py-24 overflow-x-clip">
      <div className="bg-gradient-to-r from-emerald-300 to-sky-400 rotate-3 -mx-1 opacity-85 blur-sm">
        <div className="flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div
            className="flex flex-none gap-4 pr-4 py-3 animate-move-left [animation-duration:30s]">
            {[...new Array(2)].fill(0).map((_, idx) => (
              <Fragment key={idx}>
                {words.map((word) => (
                  <div key={word} className="inline-flex gap-4 items-center">
                    <span className="text-gray-900 uppercase font-extrabold text-sm">
                      {word}
                    </span>
                    <StartIcon className="size-6 text-gray-900" />
                  </div>
                ))}
              </Fragment>
            ))}
          </div>
        </div>
      </div>
      {/* Render the same content here */}
      <div className="relative -top-16 bg-gradient-to-r from-emerald-300 to-sky-400 -rotate-3 -mx-1">
        <div className="flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div
            className="flex flex-none gap-4 pr-4 py-3 animate-move-left [animation-duration:30s]">
            {[...new Array(2)].fill(0).map((_, idx) => (
              <Fragment key={idx}>
                {words.map((word) => (
                  <div key={word} className="inline-flex gap-4 items-center">
                    <span className="text-gray-900 uppercase font-extrabold text-sm">
                      {word}
                    </span>
                    <StartIcon className="size-6 text-gray-900" />
                  </div>
                ))}
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
