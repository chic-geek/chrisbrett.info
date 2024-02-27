import { CodeExampleItemType } from "@/types";
import { codeExamplesData } from "@/data";

import { CodeExample } from "@/components/code-example";
import { SectionHeading } from "@/components/section-heading";
import { Container } from "@/components/container";

export function CodeExamplesSection() {
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
          <p className="text-sm text-[rgb(75,85,99)]">
            <span className="bold">Note:</span> Organisational references are
            intentionally omitted to maintain a degree of confidentiality, as
            these challenges may still be in use.
          </p>
          <div className="grid grid-flow-row gap-6 py-6 sm:grid-cols-2 lg:grid-cols-3">
            {codeExamplesData.map((item: CodeExampleItemType) => (
              <CodeExample key={Number(item.id)} data={item} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
