import AuthLayout from "@/layout/authLayout";
import MainLayout from "@/layout/mainLayout";
import LoginScreen from "@/pages/auth/LoginScreen";
import RegisterScreen from "@/pages/auth/RegisterScreen";
import HomePageScreen from "@/pages/home/HomePageScreen";
import LandingPageScreen from "@/pages/screen/LandingPageScreen";
import { createBrowserRouter } from "react-router-dom";
import PrivateRoute from "./privateRoute";
import PublicRoute from "./publicRoute";

export const mainRouter = createBrowserRouter([
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <MainLayout />
      </PrivateRoute>
    ),
    children: [
      {
        index: true,
        element: <HomePageScreen />,
      },
    ],
  },
  {
    path: "/auth",
    element: (
      <PublicRoute>
        <AuthLayout />
      </PublicRoute>
    ),
    children: [
      {
        index: true,
        element: <RegisterScreen />,
      },
      {
        index: true,
        path: "login",
        element: <LoginScreen />,
      },
    ],
  },
  {
    path: "/",
    element: (
      <PublicRoute>
        <LandingPageScreen />
      </PublicRoute>
    ),
  },
]);
