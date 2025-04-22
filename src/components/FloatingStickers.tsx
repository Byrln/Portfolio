'use client';

import { Gravity, MatterBody } from "@/components/ui/gravity";
import Sticker3 from "@/assets/stiker/st3.png";
import Sticker6 from "@/assets/stiker/st6.png";
import Sticker7 from "@/assets/stiker/st7.png";
import Sticker9 from "@/assets/stiker/st9.png";
import Sticker10 from "@/assets/stiker/st10.png";
import Image from "next/image";

const getRandomPosition = () => ({
  x: `${Math.floor(Math.random() * 85 + 5)}%`,
  y: `${Math.floor(Math.random() * 20 + 10)}%`,
});

const stickers = [
  { icon: Sticker3, ...getRandomPosition() },
  { icon: Sticker6, ...getRandomPosition() },
  { icon: Sticker7, ...getRandomPosition() },
  { icon: Sticker9, ...getRandomPosition() },
  { icon: Sticker10, ...getRandomPosition() },
];
export const FloatingStickers = () => {
  return (
    <div className="relative w-full h-[200px] overflow-hidden">
      <Gravity gravity={{ x: 0, y: 1 }} className="w-full h-full">
        {stickers.map((item, index) => (
          <MatterBody
            key={index}
            matterBodyOptions={{ friction: 0.3, restitution: 0.6 }}
            x={item.x}
            y={item.y}
          >
                        <div className="">
              <Image 
                src={item.icon} 
                alt={`sticker-${index}`} 
                className="w-20 h-20 md:w-24 md:h-24 lg:w-36 lg:h-36" 
              />
            </div>
          </MatterBody>
        ))}
      </Gravity>
    </div>
  );
};
