import {
  IconDashboard,
  IconPackage,
  IconClipboardCheck,
  IconTool,
  IconUsers,
  Icon,
} from "@tabler/icons-react";

export type SideBarType = {
  label: string;
  link: string;
  icon: Icon;
};

export const sidebarConfig: SideBarType[] = [
  {
    label: "Dashboard",
    link: "/dashboard",
    icon: IconDashboard,
  },
  {
    label: "Employees",
    link: "/employees",
    icon: IconUsers,
  },
  {
    label: "Assets",
    link: "/assets",
    icon: IconPackage,
  },
  {
    label: "Assignments",
    link: "/assignments",
    icon: IconClipboardCheck,
  },
  {
    label: "Maintenance",
    link: "/maintenance",
    icon: IconTool,
  },
];
