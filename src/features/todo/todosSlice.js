import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [
  {
    id: "1",
    title: "Redux",
    body: "I know redux could be complex but I have to learn it well.",
  },
];

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
export const selectTodoByTitle = (state, searchData) =>
  state.todos.find((todo) => todo.title === searchData);

export const { addTodo } = todosSlice.actions;

export default todosSlice.reducer;
