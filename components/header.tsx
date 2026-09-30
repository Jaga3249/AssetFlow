"use client";

import { AppShell, Avatar, Group, Text } from "@mantine/core";
import { IconPackage } from "@tabler/icons-react";

export const Header = () => {
  return (
    <AppShell.Header px="md">
      <Group h="100%" justify="space-between">
        {/* Project Name */}
        <Group gap="sm">
          {" "}
          <IconPackage size={20} />
          <Text fw={700} size="lg">
            AssetFlow
          </Text>
        </Group>

        <Group gap="sm">
          <div>
            <Text size="sm" fw={500}>
              Jagannath Behera
            </Text>

            <Text size="xs" c="dimmed">
              Frontend Developer
            </Text>
          </div>

          <Avatar
            name="Jagannath Behera"
            color="initials"
            radius="xl"
            size="md"
          />
        </Group>
      </Group>
    </AppShell.Header>
  );
};
