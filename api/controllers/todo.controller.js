import { TodoModel } from "../model/todo.model.js";

export const createTodo = async (req, res) => {
  try {
    const { title } = req.body;
    const todo = await TodoModel.create({ title });
    res.json(todo);
  } catch (error) {
    res.status(500).json({ message: "Error creating todo" });
  }
};

export const getTodo = async (req, res) => {
  try {
    const todos = await TodoModel.find();
    res.json(todos);
  } catch (error) {
    res.status(500).json({ message: "Error getting todos" });
  }
};

export const updateTodo = async (req, res) => {
  try {
    const updatedTodo = await TodoModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.status(200).json(updatedTodo);
  } catch (error) {
    res.status(500).json({ message: "Error updating todo" });
  }
};

export const deleteTodo = async (req, res) => {
  try {
    await TodoModel.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Todo deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting todo" });
  }
};
