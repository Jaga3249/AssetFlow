"use client";

import { SideBarType } from "@/sidebar-config";
import { AppShell, NavLink, Stack } from "@mantine/core";
import { usePathname } from "next/navigation";
interface SideBarTypeProps {
  sidebarConfig: SideBarType[];
}
export const Sidebar = ({ sidebarConfig }: SideBarTypeProps) => {
  const pathname = usePathname();
  return (
    <AppShell.Navbar p="md">
      <Stack gap="xs">
        {sidebarConfig.map((item) => {
          const Icon = item.icon;
          return (
            <NavLink
              key={item.link}
              href={item.link}
              label={item.label}
              leftSection={<Icon size={18} />}
              active={pathname === item.link}
            />
          );
        })}
      </Stack>
    </AppShell.Navbar>
  );
};
