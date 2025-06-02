import { createBrowserRouter } from "react-router-dom";
import React from "react";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello</div>, // ✅ Correct usage
  },
]);

export default router;
