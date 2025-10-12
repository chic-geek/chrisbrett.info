import { SideProjectItemType } from "@/types/side-project";

import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
  CardTitle,
  CardDescription,
  CardTags,
  CardLinks,
} from "@/components/ui/card";

interface SideProjectItemProps {
  data: SideProjectItemType;
}

export function SideProjectItem({ data }: SideProjectItemProps) {
  const { title, description, urls, icon: Icon } = data;

  return (
    <Card>
      <CardHeader>
        <CardTitle icon={Icon}>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardFooter>
        <CardLinks links={urls} />
      </CardFooter>
    </Card>
  );
}
