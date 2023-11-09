import { createBrowserRouter } from "react-router-dom";
import Login, { loginAction } from "./features/identity/components/login";
import Register, { registerAction } from "./features/identity/components/register";
import IdentityLayout from "./layout/identity-layout";
import Courses, { coursesLoader } from "./pages/Courses";
import MainLayout from "./layout/mainLayout/main-layout";
import CourseCategories from "./pages/course-category";
import CourseDetails, { courseDetailsLoader } from "./features/courses/components/course-datails";

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [{
      element: <Courses />,
      index: true,
      loader: coursesLoader
    },
    {
      path: 'course-categories',
      element: <CourseCategories />
    },
    {
      path: 'courses/:id',
      element: <CourseDetails />,
      loader: courseDetailsLoader
    }
    ]
  },
  {
    element: <IdentityLayout />,
    children: [
      {
        path: "login",
        element: <Login />,
        action: loginAction,
        errorElement: <Login />,
      },
      {
        path: "register",
        element: <Register />,
        action: registerAction,
        errorElement: <Register />,
      },
    ],
  },
]);


export default router