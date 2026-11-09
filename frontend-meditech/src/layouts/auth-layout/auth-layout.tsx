
import { AuthHeader } from "@/components/navigation/auth/auth-header";

export function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-slate-50">

      <AuthHeader />

      <main className="flex min-h-[calc(100vh-73px)] items-center justify-center px-4 py-10">

        <div className="w-full max-w-md rounded-2xl border bg-white p-6 shadow-sm md:p-8">
          {children}
        </div>

      </main>
    </div>
  );
}
