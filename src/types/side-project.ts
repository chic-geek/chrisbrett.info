import { IconType } from "react-icons";

export type SideProjectItemType = {
  id: string;
  title: string;
  icon: IconType;
  description: string;
  urls: {
    demo: string;
  };
};
