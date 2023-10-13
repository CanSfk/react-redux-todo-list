import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
};

const todos = createSlice({
  name: "todos",
  initialState,
  reducers: {
    _addTodo: (state, action) => {
      state.todos = [action.payload, ...state.todos];
    },
    _deleteTodo: (state, action) => {
      state.todos = state.todos.filter((t) => t.id !== action.payload);
    },
  },
});

export const { _addTodo, _deleteTodo } = todos.actions;
export default todos.reducer;
