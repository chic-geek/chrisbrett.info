import { Container } from "@/components/container";

interface SectionHeadingProps {
  children?: React.ReactNode;
  type?: "primary" | "secondary" | "tertiary";
}

export function SectionHeading({
  children,
  type = "primary",
}: SectionHeadingProps) {
  if (type === "tertiary") {
    return <div className="my-8 h-[1px] w-full bg-gray-600/30 lg:my-16" />;
  }

  if (type === "secondary") {
    return (
      <Container>
        <div className="my-8 inline-block text-base font-bold uppercase text-gray-600 md:text-xl lg:my-16">
          {children}
        </div>
      </Container>
    );
  }

  if (type === "primary") {
    return (
      <div className="relative my-8 text-gray-600 after:absolute after:top-1/2 after:-z-10 after:block after:h-[1px] after:w-full after:bg-gray-600/30 lg:my-16">
        <Container>
          <div className="-ml-4 inline-block bg-[rgb(26,27,30)] px-4 text-base font-bold uppercase md:text-xl">
            {children}
          </div>
        </Container>
      </div>
    );
  }
}
