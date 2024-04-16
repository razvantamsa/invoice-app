import React from "react";
import { Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";

import Invoice from "./pages/Invoice";
import Home from "./pages/home/Home";
import _404 from "./pages/404/404";
import Login from "./pages/login/Login";
import IState from "./state/state.interface";

const App: React.FC = () => {
  const accessToken = useSelector((state: IState) => state.auth.accessToken);

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
