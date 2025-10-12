import { cn } from "@/utils/classnames";

const BASE_PROSE_STYLES = [
  "prose",
  "prose-invert",
  "prose-a:text-[rgb(var(--highlight-color))]",
  "prose-a:font-semibold",
  "prose-pre:py-5",
  "prose-pre:px-5",
  "prose-pre:rounded-2xl",
  "prose-code:bg-slate-500/25",
  "prose-code:py-[2px]",
  "prose-code:px-[6px]",
  "prose-code:rounded-md",
  "prose-code:font-normal",
  "prose-code:before:content-none",
  "prose-code:after:content-none",
  "prose-p:block",
  "prose-p:text-base",
  "prose-p:font-normal",
  "prose-p:leading-[1.75]",
  "prose-p:text-gray-100",
  "prose-hr:border-gray-600/30",
];

interface ProseProps {
  children: React.ReactNode;
}

export function Prose({ children }: ProseProps) {
  return <div className={cn("py-14", BASE_PROSE_STYLES)}>{children}</div>;
}
