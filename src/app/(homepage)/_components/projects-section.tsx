import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { getSideProjectsData } from "@/data/side-projects.data";
import { SideProjectItemType } from "@/types/side-project";
import { SideProjectItem } from "./side-project-item";

export async function ProjectsSection() {
  const sideProjectsData = await getSideProjectsData();

  return (
    <section className="py-4">
      <SectionHeading>
        <h2>Side projects</h2>
      </SectionHeading>
      <Container>
        <div className="flex flex-col gap-y-6">
          <h3 className="text-balance text-2xl font-semibold leading-tight tracking-[-0.03rem] text-white lg:text-wrap lg:text-3xl">
            If I do manage to find a little free time, here&apos;s a few side
            projects I&apos;ve put together.
          </h3>
          <div className="grid grid-flow-row gap-6 py-6 sm:grid-cols-2 lg:grid-cols-3">
            {sideProjectsData.map((item: SideProjectItemType) => (
              <SideProjectItem key={item.id} data={item} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
