import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { QueryClient, QueryClientProvider } from "react-query";
import { configureStore, Middleware } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import "./index.scss";
import ErrorBoundaryWrapper from "./error-boundary/ErrorBoundaryWrapper.tsx";
import authReducer from "./state/auth.slice";
import cookie from "./state/cookie.middleware.ts";

const queryClient = new QueryClient();

const middlewares: Middleware[] = [cookie];

const store = configureStore({
  reducer: {
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(middlewares),
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ErrorBoundaryWrapper>
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </QueryClientProvider>
      </Provider>
    </ErrorBoundaryWrapper>
  </React.StrictMode>
);
