import { createBrowserRouter } from "react-router";
import AboutPage from "../pages/about/AboutPage";
import CoursePage from "../pages/courses/CoursePage";
import DashboardPage from "../pages/DashboardPage";
import ErrorPage from "../pages/ErrorPage";
import FaqPage from "../pages/faq/FaqPage";
import InboxPage from "../pages/inbox/InboxPage";
import InstructorsPage from "../pages/instructors/InstructorsPage";
import LoginPage from "../pages/LoginPage";
import ReviewPage from "../pages/reviews/ReviewPage";
import TeamPage from "../pages/team/TeamPage";
import TestimonialsPage from "../pages/testimonials/TestimonialsPage";
import MainLayout from "./MainLayout";

export const router = createBrowserRouter([
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <DashboardPage />,
      },
      {
        path: "/courses",
        element: <CoursePage />,
      },
      {
        path: "/reviews",
        element: <ReviewPage />,
      },
      {
        path: "/faq",
        element: <FaqPage />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
      {
        path: "/team",
        element: <TeamPage />,
      },
      {
        path: "/testimonials",
        element: <TestimonialsPage />,
      },
      {
        path: "/inbox",
        element: <InboxPage />,
      },
      {
        path: "/instructors",
        element: <InstructorsPage />,
      },
    ],
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);
