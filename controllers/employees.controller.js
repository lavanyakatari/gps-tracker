import { EmployeeModel } from "../model/employee.model.js";

export const createEmployee = async (req, res) => {
  const { name, email, password, phone } = req.body;
  const employee = new EmployeeModel({ name, email, password, phone });
  await employee.save();
  try {
    res
      .status(201)
      .json({ message: "Employee created successfully", employee });
  } catch (error) {
    res.status(500).json({ message: "Internal server error", error });
  }
};

export const getEmployee = async (req, res) => {
  const employee = await EmployeeModel.find();
  try {
    res
      .status(200)
      .json({ message: "Employee fetched successfully", employee });
  } catch (error) {
    res.status(500).json({ message: "Internal server error", error });
  }
};
