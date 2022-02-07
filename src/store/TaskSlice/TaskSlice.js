import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  task: [],
};

const TaskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    addTaskToStore: (state, action) => {
      state.task.push(action.payload);
    },
    deleteFromStore: (state, action) => {
      state.task = state.task.filter((tsk) => {
        return tsk.id !== action.payload;
      });
    },
    updateTask: (state, action) => {
      const { id, day, updatedTaskInput } = action.payload;
      const existingTaskIndex = state.task.findIndex((tsk) => tsk.id === id);
      console.log(existingTaskIndex);

      const existingTask = state.task[existingTaskIndex];
      state.task[existingTaskIndex] = {
        ...existingTask,
        taskDescription: updatedTaskInput,
      };
    },
  },
});

export default TaskSlice.reducer;
export const { addTaskToStore, deleteFromStore, updateTask } =
  TaskSlice.actions;
