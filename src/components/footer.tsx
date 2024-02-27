import { Copyright } from "lucide-react";

import { SocialIcons } from "@/components/social-icons";
import { Container } from "@/components/container";

export function Footer() {
  const appVersion = process.env.APP_VERSION;
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-12 border-t border-[rgba(75,85,99,0.3)]">
      <Container>
        <div className="flex items-center justify-between py-5 md:py-10">
          <div className="flex items-center gap-x-2 text-[rgb(75,85,99)]">
            <Copyright size="16" />
            <div>chrisbrett.info</div>
            <div>{currentYear}</div>
            <div className="hidden">v{appVersion}</div>
          </div>
          <SocialIcons />
        </div>
      </Container>
    </footer>
  );
}
