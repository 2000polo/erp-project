import { createBrowserRouter } from "react-router-dom";
import Login from "../views/auth_view/Login";
import Dashboard from "../views/app_view/Dashboard";
import Profile from "../views/app_view/Profile";
import AppView from "../views/app_view";

export const router = createBrowserRouter([
    { 
      path: "/auth", 
      children: [
        {
          path: "/auth/login",
          Component: Login
        }
      ]
    },
    { 
      path: "/app",
      Component: AppView,
      children: [
        {
          path: "/app/dashboard",
          Component: Dashboard
        },
        {
          path: "/app/profile",
          Component: Profile
        },
      ] 
    },
]);