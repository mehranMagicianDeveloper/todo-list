import { configureStore } from "@reduxjs/toolkit";
import todosReducer from "../features/todo/todosSlice";

export const store = configureStore({
  reducer: {
    todos: todosReducer,
  },
});
