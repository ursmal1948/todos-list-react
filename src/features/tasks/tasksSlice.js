import { createSlice } from "@reduxjs/toolkit";
import tasks from "./pureTasks";
const tasksSlice = createSlice({
  name: "tasks",
  initialState: {
    tasks: tasks,
    hideDone: false,
  },
  reducers: {
    addTask: ({ tasks }, { payload: task }) => {
      tasks.push(task);
    },
  },
});

export const addTask = tasksSlice.actions;

export default tasksSlice.reducer;
