import express from "express";
import {
  createEmployee,
  getEmployee,
} from "../controllers/employees.controller.js";

const router = express.Router();

router.post("/add-emp", createEmployee);
router.get("/all-employees", getEmployee);

export default router;
