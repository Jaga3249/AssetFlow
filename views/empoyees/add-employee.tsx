"use client";

import {
  Button,
  Drawer,
  Group,
  Select,
  SegmentedControl,
  Stack,
  TextInput,
  Text,
} from "@mantine/core";
import { DateInput } from "@mantine/dates";
import { useForm } from "@mantine/form";
import { zodResolver } from "mantine-form-zod-resolver";
import { useState } from "react";
import { EmployeeFormValues, employeeSchema } from "./validation";
import { IconUserPlus } from "@tabler/icons-react";

interface AddEmployeeProp {
  opened: boolean;
  close: () => void;
}

type DrawerSize = "small" | "medium" | "large";

const drawerSizes: Record<DrawerSize, string> = {
  small: "400px",
  medium: "550px",
  large: "750px",
};

export const AddEmployee = ({ opened, close }: AddEmployeeProp) => {
  const [drawerSize, setDrawerSize] = useState<DrawerSize>("medium");

  const form = useForm<EmployeeFormValues>({
    mode: "uncontrolled",

    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      department: "",
      designation: "",
      employeeCode: "",
      status: "Inactive",
      joiningDate: new Date(),
    },

    validate: zodResolver(employeeSchema),
  });

  const generateEmployeeCode = () => {
    const randomNumber = Math.floor(10000 + Math.random() * 90000);

    form.setFieldValue("employeeCode", `EMP-${randomNumber}`);
  };

  const handleSubmit = async (values: EmployeeFormValues) => {
    console.log("Employee:", values);

    // await createEmployee(values);

    // form.reset();
    // close();
  };

  const handleClose = () => {
    form.reset();
    close();
  };

  return (
    <Drawer
      opened={opened}
      onClose={handleClose}
      title={
        <Group gap="xs">
          <IconUserPlus size={20} />
          <Text fw={600}>Add Employee</Text>
        </Group>
      }
      position="right"
      size={drawerSizes[drawerSize]}
      bg="gray.2"
    >
      <Stack gap="md">
        {/* Drawer Size Selector */}
        <SegmentedControl
          fullWidth
          size="xs"
          value={drawerSize}
          onChange={(value) => setDrawerSize(value as DrawerSize)}
          data={[
            { label: "Small", value: "small" },
            { label: "Medium", value: "medium" },
            { label: "Large", value: "large" },
          ]}
        />

        <form onSubmit={form.onSubmit(handleSubmit)}>
          <Stack gap="md">
            <Group grow>
              <TextInput
                label="First Name"
                placeholder="Enter first name"
                withAsterisk
                key={form.key("firstName")}
                {...form.getInputProps("firstName")}
              />

              <TextInput
                label="Last Name"
                placeholder="Enter last name"
                withAsterisk
                key={form.key("lastName")}
                {...form.getInputProps("lastName")}
              />
            </Group>

            <TextInput
              label="Email"
              placeholder="employee@example.com"
              type="email"
              withAsterisk
              key={form.key("email")}
              {...form.getInputProps("email")}
            />

            <TextInput
              label="Phone"
              placeholder="9876543210"
              withAsterisk
              key={form.key("phone")}
              {...form.getInputProps("phone")}
            />

            <Select
              label="Department"
              placeholder="Select department"
              withAsterisk
              data={[
                "Engineering",
                "Human Resources",
                "Finance",
                "Marketing",
                "Operations",
                "Sales",
              ]}
              key={form.key("department")}
              {...form.getInputProps("department")}
            />

            <TextInput
              label="Designation"
              placeholder="e.g. Frontend Developer"
              withAsterisk
              key={form.key("designation")}
              {...form.getInputProps("designation")}
            />

            <Group align="flex-end" grow>
              <TextInput
                label="Employee Code"
                placeholder="EMP-12345"
                readOnly
                key={form.key("employeeCode")}
                {...form.getInputProps("employeeCode")}
              />

              <Button
                variant="light"
                type="button"
                onClick={generateEmployeeCode}
              >
                Generate Code
              </Button>
            </Group>

            <Select
              label="Status"
              data={["Active", "Inactive"]}
              key={form.key("status")}
              {...form.getInputProps("status")}
            />

            <DateInput
              label="Joining Date"
              placeholder="Select joining date"
              withAsterisk
              valueFormat="DD MMM YYYY"
              key={form.key("joiningDate")}
              {...form.getInputProps("joiningDate")}
            />

            <Group justify="flex-end" mt="md">
              <Button variant="default" onClick={handleClose} type="button">
                Cancel
              </Button>

              <Button type="submit">Add Employee</Button>
            </Group>
          </Stack>
        </form>
      </Stack>
    </Drawer>
  );
};
