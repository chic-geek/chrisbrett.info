import { cn } from "@/utils";

interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  level: "1" | "2" | "3" | "4";
  as?: "h1" | "h2" | "h3" | "h4";
  children: React.ReactNode;
  className?: string;
}

export function Heading({
  level,
  as,
  children,
  className,
  ...restProps
}: HeadingProps) {
  const baseClasses = "text-white font-semibold";
  const sizeClasses = {
    "1": "text-4xl leading-[1.2] tracking-[-0.03rem]",
    "2": "text-2xl leading-[1.3333333] tracking-[-0.03rem]",
    "3": "text-xl leading-[1.6] tracking-[-0.03rem]",
    "4": "text-base leading-[1.75] tracking-[-0.02rem]",
  };

  const Tag = as || `h${level}`;

  return (
    <Tag
      className={cn(`${baseClasses} ${sizeClasses[level]}`, className)}
      {...restProps}
    >
      {children}
    </Tag>
  );
}
