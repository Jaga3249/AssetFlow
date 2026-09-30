import { Card, Group, Paper, Stack, Text } from "@mantine/core";

interface StatCardProps {
  label: string;
  value: string;
  icon: React.ReactNode;
}
export const StatCard = ({ label, value, icon }: StatCardProps) => {
  return (
    <Card withBorder radius="md" padding="lg">
      <Group justify="space-between">
        <Stack gap={4}>
          <Text size="sm" c="dimmed">
            {label}
          </Text>

          <Text size="xl" fw={600}>
            {value}
          </Text>
        </Stack>

        <Paper
          w={40}
          h={40}
          radius="md"
          withBorder
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {icon}
        </Paper>
      </Group>
    </Card>
  );
};
