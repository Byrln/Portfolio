import grainImage from "@/assets/images/grain.jpg";
import { ComponentPropsWithoutRef, PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";
import StarIcon from "@/assets/icons/star.svg";


export const Card = ({
  className,
  children,
  ...other
}: ComponentPropsWithoutRef<"div">) => {
  return (
    <div
      className={twMerge(
        "bg-gray-800 rounded-3xl relative z-0 overflow-hidden after:z-10 after:content-[''] after:absolute after:inset-0 after:outline-2 after:outline after:-outline-offset-2 after:rounded-3xl after:outline-white/20 after:pointer-events-none group transition-all duration-700",
        className
      )}
      {...other}
    >
      <div
        className="absolute inset-0 -z-10 opacity-5 bg-[#08141c]"
      ></div>
      <div className="absolute h-[400px] w-[1600px] top-0 left-1/2 -translate-x-1/2 bg-emerald-300/30 [mask-image:radial-gradient(50%_50%_at_top_left,black,transparent)] -z-10 transition-all duration-500 group-hover:bg-emerald-300/50"></div>
      {children}
    </div>
  );
};
