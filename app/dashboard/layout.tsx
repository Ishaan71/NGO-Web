// app/dashboard/layout.tsx
"use client";

import { useState } from "react";
import { DashboardSidebar } from "@/components/ui/dashboard/layout/sidebar";
import { MobileSidebar } from "@/components/ui/dashboard/layout/mobile-sidebar";
import { DashboardTopbar } from "@/components/ui/dashboard/layout/topbar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-slate-50">
      <DashboardSidebar />
      <MobileSidebar open={mobileNavOpen} onOpenChange={setMobileNavOpen} />

      <div className="flex min-w-0 flex-1 flex-col overflow-x-hidden">
        <DashboardTopbar onMenuClick={() => setMobileNavOpen(true)} />
        <main className="flex-1 p-4 pb-8 sm:p-6">{children}</main>
      </div>
    </div>
  );
}