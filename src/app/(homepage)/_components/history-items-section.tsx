import { HistoryItemType } from "@/types";
import { workHistoryData } from "@/data";

import { Container } from "@/components/container";

import { HistoryItem } from "./history-item";

export function HistoryItemsSection() {
  return (
    <section>
      <Container>
        <div className="flex flex-col gap-y-6">
          <ul>
            {workHistoryData.map((item: HistoryItemType) => (
              <HistoryItem key={item.id} data={item} />
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
