
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  CalendarDays,
  Users,
  FileText,
  UserRound,
} from "lucide-react";

import { doctorNavigation } from "@/config/navigation";

const icons = [
  LayoutDashboard,
  CalendarDays,
  Users,
  FileText,
  UserRound,
];

export function DoctorSidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden w-64 shrink-0 border-r bg-white p-4 md:block">

      <h2 className="mb-8 px-3 text-lg font-bold text-teal-700">
        Doctor Portal
      </h2>

      <nav className="space-y-2">
        {doctorNavigation.map((item, index) => {
          const Icon = icons[index];
          const active = pathname === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 rounded-lg px-4 py-3 text-sm ${
                active
                  ? "bg-teal-50 font-semibold text-teal-700"
                  : "text-slate-600 hover:bg-slate-50"
              }`}
            >
              <Icon size={19} />
              {item.label}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
