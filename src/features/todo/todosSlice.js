import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  items: [
    {
      id: "1",
      title: "Redux",
      body: "I know redux could be complex but I have to learn it well.",
    },
  ],
  searchData: "",
};

export const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: {
      reducer(state, action) {
        state.items.push(action.payload);
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
    setSearchData: (state, action) => {
      state.searchData = action.payload;
    },
  },
});

export const selectTodos = (state) => state.todos.items;
export const getSearchData = (state) => state.todos.searchData;

export const { addTodo, setSearchData } = todosSlice.actions;

export default todosSlice.reducer;
