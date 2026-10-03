import { z } from "zod";

export const employeeSchema = z.object({
  firstName: z.string().min(2, "First name is required"),
  lastName: z.string().min(2, "Last name is required"),
  email: z.string().email("Invalid email"),
  phone: z.string().min(10, "Phone number is required"),
  department: z.string().min(1, "Department is required"),
  designation: z.string().min(1, "Designation is required"),

  employeeCode: z.string().min(1, "Generate employee code"),

  status: z.enum(["Active", "Inactive"]),

  joiningDate: z.date({
    message: "Joining date is required",
  }),
});

export type EmployeeFormValues = z.infer<typeof employeeSchema>;
