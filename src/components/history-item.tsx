import { HistoryItemType } from "@/types";
import { formatDateRange } from "@/utils";

import { TagItem } from "@/components/tag-item";
import { HistoryItemContent } from "@/components/history-item-content";

interface HistoryItemProps {
  data: HistoryItemType;
}

export function HistoryItem({ data }: HistoryItemProps) {
  const { company, position, startDate, endDate, lede, contributions, tags } =
    data;

  const formattedDate = formatDateRange({ startDate, endDate });

  return (
    <div className="mb-7 flex flex-col gap-y-6 border-b border-[rgba(75,85,99,0.3)] pb-7 md:mb-0 md:flex-row md:gap-x-12 md:border-none md:pb-14">
      <aside className="flex flex-col gap-y-2 md:w-1/3">
        <h3 className="font-semibold">
          <a href={company.url} className="text-2xl underline">
            {company.name}
          </a>
          <span className="block text-[1.05rem] uppercase text-[rgb(16,185,129)] [.js-enabled_&]:text-[rgb(var(--highlight-color))]">
            {position}
          </span>
          <span className="text-sm uppercase">{formattedDate}</span>
        </h3>
        {tags ? (
          <ul className="mt-2 flex flex-wrap gap-2">
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
