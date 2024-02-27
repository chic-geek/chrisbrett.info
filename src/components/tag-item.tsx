import { TagItemType } from "@/types/tag-item";

interface TagItemProps {
  data: TagItemType;
}

export function TagItem({ data }: TagItemProps) {
  const { icon: Icon, label } = data;
  return (
    <li className="flex items-center gap-x-1 rounded-md bg-[rgba(75,85,99,0.25)] px-2 py-1 text-xs text-[rgb(230,230,230,0.75)]">
      <Icon size={14} className="text-[rgb(var(--highlight-color))]" />
      <span>{label}</span>
    </li>
  );
}
