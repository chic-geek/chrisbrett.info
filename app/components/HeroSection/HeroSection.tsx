import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="constrained">
      <div className="hero">
        <div className="hero-selfie">
          <Image
            className="responsive"
            src="/images/portrait.png"
            alt="Selfie of Chris Brett"
            width="327"
            height="327"
          />
        </div>
        <h2 className="hero-intro">
          I&apos;m a London-based Frontend developer keen on crafting clean,
          functional products that address real customer needs.
        </h2>
      </div>
    </section>
  );
}
