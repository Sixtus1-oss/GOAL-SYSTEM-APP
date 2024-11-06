import { FC, ReactNode } from "react";
import { Navigate } from "react-router-dom";

const PublicRoute: FC<{ children: ReactNode }> = ({ children }) => {
  const authData = localStorage.getItem("auth")
    ? JSON.parse(localStorage.getItem("auth") as string)
    : null;

  return authData ? (
    <>
      <Navigate to="/dashboard" />
    </>
  ) : (
    <>{children}</>
  );
};

export default PublicRoute;
