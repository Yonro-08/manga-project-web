import { useEffect } from "react";
import { RouterProvider } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

import { useThemeZustand } from "hooks/zustand/useThemeZustand";
import { AppNavigation } from "./navigation/AppNavigation";

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false,
		},
	},
});

import "@fontsource-variable/exo-2";
import "./global.scss";

const App = () => {
	const { theme } = useThemeZustand();

	useEffect(() => {
		document.body.setAttribute("data-theme", "dark");
	}, []);

	return (
		<QueryClientProvider client={queryClient}>
			<RouterProvider router={AppNavigation} />
		</QueryClientProvider>
	);
};

export default App;
