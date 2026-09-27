"use client";

import { AppShell, NavLink, Stack, Text } from "@mantine/core";
import { IconDashboard, IconUsers, IconSettings } from "@tabler/icons-react";

export const Sidebar = () => {
  return (
    <AppShell.Navbar p="md">
      <Stack gap="xs">
        <Text fw={700} size="lg" mb="md">
          My App
        </Text>

        <NavLink
          href="/"
          label="Dashboard"
          leftSection={<IconDashboard size={18} />}
        />

        <NavLink
          href="/users"
          label="Users"
          leftSection={<IconUsers size={18} />}
        />

        <NavLink
          href="/settings"
          label="Settings"
          leftSection={<IconSettings size={18} />}
        />
      </Stack>
    </AppShell.Navbar>
  );
};
