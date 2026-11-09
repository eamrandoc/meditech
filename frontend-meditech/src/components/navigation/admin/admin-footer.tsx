import CurrentYear from "@/components/shared/current-year";

export function AdminFooter() {
  return (
    <footer className="border-t bg-white px-6 py-4 text-center text-xs text-slate-500">
      © <CurrentYear /> Khulna Meditech.
      Admin Panel. All rights reserved.
    </footer>
  );
}
