import StartIcon from "@/assets/icons/star.svg";
import { TriangleAlert } from "lucide-react";
import { Fragment } from "react";

const words = [
  "Одоогоор л хоосон байна",
  "Одоогоор л хоосон байна",
  "Одоогоор л хоосон байна",
  "Одоогоор л хоосон байна",
  "Одоогоор л хоосон байна",
  "Одоогоор л хоосон байна",
  "Одоогоор л хоосон байна",
  "Одоогоор л хоосон байна",
  "Одоогоор л хоосон байна",
  "Одоогоор л хоосон байна",
  "Одоогоор л хоосон байна",
];
export default function WipProjectCard() {
  return (
    <div className="rounded-3xl overflow-hidden bg-[#1A232E] text-white pt-14 flex flex-col h-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.01] group">
      <div className="bg-gradient-to-r from-yellow-300 to-yellow-400 rotate-6 -mx-1 opacity-85 blur-sm">
        <div className="flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="flex flex-none gap-4 pr-4 py-3 animate-move-left [animation-duration:30s]">
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
      <div className="relative -top-16 bg-gradient-to-r from-yellow-300 to-yellow-400 -rotate-6 -mx-1">
        <div className="flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="flex flex-none gap-4 pr-4 py-3 animate-move-left [animation-duration:30s]">
            {[...new Array(2)].fill(0).map((_, idx) => (
              <Fragment key={idx}>
                {words.map((word) => (
                  <div key={word} className="inline-flex gap-4 items-center">
                    <span className="text-gray-900 uppercase font-extrabold text-sm">
                      {word}
                    </span>
                    <TriangleAlert className="size-6 text-gray-900"/>
                  </div>
                ))}
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
