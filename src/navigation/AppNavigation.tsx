import { createBrowserRouter } from "react-router-dom";

import Layout from "../components/Layout";
import { Home } from "../pages";

export const AppNavigation = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);
