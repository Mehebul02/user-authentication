
import { Outlet } from "react-router-dom";

const Roots = () => {
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

export default Roots;