import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import IState from "./state.interface";

interface ProtectedRouteProps {
  authRequired: boolean;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ authRequired }) => {
  const accessToken = useSelector((state: IState) => state.auth.accessToken);

  if (!accessToken && authRequired) {
    return <Navigate to="/login" replace />;
  }

  if (accessToken && !authRequired) {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
