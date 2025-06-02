import { createBrowserRouter } from "react-router-dom";
import Roots from "../mainlayout/Roots";
const router = createBrowserRouter([
    {
        path: "/",
        element: <Roots/>,
        children: [
            {
             
            },
            

        ]

    }
])


export default router