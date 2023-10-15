import { createSlice } from "@reduxjs/toolkit";

const initialTodos = JSON.parse(localStorage.getItem("todos")) || [];

const localSet = (data) => {
  localStorage.setItem("todos", JSON.stringify(data));
};

const initialState = {
  todos: initialTodos,
};

const todos = createSlice({
  name: "todos",
  initialState,
  reducers: {
    _addTodo: (state, action) => {
      state.todos = [action.payload, ...state.todos];
      localSet(state.todos);
    },
    _deleteTodo: (state, action) => {
      state.todos = state.todos.filter((t) => t.id !== action.payload);
      localSet(state.todos);
    },
    _updateTodo: (state, action) => {
      state.todos = state.todos.map((t) => {
        if (t.id === action.payload.id) {
          t.title = action.payload.title;
          t.done = action.payload.done;
        }
        return t;
      });
      localSet(state.todos);
    },
  },
});

export const { _addTodo, _deleteTodo, _updateTodo } = todos.actions;
export default todos.reducer;
