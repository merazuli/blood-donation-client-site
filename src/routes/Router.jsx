import { createBrowserRouter } from "react-router";
import RootLayout from "./RootLayout/RootLayout";
import Home from "../Pages/Home/home";
import LoginPage from "../Pages/Login/LoginPage";
import RegisterPage from "../Pages/Register/RegisterPage";
import DashboardLayout from "../DashboardLayout/DashboardLayout";
import AddBloodRequest from "../Pages/Dashboard/AddRequests/AddBloodRequest";
import PrivateRoute from "../provider/PrivateRoute";
import MyRequest from "../Pages/Dashboard/MyRequest/MyRequest";
import MainDashboard from "../Pages/Dashboard/MaindDashboard/MainDashboard";
import AllUsers from "../Pages/User/AllUsers";
import Donate from "../Pages/Donate/Donate";
import PaymentSuccess from "../Pages/PaymentSuccess/PaymentSuccess";



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
            },
            {
                path: '/donate',
                Component: Donate,
            },
            {
                path: '/payment-success',
                Component: PaymentSuccess,
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
                element: <MyRequest></MyRequest>
            },
            {
                path: "/dashboard/all-users",
                element: <AllUsers></AllUsers>
            }
        ]
    },

]);

export default router;