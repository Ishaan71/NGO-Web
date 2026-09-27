// components/dashboard/overview/recent-stories-list.tsx
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { recentStories } from "@/lib/dashboard-data";

export function RecentStoriesList() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-base font-bold text-slate-900">Recent Success Stories</CardTitle>
        <Link href="/dashboard/success-stories" className="flex shrink-0 items-center gap-1 text-xs font-medium text-blue-600 hover:underline">
          View All <ArrowRight className="h-3 w-3" />
        </Link>
      </CardHeader>
      <CardContent className="space-y-4">
        {recentStories.map((story) => (
          <div key={story.id} className="flex gap-3">
            <div className="h-16 w-16 shrink-0 rounded-lg bg-slate-200" />
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-semibold text-slate-900">{story.title}</p>
              <p className="mt-0.5 line-clamp-2 text-xs text-slate-500">{story.excerpt}</p>
              <div className="mt-1.5 flex items-center justify-between">
                <span className="text-xs text-slate-400">{story.date}</span>
                <Badge className="bg-emerald-100 text-emerald-700 hover:bg-emerald-100">{story.status}</Badge>
              </div>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}