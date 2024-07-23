import { RouteObject } from "react-router-dom";
import RootLayout from "../layout/RootLayout";
import Register from "../pages/Register";
import Login from "../pages/Login";
import Forgot from "../pages/Forgot";
import Reset from "../pages/Reset";
import AuthLayout from "../layout/AuthLayout";

const routes: RouteObject[] = [
    {
        path: "/",
        element: <RootLayout />,
    },

    {
        path: "/auth",
        element: <AuthLayout />,
        children: [
            {
                path: "register",
                element: <Register />, 
            },
            {
                path: "login",
                element: <Login />,
            },
            {
                path: "forgot",
                element: <Forgot />,
            },
            {
                path: "reset",
                element: <Reset />,
            },
        ]
    },
];

export default routes;