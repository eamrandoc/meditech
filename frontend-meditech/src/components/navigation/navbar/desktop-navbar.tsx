

import { NavbarLinks } from "./navbar-links";
import { NavbarActions } from "./navbar-actions";
import { Logo } from "@/components/shared/logo";

export function DesktopNavbar() {
  return (
    <div className="hidden lg:flex h-20 items-center justify-between">
      <Logo />

      <nav className="flex items-center gap-6">
        <NavbarLinks />
      </nav>

      <NavbarActions />
    </div>
  );
}
