import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../views/app_view/Admin/Dashboard";
import Profile from "../views/app_view/Admin/Profile";
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
          path: "/app/projects",
          Component: Profile,
          title: 'Projects'
        },
        {
          path: "/app/tasks",
          Component: Profile,
          title: 'Tasks',
          children: [
            {
              path: "/app/tasks/projects",
              Component: Profile,
              title: 'Open a Ticket'
            },
            {
              path: "/app/tasks/projects",
              Component: Profile,
              title: 'Taks'
            },
          ]
        },
        {
          path: "/app/profile",
          Component: Profile,
          title: 'Profile'
        },
      ] 
    },
]);