
import { Outlet } from "react-router-dom";

const Roots = () => {
    return (
       
        <div>
     
           
            <div className=" min-h-[calc(100vh-68px)]">
            <Outlet/>
            </div>
           <Footer/>
        </div>
    );
};

export default Roots;