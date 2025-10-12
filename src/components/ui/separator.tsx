import { cn } from "@/utils/classnames";

interface SeparatorProps {
  className?: string;
  orientation?: "horizontal" | "vertical";
}

export function Separator({
  className,
  orientation = "horizontal",
}: SeparatorProps) {
  const stylesHorizontal = "h-[1px] w-full";
  const stylesVertical = "h-full w-[1px]";

  return (
    <span
      className={cn(
        "bg-gray-600/30",
        orientation === "vertical" ? stylesVertical : stylesHorizontal,
        className,
      )}
    ></span>
  );
}
