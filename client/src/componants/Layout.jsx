import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const Layout = () => {
    return (
        <>
         <div className='main'>
                <Navbar/>
                <Outlet/>
        </div>   
        </>
    );
};

export default Layout;