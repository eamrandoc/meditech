
import Link from "next/link";
import { Bell, UserRound } from "lucide-react";
import { Logo } from "@/components/shared/logo";


export function PatientHeader() {
  return (
    <header className="flex h-16 items-center justify-between border-b bg-white px-4 md:px-8">

      <div className="md:hidden">
        <Logo />
      </div>

      <h2 className="hidden text-lg font-semibold text-slate-800 md:block">
        Patient Dashboard
      </h2>

      <div className="flex items-center gap-5">

        <button
          aria-label="Notifications"
          className="relative text-slate-600"
        >
          <Bell size={21} />
          <span className="absolute -right-1 -top-1 h-2 w-2 rounded-full bg-red-500" />
        </button>

        <Link
          href="/patient/profile"
          className="flex items-center gap-2"
        >
          <div className="rounded-full bg-teal-100 p-2 text-teal-700">
            <UserRound size={19} />
          </div>

          <span className="hidden text-sm font-medium sm:block">
            Patient
          </span>
        </Link>

      </div>
    </header>
  );
}
