import { FC, ReactNode } from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute: FC<{ children: ReactNode }> = ({ children }) => {
  const authData = localStorage.getItem("auth")
    ? JSON.parse(localStorage.getItem("auth") as string)
    : null;

  return authData ? <>{children}</> : <Navigate to="/" />;
};

export default PrivateRoute;
