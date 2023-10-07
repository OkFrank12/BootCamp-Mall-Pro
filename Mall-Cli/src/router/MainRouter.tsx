import { createBrowserRouter } from "react-router-dom";
import LogicGate from "../pages/auth/LogicGate";
import RegisterOwner from "../pages/auth/RegisterOwner";
import LoginOwner from "../pages/auth/LoginOwner";
import LandingPage from "../pages/LandingPage";
import ResetPassword from "../pages/auth/ResetPassword";
import ChangePassword from "../pages/auth/ChangePassword";
import MessagePage from "../pages/auth/MessagePage";
import HomePage from "../pages/home/HomePage";

export const MainRouter = createBrowserRouter([
  {
    path: "/logic",
    element: <LogicGate />,
  },
  {
    path: "/register-owner",
    element: <RegisterOwner />,
  },
  {
    path: "/:token/verify-account",
    element: <LoginOwner />,
  },
  {
    path: "/login",
    element: <LoginOwner />,
  },
  {
    path: "/:token/verify-account",
    element: <LoginOwner />,
  },
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/reset-account-password",
    element: <ResetPassword />,
  },
  {
    path: "/change-account-password",
    element: <ChangePassword />,
  },
  {
    path: "/message",
    element: <MessagePage />,
  },
]);
