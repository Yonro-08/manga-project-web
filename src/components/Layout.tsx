import { Outlet } from "react-router-dom";

import { useModal } from "hooks/zustand/useModal";
import Header from "./Header";
import Login from "./Login";

const Layout = () => {
	const { isOpen } = useModal();

	return (
		<>
			<Header />
			<main className="main">
				<Outlet />
			</main>
			{isOpen && <Login />}
		</>
	);
};

export default Layout;
