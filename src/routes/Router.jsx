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
import PaymentCancelled from "../Pages/PaymentCancell/PaymentCancelled";
import SearchRequest from "../Pages/Search/SearchRequest";
import Error from "../Pages/Error";
import AllRequests from "../Pages/AllRequests";
import DetailsPage from "../Pages/DetailsPage";



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
                element: <PrivateRoute><Donate></Donate></PrivateRoute>,
            },
            {
                path: '/search',
                Component: SearchRequest,
            },
            {
                path: '/all-request',
                element: <AllRequests></AllRequests>,
            },
            {
                path: '/view-details',
                element: <PrivateRoute><DetailsPage></DetailsPage></PrivateRoute>,
            },
            {
                path: '/payment-success',
                Component: PaymentSuccess,
            },
            {
                path: '/payment-cancelled',
                Component: PaymentCancelled,
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
    {
        path: '*',
        element: <Error></Error>
    }

]);

export default router;