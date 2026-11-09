import { DoctorLayout } from "@/layouts/doctor-layout/doctor-layout";


export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <DoctorLayout>
      {children}
    </DoctorLayout>
  );
}
