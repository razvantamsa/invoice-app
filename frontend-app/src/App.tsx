import React from "react";
import { Route, Routes } from "react-router-dom";

import InvoicePage from "./pages/invoice/InvoicePage";
import _404 from "./pages/404/404";
import Login from "./pages/login/Login";
import ProtectedRoute from "./state/ProtectedRoute";

const App: React.FC = () => {
  return (
    <Routes>
      <Route element={<ProtectedRoute authRequired={true} />}>
        <Route path="/invoice" Component={InvoicePage} />
      </Route>
      <Route element={<ProtectedRoute authRequired={false} />}>
        <Route path="/login" Component={Login} />
      </Route>
      <Route path="*" Component={_404} />
    </Routes>
  );
};

export default App;
