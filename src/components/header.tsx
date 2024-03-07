import { SocialIcons } from "@/components/social-icons";
import { Container } from "@/components/container";
import Link from "next/link";

export function Header() {
  return (
    <header>
      <Container>
        <div className="flex items-center justify-between py-8 md:pt-24">
          <div className="flex gap-x-1 text-[1.75rem] max-[400px]:text-xl">
            <Link href="/" className="">
              <span className="font-semibold tracking-[-0.03rem] text-[rgb(16,185,129)] [.js-enabled_&]:text-[rgb(var(--highlight-color))]">
                chrisbrett
              </span>
              <span className="font-extralight">.info</span>
            </Link>
            <div className="origin-bottom-right animate-[wave_3s_ease-in-out_infinite]">
              👋
            </div>
          </div>
          <SocialIcons />
        </div>
      </Container>
    </header>
  );
}
