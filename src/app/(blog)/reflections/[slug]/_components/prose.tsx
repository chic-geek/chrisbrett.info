import { cn } from "@/utils";

const BASE_PROSE_STYLES = [
  "prose",
  "prose-invert",
  "prose-a:text-[rgb(var(--highlight-color))]",
  "prose-a:font-semibold",
  "prose-code:bg-gray-600/20",
  "prose-code:py-1",
  "prose-code:px-1",
  "prose-code:rounded-sm",
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
