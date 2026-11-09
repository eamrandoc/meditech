
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Users,
  Stethoscope,
  CalendarDays,
  FlaskConical,
  Package,
  FileText,
  Settings,
} from "lucide-react";

import { adminNavigation } from "@/config/navigation";

const icons = [
  LayoutDashboard,
  Users,
  Stethoscope,
  CalendarDays,
  FlaskConical,
  Package,
  FileText,
  Settings,
];

export function AdminSidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden w-64 shrink-0 border-r bg-slate-950 p-4 md:block">

      <h2 className="mb-8 px-3 text-xl font-bold text-white">
        Admin Panel
      </h2>

      <nav className="space-y-2">
        {adminNavigation.map((item, index) => {
          const Icon = icons[index];

          const active = pathname === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 rounded-lg px-4 py-3 text-sm transition ${
                active
                  ? "bg-teal-600 text-white"
                  : "text-slate-300 hover:bg-slate-800"
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
