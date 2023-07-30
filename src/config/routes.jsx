import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../views/app_view/Dashboard";
import Profile from "../views/app_view/Profile";
import AppView from "../views/app_view";
import Login from "../views/auth_view/login_v2";

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
          Component: Dashboard,
          title: 'Dashboard'
        },
        {
          path: "/app/profile",
          Component: Profile,
          title: 'Profile'
        },
      ] 
    },
]);