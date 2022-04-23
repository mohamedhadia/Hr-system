import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import Employees from "./Employees";
import EmployeeCard from "./EmployeeCard";

export default function ProductPage() {
  const employeeId = useParams();
  const employees = useSelector((state) => state.employees.employees);
  const employee = employees.find(
    (employee) => employee.id === parseInt(employeeId.id)
  );
  return <EmployeeCard employee={employee} />;
}
