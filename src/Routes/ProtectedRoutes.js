import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const ProtectedRoutes = () => {
  const { token } = useSelector((state) => state.AuthReducer);

  const getAuth = () => {
    if (token) {
      return true;
    } else {
      return false;
    }
  };

  const auth = getAuth();
  return <>{auth ? <Outlet /> : <Navigate to="/" />}</>;
};

export default ProtectedRoutes;
