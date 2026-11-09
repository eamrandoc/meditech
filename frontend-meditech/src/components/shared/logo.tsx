
import Link from "next/link";

interface LogoProps {
  href?: string;
  light?: boolean;
}

export function Logo({
  href = "/",
  light = false,
}: LogoProps) {
  return (
    <Link
      href={href}
      className="flex items-center gap-2"
    >
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal-600 text-white font-bold text-xl">
        K
      </div>

      <div>
        <h2
          className={`text-lg font-bold leading-tight ${
            light ? "text-white" : "text-slate-900"
          }`}
        >
          Khulna Meditech
        </h2>

        <p
          className={`text-xs ${
            light ? "text-slate-300" : "text-slate-500"
          }`}
        >
          Diagnostic & Consultation Center
        </p>
      </div>
    </Link>
  );
}
