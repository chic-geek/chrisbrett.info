import { HistoryItemType } from "@/types";
import { workHistoryData } from "@/data";

import { TextElement } from "@/components/ui/text-element";
import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { HistoryItem } from "./history-item";

export function HistoryItemsSection() {
  return (
    <section className="py-4">
      <SectionHeading>
        <h2>Recent history</h2>
      </SectionHeading>
      <Container>
        <div className="flex flex-col gap-y-6">
          <ul>
            {workHistoryData.map((item: HistoryItemType) => (
              <HistoryItem key={item.id} data={item} />
            ))}
          </ul>
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
        </div>
      </Container>
    </section>
  );
}
