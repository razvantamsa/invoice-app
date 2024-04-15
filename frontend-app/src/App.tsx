import React from "react";
import { Route, Routes, useNavigate } from "react-router-dom";

import Invoice from "./pages/Invoice";
import Home from "./pages/home/Home";
import _404 from "./pages/404/404";
import Login from "./pages/login/Login";
import useAuth from "./auth/useAuth";

const App: React.FC = () => {
  const navigate = useNavigate();
  const accessToken = useAuth(navigate);

  return (
    <Routes>
      <Route path="/login" Component={Login} />
      <Route path="*" Component={_404} />
      {accessToken && (
        <>
          <Route path="/" Component={Home} />
          <Route path="/invoice" Component={Invoice} />
        </>
      )}
    </Routes>
  );
};

export default App;
