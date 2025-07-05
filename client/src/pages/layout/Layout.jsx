import { Outlet } from "react-router-dom";
import Header from "./../../components/complex/header/Header.jsx"
import Footer from "./../../components/complex/footer/Footer.jsx";

const Layout = () => {
    return ( 
    <>
    <Header />
    <Outlet />
    <Footer />
    </> );
}

export default Layout;