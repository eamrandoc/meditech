
import { Breadcrumbs } from "@/components/navigation/breadcrumbs/breadcrumbs";
import { PatientHeader } from "@/components/navigation/patient/patient-header";
import { PatientSidebar } from "@/components/navigation/patient/patient-sidebar";

export function PatientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-slate-50">

      <PatientHeader />

      <div className="flex min-h-[calc(100vh-64px)]">

        <PatientSidebar />

        <main className="min-w-0 flex-1 p-4 md:p-8">
          <Breadcrumbs />
          {children}
        </main>

      </div>
    </div>
  );
}
