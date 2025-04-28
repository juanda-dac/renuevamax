import { Router } from "express";
import { getEmployees, getEmployeeById, saveEmployee, updateEmployee, deleteEmployee } from "../controllers/employees.controller.js";

const employeesRoutes = Router();

employeesRoutes.get("/", getEmployees);
employeesRoutes.get("/:employeeId", getEmployeeById);
employeesRoutes.post("/", saveEmployee);
employeesRoutes.put("/:employeeId", updateEmployee);
employeesRoutes.delete("/:employeeId", deleteEmployee);

export default employeesRoutes;
