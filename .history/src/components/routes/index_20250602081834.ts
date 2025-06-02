import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Roo />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            

        ]

    }
])


export default router