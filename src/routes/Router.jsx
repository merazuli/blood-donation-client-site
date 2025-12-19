import { createBrowserRouter } from "react-router";
import RootLayout from "./RootLayout/RootLayout";
import Home from "../Pages/Home/home";
import LoginPage from "../Pages/Login/LoginPage";
import RegisterPage from "../Pages/Register/RegisterPage";
import DashboardLayout from "../DashboardLayout/DashboardLayout";
import MainDashboard from "../Pages/Dashboard/MaindDashboard/MainDashboard";
import AddBloodRequest from "../Pages/Dashboard/AddRequests/AddBloodRequest";
import ManageProduct from "../Pages/Dashboard/ManageProduct/ManageProduct";
import AllUsers from "../Pages/All Users/AllUsers";
import PrivateRoute from "../provider/PrivateRoute";



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
        element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        children: [
            {
                path: "/dashboard",
                element: <MainDashboard></MainDashboard>,
            },
            {
                path: "/dashboard/create-donation-request",
                element: <AddBloodRequest></AddBloodRequest>,
            },
            {
                path: "/dashboard/my-donation-request",
                element: <ManageProduct></ManageProduct>,
            },
            {
                path: "/dashboard/all-users",
                element: <AllUsers></AllUsers>
            }
        ]
    }
]);

export default router;