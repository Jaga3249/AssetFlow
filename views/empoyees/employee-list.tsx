"use client";

import {
  Button,
  Card,
  Group,
  Stack,
  Text,
  TextInput,
  Title,
} from "@mantine/core";
import {
  IconBriefcase,
  IconPlus,
  IconSearch,
  IconUsers,
} from "@tabler/icons-react";
import { StatCard } from "./components/stats-card";
import { employees } from "./constant";
import { EmployeeTable } from "./components/employee-table";

export const EmployeeList = () => {
  return (
    <Stack gap="xl">
      <Group justify="space-between" align="flex-start">
        <Stack gap={4}>
          <Title order={2}>Employees</Title>

          <Text size="sm" c="dimmed">
            Manage your employees and track their assigned assets.
          </Text>
        </Stack>

        <Button leftSection={<IconPlus size={17} />}>Add employee</Button>
      </Group>

      <Group grow>
        <StatCard
          label="Total employees"
          value="24"
          icon={<IconUsers size={20} />}
        />

        <StatCard
          label="Active employees"
          value="22"
          icon={<IconBriefcase size={20} />}
        />

        <StatCard
          label="Inactive employees"
          value="2"
          icon={<IconUsers size={20} />}
        />
      </Group>

      <Card withBorder radius="md" padding={0}>
        <Group
          justify="space-between"
          p="md"
          style={{
            borderBottom: "1px solid var(--mantine-color-default-border)",
          }}
        >
          <Stack gap={2}>
            <Text fw={600}>All employees</Text>

            <Text size="xs" c="dimmed">
              View and manage your employees.
            </Text>
          </Stack>

          <TextInput
            placeholder="Search employees"
            leftSection={<IconSearch size={16} />}
            w={260}
          />
        </Group>

        <EmployeeTable employees={employees} />
      </Card>
    </Stack>
  );
};
