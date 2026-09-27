// components/dashboard/overview/latest-messages-list.tsx
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { latestMessages } from "@/lib/dashboard-data";

export function LatestMessagesList() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-base font-bold text-slate-900">Latest Messages</CardTitle>
        <Link href="/dashboard/messages" className="flex shrink-0 items-center gap-1 text-xs font-medium text-blue-600 hover:underline">
          View All <ArrowRight className="h-3 w-3" />
        </Link>
      </CardHeader>
      <CardContent className="space-y-4">
        {latestMessages.map((msg) => (
          <div key={msg.id} className="flex items-start gap-3">
            <Avatar className="h-9 w-9 shrink-0">
              <AvatarFallback className="bg-slate-200 text-xs text-slate-600">{msg.initials}</AvatarFallback>
            </Avatar>
            <div className="min-w-0 flex-1">
              <div className="flex items-center justify-between gap-2">
                <p className="truncate text-sm font-semibold text-slate-900">{msg.name}</p>
                <span className="shrink-0 text-xs text-slate-400">{msg.date}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <p className="truncate text-xs text-slate-500">{msg.message}</p>
                {msg.unread && <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" />}
              </div>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}