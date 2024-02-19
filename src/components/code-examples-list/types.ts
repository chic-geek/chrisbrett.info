import { LucideIcon } from "lucide-react";

export type CodeExampleItemType = {
  id: string;
  title: string;
  icon: LucideIcon;
  description: string;
  tags: string[];
  urls: {
    source: string;
    demo: string;
  }
};
