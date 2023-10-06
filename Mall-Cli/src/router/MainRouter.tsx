import { createBrowserRouter } from "react-router-dom";
import LogicGate from "../pages/auth/LogicGate";
import RegisterOwner from "../pages/auth/RegisterOwner";
import LoginOwner from "../pages/auth/LoginOwner";
import HomePage from "../pages/home/HomePage";
import LandingPage from "../pages/LandingPage";

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
    path: "/login-owner",
    element: <LoginOwner />,
  },
  {
    path: "/",
    element: <LandingPage />,
  },
]);
