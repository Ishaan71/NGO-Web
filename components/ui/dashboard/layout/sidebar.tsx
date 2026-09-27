// components/dashboard/layout/sidebar.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard, BarChart3, Sparkles, FolderKanban, BookOpen,
  Image as ImageIcon, Users, Calendar, HandHeart, Mail, Send, Gift,
  Settings, ExternalLink, MoreVertical,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { label: "Impact Stats", href: "/dashboard/impact-stats", icon: BarChart3 },
  { label: "Success Stories", href: "/dashboard/success-stories", icon: Sparkles },
  { label: "Projects & Programs", href: "/dashboard/projects", icon: FolderKanban },
  { label: "Publications", href: "/dashboard/publications", icon: BookOpen },
  { label: "Gallery", href: "/dashboard/gallery", icon: ImageIcon },
  { label: "Team Members", href: "/dashboard/team", icon: Users },
  { label: "Events", href: "/dashboard/events", icon: Calendar },
  { label: "Volunteers", href: "/dashboard/volunteers", icon: HandHeart },
  { label: "Contact Messages", href: "/dashboard/messages", icon: Mail, badge: 4 },
  { label: "Newsletter", href: "/dashboard/newsletter", icon: Send },
  { label: "Donations", href: "/dashboard/donations", icon: Gift },
  { label: "Website Settings", href: "/dashboard/settings", icon: Settings },
];

/** The nav content itself — no positioning, so it works inside a fixed
 * desktop aside AND inside a mobile Sheet without duplicating markup. */
export function SidebarContent({ onNavigate }: { onNavigate?: () => void }) {
  const pathname = usePathname();

  return (
    <div className="flex h-full flex-col bg-slate-900 text-slate-200">
      <div className="flex items-center gap-3 px-5 py-6">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-xs font-bold text-slate-900">
          COM
        </div>
        <div className="min-w-0">
          <p className="truncate text-lg font-bold leading-tight text-white">COM</p>
          <p className="truncate text-[10px] tracking-wide text-slate-400">
            COUNCIL OF MINORITIES
          </p>
        </div>
      </div>

      <nav className="flex-1 space-y-1 overflow-y-auto px-3">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          const Icon = item.icon;
          return (
            <Link
              key={item.href}
              href={item.href}
              onClick={onNavigate}
              className={cn(
                "flex items-center justify-between rounded-lg px-3 py-2.5 text-sm transition-colors",
                isActive
                  ? "bg-emerald-600 font-medium text-white"
                  : "text-slate-300 hover:bg-slate-800 hover:text-white"
              )}
            >
              <span className="flex items-center gap-3">
                <Icon className="h-4 w-4 shrink-0" />
                <span className="truncate">{item.label}</span>
              </span>
              {item.badge ? (
                <Badge className="h-5 min-w-5 shrink-0 justify-center rounded-full bg-red-500 px-1.5 text-white hover:bg-red-500">
                  {item.badge}
                </Badge>
              ) : null}
            </Link>
          );
        })}
      </nav>

      <div className="px-3 pb-3">
        <Link
          href="/"
          target="_blank"
          className="flex items-center justify-center gap-2 rounded-lg border border-slate-700 py-2.5 text-sm text-white hover:bg-slate-800"
        >
          View Website
          <ExternalLink className="h-3.5 w-3.5" />
        </Link>
      </div>

      <div className="flex items-center gap-3 border-t border-slate-800 px-4 py-4">
        <div className="h-9 w-9 shrink-0 overflow-hidden rounded-full bg-slate-700" />
        <div className="min-w-0 flex-1">
          <p className="truncate text-sm font-medium text-white">Admin</p>
          <p className="truncate text-xs text-slate-400">admin@com.org</p>
        </div>
        <MoreVertical className="h-4 w-4 shrink-0 text-slate-400" />
      </div>
    </div>
  );
}

/** Desktop-only fixed sidebar — hidden below the `lg` breakpoint. */
export function DashboardSidebar() {
  return (
    <aside className="hidden w-64 shrink-0 border-r border-slate-800 bg-slate-900 lg:block">
      <div className="h-screen overflow-y-auto">
        <SidebarContent />
      </div>
    </aside>
  );
}