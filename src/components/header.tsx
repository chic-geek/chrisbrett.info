import { SocialIcons } from "@/components/social-icons";
import { Container } from "@/components/container";

export function Header() {
  return (
    <header>
      <Container>
        <div className="flex items-center justify-between py-8 md:pt-24">
          <div className="text-[1.75rem] font-semibold leading-tight max-[400px]:text-xl">
            <span className="flex">
              <span>Chris Brett</span>
              <span className="ml-2 origin-bottom-right animate-[wave_3s_ease-in-out_infinite] text-3xl max-[400px]:text-xl">
                👋
              </span>
            </span>
            <span className="block text-[1.05rem] uppercase text-[rgb(16,185,129)] max-[400px]:text-xs [.js-enabled_&]:text-[rgb(var(--highlight-color))]">
              Frontend Developer
            </span>
          </div>
          <SocialIcons />
        </div>
      </Container>
    </header>
  );
}
