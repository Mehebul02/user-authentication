import { createBrowserRouter } from "react-router-dom";
import Signin from "../pages/auth/signIn/SignIn";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Signin/>,

  },
  {
    path: "/signin",
    element: <Signin/>,
  }
]);

export default router;
