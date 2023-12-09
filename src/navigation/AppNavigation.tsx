import { createBrowserRouter } from "react-router-dom";

import Layout from "../components/Layout";
import { Chapter, Home, Manga } from "../pages";
import { ChapterEnd } from "features/Chapter";

export const AppNavigation = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/manga/:endpoint",
        element: <Manga />,
      },
      {
        path: "/manga/:endpoint/end",
        element: <ChapterEnd />,
      },
    ],
  },
  {
    path: "/manga/:endpoint/chapters",
    element: <Chapter />,
  },
]);
