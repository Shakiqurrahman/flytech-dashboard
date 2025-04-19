import { createBrowserRouter } from "react-router";
import AboutPage from "../pages/about/AboutPage";
import CoursePage from "../pages/courses/CoursePage";
import DashboardPage from "../pages/DashboardPage";
import ErrorPage from "../pages/ErrorPage";
import FaqCreate from "../pages/faq/FaqCreate";
import FaqEdit from "../pages/faq/FaqEdit";
import FaqPage from "../pages/faq/FaqPage";
import InboxPage from "../pages/inbox/InboxPage";
import InboxReadPage from "../pages/inbox/InboxReadPage";
import InstructorsPage from "../pages/instructors/InstructorsPage";
import LoginPage from "../pages/LoginPage";
import ReviewPage from "../pages/reviews/ReviewPage";
import SignUpPage from "../pages/SignUpPage";
import TeamCreate from "../pages/team/TeamCreate";
import TeamEdit from "../pages/team/TeamEdit";
import TeamPage from "../pages/team/TeamPage";
import TestimonialsPage from "../pages/testimonials/TestimonialsPage";
import MainLayout from "./MainLayout";

export const router = createBrowserRouter([
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/sign-up",
    element: <SignUpPage />,
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
        path: "/faq/create",
        element: <FaqCreate />,
      },
      {
        path: "/faq/edit",
        element: <FaqEdit />,
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
        path: "/team/edit",
        element: <TeamEdit />,
      },
      {
        path: "/team/create",
        element: <TeamCreate />,
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
        path: "/inbox/read",
        element: <InboxReadPage />,
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
  {
    path: "*",
    element: <ErrorPage />,
  },
]);
