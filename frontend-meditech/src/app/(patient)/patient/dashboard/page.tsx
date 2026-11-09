
import { Breadcrumbs } from "@/components/navigation/breadcrumbs/breadcrumbs";

export default function PatientDashboardPage() {
  return (
    <>
      <Breadcrumbs />

      <h1 className="text-2xl font-bold text-slate-900">
        Welcome to Patient Dashboard
      </h1>

      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

        {[
          ["Total Appointments", "05"],
          ["Available Reports", "03"],
          ["Prescriptions", "02"],
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
