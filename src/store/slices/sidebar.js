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
  },
});

export const { toggle } = sidebar.actions;
export default sidebar.reducer;
