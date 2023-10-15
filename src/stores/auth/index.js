import { createSlice } from "@reduxjs/toolkit";

const initialUser = JSON.parse(localStorage.getItem("user")) || {
  id: false,
  name: "",
};

const setLocal = (data) => {
  localStorage.setItem("user", JSON.stringify(data));
};

const initialState = {
  user: initialUser,
};

const auth = createSlice({
  name: "auth",
  initialState,
  reducers: {
    _setUser: (state, action) => {
      state.user = action.payload;
      setLocal(state.user);
    },
  },
});

export const { _setUser } = auth.actions;
export default auth.reducer;
