
import { Navbar } from "@/components/navigation/navbar/navbar";
import { Footer } from "@/components/navigation/footer/footer";

interface PublicLayoutProps {
  children: React.ReactNode;
}

export function PublicLayout({
  children,
}: PublicLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">

      <Navbar />

      <main className="flex-1">
        {children}
      </main>

      <Footer />

    </div>
  );
}
