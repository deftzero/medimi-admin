import { createBrowserRouter } from "react-router-dom";
import LoginPage from "../pages/Login";
import AppLayout from "../layout";


export const router = createBrowserRouter([
  {
    path: "/login",
    index: true,
    element: <LoginPage />
  },
  {
    path: "/",
    element: <AppLayout>
      
    </AppLayout>,
  }
])