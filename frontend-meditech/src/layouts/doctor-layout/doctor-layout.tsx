
import { Breadcrumbs } from "@/components/navigation/breadcrumbs/breadcrumbs";
import { DoctorHeader } from "@/components/navigation/doctor/doctor-header";
import { DoctorSidebar } from "@/components/navigation/doctor/doctor-sidebar";

export function DoctorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-slate-50">

      <DoctorHeader />

      <div className="flex min-h-[calc(100vh-64px)]">

        <DoctorSidebar />

        <main className="min-w-0 flex-1 p-4 md:p-8">
          <Breadcrumbs />
          {children}
        </main>

      </div>
    </div>
  );
}
