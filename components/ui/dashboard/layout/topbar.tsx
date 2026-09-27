// components/dashboard/layout/topbar.tsx
"use client";

import { Menu, Search, Bell, ChevronDown } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface DashboardTopbarProps {
  onMenuClick: () => void;
}

export function DashboardTopbar({ onMenuClick }: DashboardTopbarProps) {
  return (
    <header className="flex items-center gap-3 border-b bg-white px-4 py-3 sm:gap-4 sm:px-6 sm:py-4">
      <button
        type="button"
        onClick={onMenuClick}
        aria-label="Toggle navigation menu"
        className="rounded-md p-1.5 hover:bg-slate-100 lg:hidden"
      >
        <Menu className="h-5 w-5 text-slate-600" />
      </button>

      <div className="relative min-w-0 flex-1 sm:max-w-md">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
        <Input
          placeholder="Search anything..."
          className="rounded-full bg-slate-50 pl-9"
        />
      </div>

      <div className="ml-auto flex shrink-0 items-center gap-3 sm:gap-5">
        <button
          type="button"
          aria-label="Notifications"
          className="relative rounded-md p-1.5 hover:bg-slate-100"
        >
          <Bell className="h-5 w-5 text-slate-600" />
          <Badge className="absolute -right-1 -top-1 h-4 min-w-4 justify-center rounded-full bg-red-500 px-1 text-[10px] hover:bg-red-500">
            3
          </Badge>
        </button>

        <DropdownMenu>
          <DropdownMenuTrigger className="flex items-center gap-2 outline-none">
            <div className="h-9 w-9 shrink-0 overflow-hidden rounded-full bg-slate-200" />
            <div className="hidden text-left sm:block">
              <p className="text-sm font-medium text-slate-900">Admin</p>
              <p className="text-xs text-slate-500">Super Admin</p>
            </div>
            <ChevronDown className="hidden h-4 w-4 text-slate-400 sm:block" />
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Account Settings</DropdownMenuItem>
            <DropdownMenuItem>Log out</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}