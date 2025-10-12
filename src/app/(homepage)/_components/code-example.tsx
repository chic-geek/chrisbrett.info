import { CodeExampleItemType } from "@/types/code-example";

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

interface CodeExampleProps {
  data: CodeExampleItemType;
}

export function CodeExample({ data }: CodeExampleProps) {
  const { title, description, urls, tags, icon: Icon } = data;

  return (
    <Card>
      <CardHeader>
        <CardTitle icon={Icon}>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardFooter>
        <CardTags tags={tags} />
        <CardLinks links={urls} />
      </CardFooter>
    </Card>
  );
}
