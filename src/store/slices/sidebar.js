import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isShow: true,
};

const sidebar = createSlice({
  name: "sidebar",
  initialState,
  reducers: {
    toggle: (state) => {
      state.isShow = !state.isShow;
    },
    show: (state) => {
      state.isShow = true;
    },
    close: (state) => {
      state.isShow = false;
    },
  },
});

export const { toggle, show, close } = sidebar.actions;
export default sidebar.reducer;
