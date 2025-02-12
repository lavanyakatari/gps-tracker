import express from "express";
import {
  createTodo,
  getTodo,
  deleteTodo,
} from "../controllers/todo.controller.js";

export const TodoRouter = express.Router();

TodoRouter.post("/", createTodo);
TodoRouter.get("/", getTodo);
TodoRouter.delete("/:id", deleteTodo);
