import { createSlice, nanoid } from "@reduxjs/toolkit";

const initalValue = [];

export const todoSlice = createSlice({
  name: "todos",
  reducers: {
    addTodo: {
      reducer: (state, action) => {
        state.push(action.payload);
      },
      prepare: (title, body) => {
        return {
          payload: {
            id: nanoid(),
            title: title,
            body: body,
          },
        };
      },
    },
    updateTodo: {
      reducer: (state, action) => {
        const id = action.payload.id;
        state.map((todo) => {
          if (todo.id === id) {
            return {
              ...todo,
              title: payload.title,
              body: payload.body,
            };
          }
          return todo;
        });
      },
      prepare: (id, title, body) => {
        return {
          payload: {
            id: id,
            title: title,
            body: body,
          },
        };
      },
    },
  },
});

export const selectTodos = state.todos;

export const { addTodo } = todoSlice.actions;

export default todoSlice.reducer;
