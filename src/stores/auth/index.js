import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: { id: false, name: "", userId: false },
};

const auth = createSlice({
  name: "auth",
  initialState,
  reducers: {
    _setUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { _setUser } = auth.actions;
export default auth.reducer;
