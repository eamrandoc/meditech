
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { publicNavigation } from "@/config/navigation";

export function NavbarLinks() {
  const pathname = usePathname();

  return (
    <>
      {publicNavigation.map((item) => {
        const active =
          pathname === item.href;

        return (
          <Link
            key={item.href}
            href={item.href}
            className={`text-sm font-medium transition ${
              active
                ? "text-teal-600"
                : "text-slate-700 hover:text-teal-600"
            }`}
          >
            {item.label}
          </Link>
        );
      })}
    </>
  );
}
