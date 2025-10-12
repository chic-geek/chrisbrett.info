import { CodeExampleItemType } from "@/types/code-example";
import { getCodeExamplesData } from "@/data/code-examples.data";

import { TextElement } from "@/components/ui/text-element";
import { SectionHeading } from "@/components/section-heading";
import { Container } from "@/components/container";
import { CodeExample } from "./code-example";

export async function CodeExamplesSection() {
  const codeExamplesData = await getCodeExamplesData();

  return (
    <section className="py-4">
      <SectionHeading>
        <h2>Code challenges</h2>
      </SectionHeading>
      <Container>
        <div className="flex flex-col gap-y-6">
          <h3 className="text-balance text-2xl font-semibold leading-tight tracking-[-0.03rem] text-white lg:text-wrap lg:text-3xl">
            Let me also give you a peek into how I&apos;ve tackled a few coding
            challenges previously.
          </h3>
          <TextElement className="text-sm text-gray-600">
            <span className="bold">Note:</span> Organisational references are
            intentionally omitted to maintain a degree of confidentiality, as
            these challenges may still be in use.
          </TextElement>
          <div className="grid grid-flow-row gap-6 py-6 sm:grid-cols-2 lg:grid-cols-3">
            {codeExamplesData.map((item: CodeExampleItemType) => (
              <CodeExample key={item.id} data={item} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
