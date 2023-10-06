import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {} || null,
  toggle: false,
};

const GlobalState = createSlice({
  name: "second",
  initialState,
  reducers: {
    userState: (state, { payload }) => {
      state.user = payload;
    },
    toggleState: (state, { payload }) => {
      state.toggle = payload;
    },
    logOut: (state) => {
      state.user = null;
    },
  },
});

export const { userState, toggleState, logOut } = GlobalState.actions;

export default GlobalState.reducer;
