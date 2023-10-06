import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  owner: {} || null,
  toggle: false,
};

const GlobalState = createSlice({
  name: "second",
  initialState,
  reducers: {
    ownerState: (state, { payload }) => {
      state.owner = payload;
    },
    toggleState: (state, { payload }) => {
      state.toggle = payload;
    },
    onLogOut: (state) => {
      state.owner = null;
    },
  },
});

export const { ownerState, toggleState, onLogOut } = GlobalState.actions;

export default GlobalState.reducer;
