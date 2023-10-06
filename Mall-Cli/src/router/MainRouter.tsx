import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/home/HomePage";

export const MainRouter = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
]);
