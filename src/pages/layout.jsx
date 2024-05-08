import NavBar from "../components/navBar";
import Baner from "../components/baner";
import Footer from "../components/footer";
import { Outlet } from "react-router-dom";
function Layout({ children }) {
  return (
    <>
      <div>
        <NavBar />
        {children}
        <Baner />
        <Footer />
      </div>
    </>
  );
}
export default Layout;
