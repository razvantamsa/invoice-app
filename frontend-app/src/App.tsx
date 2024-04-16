import React from "react";
import { Route, Routes } from "react-router-dom";

import Invoice from "./pages/Invoice";
import Home from "./pages/home/Home";
import _404 from "./pages/404/404";
import Login from "./pages/login/Login";
import ProtectedRoute from "./state/ProtectedRoute";

const App: React.FC = () => {
  return (
    <Routes>
      <Route element={<ProtectedRoute authRequired={true} />}>
        <Route path="/" Component={Home} />
        <Route path="/invoice" Component={Invoice} />
        <Route path="*" Component={_404} />
      </Route>
      <Route element={<ProtectedRoute authRequired={false} />}>
        <Route path="/login" Component={Login} />
      </Route>
    </Routes>
  );
};

export default App;
