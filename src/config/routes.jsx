import { createBrowserRouter } from "react-router-dom";
// import Dashboard from "../views/app_view/Admin/Dashboard"; //admin
import Dashboard from "../views/app_view/employee_view/dashboard"; //employee
import Profile from "../views/app_view/Admin/Profile";
import AppView from "../views/app_view";
import Login from "../views/auth_view/login_v2";
import Tasks from "../views/app_view/employee_view/Tasks";

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
          path: "/app/tasks",
          Component: Tasks,
          title: 'Tasks'
        },
        // {
        //   path: "/app/tasks",
        //   Component: Profile,
        //   title: 'Tasks',
        //   children: [
        //     {
        //       path: "/app/tasks/tickets",
        //       Component: Profile,
        //       title: 'Open a Ticket'
        //     },
        //     {
        //       path: "/app/tasks/projects",
        //       Component: Profile,
        //       title: 'Taks',
        //     },
        //   ]
        // },
        // {
        //   path: "/app/my-tasks",
        //   Component: Tasks,
        //   title: 'My Tasks'
        // },
        {
          path: "/app/profile",
          Component: Profile,
          title: 'Profile',
          
          children: [
            {
              path: "/app/profile/dw",
              Component: Profile,
              title: 'Open a Ticket'
            },
            {
              path: "/app/profile/sfsf",
              Component: Profile,
              title: 'Taks',
            },
          ]
        },
      ] 
    },
]);