import Link from "next/link";
import {
  Home,
  Search,
  HeartPulse,
} from "lucide-react";
import CurrentYear from "@/components/shared/current-year";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#F7F8FA] px-5">

      <div className="w-full max-w-xl text-center">

        {/* LOGO */}
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#173653] text-white shadow-lg">
          <HeartPulse size={38} />
        </div>

        {/* BRAND */}
        <p className="mt-9 text-sm font-bold tracking-[4px] text-[#A58A60]">
          KHULNA MEDITECH
        </p>

        {/* 404 */}
        <h1 className="mt-5 text-8xl font-extrabold tracking-tight text-[#173653] md:text-9xl">
          404
        </h1>

        {/* TITLE */}
        <h2 className="mt-5 text-2xl font-bold text-[#173653] md:text-3xl">
          পেজটি খুঁজে পাওয়া যায়নি!
        </h2>

        {/* DESCRIPTION */}
        <p className="mx-auto mt-5 max-w-md leading-8 text-gray-500">
          দুঃখিত, আপনি যে পেজটি খুঁজছেন সেটি পাওয়া যাচ্ছে না।
          পেজটি সরিয়ে ফেলা হতে পারে অথবা URL ভুল হতে পারে।
        </p>

        {/* ACTION BUTTONS */}
        <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">

          <Link
            href="/"
            className="inline-flex h-10 items-center justify-center gap-2 rounded-md bg-[#173653] px-5 text-sm font-medium text-white transition-colors hover:bg-[#244C70]"
          >
            <Home size={17} />
            হোমপেজে ফিরে যান
          </Link>

          <Link
            href="/#services"
            className="inline-flex h-10 items-center justify-center gap-2 rounded-md border border-[#173653] bg-transparent px-5 text-sm font-medium text-[#173653] transition-colors hover:bg-[#173653] hover:text-white"
          >
            <Search size={17} />
            সেবাসমূহ দেখুন
          </Link>

        </div>

        {/* FOOTER */}
        <div className="mt-16 border-t border-gray-200 pt-6">
          <p className="text-xs text-gray-400">
            {/* © {new Date().getFullYear()} Khulna Meditech Diagnostic & Consultation Center. */}
            
            © <CurrentYear /> Khulna Meditech Diagnostic & Consultation Center.
          </p>
        </div>

      </div>
    </main>
  );
}
