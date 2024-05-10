import NavBar from "../components/navBar";

import { Outlet } from "react-router-dom";
import Footer from "../components/footer";
function Layout() {
  return (
    <>
      <div>
        <NavBar />
        <Outlet />
        <Footer />
      </div>
    </>
  );
}
export default Layout;
