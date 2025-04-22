import { SectionHeader } from "@/components/SectionHeader";
import ProjectGrid from "@/components/project-grid";
export const ProjectsSection = () => {
  return (
    <section className="pb-16 lg:py-24" id="projects">
      <div className="container">
        <SectionHeader
          eyebrow="Бодит Үр Дүн"
          title="Онцлох Төслүүд"
          description="Санааг хэрхэн бодит, сонирхолтой дижитал туршлага болгон хувиргасныг хараарай."
        />
        <div className="flex flex-col mt-10 md:mt-20 gap-20">
          <ProjectGrid />
        </div>
      </div>
    </section>
  );
};
