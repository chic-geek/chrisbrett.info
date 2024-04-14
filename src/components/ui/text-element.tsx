import { cn } from "@/utils";

interface TextProps
  extends React.HTMLAttributes<HTMLParagraphElement | HTMLSpanElement> {
  as?: "p" | "span" | "li";
  children: React.ReactNode;
  className?: string;
}

export function TextElement({
  as: Tag = "p",
  children,
  className,
  ...restProps
}: TextProps) {
  return (
    <Tag
      className={cn(
        "text-base font-normal leading-[1.75] text-[rgb(230,230,230)]",
        className,
      )}
      {...restProps}
    >
      {children}
    </Tag>
  );
}
