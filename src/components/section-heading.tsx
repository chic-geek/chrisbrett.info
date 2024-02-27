import { Container } from "@/components/container";

interface SectionHeadingProps {
  children: React.ReactNode;
}

export function SectionHeading({ children }: SectionHeadingProps) {
  return (
    <div className="relative py-8 after:absolute after:top-1/2 after:-z-10 after:block after:h-[1px] after:w-full after:bg-[rgb(75,85,99,0.3)] lg:py-16">
      <Container>
        <div className="-ml-4 inline-block bg-[rgb(26,27,30)] px-4 text-base font-bold uppercase text-[rgb(75,85,99)] md:text-xl">
          {children}
        </div>
      </Container>
    </div>
  );
}
