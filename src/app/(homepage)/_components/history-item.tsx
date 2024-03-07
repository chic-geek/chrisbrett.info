import { HistoryItemType } from "@/types";
import { formatDateRange } from "@/utils";

import { Heading } from "@/components/ui/heading";
import { TextElement } from "@/components/ui/text-element";
import { TagItem } from "@/components/tag-item";
import { HistoryItemContent } from "./history-item-content";

interface HistoryItemProps {
  data: HistoryItemType;
}

export function HistoryItem({ data }: HistoryItemProps) {
  const { company, position, startDate, endDate, lede, contributions, tags } =
    data;

  const formattedDate = formatDateRange({ startDate, endDate });

  return (
    <div className="mb-7 flex flex-col gap-y-6 border-b border-[rgba(75,85,99,0.3)] pb-7 md:mb-0 md:flex-row md:gap-x-12 md:border-none md:pb-14">
      <aside className="flex flex-col md:w-1/3">
        <Heading level="3">
          <a href={company.url} className="underline">
            {company.name}
          </a>
        </Heading>
        <TextElement
          className="font-semibold uppercase text-[rgb(16,185,129)] [.js-enabled_&]:text-[rgb(var(--highlight-color))]"
          as="p"
        >
          {position}
        </TextElement>
        <TextElement className="text-sm font-semibold">
          {formattedDate}
        </TextElement>
        {tags ? (
          <ul className="flex flex-wrap gap-2 pt-6">
            {tags.map((tag, index) => (
              <TagItem key={index} data={tag} />
            ))}
          </ul>
        ) : null}
      </aside>

      <HistoryItemContent lede={lede} contributions={contributions} />
    </div>
  );
}
