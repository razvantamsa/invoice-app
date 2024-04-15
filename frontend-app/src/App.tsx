import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Invoice from "./pages/Invoice";
import Home from "./pages/home/Home";
import _404 from "./pages/404/404";
import Login from "./pages/login/Login";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/login" Component={Login} />
        <Route path="/invoice" Component={Invoice} />
        <Route path="*" Component={_404} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
