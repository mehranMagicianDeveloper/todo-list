import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [];

export const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(title, body) {
        return {
          payload: {
            id: nanoid(),
            title,
            body,
          },
        };
      },
    },
  },
});

export const selectTodos = (state) => state.todos;

export const { addTodo } = todosSlice.actions;

export default todosSlice.reducer;
