import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import { Provider } from "react-redux";

// React Query imports
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

//Component imports
import App from "./App.jsx";
import Home from "./pages/Home";
import AddTodo from "./pages/Todo/AddTodo.jsx";
import store from "./store/store.js";
import TodoWrapper from "./wrapper/TodoWrapper.jsx";
import Cart from "./pages/Cart";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<App />}>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/todo" element={<TodoWrapper />} />
        <Route path="/addTodo" element={<AddTodo />} />
      </Route>
    </>
  )
);

// Client Query
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <RouterProvider router={router} />
        <ReactQueryDevtools initialIsOpen={false} />
      </Provider>
    </QueryClientProvider>
  </React.StrictMode>
);
