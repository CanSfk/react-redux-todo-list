import { configureStore } from "@reduxjs/toolkit";
import todos from "./todo";
import auth from "./auth";
import modal from "./modal";

export const store = configureStore({
  reducer: {
    todos,
    auth,
    modal,
  },
});
