import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  reference: "",
};

const header = createSlice({
  name: "header",
  initialState,
  reducers: {
    setReference: (state, { payload }) => {
      console.log("payload", payload);
      state.reference = payload;
    },
  },
});

export const { setReference } = header.actions;
export default header.reducer;
