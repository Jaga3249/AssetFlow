"use client";

import {
  Avatar,
  Badge,
  Button,
  Group,
  Pagination,
  Stack,
  Table,
  Text,
} from "@mantine/core";
import { IconDots, IconPhone } from "@tabler/icons-react";
import { useState } from "react";
import { Employee } from "../types";

interface EmployeeTableProps {
  employees: Employee[];
  itemsPerPage?: number;
}

export const EmployeeTable = ({
  employees,
  itemsPerPage = 5,
}: EmployeeTableProps) => {
  const [page, setPage] = useState(1);

  const totalPages = Math.ceil(employees.length / itemsPerPage);

  const startIndex = (page - 1) * itemsPerPage;
  const paginatedEmployees = employees.slice(
    startIndex,
    startIndex + itemsPerPage,
  );

  return (
    <Stack gap="md">
      <Table highlightOnHover verticalSpacing="md">
        <Table.Thead>
          <Table.Tr>
            <Table.Th>Employee</Table.Th>
            <Table.Th>Contact</Table.Th>
            <Table.Th>Department</Table.Th>
            <Table.Th>Designation</Table.Th>
            <Table.Th>Status</Table.Th>
            <Table.Th />
          </Table.Tr>
        </Table.Thead>

        <Table.Tbody>
          {paginatedEmployees.map((employee) => (
            <Table.Tr key={employee.id}>
              <Table.Td>
                <Group gap="sm">
                  <Avatar size={36} radius="xl">
                    {employee.name.charAt(0)}
                  </Avatar>

                  <Stack gap={1}>
                    <Text size="sm" fw={500}>
                      {employee.name}
                    </Text>

                    <Text size="xs" c="dimmed">
                      {employee.email}
                    </Text>
                  </Stack>
                </Group>
              </Table.Td>

              <Table.Td>
                <Group gap="xs">
                  <IconPhone size={15} />
                  <Text size="sm">{employee.phone}</Text>
                </Group>
              </Table.Td>

              <Table.Td>
                <Text size="sm">{employee.department}</Text>
              </Table.Td>

              <Table.Td>
                <Text size="sm">{employee.designation}</Text>
              </Table.Td>

              <Table.Td>
                <Badge
                  variant="light"
                  color={employee.status === "Active" ? "green" : "gray"}
                >
                  {employee.status}
                </Badge>
              </Table.Td>

              <Table.Td>
                <Button variant="subtle" color="gray" size="compact-sm" px={6}>
                  <IconDots size={18} />
                </Button>
              </Table.Td>
            </Table.Tr>
          ))}
        </Table.Tbody>
      </Table>

      {totalPages >= 1 && (
        <Group justify="center" py="sm">
          <Pagination value={page} onChange={setPage} total={totalPages} />
        </Group>
      )}
    </Stack>
  );
};
