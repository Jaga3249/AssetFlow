import { supabase } from "@/supabase/supabase";
import { EmployeePayload } from "./types";

export const createEmployee = async (employee: EmployeePayload) => {
  const { data, error } = await supabase
    .from("employees")
    .insert({
      employee_code: employee.employeeCode,
      full_name: employee.fullName,
      email: employee.email,
      phone: employee.phone,
      department: employee.department,
      designation: employee.designation,
      status: employee.status,
      joined_date: employee.joinedDate,
    })
    .select()
    .single();

  if (error) {
    throw new Error(error.message);
  }

  return data;
};

export const getAllEmployees = async () => {
  const { data, error } = await supabase
    .from("employees")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    throw new Error(error.message);
  }

  return data;
};
