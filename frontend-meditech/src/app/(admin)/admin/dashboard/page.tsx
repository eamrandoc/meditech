
import { Breadcrumbs } from "@/components/navigation/breadcrumbs/breadcrumbs";

export default function AdminDashboardPage() {
  return (
    <>
      <Breadcrumbs />

      <h1 className="text-2xl font-bold text-slate-900">
        Admin Dashboard
      </h1>

      <div className="mt-8 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">

        {[
          ["Total Patients", "1,250"],
          ["Total Doctors", "45"],
          ["Appointments", "320"],
          ["Diagnostic Tests", "85"],
        ].map(([title, value]) => (
          <div
            key={title}
            className="rounded-xl border bg-white p-6"
          >
            <p className="text-sm text-slate-500">
              {title}
            </p>

            <h2 className="mt-3 text-3xl font-bold text-teal-700">
              {value}
            </h2>
          </div>
        ))}

      </div>
    </>
  );
}
