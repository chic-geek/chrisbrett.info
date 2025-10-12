import { TextElement } from "@/components/ui/text-element";
import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";

import { HeroSection } from "./_components/hero-section";
import { HistoryItemsSection } from "./_components/history-items-section";
import { CodeExamplesSection } from "./_components/code-examples-section";
import { ArticleItems } from "./_components/article-items";
import { ProjectsSection } from "./_components/projects-section";

export default function Homepage() {
  return (
    <>
      <HeroSection />
      <SectionHeading type="tertiary" />
      <Container>
        <div className="flex flex-col gap-8 md:flex-row">
          <aside className="w-full md:order-2 md:max-w-80">
            <SectionHeading type="secondary">
              <h2>Articles</h2>
            </SectionHeading>
            <div className="">
              <ArticleItems />
            </div>
          </aside>
          <div className="w-full md:order-1">
            <SectionHeading type="secondary">
              <h2>Employment</h2>
            </SectionHeading>
            <HistoryItemsSection />
          </div>
        </div>
        <TextElement className="text-center">
          For a more formal history of my work experience, check out my{" "}
          <a
            href="https://chrisbrett.notion.site/Resum-0a7c8d6b4f67459ba052da1c9e36b522"
            className="font-semibold text-[rgb(16,185,129)] underline [.js-enabled_&]:text-[rgb(var(--highlight-color))]"
          >
            resumé
          </a>
          .
        </TextElement>
      </Container>
      <CodeExamplesSection />
      <ProjectsSection />
    </>
  );
}
