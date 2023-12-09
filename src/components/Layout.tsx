import { Outlet } from "react-router-dom";

import Header from "./Header";
import { Box } from "./Custom";

const Layout = () => {
  return (
    <>
      <Header />
      <Box as="main" $padding="5px 0" $marginTop={56}>
        <Outlet />
      </Box>
    </>
  );
};

export default Layout;
