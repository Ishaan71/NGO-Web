// components/dashboard/overview/recent-publications-list.tsx
import Link from "next/link";
import { ArrowRight, FileText } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { recentPublications } from "@/lib/dashboard-data";

const typeStyles: Record<string, string> = {
  PDF: "bg-red-100 text-red-600",
  DOC: "bg-blue-100 text-blue-600",
};

export function RecentPublicationsList() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-base font-bold text-slate-900">Recent Publications</CardTitle>
        <Link href="/dashboard/publications" className="flex shrink-0 items-center gap-1 text-xs font-medium text-blue-600 hover:underline">
          View All <ArrowRight className="h-3 w-3" />
        </Link>
      </CardHeader>
      <CardContent className="space-y-4">
        {recentPublications.map((pub) => (
          <div key={pub.id} className="flex items-center gap-3">
            <div className={cn("flex h-10 w-10 shrink-0 items-center justify-center rounded-lg", typeStyles[pub.type] ?? "bg-slate-100 text-slate-600")}>
              <FileText className="h-5 w-5" />
            </div>
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-semibold text-slate-900">{pub.title}</p>
              <p className="text-xs text-slate-500">{pub.type} &middot; {pub.size}</p>
            </div>
            <span className="shrink-0 text-xs text-slate-400">{pub.date}</span>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}