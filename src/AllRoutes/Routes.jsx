import { createBrowserRouter } from "react-router";
import DashboardPage from "../pages/DashboardPage";
import ErrorPage from "../pages/ErrorPage";
import MainLayout from "./MainLayout";

export const router = createBrowserRouter([
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
