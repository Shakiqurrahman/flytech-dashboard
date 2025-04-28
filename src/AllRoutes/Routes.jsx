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
import ReviewCreate from "../pages/reviews/ReviewCreate";
import ReviewEdit from "../pages/reviews/reviewEdit";
import ReviewPage from "../pages/reviews/ReviewPage";
import SignUpPage from "../pages/SignUpPage";
import StudentCreate from "../pages/students/StudentCreate";
import StudentEdit from "../pages/students/StudentEdit";
import StudentPage from "../pages/students/StudentPage";
import SuccessStudentCreate from "../pages/success-students/SuccessStudentCreate";
import SuccessStudentEdit from "../pages/success-students/SuccessStudentEdit";
import SuccessStudentsPage from "../pages/success-students/SuccessStudentsPage";
import TeamCreate from "../pages/team/TeamCreate";
import TeamEdit from "../pages/team/TeamEdit";
import TeamPage from "../pages/team/TeamPage";
import TestimonialCreate from "../pages/testimonials/TestimonialCreate";
import TestimonialEdit from "../pages/testimonials/TestimonialEdit";
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
        path: "/reviews/create",
        element: <ReviewCreate />,
      },
      {
        path: "/reviews/edit",
        element: <ReviewEdit />,
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
        path: "/students",
        element: <StudentPage />,
      },
      {
        path: "/students/edit",
        element: <StudentEdit />,
      },
      {
        path: "/students/create",
        element: <StudentCreate />,
      },
      {
        path: "/success-students",
        element: <SuccessStudentsPage />,
      },
      {
        path: "/success-students/edit",
        element: <SuccessStudentEdit />,
      },
      {
        path: "/success-students/create",
        element: <SuccessStudentCreate />,
      },
      {
        path: "/testimonials",
        element: <TestimonialsPage />,
      },
      {
        path: "/testimonials/create",
        element: <TestimonialCreate />,
      },
      {
        path: "/testimonials/edit",
        element: <TestimonialEdit />,
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
