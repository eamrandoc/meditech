
"use client";

export default function CurrentYear() {
  return (
    <span suppressHydrationWarning>
      {typeof window !== "undefined"
        ? new Date().getFullYear()
        : 2026}
    </span>
  );
}
