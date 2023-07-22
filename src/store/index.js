import { configureStore } from "@reduxjs/toolkit";

import sidebar from "./slices/sidebar";
import header from "./slices/header";
import modal from "./slices/modal";

export const store = configureStore({
  devTools: true,
  reducer: {
    sidebar,
    header,
    modal,
  },
});

