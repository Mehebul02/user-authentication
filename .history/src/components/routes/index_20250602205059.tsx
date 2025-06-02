import { createBrowserRouter } from "react-router-dom";
import Signin from "../pages/auth/signIn/SignIn";
import SignUp from "../pages/auth/signUp/SignUp";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Signin/>,

  },
  {
    path: "/signin",
    element: <SignUp/>,
  }
]);

export default router;
