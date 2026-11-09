
"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/shared/logo";
import { publicNavigation } from "@/config/navigation";

export function MobileNavbar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="lg:hidden">
      <div className="flex h-16 items-center justify-between">
        <Logo />

        <button
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation"
          aria-expanded={open}
          className="rounded-lg p-2 hover:bg-slate-100"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <nav className="space-y-1 border-t border-slate-100 py-4">
          {publicNavigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block rounded-lg px-4 py-3 text-sm font-medium text-slate-700 hover:bg-teal-50 hover:text-teal-700"
            >
              {item.label}
            </Link>
          ))}

          <div className="grid grid-cols-2 gap-3 px-4 pt-3">
            <Link
              href="/login"
              onClick={() => setOpen(false)}
              className="rounded-lg border border-teal-600 py-2 text-center text-sm text-teal-600"
            >
              Login
            </Link>

            <Link
              href="/appointments"
              onClick={() => setOpen(false)}
              className="rounded-lg bg-teal-600 py-2 text-center text-sm text-white"
            >
              Book Test
            </Link>
          </div>
        </nav>
      )}
    </div>
  );
}
