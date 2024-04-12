import { HistoryItemType } from "@/types";
import { formatDateRange } from "@/utils";

import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
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
    <div className="mb-7 flex flex-col gap-y-6 border-b border-[rgba(75,85,99,0.3)] pb-7 md:mb-0 md:border-none md:pb-14">
      <div className="flex flex-col">
        <div className="flex items-baseline gap-x-3">
          <Heading
            level="3"
            className="text-[rgb(16,185,129)] underline [.js-enabled_&]:text-[rgb(var(--highlight-color))]"
          >
            <a href={company.url} className="">
              {company.name}
            </a>
          </Heading>
          <Separator orientation="vertical" className="py-3 sm:self-center" />
          <TextElement className="font-semibold">{formattedDate}</TextElement>
        </div>
        {/* <div className="flex items-baseline justify-between gap-x-2 md:justify-start">
          <TextElement className="font-semibold">{position}</TextElement>
          <TextElement className="text-xs">({formattedDate})</TextElement>
        </div> */}
        {tags ? (
          <ul className="mt-2 flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <TagItem key={index} data={tag} />
            ))}
          </ul>
        ) : null}
      </div>

      <HistoryItemContent lede={lede} contributions={contributions} />
    </div>
  );
}
