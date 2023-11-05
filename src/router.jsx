import { createBrowserRouter } from "react-router-dom";
import Login, { loginAction } from "./features/identity/components/login";
import Register, { registerAction } from "./features/identity/components/register";
import IdentityLayout from "./layout/identity-layout";
import MainLayout from "./layout/main-layout";
import Courses from "./pages/Courses";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [{
            element: <Courses />,
            index: true
        }]
    },
    {
        element: <IdentityLayout />,
        children: [
          {
            path: "login",
            element: <Login />,
            action: loginAction,
            errorElement: <Login />,
          },
          {
            path: "register",
            element: <Register />,
            action: registerAction,
            errorElement: <Register />,
          },
        ],
      },
]);


export default router