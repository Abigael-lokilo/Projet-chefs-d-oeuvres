import NavBar from "../components/navBar";

import { Outlet } from "react-router-dom";
function Layout() {
  return (
    <>
      <div>
        <NavBar />
        <Outlet />
      </div>
    </>
  );
}
export default Layout;
