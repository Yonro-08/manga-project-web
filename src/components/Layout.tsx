import { Outlet } from "react-router-dom";

import Header from "./Header";
import Login from "./Login";

const Layout = () => {
  return (
    <>
      <Header />
      <main className="main">
        <Outlet />
      </main>
      {/* <Login /> */}
    </>
  );
};

export default Layout;
