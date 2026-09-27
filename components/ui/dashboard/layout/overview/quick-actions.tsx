// components/dashboard/overview/quick-actions.tsx
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileEdit, BookOpen, CalendarPlus, UserPlus, ImagePlus, MessageSquare } from "lucide-react";
import { cn } from "@/lib/utils";

const actions = [
  { label: "Add Story", href: "/dashboard/success-stories/new", icon: FileEdit, theme: "teal" as const },
  { label: "Upload Publication", href: "/dashboard/publications/new", icon: BookOpen, theme: "blue" as const },
  { label: "Add Event", href: "/dashboard/events/new", icon: CalendarPlus, theme: "amber" as const },
  { label: "Add Team Member", href: "/dashboard/team/new", icon: UserPlus, theme: "purple" as const },
  { label: "Upload Gallery Image", href: "/dashboard/gallery/new", icon: ImagePlus, theme: "pink" as const },
  { label: "View Messages", href: "/dashboard/messages", icon: MessageSquare, theme: "green" as const },
];

const themeStyles = {
  teal: "bg-teal-50 border-teal-100 text-teal-700 hover:bg-teal-100",
  blue: "bg-blue-50 border-blue-100 text-blue-700 hover:bg-blue-100",
  amber: "bg-amber-50 border-amber-100 text-amber-700 hover:bg-amber-100",
  purple: "bg-purple-50 border-purple-100 text-purple-700 hover:bg-purple-100",
  pink: "bg-pink-50 border-pink-100 text-pink-700 hover:bg-pink-100",
  green: "bg-emerald-50 border-emerald-100 text-emerald-700 hover:bg-emerald-100",
};

export function QuickActions() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-base font-bold text-slate-900 sm:text-lg">Quick Actions</CardTitle>
      </CardHeader>
      <CardContent className="grid grid-cols-2 gap-3 sm:grid-cols-3">
        {actions.map((action) => {
          const Icon = action.icon;
          return (
            <Link
              key={action.label}
              href={action.href}
              className={cn(
                "flex flex-col items-center justify-center gap-2 rounded-xl border py-5 text-center text-xs font-medium transition-colors",
                themeStyles[action.theme]
              )}
            >
              <Icon className="h-5 w-5" />
              {action.label}
            </Link>
          );
        })}
      </CardContent>
    </Card>
  );
}