import { LuCopyright as CopyrightIcon } from "react-icons/lu";

import { SocialIcons } from "@/components/social-icons";
import { Container } from "@/components/container";

export function Footer() {
  const appVersion = process.env.APP_VERSION;
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-12 border-t border-gray-600/30">
      <Container>
        <div className="flex items-center justify-between py-5 md:py-10">
          <div className="flex items-center gap-x-1 text-gray-600 max-[400px]:text-sm">
            <CopyrightIcon size="16" />
            <span>{currentYear}</span>
            <a href="/" className="underline">
              chrisbrett.info
            </a>
            <span className="hidden">v{appVersion}</span>
          </div>
          <SocialIcons />
        </div>
      </Container>
    </footer>
  );
}
