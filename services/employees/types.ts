export interface EmployeePayload {
  employeeCode: string;
  fullName: string;
  email: string;
  phone?: string;
  department: string;
  designation: string;
  status: "Active" | "Inactive";
  joinedDate?: string;
}
