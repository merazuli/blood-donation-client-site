import { createBrowserRouter } from "react-router";
import RootLayout from "./RootLayout/RootLayout";
import Home from "../Pages/Home/home";
import LoginPage from "../Pages/Login/LoginPage";
import RegisterPage from "../Pages/Register/RegisterPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout></RootLayout>,
        children: [
            {
                path: '/',
                Component: Home,
            },
            {
                path: '/login',
                Component: LoginPage
            },
            {
                path: '/register',
                Component: RegisterPage,
            }
        ]
    },
]);

export default router;