import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    modals: [],
};

const modal = createSlice({
    name: "modals",
    initialState,
    reducers: {
        append: (state, { payload }) => {
            state.modals.push(payload)
        },
        destroy: (state) => {
            state.modals.pop()
        },
        destroyAll: (state) => {
            state.modals = []
        },
    },
});

export const { append, destroy, destroyAll } = modal.actions;
export default modal.reducer;
