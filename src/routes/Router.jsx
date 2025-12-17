import { createBrowserRouter } from "react-router";
import RootLayout from "./RootLayout/RootLayout";
import Home from "../Pages/Home/home";
import LoginPage from "../Pages/Login/LoginPage";
import RegisterPage from "../Pages/Register/RegisterPage";
import DashboardLayout from "../DashboardLayout/DashboardLayout";
import MainDashboard from "../Pages/Dashboard/MaindDashboard/MainDashboard";
import AddBloodRequest from "../Pages/Dashboard/AddRequests/AddBloodRequest";



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
    {
        path: "/",
        element: <DashboardLayout></DashboardLayout>,
        children: [
            {
                path: "/dashboard",
                element: <MainDashboard></MainDashboard>,
            },
            {
                path: "/dashboard/create-donation-request",
                element: <AddBloodRequest></AddBloodRequest>,
            }
        ]
    }
]);

export default router;