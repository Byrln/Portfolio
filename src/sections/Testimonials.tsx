import { SectionHeader } from "@/components/SectionHeader";
import Image from "next/image";
import { Card } from "@/components/Card";
import { Fragment } from "react";
import fs from "fs";
import path from "path";

type LogoItem = {
  src: string;
  alt: string;
  href: string;
  label: string;
};

function getTestimonialLogos(): LogoItem[] {
  const dir = path.join(process.cwd(), "public", "testimonial");
  let files: string[] = [];
  try {
    files = fs.readdirSync(dir).filter((f) => f.toLowerCase().endsWith(".png"));
  } catch {
    files = [];
  }

  return files.map((file) => {
    const nameNoExt = file.replace(/\.[^/.]+$/, "");
    const domain = nameNoExt.toLowerCase();
    return {
      src: `/testimonial/${file}`,
      alt: `${domain} project logo`,
      href: `https://${domain}`,
      label: domain,
    };
  });
}

export const TestimonialsSection = () => {
  const logos = getTestimonialLogos();
  return (
    <div className="py-16 lg:py-24">
      <div className="container">
        <SectionHeader
          eyebrow="Built Projects"
          title="Some Clients I've Worked With"
          description="Logos from my delivered projects — click to view the site."
        />
        <div className="mt-16 lg:mt-20 flex overflow-x-clip [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] py-4 -my-4">
          <div className="flex gap-8 flex-none animate-move-left [animation-duration:40s] hover:[animation-play-state:paused]">
            {[...new Array(2)].fill(0).map((_, index) => (
              <Fragment key={index}>
                {logos.map((logo) => (
                  <a
                    key={logo.src}
                    href={logo.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={logo.label}
                  >
                    <Card className="max-w-xs md:max-w-md p-6 md:p-8 hover:-rotate-3 transition duration-300">
                      <div className="flex gap-4 items-center">
                        <div className="size-14 bg-gray-700 inline-flex rounded-full items-center justify-center flex-shrink-0">
                          <Image src={logo.src} alt={logo.alt} width={56} height={56} />
                        </div>
                        <div>
                          <div className="font-semibold capitalize">{logo.label}</div>
                          <div className="text-sm text-white/40">Visit website</div>
                        </div>
                      </div>
                    </Card>
                  </a>
                ))}
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
