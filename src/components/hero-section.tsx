import Image from "next/image";
import { Container } from "@/components/container";

export function HeroSection() {
  return (
    <section className="py-4">
      <Container>
        <div className="flex flex-col items-center justify-center gap-y-12 lg:flex-row-reverse lg:gap-x-20">
          <div className="lg:w-1/3">
            <div className="md:min-w-auto mx-auto min-w-[65%] max-w-[40%] md:max-w-none">
              <Image
                className="h-auto w-full"
                src="/images/portrait.png"
                alt="Selfie of Chris Brett"
                width="327"
                height="327"
              />
            </div>
          </div>
          <div className="lg:w-2/3">
            <h1 className="text-balance text-center text-[1.75rem] font-semibold leading-tight tracking-[-0.03rem] md:text-wrap md:text-[2.5rem] lg:text-left">
              I&apos;m a London-based Frontend developer keen on crafting clean,
              functional products that address real customer needs.
            </h1>
          </div>
        </div>
      </Container>
    </section>
  );
}
