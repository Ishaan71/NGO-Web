// app/dashboard/page.tsx
import { StatCard } from "@/components/ui/dashboard/layout/overview/stat-card";
import { ImpactGrowthChart } from "@/components/ui/dashboard/layout/overview/impact-growth-chart";
import { QuickActions } from "@/components/ui/dashboard/layout/overview/quick-actions";
import { RecentStoriesList } from "@/components/ui/dashboard/layout/overview/recent-stories-list";
import { RecentPublicationsList } from "@/components/ui/dashboard/layout/overview/recent-publications-list";
import { LatestMessagesList } from "@/components/ui/dashboard/layout/overview/latest-messages-list";
import { statCards } from "@/lib/dashboard-data";

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col justify-between gap-4 md:flex-row md:items-start">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 sm:text-3xl">Welcome back, Admin!</h1>
          <p className="mt-1 text-sm text-slate-500 sm:text-base">
            Here&apos;s an overview of your organization&apos;s activity and impact.
          </p>
        </div>
        <blockquote className="max-w-sm text-sm italic text-slate-500 md:text-right">
          &ldquo;Real change happens when we work together for a more inclusive tomorrow.&rdquo;
        </blockquote>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {statCards.map((stat) => (
          <StatCard key={stat.id} label={stat.label} value={stat.value} change={stat.change} icon={stat.icon} theme={stat.theme} />
        ))}
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <ImpactGrowthChart />
        </div>
        <QuickActions />
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <RecentStoriesList />
        <RecentPublicationsList />
        <LatestMessagesList />
      </div>
    </div>
  );
}