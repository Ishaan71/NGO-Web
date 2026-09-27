// components/dashboard/overview/stat-card.tsx
import { Card, CardContent } from "@/components/ui/card";
import { ArrowUp } from "lucide-react";
import { cn } from "@/lib/utils";
import type { LucideIcon } from "lucide-react";

type Theme = "green" | "blue" | "orange" | "purple";

const themeStyles: Record<Theme, { card: string; iconBg: string }> = {
  green: { card: "bg-emerald-50 border-emerald-100", iconBg: "bg-emerald-600" },
  blue: { card: "bg-blue-50 border-blue-100", iconBg: "bg-blue-600" },
  orange: { card: "bg-amber-50 border-amber-100", iconBg: "bg-amber-500" },
  purple: { card: "bg-purple-50 border-purple-100", iconBg: "bg-purple-600" },
};

interface StatCardProps {
  label: string;
  value: string;
  change: string;
  icon: LucideIcon;
  theme: Theme;
}

export function StatCard({ label, value, change, icon: Icon, theme }: StatCardProps) {
  const styles = themeStyles[theme];

  return (
    <Card className={cn("border", styles.card)}>
      <CardContent className="flex items-start gap-3 p-4 sm:gap-4 sm:p-5">
        <div className={cn("flex h-10 w-10 shrink-0 items-center justify-center rounded-xl sm:h-11 sm:w-11", styles.iconBg)}>
          <Icon className="h-5 w-5 text-white" />
        </div>
        <div className="min-w-0">
          <p className="truncate text-sm text-slate-600">{label}</p>
          <span className="mt-1 block text-xl font-bold text-slate-900 sm:text-2xl">{value}</span>
          <div className="mt-1 flex items-center gap-1 text-xs">
            <ArrowUp className="h-3 w-3 shrink-0 text-emerald-600" />
            <span className="font-medium text-emerald-600">{change}</span>
            <span className="text-slate-500">vs last year</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}