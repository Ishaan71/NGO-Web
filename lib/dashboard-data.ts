// lib/dashboard-data.ts
// Static mock data. Replace with real fetches once your backend is ready.

import { Users2, HeartHandshake, FileText, MapPin, type LucideIcon } from "lucide-react";

type Theme = "green" | "blue" | "orange" | "purple";

type StatCard = {
  id: string;
  label: string;
  value: string;
  change: string;
  icon: LucideIcon;
  theme: Theme;
};

type GrowthPoint = {
  month: string;
  value: number;
};

type Story = {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  status: string;
};

type Publication = {
  id: string;
  title: string;
  type: "PDF" | "DOC";
  size: string;
  date: string;
};

type Message = {
  id: string;
  name: string;
  initials: string;
  message: string;
  date: string;
  unread: boolean;
};

export const statCards: StatCard[] = [
  { id: "communities", label: "Communities Reached", value: "150", change: "+12%", icon: Users2, theme: "green" },
  { id: "beneficiaries", label: "Total Beneficiaries", value: "5,200", change: "+18%", icon: HeartHandshake, theme: "blue" },
  { id: "projects", label: "Active Projects", value: "25", change: "+8%", icon: FileText, theme: "orange" },
  { id: "districts", label: "Districts Covered", value: "10", change: "+25%", icon: MapPin, theme: "purple" },
];

export const impactGrowthData: GrowthPoint[] = [
  { month: "Jan", value: 1200 }, { month: "Feb", value: 1900 },
  { month: "Mar", value: 2100 }, { month: "Apr", value: 2400 },
  { month: "May", value: 2200 }, { month: "Jun", value: 3100 },
  { month: "Jul", value: 3400 }, { month: "Aug", value: 3600 },
  { month: "Sep", value: 4500 }, { month: "Oct", value: 4700 },
  { month: "Nov", value: 5100 }, { month: "Dec", value: 6300 },
];

export const recentStories: Story[] = [
  { id: "1", title: "Education Brings New Hope", excerpt: "How our education program is changing lives in rural communities.", date: "Mar 12, 2025", status: "Published" },
  { id: "2", title: "A Voice for Her Rights", excerpt: "Supporting women from marginalized communities to access justice.", date: "Mar 8, 2025", status: "Published" },
  { id: "3", title: "Community Dialogue for Change", excerpt: "Bringing communities together for a more inclusive future.", date: "Feb 28, 2025", status: "Published" },
];

export const recentPublications: Publication[] = [
  { id: "1", title: "Annual Report 2024", type: "PDF", size: "2.4 MB", date: "Jan 15, 2025" },
  { id: "2", title: "Minority Rights Policy Brief", type: "PDF", size: "1.8 MB", date: "Dec 10, 2024" },
  { id: "3", title: "Community Development Guide", type: "DOC", size: "1.2 MB", date: "Nov 5, 2024" },
  { id: "4", title: "Research on Social Inclusion", type: "PDF", size: "3.1 MB", date: "Oct 18, 2024" },
];

export const latestMessages: Message[] = [
  { id: "1", name: "Saba Ahmed", initials: "SA", message: "Interested in volunteering for your next...", date: "Mar 12, 2025", unread: true },
  { id: "2", name: "Rahul Khan", initials: "RK", message: "Partnership opportunity", date: "Mar 11, 2025", unread: true },
  { id: "3", name: "Maria Thomas", initials: "MT", message: "Request for more information", date: "Mar 10, 2025", unread: true },
  { id: "4", name: "Ayesha Iqbal", initials: "AI", message: "Support for community program", date: "Mar 9, 2025", unread: true },
];