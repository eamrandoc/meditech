
import Link from "next/link";
import { LogIn, CalendarDays } from "lucide-react";

export function NavbarActions() {
  return (
    <div className="flex items-center gap-3">
      <Link
        href="/login"
        className="hidden md:flex items-center gap-2 text-sm font-medium text-slate-700 hover:text-teal-600"
      >
        <LogIn size={17} />
        Login
      </Link>

      <Link
        href="/register"
        className="hidden md:block text-sm font-medium text-teal-600"
      >
        Register
      </Link>

      <Link
        href="/appointments"
        className="flex items-center gap-2 rounded-lg bg-teal-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-teal-700"
      >
        <CalendarDays size={17} />
        <span>Book Test</span>
      </Link>
    </div>
  );
}
