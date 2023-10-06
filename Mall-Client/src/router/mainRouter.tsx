/** @format */
/** @format */

import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/common/Layout";
import Register from "../components/auth/Register";
import SignIn from "../components/auth/SignIn";
import ForgotPassword from "../components/auth/ForgotPassword";
import Otp from "../components/auth/Otp";
import Password from "../components/auth/Password";
import Homescreen from "../components/home/Homescreen";

export const mainRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Homescreen />,
      },
    ],
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/sign-In",
    element: <SignIn />,
  },
  {
    path: "/forgot-password",
    element: <ForgotPassword />,
  },
  {
    path: "/otp",
    element: <Otp />,
  },
  {
    path: "/password",
    element: <Password />,
  },
]);
