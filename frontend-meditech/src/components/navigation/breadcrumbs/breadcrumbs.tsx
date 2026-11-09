
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRight, Home } from "lucide-react";

export function Breadcrumbs() {
  const pathname = usePathname();

  const segments = pathname
    .split("/")
    .filter(Boolean);

  return (
    <nav aria-label="Breadcrumb" className="mb-6">
      <ol className="flex flex-wrap items-center gap-2 text-sm">

        <li>
          <Link
            href="/"
            className="flex items-center gap-1 text-slate-500 hover:text-teal-600"
          >
            <Home size={15} />
            Home
          </Link>
        </li>

        {segments.map((segment, index) => {
          const href =
            "/" + segments.slice(0, index + 1).join("/");

          const label = segment
            .replace(/-/g, " ")
            .replace(/\b\w/g, (char) => char.toUpperCase());

          const last = index === segments.length - 1;

          return (
            <li
              key={href}
              className="flex items-center gap-2"
            >
              <ChevronRight size={15} className="text-slate-400" />

              {last ? (
                <span className="font-semibold text-teal-700">
                  {label}
                </span>
              ) : (
                <Link
                  href={href}
                  className="text-slate-500 hover:text-teal-600"
                >
                  {label}
                </Link>
              )}
            </li>
          );
        })}

      </ol>
    </nav>
  );
}
