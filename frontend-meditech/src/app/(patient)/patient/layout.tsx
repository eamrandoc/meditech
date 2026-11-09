import { PatientLayout } from "@/layouts/patient-layout/patient-layout";


export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <PatientLayout>
      {children}
    </PatientLayout>
  );
}
