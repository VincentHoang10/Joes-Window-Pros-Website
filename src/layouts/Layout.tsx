import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <div className="layout-wrapper">
        <NavBar />

        <div className="layout-content">
          <Outlet />
        </div>
        
        <Footer />
      </div>
    </>
  );
}

export default Layout;