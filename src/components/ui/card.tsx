import { cn } from "@/utils/classnames";
import { forwardRef } from "react";
import { IconType } from "react-icons";
import Image from "next/image";
import { TagItemType } from "@/types/tag-item";
import { TagItem } from "@/components/tag-item";

// Core Card Components
interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, children, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "flex flex-col justify-between gap-y-6 rounded-3xl bg-[rgb(31,32,36)] p-8 transition-colors duration-300 ease-in-out focus-within:bg-[rgba(var(--highlight-color),0.15)] hover:bg-[rgba(var(--highlight-color),0.1)]",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  ),
);
Card.displayName = "Card";

interface CardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

const CardHeader = forwardRef<HTMLDivElement, CardHeaderProps>(
  ({ className, children, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("flex flex-col gap-y-4", className)}
      {...props}
    >
      {children}
    </div>
  ),
);
CardHeader.displayName = "CardHeader";

interface CardContentProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

const CardContent = forwardRef<HTMLDivElement, CardContentProps>(
  ({ className, children, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("flex flex-col gap-y-4", className)}
      {...props}
    >
      {children}
    </div>
  ),
);
CardContent.displayName = "CardContent";

interface CardFooterProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

const CardFooter = forwardRef<HTMLDivElement, CardFooterProps>(
  ({ className, children, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("flex flex-col gap-y-4", className)}
      {...props}
    >
      {children}
    </div>
  ),
);
CardFooter.displayName = "CardFooter";

interface CardImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
}

const CardImage = forwardRef<HTMLDivElement, CardImageProps>(
  ({ className, src, alt, width = 800, height = 400, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("w-full overflow-hidden rounded-2xl", className)}
      {...props}
    >
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="h-auto w-full object-cover"
      />
    </div>
  ),
);
CardImage.displayName = "CardImage";

// Specialized Card Components
interface CardTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode;
  icon?: IconType;
  iconSize?: number;
  iconClassName?: string;
}

const CardTitle = forwardRef<HTMLHeadingElement, CardTitleProps>(
  (
    { className, children, icon: Icon, iconSize = 24, iconClassName, ...props },
    ref,
  ) => (
    <h3
      ref={ref}
      className={cn(
        "flex items-center gap-x-2 text-xl font-semibold leading-[1.6] tracking-[-0.03rem] text-white",
        className,
      )}
      {...props}
    >
      {Icon && (
        <Icon
          size={iconSize}
          className={cn(
            "text-[rgb(16,185,129)] [.js-enabled_&]:text-[rgb(var(--highlight-color))]",
            iconClassName,
          )}
        />
      )}
      <span>{children}</span>
    </h3>
  ),
);
CardTitle.displayName = "CardTitle";

interface CardDescriptionProps
  extends React.HTMLAttributes<HTMLParagraphElement> {
  children: React.ReactNode;
}

const CardDescription = forwardRef<HTMLParagraphElement, CardDescriptionProps>(
  ({ className, children, ...props }, ref) => (
    <p
      ref={ref}
      className={cn(
        "text-base font-normal leading-[1.75] text-[rgb(230,230,230)]",
        className,
      )}
      {...props}
    >
      {children}
    </p>
  ),
);
CardDescription.displayName = "CardDescription";

interface CardTagsProps extends React.HTMLAttributes<HTMLUListElement> {
  tags: TagItemType[];
  className?: string;
}

const CardTags = forwardRef<HTMLUListElement, CardTagsProps>(
  ({ className, tags, ...props }, ref) => (
    <ul ref={ref} className={cn("flex flex-wrap gap-2", className)} {...props}>
      {tags?.map((tag, index) => <TagItem key={index} data={tag} />)}
    </ul>
  ),
);
CardTags.displayName = "CardTags";

interface CardLinksProps extends React.HTMLAttributes<HTMLUListElement> {
  links: Record<string, string>;
  className?: string;
}

const CardLinks = forwardRef<HTMLUListElement, CardLinksProps>(
  ({ className, links, ...props }, ref) => (
    <ul
      ref={ref}
      className={cn("flex items-center gap-4", className)}
      {...props}
    >
      {Object.entries(links).map(([key, value], index) => (
        <li key={index}>
          <a
            href={value}
            className="flex items-center gap-x-1 text-lg font-semibold text-[rgb(16,185,129)] underline [.js-enabled_&]:text-[rgb(var(--highlight-color))]"
          >
            {key}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 256 256"
            >
              <path d="M224,104a8,8,0,0,1-16,0V59.32l-66.33,66.34a8,8,0,0,1-11.32-11.32L196.68,48H152a8,8,0,0,1,0-16h64a8,8,0,0,1,8,8Zm-40,24a8,8,0,0,0-8,8v72H48V80h72a8,8,0,0,0,0-16H48A16,16,0,0,0,32,80V208a16,16,0,0,0,16,16H176a16,16,0,0,0,16-16V136A8,8,0,0,0,184,128Z"></path>
            </svg>
          </a>
        </li>
      ))}
    </ul>
  ),
);
CardLinks.displayName = "CardLinks";

export {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
  CardImage,
  CardTitle,
  CardDescription,
  CardTags,
  CardLinks,
};
