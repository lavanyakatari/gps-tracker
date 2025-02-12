import { mongoose } from "mongoose";

const todoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  userName: {
    type: String,
    required: true,
  },

  role: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  completed: {
    type: Boolean,
    default: false,
  },
});

export const TodoModel = mongoose.model("Todo", todoSchema);
