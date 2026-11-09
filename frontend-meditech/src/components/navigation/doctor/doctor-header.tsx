
import Link from "next/link";
import { Bell, UserRound } from "lucide-react";

export function DoctorHeader() {
  return (
    <header className="flex h-16 items-center justify-between border-b bg-white px-4 md:px-8">

      <h2 className="font-semibold text-slate-800">
        Doctor Dashboard
      </h2>

      <div className="flex items-center gap-5">

        <button aria-label="Notifications">
          <Bell size={20} className="text-slate-600" />
        </button>

        <Link
          href="/doctor/profile"
          className="flex items-center gap-2"
        >
          <div className="rounded-full bg-blue-100 p-2 text-blue-700">
            <UserRound size={19} />
          </div>

          <span className="hidden text-sm sm:block">
            Doctor
          </span>
        </Link>

      </div>
    </header>
  );
}
