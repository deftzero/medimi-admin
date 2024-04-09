import { Outlet, createBrowserRouter } from "react-router-dom";
import LoginPage from "../pages/Login";
import AppLayout from "../layout/Layout";
import Dashboard from "../pages/admin/Dashboard";
import MedicalAccounts from "../pages/admin/MedicalAccounts";
import Countries from "../pages/admin/countries/Countries";
import Patients from "../pages/admin/patients/Patients";
import Incomes from "../pages/admin/Incomes";
import RemoteRevenue from "../pages/admin/RemoteRevenue";
import Users from "../pages/admin/users/Users";
import Country from "../pages/admin/countries/Country";
import Patient from "../pages/admin/patients/Patient";
import User from "../pages/admin/users/User";

export const router = createBrowserRouter([
  {
    path: "/login",
    index: true,
    element: <LoginPage />
  },
  {
    path: "/",
    element: <AppLayout><Outlet /></AppLayout>,
    children: [
      {
        index: true,
        path: "/dashboard",
        element: <Dashboard />
      },
      {
        path: "/medical-accounts",
        element: <MedicalAccounts />
      },
      {
        path: "/countries",
        element: <Countries />
      },
      {
        path: "/countries/:id",
        element: <Country />
      },
      {
        path: "/patients",
        element: <Patients />,
      },
      {
        path: "/patients/:id",
        element: <Patient />
      },
      {
        path: "/incomes",
        element: <Incomes />
      },
      {
        path: "/remote-revenue",
        element: <RemoteRevenue />
      },
      {
        path: "/users",
        element: <Users />
      },
      {
        path: "/users/:id",
        element: <User />
      },
    ]
  }
])