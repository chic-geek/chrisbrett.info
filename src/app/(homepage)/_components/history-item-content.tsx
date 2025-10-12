"use client";

import { useState } from "react";

import { cn } from "@/utils/classnames";

import { Heading } from "@/components/ui/heading";
import { TextElement } from "@/components/ui/text-element";

interface HistoryItemContentProps {
  lede: string;
  contributions: string[];
  tags?: React.ReactNode;
}

export function HistoryItemContent({
  lede,
  contributions,
  tags,
}: HistoryItemContentProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="flex max-w-[65ch] flex-col gap-y-6">
      <Heading level="2" className="text-balance">
        {lede}
      </Heading>
      {tags}
      <ul
        className={cn(
          "flex flex-col gap-y-4",
          isExpanded
            ? "history-list-item--expanded"
            : "history-list-item--collapsed",
        )}
      >
        {contributions.map((contribution, index) => (
          <li key={index} className="flex gap-x-2">
            <span className="translate-y-1 text-[rgb(16,185,129)] [.js-enabled_&]:text-[rgb(var(--highlight-color))]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </span>
            <TextElement>{contribution}</TextElement>
          </li>
        ))}
      </ul>
      <div>
        <button
          className="history-list-item__button text-xs font-semibold text-[rgb(16,185,129)] underline [.js-enabled_&]:text-[rgb(var(--highlight-color))]"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {isExpanded ? "Show less" : "Show more"}
        </button>
      </div>
    </div>
  );
}
