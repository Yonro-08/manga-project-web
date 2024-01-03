import { createBrowserRouter } from "react-router-dom";

import Layout from "../components/Layout";
import { ChapterPage, CreateManga, HomePage, MangaPage } from "../pages";

export const AppNavigation = createBrowserRouter([
	{
		path: "/",
		element: <Layout />,
		children: [
			{
				path: "/",
				element: <HomePage />,
			},
			{
				path: "/manga/:endpoint",
				element: <MangaPage />,
			},
			{
				path: "/manga/create",
				element: <CreateManga />,
			},
		],
	},
	{
		path: "/manga/:endpoint/chapters",
		element: <ChapterPage />,
	},
]);
