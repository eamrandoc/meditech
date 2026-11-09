
import { AdminFooter } from "@/components/navigation/admin/admin-footer";
import { AdminHeader } from "@/components/navigation/admin/admin-header";
import { AdminSidebar } from "@/components/navigation/admin/admin-sidebar";
import { Breadcrumbs } from "@/components/navigation/breadcrumbs/breadcrumbs";


export function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-slate-50">

      <AdminSidebar />

      <div className="flex min-w-0 flex-1 flex-col">

        <AdminHeader />

        <main className="flex-1 p-4 md:p-8">
            <Breadcrumbs />
          {children}
        </main>

        <AdminFooter />

      </div>
    </div>
  );
}
