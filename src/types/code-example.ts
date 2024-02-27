import { IconType } from "react-icons";

import { TagItemType } from "@/types/tag-item";

export type CodeExampleItemType = {
  id: string;
  title: string;
  icon: IconType;
  description: string;
  tags: TagItemType[];
  urls: {
    source: string;
    demo: string;
  };
};
