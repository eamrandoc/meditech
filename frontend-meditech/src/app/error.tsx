
"use client";

import { useEffect } from "react";
import {
  AlertTriangle,
  RefreshCw,
  Home,
} from "lucide-react";
import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Application Error:", error);
  }, [error]);

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#F7F8FA] px-5">

      <div className="w-full max-w-lg border border-gray-200 bg-white p-8 text-center shadow-lg md:p-12">

        {/* ERROR ICON */}
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-red-50 text-red-600">
          <AlertTriangle size={38} />
        </div>

        {/* TITLE */}
        <p className="mt-7 text-sm font-bold tracking-[3px] text-[#A58A60]">
          SOMETHING WENT WRONG
        </p>

        <h1 className="mt-4 text-3xl font-bold text-[#173653]">
          দুঃখিত! একটি সমস্যা হয়েছে।
        </h1>

        {/* DESCRIPTION */}
        <p className="mt-5 leading-8 text-gray-500">
          আপনার অনুরোধটি সম্পন্ন করতে গিয়ে একটি অপ্রত্যাশিত
          সমস্যা হয়েছে। অনুগ্রহ করে আবার চেষ্টা করুন।
        </p>

        {/* ERROR REFERENCE */}
        {error.digest && (
          <p className="mt-4 text-xs text-gray-400">
            Error Reference: {error.digest}
          </p>
        )}

        {/* ACTION BUTTONS */}
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">

          <button
            onClick={() => reset()}
            className="inline-flex h-10 items-center justify-center gap-2 rounded-md bg-[#173653] px-5 text-sm font-medium text-white transition-colors hover:bg-[#244C70]"
          >
            <RefreshCw size={17} />
            আবার চেষ্টা করুন
          </button>

          <Link
            href="/"
            className="inline-flex h-10 items-center justify-center gap-2 rounded-md border border-[#173653] px-5 text-sm font-medium text-[#173653] transition-colors hover:bg-[#173653] hover:text-white"
          >
            <Home size={17} />
            হোমপেজে ফিরে যান
          </Link>

        </div>

        {/* FOOTER */}
        <div className="mt-12 border-t border-gray-100 pt-6">

          <div className="flex items-center justify-center gap-2 text-[#173653]">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#173653] text-white">
              ♥
            </span>

            <span className="font-bold">
              KHULNA MEDITECH
            </span>
          </div>

          <p className="mt-2 text-xs text-gray-400">
            Diagnostic & Consultation Center
          </p>

        </div>

      </div>
    </main>
  );
}
