import { createBrowserRouter } from "react-router-dom";
import Login from "./features/identity/components/login";
import Register, { registerAction } from "./features/identity/components/register";
import IdentityLayout from "./layout/identity-layout";

const router = createBrowserRouter([
    {
        element: <IdentityLayout />,
        children: [
            {
                path: "login",
                element: <Login />
            },
            {
                path: "register",
                element: <Register />,
                action: registerAction,
                errorElement: <Register />
            },
        ]
    },
]);


export default router