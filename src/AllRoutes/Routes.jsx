import { createBrowserRouter } from "react-router";
import DashboardPage from "../pages/DashboardPage";
import ErrorPage from "../pages/ErrorPage";
import LoginPage from "../pages/LoginPage";
import MainLayout from "./MainLayout";
import SignInPage from "../pages/SignInPage";

export const router = createBrowserRouter([
    {
        path: "/login",
        element: <LoginPage />,
    },
    {
        path: "/sign-in",
        element: <SignInPage />,
    },
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: "/",
                element: <DashboardPage />,
            },
        ],
    },
    {
        path: "*",
        element: <ErrorPage />,
    },
]);
