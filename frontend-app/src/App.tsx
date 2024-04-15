import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";

import Invoice from "./pages/Invoice";
import Home from "./pages/home/Home";
import _404 from "./pages/404/404";
import Login from "./pages/login/Login";
import authReducer from "./state/auth.slice";

const queryClient = new QueryClient();

const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Routes>
            <Route path="/" Component={Home} />
            <Route path="/login" Component={Login} />
            <Route path="/invoice" Component={Invoice} />
            <Route path="*" Component={_404} />
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </Provider>
  );
};

export default App;
