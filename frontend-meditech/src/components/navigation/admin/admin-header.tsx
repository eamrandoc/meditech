
import Link from "next/link";
import { Bell, Settings, UserRound } from "lucide-react";

export function AdminHeader() {
  return (
    <header className="flex h-16 items-center justify-between border-b bg-white px-4 md:px-8">

      <h2 className="font-semibold text-slate-800">
        Admin Dashboard
      </h2>

      <div className="flex items-center gap-5">

        <button aria-label="Notifications">
          <Bell size={20} className="text-slate-600" />
        </button>

        <Link href="/admin/settings">
          <Settings size={20} className="text-slate-600" />
        </Link>

        <Link
          href="/admin/profile"
          className="flex items-center gap-2"
        >
          <div className="rounded-full bg-purple-100 p-2 text-purple-700">
            <UserRound size={19} />
          </div>

          <span className="hidden text-sm font-medium sm:block">
            Admin
          </span>
        </Link>

      </div>
    </header>
  );
}
