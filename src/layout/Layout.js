import "./Layout.css";
import { Link, Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

function Layout() {
 
  return (
    <>
    <Header />
      <div>
        <Outlet />
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}

export default Layout;
