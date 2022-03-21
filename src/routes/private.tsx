import { useContext } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { AuthContext } from "../context/auth";

export const PrivateRoute = () => {
  const { authenticated } = useContext(AuthContext);
  const location = useLocation();
  return authenticated ? (
    <Outlet />
  ) : (
    <Navigate to="/" replace state={{ from: location }} />
  );
};
