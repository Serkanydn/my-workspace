import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/router.jsx";
import "./css/index.css";
import "./css/reset.css";
import "./css/normalize.css";
import { Provider } from "react-redux";
import { store } from "./store";

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={router} />
    <ToastContainer/>
  </Provider>
);
