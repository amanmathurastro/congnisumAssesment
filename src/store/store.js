import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "./TaskSlice/TaskSlice";

const store = configureStore({
  reducer: {
    task: taskReducer,
  },
});

export default store;
