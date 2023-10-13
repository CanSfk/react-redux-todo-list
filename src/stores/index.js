import { configureStore } from "@reduxjs/toolkit";
import todos from "./todo";
import auth from "./auth";

export const store = configureStore({
  reducer: {
    todos,
    auth,
  },
});
