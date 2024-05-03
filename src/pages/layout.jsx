import NavBar from "../components/navBar";
import Footer from "../components/footer";
import { Outlet } from "react-router-dom";
function Layout({ children }) {
  return (
    <>
      <div>
        <NavBar />
        {children}
        <Footer />
      </div>
    </>
  );
}
export default Layout;
