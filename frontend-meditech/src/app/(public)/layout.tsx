import { PublicLayout } from "@/layouts/public-layout/public-layout";


export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <PublicLayout>
      {children}
    </PublicLayout>
  );
}
