import { TagItemType } from "@/types/tag-item";

interface TagItemProps {
  data: TagItemType;
}

export function TagItem({ data }: TagItemProps) {
  const { icon: Icon, label } = data;
  return (
    <li className="flex items-center gap-x-1.5 rounded-md bg-gray-600/20 px-2 py-1 text-xs text-gray-300">
      <Icon size={14} className="text-gray-600" />
      <span>{label}</span>
    </li>
  );
}
