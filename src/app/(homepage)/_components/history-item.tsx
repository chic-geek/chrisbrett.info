import { HistoryItemType } from "@/types/history-item";
import { formatDateRange } from "@/utils/date-formatting";
import { MdOutlineEditCalendar as CalendarIcon } from "react-icons/md";

import { Heading } from "@/components/ui/heading";
import { TextElement } from "@/components/ui/text-element";
import { TagItem } from "@/components/tag-item";

import { HistoryItemContent } from "./history-item-content";

interface HistoryItemProps {
  data: HistoryItemType;
}

export function HistoryItem({ data }: HistoryItemProps) {
  const { company, startDate, endDate, lede, contributions, tags } = data;
  const formattedDate = formatDateRange({ startDate, endDate });

  return (
    <div className="mb-7 flex flex-col gap-y-4 border-b border-[rgba(75,85,99,0.3)] pb-7 md:mb-0 md:border-none md:pb-14">
      <div className="flex flex-col">
        <div className="flex flex-col gap-y-1">
          <div className="flex items-center gap-x-2">
            <CalendarIcon className="h-4 w-4 text-gray-400" />
            <TextElement className="text-xs text-gray-400">
              {formattedDate}
            </TextElement>
          </div>
          <Heading
            level="3"
            className="text-[rgb(16,185,129)] underline [.js-enabled_&]:text-[rgb(var(--highlight-color))]"
          >
            <a href={company.url} className="">
              {company.name}
            </a>
          </Heading>
        </div>
      </div>

      <HistoryItemContent
        lede={lede}
        contributions={contributions}
        tags={
          tags ? (
            <ul className="flex flex-wrap gap-2">
              {tags.map((tag, index) => (
                <TagItem key={index} data={tag} />
              ))}
            </ul>
          ) : null
        }
      />
    </div>
  );
}
