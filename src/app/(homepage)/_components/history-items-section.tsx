import { HistoryItemType } from "@/types/history-item";
import { getWorkHistoryData } from "@/data/work-history.data";

import { Container } from "@/components/container";

import { HistoryItem } from "./history-item";

export async function HistoryItemsSection() {
  const workHistoryData = await getWorkHistoryData();

  return (
    <section>
      <Container>
        <div className="flex flex-col gap-y-6">
          <ul>
            {[...workHistoryData].reverse().map((item: HistoryItemType) => (
              <HistoryItem key={item.id} data={item} />
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
