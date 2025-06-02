
import { Outlet } from "react-router-dom";
import Header from "../components/header/Header";
import Footer from "../shared/Footer";

const Root = () => {
    return (
       
        <div>
            <Header/>
           
            <div className=" min-h-[calc(100vh-68px)]">
            <Outlet/>
            </div>
           <Footer/>
        </div>
    );
};

export default Root;